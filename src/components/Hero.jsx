import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { Heart, Play, PawPrint } from 'lucide-react';

const sampleVideos = [
  'https://videos.pexels.com/video-files/856925/856925-uhd_2560_1440_25fps.mp4',
  'https://videos.pexels.com/video-files/7938677/7938677-uhd_2560_1440_25fps.mp4',
  'https://videos.pexels.com/video-files/855916/855916-uhd_2560_1440_25fps.mp4',
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-sky-50 to-indigo-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight"
          >
            Create Heartwarming Animal Videos That Keep Viewers Glued to Their Screens
          </motion.h1>
          <p className="mt-4 text-slate-600 text-lg">Turn adorable ideas into bite-sized animated magic. No watermarks. Multiple styles. Ready to share in minutes.</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#create" className="px-5 py-3 rounded-xl bg-coral-500 bg-emerald-500 text-white font-medium shadow hover:shadow-lg hover:scale-[1.02] transition">Start Creating Free</a>
            <div className="inline-flex items-center gap-2 text-pink-600">
              <PawPrint size={18} />
              <span>50 free tokens every 12 hours</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {sampleVideos.map((src, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden shadow-md">
                <video src={src} className="w-full h-28 object-cover" autoPlay muted loop playsInline />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Play className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-pink-200/50">
            <video
              src={sampleVideos[1]}
              className="w-full h-80 object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-md px-4 py-3 border border-pink-100"
          >
            <div className="flex items-center gap-2 text-pink-600"><Heart size={16}/> 10k+ videos shared</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;