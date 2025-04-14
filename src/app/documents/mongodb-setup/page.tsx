'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
const MongoDBSetup = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>

      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Database Setup
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        MongoDB Integration Guide
      </h1>
      <p className="text-sm text-gray-400 mb-6">
          To store user transactions, order details, and customer data efficiently, you can set up MongoDB, a NoSQL database known for scalability and flexibility.
          </p>
           <div className="flex justify-center mb-8">
                    <Image
                      src="/Mongodb.png"
                      alt="Stripe Logo"
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>

      <div className="space-y-8">
        
        {/* Prerequisites */}
       
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200">Get a MongoDB Connection URL and Set Up a Database</span>
            <span className="ml-2 px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
Mongodb
            </span>
          </div>
       
          {/* Steps */}
          <div className="space-y-4">


            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
              <span>Go to MongoDB Atlas and sign up (or log in if you already have an account https://www.mongodb.com/).</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Click &apos;Create a Cluster&apos; and choose the free tier (Shared).</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Select a cloud provider and region (closest to your users).</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
              <span>Click &apos;Create Cluster&apos; (it may take a few minutes to set up).</span>
            </div>

          </div>

        </div>
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <h1 className="text-lg font-semibold text-gray-200">Create a Database & Collection</h1>
            <div className="space-y-4">


              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
                <span>In the MongoDB Atlas Dashboard, go to Database Browse Collections.
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Click &apos;Add My Own Data&apos; and enter a Database Name and Collection Name (e.g., your product name ).</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Click Create.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">3</span>
                <span>Click &apos;Create Cluster&apos; (it may take a few minutes to set up).</span>
              </div>

            </div>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <span className="text-lg font-semibold text-gray-200">Get Your Connection URL</span>
          <div className="space-y-4">


            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
              <span>Go to Database  Connect and choose &apos;Connect your application&apos;.


              </span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Select &apos;Node.js&apos; as the driver and choose the latest version.</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Copy the provided connection string, which will look like this:</span>
            </div>
            <code className="text-purple-400">
              MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
            </code>


          </div>

        </div>
        <div>
          Replace
          Username Your MongoDB username
          Password → Your MongoDB password
          Dbname → Your database name
        </div>

        {/* Installation */}


        {/* MongoDB Atlas Setup */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">4. Store It in Your .env.local File</h2>
          <ol className="space-y-4 text-gray-300">
            <li>Add inside  .env.local file in your Next.js project root </li>
            <li>MONGODB_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/yourDatabase?retryWrites=true&w=majority
            </li>
            <li>Configure network access (IP whitelist)</li>
            <li>Get your connection string</li>
          </ol>
        </section>

        {/* Configuration */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Test the API</h2>
          <div className="space-y-4">
            <p className="text-gray-300">      Now MongoDB is fully set up and ready to use in your Next.js project! 🚀</p>

            <p className="text-gray-300">npm run dev</p>

          </div>
        </section>

        {/* Supabase Setup Section */}
        <div className="mt-16">
          <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 font-medium text-sm mb-4">
            Alternative Database
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Supabase Integration Guide
          </h2>
          
          <div className="flex justify-center mb-8">
            <Image
              src="/supabase-logo.png"
              alt="Supabase Logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>

          <div className="space-y-8">
            {/* Supabase Setup Steps */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <span className="text-lg font-semibold text-gray-200">Setting Up Supabase Project</span>
                <span className="ml-2 px-2 py-1 text-xs bg-green-500/10 text-green-400 rounded-full">
                  Setup
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">1</span>
                  <span>Visit supabase.com and sign up for an account</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">2</span>
                  <span>Click New Project and choose your organization</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">3</span>
                  <span>Set up your database password and choose a region</span>
                </div>
              </div>
            </div>

            {/* Configuration */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <span className="text-lg font-semibold text-gray-200">Project Configuration</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">1</span>
                  <span>Go to Project Settings → API to find your credentials</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">2</span>
                  <span>Copy your Project URL and anon/public API key</span>
                </div>
                
                <code className="block p-4 bg-gray-800/50 rounded-lg text-sm text-gray-300 mt-4">
                  {`# .env.local
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key`}
                </code>
              </div>
            </div>

            {/* Installation */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <span className="text-lg font-semibold text-gray-200">Upcoming</span>
              </div>
              
          
            </div>

            {/* Usage Example */}
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default MongoDBSetup;
