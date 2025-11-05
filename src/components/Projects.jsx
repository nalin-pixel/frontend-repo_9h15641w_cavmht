import React from 'react';
import { ExternalLink, Code2, Palette, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Frosted UI Components',
    desc: 'A collection of glassmorphism components with accessible interactions.',
    tags: ['React', 'Tailwind', 'Accessibility'],
    icon: <Palette className="w-5 h-5" />,
    link: '#',
    image:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Interactive 3D Playground',
    desc: 'Spline-powered hero experiences for modern landing pages.',
    tags: ['Spline', 'Three', 'Animations'],
    icon: <Code2 className="w-5 h-5" />,
    link: '#',
    image:
      'https://images.unsplash.com/photo-1559163499-413811fb2344?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Mobile-first Portfolio',
    desc: 'Responsive personal website with smooth scroll and micro-animations.',
    tags: ['Vite', 'React', 'Framer Motion'],
    icon: <Smartphone className="w-5 h-5" />,
    link: '#',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 mt-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="text-white/70 mt-1">A selection of playful and polished work.</p>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition"
        >
          Let’s collaborate
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="group rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
          >
            <div className="relative h-40">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <span className="p-2 rounded-lg bg-white/10 border border-white/20">{p.icon}</span>
                <h3 className="font-semibold text-lg">{p.title}</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 text-white/80 hover:text-white transition"
                >
                  Explore <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
