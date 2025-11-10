import React from 'react';
import { Play } from 'lucide-react';

const thumbs = [
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
  'https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg',
  'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
  'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg',
  'https://images.pexels.com/photos/20787/pexels-photo.jpg',
  'https://images.pexels.com/photos/302280/pexels-photo-302280.jpeg',
  'https://images.pexels.com/photos/162286/kittens-cat-cat-puppy-rush-162286.jpeg',
  'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Community Gallery</h2>
            <p className="text-slate-600 mt-1">See what others are creating and share your own.</p>
          </div>
          <a href="#create" className="px-4 py-2 rounded-xl bg-emerald-500 text-white shadow hover:shadow-md hover:bg-emerald-600 transition">Try It Free</a>
        </div>

        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4 break-inside-avoid">
          {thumbs.map((src, i) => (
            <div key={i} className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md">
              <img src={src + '?auto=compress&cs=tinysrgb&w=800'} alt="cute" className="w-full object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-800 shadow"><Play size={16}/> Play</span>
              </button>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <button className="px-3 py-1.5 rounded-full bg-white/90 text-slate-700 text-sm shadow">Share</button>
                <button className="px-3 py-1.5 rounded-full bg-white/90 text-slate-700 text-sm shadow">Download</button>
              </div>
            </div>
          ))}
        </div></div>
      </div>
    </section>
  );
};

export default Gallery;