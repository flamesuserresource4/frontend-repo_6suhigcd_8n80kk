import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="bg-black text-blue-100/70 border-t border-white/10">
        <div className="container mx-auto px-6 py-10 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Ashen • ashen.app</p>
          <a href="/admin" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Admin</a>
        </div>
      </footer>
    </div>
  )
}

export default App
