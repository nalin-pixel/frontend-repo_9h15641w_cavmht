import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_400px_at_10%_10%,rgba(236,72,153,0.25),transparent)]">
      <div className="fixed inset-0 -z-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20" aria-hidden />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <section id="about" className="px-4 md:px-8 lg:px-12 max-w-6xl mx-auto -mt-24 md:-mt-32">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">About Me</h2>
            <p className="text-white/80 leading-relaxed">
              I’m Steven Paulus Martinus — a humble, curious, and creative mind who loves turning ideas into polished
              digital experiences. I enjoy exploring new technologies, crafting elegant interfaces, and building
              meaningful products that delight users. Outside of work, I’m a lifelong learner who thrives on
              collaboration and continuous improvement.
            </p>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="mt-16 py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} Steven Paulus Martinus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
