'use client'
import React from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
    const testimonials = [
        {
            name: "Hasnain",
            role: "web app",
            comment: <>I had zero experience in building a startup and had no idea how to ship it. But we just built<a href="https://modernhouses.co" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ModernHouses.co</a>, got the landing page live, And  19 days later—boom—our first customer subscribed. That moment was unreal. Seeing someone actually use (and pay for) something we made so fast? Totally worth it.!</>,
            image: "/hasnaina.jpeg"
        },
       
    ];

    const preventImageDownload = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black">
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header Section */}
                  

                    {/* Content Card */}
                    <div className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-8">
                            {/* Testimonials Section */}
                            <div className="space-y-8">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                        {/* Profile Section */}
                                        <div className="w-full md:w-64 flex flex-col items-center text-center">
                                            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                                                <Image
                                                    src={`${testimonial.image}?auto=format&fit=crop&w=200&h=200`}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                    draggable="false"
                                                    onContextMenu={preventImageDownload}
                                                    priority
                                                />
                                            </div>
                                            <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        </div>

                                        {/* Comment Section */}
                                        <div className="flex-1 bg-zinc-800 p-6 rounded-xl relative">
                                            <svg className="absolute -left-3 top-6 w-6 h-6 text-zinc-800 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            <p className="text-gray-300 text-lg italic leading-relaxed">
                                                {testimonial.comment}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="relative mt-8 flex justify-center">
                                <Image
                                    src="/payment.jpeg"
                                    alt="startup subscription"
                                    width={700}
                                    height={200}
                                    className="rounded-lg"
                                />
                            </div>
                            {/* Features Tags */}
                          
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="text-center mt-16">
<a href="/signup" className="group px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 inline-block">
    <span className="flex items-center gap-2">
        Start creating
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </span>
</a>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;



