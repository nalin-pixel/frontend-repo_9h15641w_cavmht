import React from 'react';
import { Rocket, User, FolderGit2, Mail } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 rounded-xl text-sm md:text-base text-white/90 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold tracking-wide">Steven PM</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#about"><span className="inline-flex items-center gap-2"><User className="w-4 h-4" /> About</span></NavLink>
            <NavLink href="#projects"><span className="inline-flex items-center gap-2"><FolderGit2 className="w-4 h-4" /> Projects</span></NavLink>
            <NavLink href="#contact"><span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> Contact</span></NavLink>
          </nav>
          <a
            href="#contact"
            className="md:hidden px-3 py-2 rounded-xl text-sm bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
