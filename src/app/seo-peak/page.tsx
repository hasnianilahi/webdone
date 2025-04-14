'use client'
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
interface Props { }

const GeneratedComponent: React.FC<Props> = () => {
    // Add state declarations
    const [imageUrls, setImageUrls] = useState<File[]>([]);
    const [addedImages, setAddedImages] = useState<File[]>([]);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    // FAQ toggle handler
    const handleFaqClick = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };
  
    const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setImageUrls(prevUrls => [...prevUrls, ...files]);
            setAddedImages(prevImages => [...prevImages, ...files]);
        }
    }, []); // Remove dependencies as they're used with functional state updates

    React.useEffect(() => {
        const faqToggles = document.querySelectorAll('.faq-toggle');
        
        faqToggles.forEach((toggle) => {
            toggle.addEventListener('click', (e) => {
                // Get the parent FAQ item using currentTarget instead of this
                const currentTarget = e.currentTarget as HTMLElement;
                const faqItem = currentTarget.closest('.bg-white') as HTMLElement;
                const content = faqItem.querySelector('.faq-content') as HTMLElement;
                const arrow = currentTarget.querySelector('svg') as unknown as HTMLElement;
                
                // Toggle content
                content.classList.toggle('hidden');
                
                // Rotate arrow
                if (content.classList.contains('hidden')) {
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    arrow.style.transform = 'rotate(180deg)';
                }
                
                // Close other FAQs
                const otherFAQs = document.querySelectorAll('.faq-content');
                const otherArrows = document.querySelectorAll('.faq-toggle svg');
                
                otherFAQs.forEach((otherContent, index) => {
                    if (otherContent !== content) {
                        (otherContent as HTMLElement).classList.add('hidden');
                        (otherArrows[index] as HTMLElement).style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
        
        // Cleanup event listeners
        return () => {
            faqToggles.forEach((toggle) => {
                toggle.removeEventListener('click', () => {});
            });
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <style jsx global>{`


      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }
    

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      

      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .feature-card:hover .feature-icon {
        transform: scale(1.1) rotate(5deg);
      }

      .gradient-border {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b8ac);
        background-size: 200% 200%;
        animation: gradient 15s ease infinite;
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    
      `}</style>






            <style></style>

            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SEOPeak - Advanced SEO Solutions</title>



            <nav className="container mx-auto px-6 py-4"style={{ "background": "linear-gradient(\n          45deg,\n          rgb(9, 1, 1),\n          rgb(15, 0, 0),\n          rgb(23, 2, 2)\n        )" }} >
                <div className="flex items-center justify-between">
                    <div className="text-white text-2xl font-bold">SEOPeak</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-white hover:text-blue-200 transition">Services</a>
                        <a href="#" className="text-white hover:text-blue-200 transition">Strategy</a>
                        <a href="#" className="text-white hover:text-blue-200 transition">About</a>
                        <a href="#" className="text-white hover:text-blue-200 transition">Results</a>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                            Get Started
                        </button>
                    </div>
                    <button className="md:hidden text-white">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </nav>



            <div className=""style={{ 
                backgroundImage: `url('/silver.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
            }}>

             
                <div className="container mx-auto px-6 py-24 relative">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div className="relative group perspective-1000">
                            <div className="relative transform transition-transform duration-500 group-hover:rotate-y-12">
                                <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-indigo-50">

                                    <div className="space-y-6">
                                        <div className="inline-block animate-float">
                                            <span className="px-6 py-2 rounded-full text-base font-bold bg-indigo-50 text-indigo-800">
                                                🚀 #1 SEO Platform
                                            </span>
                                        </div>

                                        <div className="relative">
                                            <Image 
                                                src="/a.jpeg" 
                                                alt="Analytics Dashboard" 
                                                className="rounded-2xl shadow-lg transform transition-transform animate-float-slow"
                                                width={800}
                                                height={600}
                                            />

                                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200 rounded-full blur-xl animate-pulse"></div>
                                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 rounded-full blur-xl animate-blob"></div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-2">
                                                <Image src="/randome-user1.jpg" 
                                                    alt="Team member 1" 
                                                    className="w-10 h-10 rounded-full border-2 border-white"
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image src="/random-user2.jpg" 
                                                    alt="Team member 2" 
                                                    className="w-10 h-10 rounded-full border-2 border-white"
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image src="/randome-user3.jpg" 
                                                    alt="Team member 3" 
                                                    className="w-10 h-10 rounded-full border-2 border-white"
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Trusted by 10,000+ marketers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-8">
                            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                                <span className=" text-black ">
                                    Advanced SEO Solutions
                                </span>
                                <br />
                                <span className="text-4xl md:text-5xl text-gray-800">for Digital Growth</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Elevate your online presence with data-driven SEO strategies that
                                deliver
                                <span className="font-semibold text-indigo-600">10x measurable results</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="email" placeholder="Enter your website URL" className="px-6 py-4 rounded-xl flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg bg-white/90" />
                                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
                                    Analyze Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">

                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>


                    <div className="container mx-auto px-4 py-20 bg-white">
                        <div className="flex flex-col lg:flex-row gap-12">

                            <div className="lg:w-1/2 flex flex-col justify-center">
                                <div className="space-y-8">
                                    <span className="px-6 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 inline-block">
                                        Analytics Dashboard
                                    </span>

                                    <h1 className="text-6xl font-bold leading-tight">
                                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            Transform Your Data
                                        </span>
                                        <br />
                                        <span className="text-gray-800">Into Insights</span>
                                    </h1>

                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        Powerful analytics tools to help you understand your data
                                        better and make informed decisions for your business growth.
                                    </p>

                                    <div className="flex gap-4">
                                        <button className="px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-purple-500/30">
                                            Get Started
                                        </button>
                                        <button className="px-8 py-4 border border-purple-200 text-purple-600 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="lg:w-1/2 relative">

                                <div className="relative z-20 transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                                        <Image 
                                            src="/men-with-laptop.jpeg" 
                                            alt="Team Analytics" 
                                            className="w-full h-[400px] object-cover"
                                            width={800}
                                            height={400}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                                    </div>
                                </div>


                                <div className="relative z-10 -mt-32 mr-32 transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                                        <Image 
                                            src="/a.jpeg" 
                                            alt="Business Analytics" 
                                            className="w-full h-[400px] object-cover"
                                            width={800}
                                            height={400}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
                                    </div>
                                </div>


                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl -z-10"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <style jsx global>{`
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }

      .animate-fade-in {
        animation: fadeIn 1s ease-in forwards;
      }

      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
          `}</style>


            <section className="relative py-32 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">

                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                <div className="container mx-auto px-6 relative">

                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 mb-4">
                            Our Solutions
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Advanced SEO Features
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Empowering your digital success with cutting-edge SEO tools and strategies
                        </p>
                    </div>


                    <div className="space-y-32">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <Image 
                                        src="/a.jpeg" 
                                        alt="Analytics Dashboard" 
                                        className="w-full h-[500px] object-cover"
                                        width={800}
                                        height={500}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                                </div>

                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
                            </div>


                            <div className="space-y-6">

                                <div className="group">
                                    <div className="relative p-1 rounded-xl bg-gradient-to-br from-blue-50 via-white to-blue-50 hover:shadow-lg transition-all duration-500">
                                        <div className="bg-white rounded-lg p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-blue-100 rounded-lg blur opacity-50"></div>
                                                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                                        <i className="fas fa-chart-line text-xl text-white"></i>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Performance Tracking</h3>
                                            </div>
                                            <p className="text-gray-600">Real-time analytics and insights for your SEO campaigns</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="group">
                                    <div className="relative p-1 rounded-xl bg-gradient-to-br from-purple-50 via-white to-purple-50 hover:shadow-lg transition-all duration-500">
                                        <div className="bg-white rounded-lg p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-purple-100 rounded-lg blur opacity-50"></div>
                                                    <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                                        <i className="fas fa-search text-xl text-white"></i>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Keyword Research</h3>
                                            </div>
                                            <p className="text-gray-600">Advanced keyword analysis and optimization strategies</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="group">
                                    <div className="relative p-1 rounded-xl bg-gradient-to-br from-teal-50 via-white to-teal-50 hover:shadow-lg transition-all duration-500">
                                        <div className="bg-white rounded-lg p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-teal-100 rounded-lg blur opacity-50"></div>
                                                    <div className="relative w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                                        <i className="fas fa-rocket text-xl text-white"></i>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Technical SEO</h3>
                                            </div>
                                            <p className="text-gray-600">Comprehensive technical optimization for better rankings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div></section>






            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">

                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                            Our Process
                        </span>
                        <h2 className="text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            How We Optimize Your SEO Strategy
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Systematic approach to elevate your online presence and drive
                            sustainable growth
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="group hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-blue-50">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">01</span>
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <Image src="/a.jpeg" alt="Analytics" className="w-6 h-6 object-cover" width={24} height={24} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    Technical Analysis
                                </h3>
                                <p className="text-slate-600">
                                    Comprehensive website audit and technical optimization strategy
                                </p>
                                <div className="mt-6 flex items-center text-blue-600">
                                    Learn more
                                    <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                                </div>
                            </div>
                        </div>


                        <div className="group hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-purple-50">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">02</span>
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                        <Image src="/a.jpeg" alt="Strategy" className="w-6 h-6 object-cover" width={24} height={24} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    Content Strategy
                                </h3>
                                <p className="text-slate-600">
                                    Data-driven content planning and optimization
                                </p>
                                <div className="mt-6 flex items-center text-purple-600">
                                    Learn more
                                    <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                                </div>
                            </div>
                        </div>


                        <div className="group hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-indigo-50">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">03</span>
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                                        <Image src="/a.jpeg" alt="Implementation" className="w-6 h-6 object-cover" width={24} height={24} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    Implementation
                                </h3>
                                <p className="text-slate-600">
                                    Expert execution of optimized SEO strategies
                                </p>
                                <div className="mt-6 flex items-center text-indigo-600">
                                    Learn more
                                    <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                                </div>
                            </div>
                        </div>


                        <div className="group hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-cyan-50">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">04</span>
                                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                                        <Image src="/a.jpeg" alt="Monitoring" className="w-6 h-6 object-cover" width={24} height={24} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    Monitoring &amp; Growth
                                </h3>
                                <p className="text-slate-600">
                                    Continuous optimization and performance tracking
                                </p>
                                <div className="mt-6 flex items-center text-cyan-600">
                                    Learn more
                                    <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-32 relative max-w-7xl mx-auto">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-200 to-transparent"></div>

                        <div className="space-y-24">

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="w-5/12">
                                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-blue-50">
                                            <Image src="/google-search.jpeg" alt="Analysis" className="w-full h-48 object-cover rounded-xl mb-6" width={500} height={192} />
                                            <h4 className="text-xl font-bold text-slate-800 mb-4">
                                                Initial Assessment
                                            </h4>
                                            <p className="text-slate-600">
                                                Comprehensive analysis of your current SEO performance
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                    </div>
                                    <div className="w-5/12"></div>
                                </div>
                            </div>


                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="w-5/12"></div>
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                                    </div>
                                    <div className="w-5/12">
                                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-purple-50">
                                            <Image src="/Team-office.jpeg" alt="Strategy" className="w-full h-48 object-cover rounded-xl mb-6" width={500} height={192} />
                                            <h4 className="text-xl font-bold text-slate-800 mb-4">
                                                Strategy Development
                                            </h4>
                                            <p className="text-slate-600">
                                                Customized SEO roadmap based on analysis results
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="w-5/12">
                                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-indigo-50">
                                            <Image src="/with-team.jpeg" alt="Implementation" className="w-full h-48 object-cover rounded-xl mb-6" width={500} height={192} />
                                            <h4 className="text-xl font-bold text-slate-800 mb-4">Implementation Phase</h4>
                                            <p className="text-slate-600">Executing the strategy with precision and expertise</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                                    </div>
                                    <div className="w-5/12"></div>
                                </div>
                            </div>


                            <div className="relative max-w-7xl mx-auto">
                                <div className="flex items-center justify-between">
                                    <div className="w-5/12"></div>
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                                    </div>
                                    <div className="w-5/12">
                                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl border border-pink-50 transform transition-all duration-300 hover:-translate-y-1">
                                            <Image src="/seo-dashboard.jpeg" alt="Analytics" className="w-full h-48 object-cover rounded-xl mb-6" width={500} height={192} />
                                            <h4 className="text-xl font-bold text-slate-800 mb-4">Continuous Optimization</h4>
                                            <p className="text-slate-600">Monitoring results and refining strategies for optimal performance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


            <div className=" mx-auto px-6  bg-white ">
                <div className="  max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative group perspective-1000">
                        <div className="relative transform transition-all duration-500 group-hover:rotate-y-6">

                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform -rotate-6 scale-105 group-hover:rotate-6 transition-transform"></div>


                            <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-blue-100">

                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                    Advanced SEO
                                </div>


                                <div className="relative mb-8">
                                    <Image 
                                        src="/seo-office.jpeg" 
                                        alt="SEO Dashboard" 
                                        className="rounded-2xl shadow-lg transform transition-transform group-hover:scale-105 duration-500"
                                        width={800}
                                        height={600}
                                    />


                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
                                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-60 animate-blob"></div>
                                </div>


                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        About Our SEO Expertise
                                    </h3>
                                    <p className="text-gray-600">
                                        Leveraging cutting-edge technology and data-driven strategies to boost your online presence and drive sustainable growth.
                                    </p>


                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="bg-blue-50 p-4 rounded-xl">
                                            <div className="text-2xl font-bold text-blue-600">95%</div>
                                            <div className="text-sm text-blue-600">Success Rate</div>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-xl">
                                            <div className="text-2xl font-bold text-purple-600">10x</div>
                                            <div className="text-sm text-purple-600">ROI Average</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=" w-full"  >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Transform Your Online Visibility
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our comprehensive SEO solutions combine technical expertise with creative strategies to help you reach the top of search results and connect with your target audience.
                        </p>


                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-chart-line text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">Data-Driven Approach</h4>
                                    <p className="text-gray-600">Making decisions based on real-time analytics and insights</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-cog text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">Custom Strategies</h4>
                                    <p className="text-gray-600">Tailored solutions for your specific business needs</p>
                                </div>
                            </div>
                        </div>


                        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
                            Learn More About Our Approach →
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full" style={{ 
                backgroundImage: `url('/white.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
            }}>
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="/Team-office.jpeg" 
                                    alt="SEO Team Working" 
                                    className="w-full h-[600px] object-cover"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Got More Questions?</h3>
                                    <p className="mb-4">Our team is here to help you 24/7</p>
                                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                        Contact Support
                                    </button>
                                </div>
                            </div>

                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
                        </div>


                        <div className="w-full">
                            <div className="text-left mb-8">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Everything you need to know about our services
                                </p>
                            </div>


                            <div className="space-y-4">
                                {[
                                    {
                                        question: "How long does it take to see SEO results?",
                                        answer: "Typically, you can start seeing initial results within 3-6 months. However, SEO is a long-term strategy, and significant results usually become apparent after 6-12 months of consistent optimization."
                                    },
                                    {
                                        question: "Whats included in your SEO services?",
                                        answer: "Our comprehensive SEO services include keyword research, on-page optimization, technical SEO audits, content strategy, link building, and monthly performance reporting."
                                    },
                                    {
                                        question: "How do you measure SEO success?",
                                        answer: "We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, backlink quality, and provide detailed monthly reports showing your progress."
                                    },
                                    {
                                        question: "Do you offer custom SEO strategies?",
                                        answer: "Yes, we create customized SEO strategies tailored to your specific industry, target audience, and business goals to ensure maximum effectiveness."
                                    }
                                ].map((faq, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                        <div className="p-6">
                                            <div 
                                                className="flex items-center justify-between cursor-pointer"
                                                onClick={() => handleFaqClick(index)}
                                            >
                                                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                                        Q
                                                    </span>
                                                    {faq.question}
                                                </h3>
                                                <svg 
                                                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                            <div className={`mt-4 pl-11 transition-all duration-300 ${activeFaq === index ? 'block' : 'hidden'}`}>
                                                <p className="text-gray-600">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Pricing Plans</span>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose the perfect plan for your business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:scale-105 transition-transform duration-300 group">
                            <div className="absolute -top-4 -right-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
                                Popular
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">$299</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Perfect for small businesses starting their SEO journey
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Keyword Research &amp; Analysis
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    On-Page SEO Optimization
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Monthly Performance Reports
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-8 rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
                                Get Started
                            </button>
                        </div>


                        <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 transform translate-y-[-1rem]">
                            <div className="absolute -top-4 -right-4 bg-white text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
                                Most Popular
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">Pro</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-white">$599</span>
                                    <span className="text-blue-100">/month</span>
                                </div>
                                <p className="text-blue-100 mb-6">
                                    Advanced features for growing businesses
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Everything in Basic
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Content Strategy &amp; Creation
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Link Building Campaign
                                </li>
                                <li className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Weekly Progress Updates
                                </li>
                            </ul>

                            <button className="w-full bg-white text-blue-600 py-4 px-8 rounded-xl hover:shadow-lg hover:bg-blue-50 transition-all duration-300">
                                Get Started
                            </button>
                        </div>


                        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:scale-105 transition-transform duration-300">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">$999</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Custom solutions for large organizations
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Everything in Pro
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Custom Strategy Development
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Dedicated Account Manager
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Priority Support 24/7
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-8 rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="bg-blue-900 py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">SEOPeak</h3>
                            <p className="text-blue-200">
                                Leading the way in advanced SEO solutions for businesses
                                worldwide.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
                            <ul className="space-y-2 text-blue-200">
                                <li>
                                    <a href="#" className="hover:text-white transition">Technical SEO</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">Content Optimization</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">Link Building</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">Local SEO</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
                            <ul className="space-y-2 text-blue-200">
                                <li>
                                    <a href="#" className="hover:text-white transition">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">Case Studies</a>
                                </li>
                                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                                <li>
                                    <a href="#" className="hover:text-white transition">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
                            <ul className="space-y-2 text-blue-200">
                                <li>contact@seopeak.com</li>
                                <li>1-800-SEO-PEAK</li>
                                <li>123 Digital Street</li>
                                <li>San Francisco, CA 94105</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-blue-800 mt-16 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-blue-200 mb-4 md:mb-0">
                                © 2024 SEOPeak. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-blue-200 hover:text-white transition">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-blue-200 hover:text-white transition">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-blue-200 hover:text-white transition">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-blue-200 hover:text-white transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>





        </div>
    );
};

export default GeneratedComponent;
