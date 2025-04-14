'use client'
import React from "react";
import Link from "next/link";

const EmailSetup = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>
      
      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Quick Setup Guide
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Setting Up Email Notifications 📧
      </h1>
      
      <div className="space-y-8">
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200">Setting Up Resend Email Service</span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Get started with Resend to send transactional emails from your application. 
            Follow these simple steps to set up your email service.
          </p>

          {/* Steps */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
              <span>Go to Resend.com and create an account</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Navigate to API Keys in the dashboard</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
              <span>Generate and copy your API key</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">4</span>
              <span>Add the API key to your environment variables</span>
            </div>

            <code className="text-purple-400 block p-4 bg-gray-800/50 rounded-lg">
              RESEND_API_KEY=re_123456789
            </code>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200"> Deploying and Going Live</span>
           
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Tired of the same old templates? AI Builder analyzes your prompt and creates
            fresh, unique landing pages in just 7 minutes.
          </p>

          {/* Steps */}
          <div className="space-y-4">


            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
              <span>Go to Resend Dashboard Domains.</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Click Add Domain and enter your custom domain.</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Add the DNS records shown (SPF, DKIM, and DMARC).</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
              <span>Once verified, use yourdomain.com as the sender.</span>
            

            </div>

          </div>

        </div>
      

        {/* Help Section */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">🤔 Need Help?</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Check out the <a href="https://resend.com/docs" className="text-blue-400 hover:underline">Resend docs or drop a message support@webd.one</a></li>

          </ul>
        </section>
      </div>
    </div>
  );
};

export default EmailSetup;
