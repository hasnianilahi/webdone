'use client'
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Web from '@/app/UI/web/page'
import Image from "next/image";

const Head = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#E3FDFD] via-[#FFE6FA] to-[#F6F5FF] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[20%] w-64 h-64 bg-teal-200 rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-40 right-[10%] w-96 h-96 bg-pink-200 rounded-full blur-[150px] opacity-40" />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen px-6 pt-32 pb-20 md:px-12 lg:px-24 flex items-center">
                <div className="max-w-[110rem] mx-auto w-full">
                    <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="text-left lg:pr-8 max-w-2xl mx-auto lg:mx-0">
                            <div className="space-y-8">
                                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-500/10 to-pink-500/10 
                                rounded-full text-teal-600 font-medium text-sm shadow-sm">
                                    ✨ Page Builder
                                </span>
                                <div className="space-y-6">
                                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight 
                              bg-stone-950  bg-clip-text text-transparent">
                                        Quickly build a page with AI
                                    </h1>
                                    <p className="text-gray-700 text-lg xl:text-xl leading-relaxed font-medium">
                                        Create a beautiful page effortlessly using AI. Edit everything, from fonts to components, in  TypeScript and JavaScript
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <a href="/signup"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-medium">
                                        Start a project ✨
                                        <FaArrowRight className="text-sm" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Browser Window */}
                        <div className="relative lg:-mr-20 mt-20 lg:mt-0">
                            <div className="relative z-10 group">
                                <div className="relative rounded-2xl overflow-hidden border border-neutral-200/50 shadow-2xl bg-white/50 backdrop-blur-sm p-4 
                               transform perspective-1500 rotate-y-[-3deg] rotate-x-2 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500
                               hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.7)]">
                                    {/* Enhanced Browser Top Bar */}
                                    <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-gray-50 to-white border-b border-neutral-200/50 
                                rounded-t-xl flex items-center px-4 gap-4 z-20">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400 shadow-inner border border-red-500/20" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-inner border border-yellow-500/20" />
                                                <div className="w-3 h-3 rounded-full bg-green-400 shadow-inner border border-green-500/20" />
                                            </div>
                                            <div className="h-6 w-px bg-neutral-200 mx-2" /> {/* Separator */}
                                            <div className="flex gap-2">
                                                <button className="p-1 hover:bg-neutral-100 rounded">
                                                    <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                    </svg>
                                                </button>
                                                <button className="p-1 hover:bg-neutral-100 rounded">
                                                    <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex-1 mx-4">
                                            <div className="mx-auto bg-neutral-100/80 backdrop-blur-sm rounded-full px-4 py-1.5 
                                    text-sm text-neutral-600 font-medium border border-neutral-200/50 
                                    flex items-center justify-center gap-2 max-w-md">
                                                <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                                </svg>
                                                www.seo-peak.com
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative aspect-[16/9] mt-16">
                                        <Image
                                            src="/builder.jpeg"
                                            alt="Webdone-Website Builder Interface"
                                            width={950}
                                            height={950}
                                            className="w-full h-full object-cover rounded-xl shadow-inner scale-210"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
                                    </div>
                                </div>

                                {/* Floating Elements - Adjusted for right side */}
                                <div className="absolute -left-12 top-1/3 transform -translate-x-1/2 bg-white rounded-xl p-1 shadow-xl 
                              hover:scale-105 transition-transform duration-300 cursor-pointer">
                                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-3xl">
                                        🎨
                                    </div>
                                </div>


                                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-white rounded-xl p-1 shadow-xl 
                              hover:scale-105 transition-transform duration-300 cursor-pointer">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
                                        ✨
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Added spacing wrapper div */}

            <Web />

            <section className="relative min-h-screen px-6 pt-32 pb-20 md:px-12 lg:px-24 flex items-center">
                <div className="max-w-[110rem] mx-auto w-full">
                    <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="text-left lg:pr-6 max-w-2xl mx-auto lg:mx-0">
                            <div className="space-y-8">
                                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-500/10 to-pink-500/10 
                                rounded-full text-teal-600 font-medium text-sm shadow-sm">
                                    ✨ Theme Generator
                                </span>
                                <div className="space-y-6">
                                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight 
                              bg-lime-950 bg-clip-text text-transparent">
                                 Generate Stunning theme with AI  
                                    </h1>
                                    <p className="text-gray-700 text-lg xl:text-xl leading-relaxed font-medium">
                                    Quickly generate stunning theme with AI and make the background more vibrant.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <a href="/signup"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-medium">
                                        Start a project ✨
                                        <FaArrowRight className="text-sm" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Browser Window */}
                        <div className="relative lg:-mr-20 mt-20 lg:mt-0">
                            

                            <div className="relative aspect-[16/9] mt-16">
                                <Image
                                    src="/Theme-generator.jpeg"
                                    alt="Webdone-AI Theme Generator "
                                    width={1200}
                                    height={1200}
                                    className="w-full h-full object-cover rounded-xl shadow-inner"
                                />





                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}

        </main>
    );
};

export default Head;
