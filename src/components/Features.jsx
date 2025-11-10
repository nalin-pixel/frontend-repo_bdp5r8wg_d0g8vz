import React from 'react';
import { Sparkles, Timer, BadgeCheck, Wand2, Droplets } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Generation',
    desc: 'Describe a moment and our AI brings it to life with adorable motion and expressive details.',
    icon: Wand2,
  },
  {
    title: '50 Free Tokens Every 12 Hours',
    desc: 'Create more, worry less. Your balance refreshes twice a day to keep creativity flowing.',
    icon: Sparkles,
  },
  {
    title: 'Multiple Animation Styles',
    desc: 'Switch between 2D cartoon, 3D render, watercolor, and realistic looks in one click.',
    icon: Droplets,
  },
  {
    title: 'No Watermarks',
    desc: 'Your videos are yours. Export clean clips ready for socials and downloads.',
    icon: BadgeCheck,
  },
  {
    title: '3–5 Minute Creation Time',
    desc: 'From idea to shareable video in just a few minutes with live progress updates.',
    icon: Timer,
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800 text-center">Why creators love CuddleClips</h2>
        <p className="text-slate-600 text-center mt-2">Cute results, simple controls, built for speed.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group p-6 rounded-2xl bg-white/80 border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl" />
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-400 to-sky-400 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;