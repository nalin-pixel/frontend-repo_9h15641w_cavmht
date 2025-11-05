import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="order-2 lg:order-1">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/80 mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                <Sparkles className="w-4 h-4" />
                Transparent glassmorphism + blur aesthetics
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                Steven Paulus Martinus
              </h1>
              <p className="mt-3 md:mt-4 text-lg md:text-xl text-white/80">
                Creative Thinker | Tech Enthusiast | Lifelong Learner
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                I design and build modern, elegant, and user-centered digital experiences. I love
                clean UI, playful interactions, and meaningful products.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white shadow-sm transition"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/80 to-pink-500/80 hover:from-blue-500 hover:to-pink-500 text-white shadow-lg border border-white/20 transition"
                >
                  Get In Touch
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 text-white/80">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#contact" className="hover:text-white transition" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[48vh] md:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-white/20 bg-white/5">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1020]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
