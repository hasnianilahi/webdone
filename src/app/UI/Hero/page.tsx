'use client'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/UI/logo/page';
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import StructuredData from '../structuredata/page';
import Producthunt from '@/app/UI/Hero/Producthunt/page'


const Hero: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [videoRotation, setVideoRotation] = useState({ x: 0, y: -15 }); // Modified initial rotation
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const videos = [
        {
            id: 1,
            youtubeId: "8x0islFZhx4",
            title: "AI Landing Page Generator Demo",
            duration: "1:35",
            thumbnail: `https://img.youtube.com/vi/v8IZ2siU2LQ/maxresdefault.jpg`
        }
    ];

    // Add new banner component
    const Banner = () => (
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
                <div className="py-2 text-center text-sm font-medium flex items-center justify-center space-x-4">
                    <span>🎉 Webdone is now live Let’s Get Started!!</span>
                    <span>•</span>
                    <span>✨ Create landing pages with AI</span>
                    <span>•</span>
                    <span>🚀 No coding required</span>
                    <span>•</span>
                    <span>💫 Start building </span>
                    <span>•</span>
                    <a href="/signup" className="underline hover:text-white/90">Join now →</a>
                </div>
            </div>



            <Head>
                <title>Webdone Create Landing Pages & Websites with AI  </title>
                 <meta name="application-name" content="Webdone"/>
                <meta name="description" content="Webdone ,Transform your ideas into stunning landing pages and websites instantly with AI-powered design tools. No coding required. Start creating with webdone today." />
                <meta name="keywords" content="Webdone ,AI website builder, landing page creator,webdone, react landing page builder,next js landing page,AI web design, no-code website builder, webdone, AI landing page generator, website design AI,React landing page ai,webdone,react landing page builder,drag and drop page building for react,Launch your startup in hours,generate landing page with ai,landing page ai builder,landing page builder ai" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Webdone , Create Landing Pages & Websites with AI |Ship your startup in time with webdone" />
                <meta property="og:description" content="Webdone,  Create beautiful, conversion-focused landing pages instantly with AI. No coding needed And Ship your startup in time with webdone" />
                <meta property="og:image" content="https://www.webd.one/logo.png" />
                <meta property="og:url" content="https://www.webd.one" />
                <meta property="og:type" content="website" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Webdone (webd.one)AI-Powered Landing Page Builder | webdone" />
                <meta name="twitter:description" content="Webdone (webd.one)Ship your startup in hours And Create page/landing pages in minutes with AI  " />
                <meta name="twitter:image" content="https://www.webd.one/twitter-card.jpg" />

                {/* Favicon and mobile icons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* Viewport and canonical */}
                <meta name="google-site-verification" content="FKdBm_grYzVdmAzxGNc0omUWfrrX4zVXRWuBUIW_TqA" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.webd.one/" />
                <StructuredData />
            </Head>
            {/* Add glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 blur-xl"></div>
        </div>
    );

    // Add scroll effect to header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                    setIsVisible(false);
                } else { // if scroll up show the navbar
                    setIsVisible(true);
                }
                // remember current page location to use in the next move
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


    const handleVideoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Smoothly transition to straight position on hover
        setVideoRotation({ x: 0, y: 0 });
    };

    const handleVideoMouseLeave = () => {
        // Return to tilted position when not hovering
        setVideoRotation({ x: 0, y: -15 });
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const bounds = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const width = bounds.width;
            const percentage = x / width;
            videoRef.current.currentTime = percentage * videoRef.current.duration;
        }
    };

    const renderVideoPlayer = () => (
        <section className="relative px-6 py-20 md:px-12 lg:px-24">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030014] to-transparent blur-md opacity-80 pointer-events-none" />
            <div className="max-w-[90rem] mx-auto">
              

            <div className="mb-6 sm:mb-16 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extralight tracking-tight text-white mb-3 sm:mb-4">
                        Create Eye-catching site & page  in minutes with <span className="font-bold text-white">AI</span>
                    </h1>
                    <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-2 sm:px-4">
                    Just describe your product detail, and let AI build a stunning page —no coding headaches, no stress!And Publish your product very fast with next-js setup
                    </p>
                </div>
                <div className="flex justify-center items-center my-8">
                    <Link href="/Seo-peak">
                        <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold 
                                       hover:bg-indigo-50 transform transition-all duration-300 
                                       hover:scale-105 hover:shadow-xl flex items-center gap-2">
                            Seo-peak
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="relative aspect-video mx-auto max-w-5xl">
                    <div className="absolute inset-0">
                        <div
                            className="w-full h-full transition-transform duration-500 ease-out rounded-2xl shadow-2xl hover:shadow-violet-500/50 overflow-hidden"
                            style={{
                                transform: `perspective(1000px) rotateY(${videoRotation.y}deg) rotateX(${videoRotation.x}deg)`,
                            }}
                            onMouseMove={handleVideoMouseMove}
                            onMouseLeave={handleVideoMouseLeave}
                        >
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${videos[0].youtubeId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
                                title={videos[0].title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                frameBorder="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const renderRoundedSection = () => (
        <section className="relative px-6 py-16 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">

            </div>
        </section>
    );

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#030014]">
            {/* Add Banner at the top */}




            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? ' backdrop-blur-md shadow-sm' : 'bg-transparent'} transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
                        {/* Logo with hover effect */}
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2 sm:space-x-4">
                                <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
                                    <Logo />
                                </div>
                                <a
                                    href="https://www.webd.one"
                                    className="text-xl sm:text-2xl font-semibold tracking-tight text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300 font-['Inter']"
                                    aria-label="Webdone - AI Landing Page Builder">
                                    Webdone
                                </a>
                            </div>
                        </div>

                        {/* Enhanced CTA buttons */}
                        <div className={`hidden md:flex md:items-center md:space-x-6 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                            <Link
                                href="/login"
                                className="text-sm font-medium text-white  transition-colors"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/signup"
                                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg"
                            >
                                Start Building →
                            </Link>
                        </div>

                        {/* Enhanced mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <span className="sr-only">Toggle menu</span>
                                {menuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced mobile menu with animations */}
                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg text-white z-20 border-t border-gray-800">
                        <nav className="flex flex-col items-center py-4 space-y-4">
                            <Link href="/signup" className="block w-full text-center py-3 px-4 text-lg hover:bg-gray-800 transition-colors">Sign In</Link>
                            <Link href="/about" className="block w-full text-center py-3 px-4 text-lg hover:bg-gray-800 transition-colors">About</Link>
                            <Link href="/blogs" className="block w-full text-center py-3 px-4 text-lg hover:bg-gray-800 transition-colors">Blogs</Link>
                        </nav>
                    </div>
                )}
            </header>
            {/* Hero Section - Adding new hero section */}
            <div className="">
                {/* Add meta tags and scripts using Next.js Head component */}



                {/* Main content */}
                <section className="relative min-h-screen  overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 rple-950/30"></div>
                        <div className="absolute inset-0 ops))] from-blue-400/10  animate-gradient"></div>
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)',
                                backgroundSize: '20px 20px',
                            }}
                        ></div>
                        <div className="absolute top-20 right-20 w-72 h-72  rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-800/30 rounded-full blur-3xl animate-float-delay"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-32 pb-20">
                        <div className="relative min-h-screen  overflow-hidden">



                            <div className="relative max-w-7xl mx-auto ">
                                <Producthunt />

                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                                    <div className="relative z-10 space-y-6 sm:space-y-8">
                                        <div className="animate-float">

                                        </div>

                                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-stone-50">
                                            Create Stunning page & site with AI and Ship your startup with in
                                            <div className="relative inline-block">
                                                <span className="relative z-10  bg-clip-text bg- text-emerald-400">
                                                    Hours
                                                </span>
                                                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-50 transform -skew-x-12"></div>
                                            </div>
                                        </h1>

                                        <p className="text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed">
                                            Skip the intense coding week! Use AI to creating stunning landing page & webpage with AI ! And ship your startup Quickly with nextjs


                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                            <Link href="/signup">
                                                <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold 
                                           hover:bg-indigo-50 transform transition-all duration-300 
                                           hover:scale-105 hover:shadow-xl flex items-center gap-2">
                                                    Create with AI
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </Link>

                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                <span className="text-red-500 text-sm">No generic layout</span>
                                            </div>
                                        </div>

                                        {/* User Reviews Section - Now outside the button container */}
                                        <div className="mt-8">
                                            <div className="flex items-center space-x-2 mb-4">
                                                <div className="flex -space-x-2">
                                                    <Image src="/Zane Valor.jpeg" alt="Webdone-User" width={32} height={32} className="rounded-full border-2 border-white" />
                                                    <Image src="/Priya_Patel.jpeg" alt="Webdone-User" width={32} height={32} className="rounded-full border-2 border-white" />
                                                    <Image src="/SarahChen.jpeg" alt="Webdone-User" width={32} height={32} className="rounded-full border-2 border-white" />
                                                    <Image src="/James Smith.png" alt="Webdone-User" width={32} height={32} className="rounded-full border-2 border-white" />
                                                </div>
                                                <div className="text-sm text-gray-300">
                                                    <div className="flex items-center space-x-1 text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}

                                                    </div>
                                                    <span className="font-semibold">1300+</span> Indie maker joined
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="relative mt-10 lg:mt-0 hidden sm:block">
                                        <div className="absolute inset-0 bg-gradient-to-r  rounded-3xl transform rotate-6 animate-pulse"></div>
                                        <div className="relative   rounded-3xl p-6 shadow-xl border border-neutral-700 perspective-1000">
                                            <div className="relative h-[600px]  transform-style-3d">

                                                <div className="flex-1 flex justify-center items-center">
                                                    <div className="relative w-[300px] h-[500px] flex justify-center items-start mt-20 mx-auto"> {/* Increased height and added margin-top */}
                                                        <div className="absolute top-10 w-[300px] h-[300px] rounded-full border border-gray-700/50"></div>
                                                        {[
                                                            { src: "/Ai-landingpage-page-beauty.jpeg", alt: "Webdone-Ai-landingpage-page-beauty-anding-page", delay: 0 },
                                                            { src: "/TravelLandingpage.jpeg", alt: "Webdone-Travel-Landing-page-AI", delay: 72 },
                                                            { src: "/Beautyshop-landing-page.jpeg", alt: "Webdone-Beauty-shop-landing-page-AI", delay: 144 },
                                                            { src: "/Cyberpunk.jpeg", alt: "Webdone-Cyberpunk-AI-Landing-Page", delay: 216 },
                                                            { src: "/Beautyshop-landing-page.jpeg", alt: "Webdone-Beauty-shop-Ai-landing-page-maker.png", delay: 288 }
                                                        ].map((img, index) => (
                                                            <Image
                                                                key={img.src}
                                                                src={img.src}
                                                                alt={img.alt}
                                                                width={150}
                                                                height={150}
                                                                className="absolute rounded-full shadow-lg z-30 transition-transform duration-500 ease-out hover:scale-110"
                                                                style={{
                                                                    transform: `translateY(60px) rotate(${img.delay}deg) translate(150px) rotate(-${img.delay}deg)`,
                                                                }}
                                                                loading="lazy"
                                                            />

                                                        ))}
                                                    </div>
                                                    <div className="absolute top-2 right-2 z-40">
                                                        <div className="relative">
                                                            {/* Glow effect */}
                                                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                                                            {/* Main badge */}
                                                            <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 rounded-full">
                                                                {/* Shine effect */}
                                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                                                                {/* Crown icon */}
                                                                <svg className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M2.5 5.5L5 15.5L12 11L19 15.5L21.5 5.5L17 9.5L12 3L7 9.5L2.5 5.5Z" strokeWidth="2" />
                                                                </svg>
                                                                <span className="text-xs font-bold text-white tracking-wider">PREMIUM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>





                                            </div>

                                        </div>

                                    </div>

                                    {/* Mobile-only simplified version of the cards */}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add this inside your hero section where appropriate */}
                    {renderVideoPlayer()}
                    {renderRoundedSection()}


                </section>


            </div>



            {/* Social Proof */}


        </div>
    );
};

export default Hero;
