'use client'
import Link from 'next/link';
import Faq from '@/app/UI/faq/page'
import Image from 'next/image';
import Pricing from "@/app/pricing/page"
import Payment from "@/app/UI/payment/page"
import Feature from "@/app/Feature/page"
import Footer from '@/app/UI/footer/page';
import React, { useState, useEffect } from 'react';
import Testaminol from "@/app/UI/testaminol/page"

import { FaArrowRight } from "react-icons/fa";
import Head from 'next/head';

const Section: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const technologies = [];

    const videos = [
        {
            id: 1,
            youtubeId: "t4gm9Co_BKw",
            title: "",
            duration: "1:35",
            thumbnail: `https://img.youtube.com/vi/SdRm6EFsn4I/maxresdefault.jpg`,
            link: `https://www.youtube.com/watch?v=SdRm6EFsn4I`,

        }
    ];

    return (
        <div>
            <div className="min-h-screen relative overflow-hidden bg-neutral-950 ">
                {/* Advanced Capabilities Section */}
                <div className="p-4 sm:p-40 text-center">
                    <h1 className="text-4xl sm:text-4xl font-extralight tracking-tight text-white mb-4">
                        Get Your App Ready with Payments, Database,and Auth—Quickly
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                        Skip the stress and ship your  app with all the essentials—payments, database, and auth—in no time!
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Video Section */}
                        <div className="lg:col-span-7 lg:order-2">
                            <div className="relative group">
                                <div className="w-full max-w-5xl mx-auto perspective" style={{ perspective: '1000px' }}>
                                    <div className="relative pt-[56.25%] mx-4 mb-4">
                                        <iframe
                                            className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl hover:shadow-violet-500/50 transition-all duration-300"
                                            src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
                                            title={videos[0].title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                                \
                            </div>
                        </div>
                        {/* Content Section */}
                        <div className="lg:col-span-5 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-['Satoshi']">
                            Ship Your Startup Superfast - Create , setup & publish in No Time!


                            </h2>
                            <p className="text-gray-400 text-lg mb-6">
                            Skip the headaches of setup! Create a stunning page with AI and set up authentication, payments, and a database— all-in-one Next.js setup. Build, scale, launch, and go live faster than ever
                            </p>
                            <div className="pt-4">
                                <a href="/signup"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-medium">
                                    Start a project ✨
                                    <FaArrowRight className="text-sm" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Head>
                    <title>Create Landing Pages & Websites with AI |And ship your startup in time with  webdone</title>
                    <meta name="description" content="Transform your ideas into stunning landing pages and websites instantly with AI-powered design tools. No coding required. Ship your startup in hours with everything set up. Start creating with webdone today." />
                    <meta name="keywords" content="AI website builder, landing page creator, webdone, react landing page builder, next js landing page, AI web design, no-code website builder, webdone, AI landing page generator, website design AI, React landing page AI, webdone, build startup" />
                    <meta name="robots" content="index, follow" />

                    {/* Open Graph tags */}
                    <meta property="og:title" content="Webdone Create Landing Pages & Websites with AI | Ship your startup in time with webdone" />
                    <meta property="og:description" content="Create beautiful, conversion-focused landing pages instantly with AI. No coding needed. Ship your startup in hours with everything set up using webdone." />
                    <meta property="og:image" content="https://www.webd.one/logo.png" />
                    <meta property="og:url" content="https://www.webd.one" />
                    <meta property="og:type" content="website" />
                </Head>

                <Feature />

                <Payment />
           
                <Testaminol />
                <Pricing/>
   
                <Faq />

                <Footer />


            </div>

          
        </div>
    );
};

export default Section;
