import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function CTA() {
  const [form, setForm] = useState({ username: '', display_name: '', email: '' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, links: [] }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setForm({ username: '', display_name: '', email: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="create" className="bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10 backdrop-blur">
          <h2 className="text-2xl font-semibold">Claim your Ashen username</h2>
          <form className="mt-6 grid sm:grid-cols-3 gap-4" onSubmit={submit}>
            <input value={form.username} onChange={(e)=>setForm({...form, username:e.target.value})} required placeholder="username" className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <input value={form.display_name} onChange={(e)=>setForm({...form, display_name:e.target.value})} required placeholder="display name" className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required placeholder="email" className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <button className="sm:col-span-3 px-5 py-3 rounded-xl bg-sky-400/20 border border-sky-300/20 text-sky-100 hover:bg-sky-400/30 transition">
              Create profile
            </button>
          </form>
          {status === 'success' && <p className="text-green-300 mt-3">Profile created!</p>}
          {status === 'error' && <p className="text-red-300 mt-3">Something went wrong.</p>}
        </div>
      </div>
    </section>
  );
}
