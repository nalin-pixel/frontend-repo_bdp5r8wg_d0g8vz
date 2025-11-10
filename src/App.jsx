import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Creator from './components/Creator';
import Gallery from './components/Gallery';
import { Sparkles } from 'lucide-react';

const Footer = () => (
  <footer className="pt-12 pb-16 bg-gradient-to-t from-pink-50 to-white border-t border-pink-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 text-slate-800 font-semibold">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-sky-400 text-white shadow"><Sparkles size={16}/></span>
            CuddleClips
          </div>
          <p className="mt-3 text-slate-600 text-sm">Weekly cute video ideas, tips, and feature updates straight to your inbox.</p>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-xl border border-slate-200 p-2.5 text-sm"/>
            <button className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm">Subscribe</button>
          </form>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">Product</h4>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li><a href="#create" className="hover:text-pink-600">Create</a></li>
            <li><a href="#gallery" className="hover:text-pink-600">Gallery</a></li>
            <li><a href="#how" className="hover:text-pink-600">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-pink-600">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">Company</h4>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li><a href="#" className="hover:text-pink-600">Blog</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">Legal</h4>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li><a href="#" className="hover:text-pink-600">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} CuddleClips. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-manrope text-slate-800">
      <NavBar />
      <Hero />
      <Features />
      <Creator />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
