import React from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 mt-16">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/80 mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20">
            <Mail className="w-4 h-4" />
            Contact
          </div>
          <h3 className="text-2xl font-semibold">Let’s build something great</h3>
          <p className="text-white/70 mt-2">
            I’m open to collaborations, freelance projects, and interesting conversations. Feel free to reach out.
          </p>
          <div className="mt-6 flex items-center gap-4 text-white/80">
            <a href="mailto:hello@stevenpm.dev" className="hover:text-white transition inline-flex items-center gap-2">
              <Mail className="w-5 h-5" /> Email
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Name</label>
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Email</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-white/80 mb-1">Message</label>
            <textarea
              required
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/80 to-pink-500/80 hover:from-blue-500 hover:to-pink-500 text-white shadow-lg border border-white/20 transition"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
