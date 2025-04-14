'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Github, User, Briefcase } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa";
const Section = () => {
    return (
        <div className="min-h-screen bg-violet-100 overflow-hidden rounded-r-full">
            <div className="max-w-9xl mx-auto px-4 overflow-hidden">
                <section className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32 relative overflow-hidden">
                    {/* Text Content Area */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-10 lg:pr-20 order-1 lg:order-2 mb-16 lg:mb-0">
                        <h1 className="text-6xl lg:text-4xl font-black leading-tight">
                        <span className="bg-clip-text text-transparent bg-black ">
                       Build site  Like a Pro with AI 
                            </span>
                            <br />
          
                        </h1>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">

                            </span>
                        <p className="text-2xl text-black leading-relaxed max-w-2xl">
                        Create a stunning site/page without any design or coding skills.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mt-10">
                            <Link href="/signup" className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <button className="relative px-12 py-6 bg-white text-xl font-bold text-gray-800 rounded-full hover:text-white hover:bg-transparent transition-all duration-200">
                                    Start Building
                                                    
                                </button>
                                
                            </Link>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="w-full lg:w-1/2 relative h-[400px] order-2 lg:order-1">
                        <div className="absolute w-full h-full flex justify-center items-center">
                            {/* First Card */}
                            <div className="absolute transform transition-all duration-700 hover:scale-105 hover:z-10" 
                                 style={{ transform: 'rotate(-15deg) translateX(-100px) translateY(-20px)' }}>
                                <div className="relative group">
                                    <Image
                                        src="/Ai-landingpage-page-beauty Large.jpeg"
                                        alt="AI Beauty Shop"
                                        width={180}
                                        height={180}
                                        className="rounded-full shadow-xl transform transition-transform duration-500 group-hover:rotate-0"
                                        style={{ 
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                            transformStyle: 'preserve-3d',
                                            objectFit: 'cover',
                                          }}
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Center Card */}
                            <div className="absolute transform transition-all duration-700 hover:scale-105 hover:z-10">
                                <div className="relative group">
                                    <Image
                                        src="/TravelLandingpage.jpeg"
                                        alt="Traveling landing page by webdone"
                                        width={220}
                                        height={220}
                                        className="rounded-full shadow-xl transform transition-transform duration-500 group-hover:rotate-0"
                                        style={{ 
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                            transformStyle: 'preserve-3d',
                                            objectFit: 'cover',
                                          }}
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Third Card */}
                            <div className="absolute transform transition-all duration-700 hover:scale-105 hover:z-10"
                                 style={{ transform: 'rotate(15deg) translateX(100px) translateY(20px)' }}>
                                <div className="relative group">
                                    <Image
                                        src="/Beautyshop-landing-page Large.jpeg"
                                        alt="AI Landing Page"
                                        width={180}
                                        height={180}
                                        className="rounded-full shadow-xl transform transition-transform duration-500 group-hover:rotate-0"
                                        style={{ 
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                            transformStyle: 'preserve-3d',
                                            objectFit: 'cover',
                                          }}
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Section;
