import React from 'react';
import { Rocket, Home, Film, Image as ImageIcon, BookOpenCheck, BadgeDollarSign, User } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-sky-400 text-white shadow-md">
            <Rocket size={18} />
          </span>
          <span className="font-semibold text-lg text-slate-800">CuddleClips</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#home" className="hover:text-pink-500 transition inline-flex items-center gap-1"><Home size={16}/> Home</a>
          <a href="#create" className="hover:text-pink-500 transition inline-flex items-center gap-1"><Film size={16}/> Create</a>
          <a href="#gallery" className="hover:text-pink-500 transition inline-flex items-center gap-1"><ImageIcon size={16}/> Gallery</a>
          <a href="#how" className="hover:text-pink-500 transition inline-flex items-center gap-1"><BookOpenCheck size={16}/> How It Works</a>
          <a href="#pricing" className="hover:text-pink-500 transition inline-flex items-center gap-1"><BadgeDollarSign size={16}/> Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-3 py-2 rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-pink-300 hover:text-pink-600 transition">Log in</button>
          <a href="#create" className="px-4 py-2 rounded-xl bg-emerald-500 text-white shadow hover:shadow-md hover:bg-emerald-600 transition">Start Creating Free</a>
          <button className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700" aria-label="Menu">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;