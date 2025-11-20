import React, { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Admin() {
  const [auth, setAuth] = useState({ user: '', pass: '' });
  const [authed, setAuthed] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();
    setError('');
    const token = btoa(`${auth.user}:${auth.pass}`);
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { Authorization: `Basic ${token}` },
      });
      if (!res.ok) throw new Error('Unauthorized');
      setAuthed(true);
      localStorage.setItem('ashen_admin', token);
    } catch (e) {
      setError('Invalid credentials');
    }
  };

  const loadUsers = async () => {
    const token = localStorage.getItem('ashen_admin');
    if (!token) return;
    const res = await fetch(`${API_URL}/api/admin/users`, {
      headers: { Authorization: `Basic ${token}` },
    });
    if (res.ok) {
      setAuthed(true);
      setUsers(await res.json());
    }
  };

  const del = async (username) => {
    const token = localStorage.getItem('ashen_admin');
    const res = await fetch(`${API_URL}/api/admin/users/${username}`, {
      method: 'DELETE',
      headers: { Authorization: `Basic ${token}` },
    });
    if (res.ok) setUsers(users.filter((u) => u.username !== username));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (!authed) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <form onSubmit={login} className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
          <h1 className="text-xl font-semibold">Admin</h1>
          <p className="text-blue-100/70 text-sm mt-1">Sign in to manage profiles</p>
          <input value={auth.user} onChange={(e)=>setAuth({...auth,user:e.target.value})} placeholder="username" className="mt-4 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10" />
          <input type="password" value={auth.pass} onChange={(e)=>setAuth({...auth,pass:e.target.value})} placeholder="password" className="mt-3 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10" />
          <button className="mt-4 w-full px-4 py-3 rounded-xl bg-sky-400/20 border border-sky-300/20 text-sky-100 hover:bg-sky-400/30">Sign in</button>
          {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
          <p className="text-xs text-blue-200/60 mt-3">Hint: joost / Ollie.vdl2004!!</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button onClick={()=>{localStorage.removeItem('ashen_admin');setAuthed(false);}} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10">Sign out</button>
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((u)=> (
            <div key={u._id} className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">@{u.username}</p>
                  <p className="text-blue-100/70 text-sm">{u.display_name}</p>
                  <p className="text-blue-100/60 text-xs mt-1">{u.email}</p>
                </div>
                <button onClick={()=>del(u.username)} className="px-3 py-2 rounded-xl bg-red-400/10 border border-red-300/20 text-red-200 hover:bg-red-400/20">Delete</button>
              </div>
            </div>
          ))}
          {users.length===0 && (
            <div className="col-span-full text-blue-100/70">No users yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}
