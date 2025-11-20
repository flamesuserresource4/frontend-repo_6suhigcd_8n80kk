import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-4 mt-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-sky-400/20 border border-sky-300/20" />
            <span className="font-semibold text-white">Ashen</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#create" className="hover:text-white">Create</a>
            <a href="#explore" className="hover:text-white">Explore</a>
            <a href="/admin" className="hover:text-white">Admin</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
