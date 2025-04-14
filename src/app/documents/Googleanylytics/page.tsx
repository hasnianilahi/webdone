'use client'
import React from "react";
import Link from "next/link";

const Googleanylytics = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>

      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Getting Started
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Quickstart Guide
      </h1>

      <div className="space-y-8">
        {/* Project Setup */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200">Initial Google Analytics Setup</span>
            <span className="ml-2 px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
              Setup
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Follow these steps to set up Google Analytics for your website and start tracking visitor data.
          </p>

          {/* Steps */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
              <span>Visit analytics.google.com and sign in with your Google account</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Click Start Measuring to begin the setup process</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
              <span>Create an account with your business name and select your industry</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">4</span>
              <span>Set up a property and choose your timezone and currency</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">5</span>
              <span>Add your business details and accept the analytics terms</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200">Implementation Steps</span>
            <span className="ml-2 px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
              Integration
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Once you have your tracking ID, follow these steps to implement Google Analytics in your Next.js application.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
              <span>In Next js has  GoogleAnalytics.tsx components  and paste the code  GTM-XXXXXX ID.</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
              <span>Set your Measurement ID in your environment variables</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm"></div>
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
            <span>Once you added wait for few minutes and after its start fetching the events</span>
          </div>

          <code className="block p-4 bg-gray-800/50 rounded-lg text-sm text-gray-300 mt-4">
            {`# .env.local\nGA_MEASUREMENT_ID=G-XXXXXXXXXX`}
          </code>
        </div>
      </div>

      {/* Installation */}
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <span className="text-lg font-semibold text-gray-200">Using Google Tag Manager (Recommended)</span>
          <span className="ml-2 px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
            GTM Setup
          </span>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Google Tag Manager (GTM) provides a more flexible way to manage analytics and other marketing tags. Here&apos;s how to set it up:
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-300 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
            <span>Visit tagmanager.google.com and create a new account</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
            <span>Set up a new container for your website (Web)</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
            <span>Get your GTM container ID (format: GTM-XXXXXX)</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">4</span>
            <span>Add Google Analytics 4 tag in GTM</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">5</span>
            <span>Add GA4 Configuration Tag in GTM:</span>
          </div>
          <ul className="ml-12 list-disc text-gray-300 text-sm space-y-2">
            <li>Click Add a New Tag</li>
            <li>Choose Google Analytics: GA4 Configuration</li>
            <li>Enter your Measurement ID (G-XXXXXXXXXX)</li>
            <li>Set trigger to All Pages</li>
          </ul>

          <div className="mt-4 p-4 bg-blue-500/10 rounded-lg">
            <h4 className="text-blue-400 font-medium mb-2">Pro Tip</h4>
            <p className="text-sm text-gray-300">
              Use GTM&apos;s Preview mode to test your implementation before publishing. This ensures all tags are firing correctly on your website.
            </p>
          </div>
        </div>
      </div>


      {/* Next Steps */}
      <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• Set up <Link href="/documents/mongodb-setup" className="text-blue-400 hover:text-blue-300">MongoDB Integration</Link></li>
          <li>• Configure <Link href="/documents/stripe-setup" className="text-blue-400 hover:text-blue-300">Stripe Payments</Link></li>
          <li>• Implement <Link href="/documents/google-auth" className="text-blue-400 hover:text-blue-300">Google Authentication</Link></li>
          <li>• Set up <Link href="/documents/email-setup" className="text-blue-400 hover:text-blue-300">Email Notifications</Link></li>
        </ul>
      </section>
    </div>


  );
};

export default Googleanylytics;
