'use client'
import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Repeat2, Check } from 'lucide-react';
import Image from "next/image";
interface TestimonialData {
  name: string;
  username: string;
  role: string;
  text: string;
  image: string;
  hasSocial?: boolean;
  tweetUrl?: string; // Add this new property
  socialMetrics?: {
    likes: number;
    retweets: number;
    comments: number;
    views: number; // Add views property
  };
  platform?: 'twitter Indie-comunity' | 'reddit' | 'discord';
}

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ children, className }) => (
  <div className={`inline-flex items-center justify-center overflow-hidden ${className}`}>
    {children}
  </div>
);

const testimonials: TestimonialData[] = [
  {
    name: "Eleftheria Batsou",
    username: "@BatsouElef",
    role: "Dev/Ux",
    text: "That sounds awesome! Using an AI-Powered Theme Generator for your projects must save you so much time and effort.",
    image: "/@BatsouElef.jpeg",
    hasSocial: true,

    socialMetrics: {
      likes: 1,
      retweets: 0,
      comments: 0,
      views: 20
    },
    platform: 'twitter Indie-comunity',
  },
  {
    name: "Priya Patel",
    username: "@Priya_Patel",
    role: "UI/UX Designer",
    text: "The best UI builder I've used! Drag, drop, tweak, and go live. The real-time preview is a lifesaver",
    image: "/Priya_Patel.jpeg",
    platform: 'discord',
  },
  {
    name: "Zane Valor",
    username: "@Zane Valorr",
    role: "Saas Maker",
    platform: 'reddit',
    text: "The Next.js setup was incredibly smooth. Optimized, fast, and scalable—exactly what I need!",
    image: "/Zane Valor.jpeg",
  },
  {
    name: "Sarah Chen",
    username: "@SarahChen",
    role: "Full Stack Developer",
    text: "I built a full landing page in 11 minutes with zero hassle. The Next.js boilerplate is so well-structured!",
    image: "/SarahChen.jpeg",
    socialMetrics: {
      likes: 312,
      retweets: 89,
      comments: 24,
      views: 5678
    },
    platform: 'reddit',
  },
  {
    name: "Mike Johnson",
    username: "@mikej_tech",
    role: "Saas-maker",
    text: "Finally, a way to build landing pages for my games without getting stuck in design nightmares!",
    image: "/Mike Johnson.jpeg",
    platform: 'discord',
  },
  {
    name: "Emma Wilson",
    username: "@emmacodes",
    role: "SaaS maker",
    text: "I tested many tools before—Wix, Squarespace, and multiple AI builders—but nothing comes close to the speed and flexibility of this! Other builders just offer generic templates that all look the same, but this lets me build exactly what I want,Really this tool save my time for my project ",
    image: "/Emma Wilson.jpeg",

    socialMetrics: {
      likes: 267,
      retweets: 78,
      comments: 19,
      views: 3456
    },
    platform: 'discord',
  },
  {
    name: "Alex Rivera",
    username: "@arivera_dev",
    role: "Developer/UI/Ux",
    text: "I launched my startup’s landing page in one afternoon. No complex setups, just smooth execution.",
    image: "/Alex Rivera.jpeg",
    platform: 'discord',
  },
  {
    name: "Miloš Ristić",
    username: "@HeyRistaa",
    role: "developer",
    text: "Yeah, AI is great for this purpose. :)",
    image: "/HeyRistaa.jpg",
    hasSocial: true,
    platform: 'twitter Indie-comunity',

    socialMetrics: {
      likes: 1,
      retweets: 1,
      comments: 0,
      views: 12
    }
  },
  {
    name: "James Smith",
    username: "@jsmith_dev",
    role: "Podcast Host",
    platform: 'reddit',
    text: "I set up my podcast landing page in under an hour. Super simple and professional-looking",
    image: "/James Smith.png",
  },
];

const AnalyticsIcon = () => (
  <div className="flex items-end h-4 gap-[2px]">
    <div className="w-[2px] h-2 bg-zinc-500 rounded-full" />
    <div className="w-[2px] h-3 bg-zinc-500 rounded-full" />
    <div className="w-[2px] h-4 bg-zinc-500 rounded-full" />
    <div className="w-[2px] h-2 bg-zinc-500 rounded-full" />
  </div>
);

const TestimonialCard: React.FC<TestimonialData> = ({
  name, 
  username, 
  role, 
  text, 
  image,
  hasSocial,
  socialMetrics,
  tweetUrl,
  platform
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleCardClick = () => {
    if (tweetUrl) {
      window.open(tweetUrl, '_blank');
    }
  };

  const getPlatformLabel = (platform?: string) => {
    switch (platform) {
      case 'twitter Indie-comunity':
        return 'Twitter Indie-comunity';
      case 'reddit':
        return 'Reddit';
      case 'discord':
        return 'Discord ';
      default:
        return null;
    }
  };

  return (
    <Card 
      className={`
        relative group
        bg-gradient-to-br from-zinc-900/90 to-black/90
        backdrop-blur-xl
        p-8
        rounded-3xl
        border border-white/[0.08]
        hover:border-white/[0.15]
        transition-all
        duration-500
        hover:shadow-[0_0_45px_-5px_rgba(120,119,198,0.1)]
        before:absolute
        before:inset-0
        before:-z-10
        before:bg-gradient-to-r
      
        ${tweetUrl ? 'cursor-pointer' : ''}
      `}
      onClick={handleCardClick}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <Avatar className="w-10 h-10 rounded-full ring-2 ring-white/[0.05]">
              <Image 
                src={image} 
                alt={name} 
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full" 
                draggable="false"
                loading="lazy"
                onContextMenu={(e) => e.preventDefault()}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              />
            </Avatar>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="font-medium text-white">{name}</h4>
                {hasSocial && (
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-[#1d9bf0] flex items-center justify-center" style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}>
                      <Check className="w-3 h-3 text-black stroke-[3]" />
                    </div>
                  </div>
                )}
              </div>
              <p className="text-sm text-zinc-400">{username}</p>
              <p className="text-xs text-zinc-500 flex items-center">
                {role}
                {platform && (
                  <>
                    <span className="mx-1.5">•</span>
                    <span className={`
                      ${platform === 'twitter Indie-comunity' && 'text-[#1d9bf0]'}
                      ${platform === 'reddit' && 'text-[#ff4500]'}
                      ${platform === 'discord' && 'text-[#5865F2]'}
                    `}>
                      {getPlatformLabel(platform)}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-zinc-300 leading-relaxed">
          {text}
        </p>
        
        {hasSocial && socialMetrics && (
          <div className="flex items-center gap-6 pt-3 border-t border-white/[0.03]">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="group flex items-center gap-2"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'text-pink-500 fill-pink-500' : 'text-zinc-500'}`} />
              <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                {isLiked ? socialMetrics.likes + 1 : socialMetrics.likes}
              </span>
            </button>
            <button 
              onClick={() => setIsRetweeted(!isRetweeted)}
              className="group flex items-center gap-2"
            >
              <Repeat2 className={`w-4 h-4 ${isRetweeted ? 'text-emerald-500' : 'text-zinc-500'}`} />
              <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                {isRetweeted ? socialMetrics.retweets + 1 : socialMetrics.retweets}
              </span>
            </button>
            <button className="group flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" />
              <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                {socialMetrics.comments}
              </span>
            </button>
            <div className="group flex items-center gap-2">
              <AnalyticsIcon />
              <span className="text-xs text-zinc-500">
                {socialMetrics.views >= 1000 
                  ? `${(socialMetrics.views / 1000).toFixed(1)}K` 
                  : socialMetrics.views}
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

const TwitterTestimonials = () => {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="relative py-40 px-4 overflow-hidden bg-black">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Modern Gradient Effects */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 opacity-20 blur-[128px]" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-indigo-500 opacity-20 blur-[128px]" />
      
      <div className="relative max-w-[90rem] mx-auto">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-zinc-800 to-zinc-900 text-zinc-400 rounded-full border border-zinc-800">
            Customer Reviews
          </span>
          <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 mb-6 tracking-tight">
            Stories From Happy Customers
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            Join thousands of satisfied customers who have transformed their digital presence with AI.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* First Row - Scrolling Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-left">
              {[...firstRow, ...firstRow].map((testimonial, index) => (
                <div
                  key={`row1-${index}`}
                  className="min-w-[450px] transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-right">
              {[...secondRow, ...secondRow].map((testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="min-w-[450px] transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 32px)); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(calc(-50% - 32px)); }
    100% { transform: translateX(0); }
  }

  .animate-scroll-left {
    animation: scrollLeft 60s linear infinite;
  }

  .animate-scroll-right {
    animation: scrollRight 60s linear infinite;
  }

  .overflow-hidden:hover > div {
    animation-play-state: paused;
  }
`;

export default TwitterTestimonials;
