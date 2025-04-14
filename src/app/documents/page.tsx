'use client'
import React, { useState } from "react";
import Logo from '@/app/UI/logo/page'
// Import all documentation content components
import StripeSetup from "./stripe-setup/page";
import MongoDBSetup from "./mongodb-setup/page";
import Googleanylytics from "./Googleanylytics/page";
import AuthGoogle from "./Auth-google/page";
import EmailSetup from "./email-setup/page";



const Introducingwebdone = () => {
  const [activeSection, setActiveSection] = useState("intro");

  // Function to render the active content section
  const renderContent = () => {
    switch (activeSection) {
      case "stripe":
        return <StripeSetup />;
      case "mongodb":
        return <MongoDBSetup />;
      case "googleanylytics":
        return <Googleanylytics />;
      case "google-auth":
        return <  AuthGoogle />;
      case "email-setup":
        return <  EmailSetup />;



      default:
        return (
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-xs mb-4">
              Quick Setup Guide
            </div>
            <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Create Webpage with AI and Ship Your Startup Super-Fast
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed">
              Create stunning landing pages with  AI with builder no coding  and ship your start up in hours
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-200 mb-1">Rapid Development</h3>
                    <p className="text-xs text-gray-400">
                      Set up a Next.js project with all essential features in under 5 minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-300 mb-2">Build  Next.js Project Fast</h3>
                    <p className="text-gray-400">
                      Drag and Drop ,AI builder, Typescript/javascript and more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50">
              {/* Welcome Section */}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-200 mb-3">👋 Hey there, Future Founder!</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Starting a business isn’t just about websites and technology – it’s about bringing your passion to life. That’s why we created Webdone, your friendly companion on this exciting journey. Think of us as that tech-savvy friend who’s always there to help!.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-200 mb-3">Create Your Landing Page/webpage</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Today, launching a startup is easier than ever. With AI, instant payment setup, and ready-to-use databases, you can go from idea to live webpage in record time.

                  Let’s say you want to start an SEO agency that helps businesses rank higher on search engines. Here’s the step-by-step breakdown:

                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-200 mb-3">Webdone AI Builder – Create Unique Landing Pages in Minutes</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Tired of the same old templates? Webodone AI Builder takes a different approach. Instead of giving pre-made layouts, it analyzes your prompt and builds a fresh, one-of-a-kind landing page in just 7 minutes (sometimes longer, depending on execution time and GPU)

                </p>
              </div>




              {/* AI Builder Section */}
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <span className="text-lg font-semibold text-gray-200">Webdone AI Builder</span>
                  <span className="ml-2 px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
                    Start
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  Tired of the same old templates? AI Builder analyzes your prompt and creates
                  fresh, unique landing pages in just 7 minutes.
                </p>

                {/* Steps */}
                <div className="space-y-4">
  <div className="flex items-center space-x-3 text-gray-300 text-sm">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
    <span>
      Describe what you need: A modern landing page for an SEO agency that helps businesses rank higher on search engines in a futuristic style. Once you enter the prompt, Neural AI analyzes it. Using a structured approach, it processes and runs through an optimized algorithm to generate over <strong>240,000 unique tokens</strong> in one go, ensuring a <strong>stylish and innovative layout</strong>.
    </span>
  </div>
  
  <div className="flex items-center space-x-3 text-gray-300 text-sm">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
    <span>AI generates a completely unique page—no premade templates, no recycled layouts.</span>
  </div>

  <div className="flex items-center space-x-3 text-gray-300 text-sm">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
    <span>Edit fonts, colors, images, themes, and more.</span>
  </div>

  <div className="flex items-center space-x-3 text-gray-300 text-sm">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">4</span>
    <span>Download the source code in TSX or JSX and use it however you like.</span>
  </div>

  <div className="flex items-center space-x-3 text-gray-300 text-sm">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">5</span>
    <span>
      <strong>Model Architecture:</strong> Transformer-based design with self-attention mechanisms to efficiently process large sequences. Parallelization with optimized models LLM, leveraging multiple GPUs or TPUs. Sparse Attention & Mixture of Experts (MoE) to reduce compute costs while maintaining accuracy.
    </span>
  </div>

  <div className="flex items-center space-x-3 text-gray-300 text-sm">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">6</span>
    <span>
      <strong>Algorithmic Optimizations:</strong> Implements beam search, top-k sampling, and nucleus sampling for high-quality text generation. <strong>Generates 240K unique tokens</strong> while maintaining a <strong>stylish, well-structured layout</strong>. KV Cache (Key-Value Cache) avoids recomputation of past tokens, drastically improving inference speed. Speculative Decoding predicts multiple tokens at once and verifies correctness in parallel, ensuring efficient and high-speed output.
    </span>
  </div>

  <div className="flex items-center space-x-3 text-gray-300 text-sm">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">7</span>
    <span>
      <strong>Hardware Acceleration:</strong> Uses GPUs (NVIDIA H100, A100) or TPUs (v5e, v4) for tensor-based computations. Low-Rank Adaptation (LoRA) & Quantization reduce memory overhead while maintaining model accuracy. Memory Offloading & Flash Attention manage large token sequences efficiently without bottlenecks.
    </span>
  </div>
</div>

              </div>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-200 mb-3">Once Build Landing Page  Set Up Payments, Database & Authentication </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Once your page is ready, the next step is setting up the backend—payments, authentication, database, and other core functionalities. This is where Next.js comes in which includes:

                </p>
              </div>
              <div className="space-y-4">


                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
                  <span>✅ Payments (Stripe, Lemon Squeezy, etc.)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>✅ Database  (Mongodb and Supbase.)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>✅ Login & signup with (Mongodb and Supbase.)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>✅ Google authentication & email sign-up</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>✅Resend Notification Sending </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>✅ SEO optimization page</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>✅ Auth (Github & Google)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                  <span>✅ Google Analytics integration</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
                  <span>Download the source code in TypeScript or JavaScript and use it however you like.</span>
                </div>

              </div>


            </div>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-200 mb-3">Webdone AI Builder – Create Unique Landing Pages in Minutes</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                After Downloading the source code Setup  Nextjs js open the File Click it zip file open in VS code or you based ai editor  and just enter Npm Install  after installed  Add the landing page source code just copy and past in app.tsx and Add Env.local in root directory Add  ALL database  follow the above and no hours left

              </p>
            </div>
            <div className="space-y-4">


              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
                <span>Open the ZIP file in VS Code or any AI-based editor.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Run npm install to install dependencies.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Copy the landing page code into app.tsx..</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Add a .env.local file in the root directory and configure the database.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Run npm run dev</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Copy the Url and past into browser </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
               You Will see  your Wep-App is now live 

              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-gray-100 relative">
      {/* Decorative background pattern */}


      {/* Header */}
      <header className="px-4 py-3 backdrop-blur-sm bg-black/40 border-b border-gray-800/50 flex justify-between items-center sticky  z-50">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
              <Logo />
            </div>
            <div className="text-xl font-semibold tracking-tight text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300 font-['Inter']">
              Web<span className="text-indigo-400">done</span>
            </div>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Docs
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <input
              type="search"
              placeholder="Search or ask..."
              className="px-4 py-2 bg-gray-800/50 text-gray-200 rounded-lg border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 w-64 backdrop-blur-sm"
            />
          
          </div>
          <a href="/signup">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-gray-200 font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
              Get Started
            </button>
          </a>
          <button className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
            webdone ▼
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 backdrop-blur-sm bg-black/40 border-r border-gray-800/50 h-[calc(100vh-73px)] sticky top-[73px] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            <div>
              <h3 className="text-xs font-medium mb-2 flex items-center text-blue-400">
                <span className="mr-2">🚀</span> Get Started
              </h3>
              <ul className="space-y-1 pl-4 text-sm">
                <li
                  className={`text-gray-400 hover:text-gray-200 transition-colors duration-200 cursor-pointer ${activeSection === 'intro' ? 'text-gray-200 font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('intro')}
                >
                  Introducing webdone
                </li>
                <li
                  className={`text-gray-400 hover:text-gray-200 transition-colors duration-200 cursor-pointer ${activeSection === 'quickstart' ? 'text-gray-200 font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('googleanylytics')}
                >
           Google Anylytics
                </li>
                <li
                  className={`text-gray-400 hover:text-gray-200 transition-colors duration-200 cursor-pointer ${activeSection === 'mongodb' ? 'text-gray-200 font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('mongodb')}
                >
                  MongoDB Integration
                </li>
                <li
                  className={`text-gray-400 hover:text-gray-200 transition-colors duration-200 cursor-pointer ${activeSection === 'stripe' ? 'text-gray-200 font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('stripe')}
                >
                  Stripe Implementation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-purple-400 font-medium mb-3 flex items-center">
                <span className="mr-2">🔧</span> Core Setup
              </h3>
              <ul className="space-y-2 pl-6">
                <li
                  className={`text-gray-400 hover:text-gray-200 transition-colors duration-200 cursor-pointer ${activeSection === 'google-auth' ? 'text-gray-200 font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('google-auth')}
                >
                  Google Authentication
                </li>
                <li
                  className={`text-gray-400 hover:text-gray-200 transition-colors duration-200 cursor-pointer ${activeSection === 'email-setup' ? 'text-gray-200 font-medium relative before:absolute before:w-1 before:h-full before:bg-blue-500 before:-left-3 before:rounded-r' : ''}`}
                  onClick={() => setActiveSection('email-setup')}
                >
                  Email Notifications
                </li>


              </ul>
            </div>


          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-8 py-6">
          {renderContent()}
        </main>

        {/* Table of Contents */}

      </div>
    </div>
  );
};

export default Introducingwebdone;
