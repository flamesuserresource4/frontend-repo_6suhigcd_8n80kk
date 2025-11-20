import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white flex items-center">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm mb-4">
            ashen.app
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Ashen — minimalist profile hub
          </h1>
          <p className="mt-4 text-blue-100/80 text-lg">
            Create a clean, modern profile page with glassmorphic cards and share all your links in one place.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#create" className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur hover:bg-white/15 transition shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              Get started
            </a>
            <a href="#explore" className="px-5 py-3 rounded-xl bg-sky-400/20 border border-sky-300/20 text-sky-200 hover:bg-sky-400/30 transition backdrop-blur shadow-[0_8px_30px_rgba(56,189,248,0.25)]">
              Explore profiles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
