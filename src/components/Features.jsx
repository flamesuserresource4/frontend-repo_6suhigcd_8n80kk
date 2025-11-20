import React from 'react';

const features = [
  {
    title: 'Glassmorphic cards',
    desc: 'Frosted panels and subtle shadows keep the focus on your content.',
  },
  {
    title: 'Custom links',
    desc: 'Add labels, URLs, and icons to showcase everything in one place.',
  },
  {
    title: 'Fast & responsive',
    desc: 'Built with modern tooling and optimized for every device.',
  },
];

export default function Features() {
  return (
    <section id="explore" className="bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold">Why Ashen?</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="text-blue-100/80 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
