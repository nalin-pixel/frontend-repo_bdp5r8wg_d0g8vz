import React, { useMemo, useState } from 'react';
import { Play, Loader2, Lightbulb, Download, Share2 } from 'lucide-react';

const examplePrompts = [
  'A fluffy orange kitten playing with yarn balls',
  'A puppy reuniting with its owner',
  'A baby bunny hopping through a flower garden',
  'Two kittens cuddling under a warm blanket',
];

const styles = ['2D cartoon', '3D render', 'Watercolor', 'Realistic'];

const Creator = () => {
  const [prompt, setPrompt] = useState('A fluffy orange kitten playing with yarn balls');
  const [style, setStyle] = useState(styles[0]);
  const [isGenerating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');

  const inspire = () => {
    const i = Math.floor(Math.random() * examplePrompts.length);
    setPrompt(examplePrompts[i]);
  };

  const simulateGeneration = () => {
    setGenerating(true);
    setProgress(0);
    setVideoUrl('');
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12;
        if (next >= 100) {
          clearInterval(interval);
          setGenerating(false);
          // sample result
          setVideoUrl('https://videos.pexels.com/video-files/7938677/7938677-uhd_2560_1440_25fps.mp4');
          return 100;
        }
        return next;
      });
    }, 400);
  };

  return (
    <section id="create" className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800 text-center">Create your cute clip</h2>
        <p className="text-slate-600 text-center mt-2">Describe the moment, pick a style, and generate.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="p-5 rounded-2xl bg-white/80 border border-indigo-100 shadow-sm">
            <label className="block text-sm font-medium text-slate-700">Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-xl border border-slate-200 focus:border-pink-400 focus:ring-pink-200 outline-none p-4 bg-white"
              placeholder="Describe your adorable scene..."
            />

            <div className="mt-4 flex flex-wrap gap-2">
              {examplePrompts.map((p) => (
                <button key={p} onClick={() => setPrompt(p)} className="px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100 text-sm">{p}</button>
              ))}
            </div>

            <div className="mt-6">
              <span className="block text-sm font-medium text-slate-700 mb-2">Animation style</span>
              <div className="flex flex-wrap gap-2">
                {styles.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`px-3 py-1.5 rounded-full border text-sm ${style === s ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={simulateGeneration} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white shadow hover:shadow-lg hover:bg-emerald-600 transition">
                {isGenerating ? <Loader2 className="animate-spin" size={18}/> : <Play size={18}/>} Generate Video
              </button>
              <button onClick={inspire} className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-pink-100 text-pink-700 border border-pink-200 hover:bg-pink-200 transition">
                <Lightbulb size={18}/> Inspire Me
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500">Tip: Be specific about colors, lighting, and mood for best results.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-indigo-100 shadow-sm">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200">
              {videoUrl ? (
                <video src={videoUrl} controls className="w-full h-full object-cover" />
              ) : (
                <div className="w-full p-6">
                  <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-sky-400" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="mt-3 text-slate-600 text-sm text-center">{isGenerating ? 'Generating your video...' : 'Your video preview will appear here'}</p>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button disabled={!videoUrl} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${videoUrl ? 'bg-white text-slate-700 hover:border-emerald-300' : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'}`}>
                <Download size={16}/> Download Now
              </button>
              <button disabled={!videoUrl} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${videoUrl ? 'bg-white text-slate-700 hover:border-pink-300' : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'}`}>
                <Share2 size={16}/> Share With Friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;