'use client'
import React from 'react';

const MarketingHero = () => {
  const videos = [
    {
      id: 1,
      youtubeId: "BCXL4PEAP4o",
      title: "Build web page  with AI",
      duration: "1:35",
      thumbnail: `https://img.youtube.com/vi/SdRm6EFsn4I/maxresdefault.jpg`,
      link: `https://www.youtube.com/watch?v=SdRm6EFsn4I`,

    }
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center p-8 overflow-hidden bg-[#030712] text-white">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[url('data:image/svg+xml,<svg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'noise\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\' opacity=\'0.1\'/></svg>')]" />

      {/* Gradient Spheres */}
      <div className="absolute w-[600px] h-[600px] -top-[20%] -right-[10%] rounded-full opacity-30 bg-gradient-radial from-indigo-600 via-indigo-400 to-indigo-500 blur-[80px] animate-[morphGradient_10s_infinite]" />
      <div className="absolute w-[600px] h-[600px] -bottom-[30%] -left-[10%] rounded-full opacity-30 bg-gradient-radial from-indigo-600 via-indigo-400 to-indigo-500 blur-[80px] animate-[morphGradient_10s_infinite]" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`absolute w-2.5 h-2.5 bg-indigo-600 rounded-full
              ${i === 1 ? 'top-[20%] left-[80%] animate-[floatParticle_4s_infinite]' :
                i === 2 ? 'top-[60%] left-[20%] animate-[floatParticle_6s_infinite]' :
                  i === 3 ? 'top-[40%] left-[50%] animate-[floatParticle_5s_infinite]' :
                    i === 4 ? 'top-[80%] left-[30%] animate-[floatParticle_7s_infinite]' :
                      'top-[30%] left-[70%] animate-[floatParticle_8s_infinite]'}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative mb-8">
          {/* Title Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-10 -skew-x-12 -z-10" />

          {/* Main Title */}
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-none uppercase text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] animate-[textClip_1s_cubic-bezier(0.77,0,0.175,1)_forwards]">
            SHip your startup<br /> with in hours
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl leading-relaxed text-slate-400 max-w-[650px] mb-12 transform -translate-x-full animate-[slideIn_0.8s_cubic-bezier(0.77,0,0.175,1)_0.5s_forwards]">
          No need to worry about designing pages/site/landing page or setting up payments, databases. Get everything All in one .
        </p>

        {/* Video Section */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 transform rotate-1 rounded-2xl"></div>
          <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)] transform hover:-translate-y-1 transition-all duration-300">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes textClip {
          0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }
        @keyframes morphGradient {
          0% { filter: hue-rotate(0deg) blur(30px); }
          50% { filter: hue-rotate(180deg) blur(40px); }
          100% { filter: hue-rotate(360deg) blur(30px); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(180deg) scale(1.2); }
        }
        @keyframes slideIn {
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes rotate-y-1 {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(1deg); }
        }
      `}</style>
    </div>
  );
};

export default MarketingHero;
