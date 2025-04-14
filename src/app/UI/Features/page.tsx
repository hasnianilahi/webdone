'use client'
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      src: "/webdone-Ai-builder.jpeg",
      alt: "Webdone-AI Page Builder",
      title: "Effortless Control",
      description: "Easily customize colors, backgrounds, and more with a simple and intuitive tool ",
      features: [ "Background color ","Real-time Updates","Scalability "]
    },
    {
      src: "/webdone-Ai-assistant.jpeg",
      alt: "Webdone-AI-Asisstant",
      title: " Redefining Quick Edits  Page Creation with AI Assistance ",
      description: "Accelerate the creation of high-quality landing pages  Redefining with AI tools that optimize Layout, performance, and content.",
      features: [ "Instant layout change ", "One-Click Customization",]
    },
    {
        src: "/webdone-React-landing page-typscript-javascript.jpeg",
        alt: "Webdone-typscript-javascript-landing-page-maker",
        title: "Typscript & Javascript",
        description: "Unlock Perfect Landing Pages with AI and Seamless Conversion Metrics .",
        features: ["React", "Tailwind CSS", "Typscript & Javascript"]
      },
      {
        src: "/blog-seo-landing-page.png",
        alt: "Webdone-Seo perfomance",
        title: " Performance Optimization",
        description: "Unlock superior landing page performance, SEO improvements, and accessibility with AI-driven optimizations",
        features: ["SEO Optimization", "Accessibility Enhancement", "Search Engine Ranking ","User Engagement"]
      },
    {
        src: "/webdone-cyperpunk-landing-page.jpeg",
        alt: "Webdone-AI-landing-page-cyperpunk",
        title: "Build High Converting Landing Pages with AI",
        description: "Create optimized landing pages with AI that drive conversions and enhance user engagement.",
        features: ["Smart Color Schemes", "AI-Layout Options","Drag and Drop Builder"]
      },
  

  ];

  const getColorScheme = (index: number) => {
    const schemes = [
      {
        outer: "from-blue-300/30 to-cyan-300/30",
        inner: "from-gray-100/90 to-blue-200/90",
        border: "border-blue-300",
        shadow: "shadow-blue-300",
        text: "from-blue-600 to-cyan-500",
        hover: "hover:text-blue-600"
      },
      {
        outer: "from-rose-300/30 to-pink-300/30",
        inner: "from-gray-100/90 to-rose-200/90",
        border: "border-rose-300",
        shadow: "shadow-rose-300",
        text: "from-rose-600 to-pink-500",
        hover: "hover:text-rose-600"
      },
      {
        outer: "from-emerald-300/30 to-teal-300/30",
        inner: "from-gray-100/90 to-emerald-200/90",
        border: "border-emerald-300",
        shadow: "shadow-emerald-300",
        text: "from-emerald-600 to-teal-500",
        hover: "hover:text-emerald-600"
      },
      {
        outer: "from-amber-300/30 to-yellow-300/30",
        inner: "from-gray-100/90 to-amber-200/90",
        border: "border-amber-300",
        shadow: "shadow-amber-300",
        text: "from-amber-600 to-yellow-600",
        hover: "hover:text-amber-600"
      },
      {
        outer: "from-violet-300/30 to-purple-300/30",
        inner: "from-gray-100/90 to-violet-200/90",
        border: "border-violet-300",
        shadow: "shadow-violet-300",
        text: "from-violet-600 to-purple-500",
        hover: "hover:text-violet-600"
      }
    ];
    return schemes[index % schemes.length];
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollPercentage = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollProgress(scrollPercentage);
        
        // Calculate active index based on scroll position
        const newIndex = Math.floor(scrollPercentage * sections.length);
        setActiveIndex(Math.min(newIndex, sections.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <section className="bg-slate-100">
      <div ref={containerRef} className="relative" style={{ height: `${sections.length * 100}vh` }}>
        <div className="h-screen sticky top-0 overflow-hidden p-4 sm:p-8 md:p-16 rounded-full">
          <div className="relative h-full w-full flex items-center justify-center perspective-[2000px]">
            <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-8">
              {sections.map((section, index) => {
                const colors = getColorScheme(index);
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      transform: `
                        perspective(2000px)
                        rotateY(${index === activeIndex ? '0' : index < activeIndex ? '45deg' : '-45deg'})
                        translateZ(${index === activeIndex ? '0' : '-300px'})
                        translateX(${index === activeIndex ? '0' : index < activeIndex ? '-30%' : '30%'})
                        scale(${index === activeIndex ? '1' : '0.9'})
                      `,
                      zIndex: index === activeIndex ? 10 : 0,
                    }}
                  >
                    {/* Main Card Container - Reduced height */}
                    <div className="w-full h-[90vh] sm:h-[80vh] rounded-xl group preserve-3d hover:rotate-y-12 transition-all duration-700">
                      {/* Card Front */}
                      <div className="absolute inset-0 w-full h-full rounded-xl backface-hidden">
                        <div className={`w-full h-full rounded-xl bg-gradient-to-r ${colors.outer} p-1 sm:p-2
                                      shadow-[0_0_20px_rgba(219,192,246,0.3)] group-hover:shadow-[0_0_30px_rgba(219,192,246,0.5)]`}>
                          {/* Inner Card - Reduced padding */}
                          <div className={`w-full h-full rounded-lg bg-gradient-to-br ${colors.inner} p-2 sm:p-3
                                        border ${colors.border}/20 group-hover:${colors.border}/40`}>
                            {/* Content Grid - Adjusted gap */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-8 h-full">
                              {/* Image Section - Reduced height */}
                              <div className="relative w-full h-[35vh] sm:h-[40vh] lg:h-full rounded-lg overflow-hidden
                                            group-hover:translate-z-8 transition-transform duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-indigo-900/10">
                                  <Image
                                    src={section.src}
                                    alt={section.alt}
                                    fill
                                    priority
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain transition-all duration-700
                                             group-hover:scale-105"
                                  />
                                </div>
                              </div>

                              {/* Content Section - Reduced spacing */}
                              <div className="flex flex-col justify-center p-2 sm:p-3 lg:p-4 transform
                                            group-hover:translate-z-6 transition-transform duration-700">
                                <h2 className={`text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 
                                             bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                                  {section.title}
                                </h2>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2 sm:mb-4 lg:mb-6 leading-relaxed">
                                  {section.description}
                                </p>
                                <ul className={`bg-gradient-to-r ${colors.outer}
                                      rounded-xl p-3 sm:p-6 lg:p-8 backdrop-blur-md
                                      border ${colors.border} hover:${colors.border}/40
                                      shadow-xl ${colors.shadow}
                                      transform transition-all duration-500 hover:scale-105 
                                      space-y-1 sm:space-y-2 lg:space-y-3 group-hover:translate-z-4`}>
                                  {section.features.map((feature, i) => (
                                    <li key={i} 
                                        className={`flex items-center text-xs sm:text-sm lg:text-base text-gray-600 
                                                 transform hover:translate-x-2 transition-all duration-300
                                                 ${colors.hover}`}>
                                      <span className={`mr-1 sm:mr-2 ${colors.text} rotate-45 text-xs sm:text-base`}>⬢</span> 
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mt-14">
                            <a href="/signup" className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur shadow-amber-300 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <button className="relative px-12 py-4 bg-white text-xl font-bold text-gray-800 rounded-full hover:text-white hover:bg-transparent transition-all duration-200">
                                    Begin Now

                                </button>

                            </a>
                        </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .perspective-[2000px] {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .translate-z-4 {
          transform: translateZ(4px);
        }
        .translate-z-6 {
          transform: translateZ(6px);
        }
        .translate-z-8 {
          transform: translateZ(8px);
        }
        .translate-z-12 {
          transform: translateZ(12px);
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
};

export default Features;
