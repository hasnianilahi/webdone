'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

const StripeSetup = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>
      
      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Integration Guide
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      Setting Up Stripe and Lemon Squeezy for Payments
      </h1>
      
      <div className="space-y-8">
        {/* Stripe Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/stripelogo.png"
            alt="Stripe Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
       
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200">Setting Up Stripe Payments</span>
            <span className="ml-2 px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
     Stripe
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
          Easily integrate Stripe to accept payments seamlessly. Whether you&apos;re selling products, subscriptions, or services, Stripe provides a secure and scalable solution.
          </p>

          {/* Steps */}
          <div className="space-y-4">


            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">1</span>
              <span>Visit Stripe and sign up.</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Complete the verification and business setup.</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
              <span>Go to Developers  API Keys to find your Publishable Key and Secret Key.</span>
            </div>
          

          </div>

        </div>
        

        {/* Implementation */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200">Get Your API Keys</span>
            <span className="ml-2 px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
              Stripe
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            To securely process payments, you&apos;ll need three different types of API keys from Stripe. Here&apos;s a detailed guide on how to get and use each one:
          </p>

          <div className="space-y-6">
            {/* Publishable Key */}
            <div className="border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Publishable Key (pk_*)</h3>
              <p className="text-sm text-gray-300 mb-3">Used on the frontend to initialize Stripe and identify your account. Safe to expose in client-side code.</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Go to Stripe Dashboard → Developers → API Keys</p>
                <p>• Look for the key starting with &apos;pk_test_&apos; (test mode) or &apos;pk_live_&apos; (live mode)</p>
       
              </div>
            </div>

            {/* Secret Key */}
            <div className="border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Secret Key (sk_*)</h3>
              <p className="text-sm text-gray-300 mb-3">Used on the backend to authenticate API requests. Must be kept secure and never exposed to clients.</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Found in Stripe Dashboard → Developers → API Keys</p>
                <p>• Starts with &apos;test_&apos; or &apos;live_&apos;</p>
                <p>• Used in your API routes or server-side code</p>
                <p>• ⚠️ Never expose this key in frontend code or public repositories</p>
              </div>
            </div>

            {/* Webhook Secret */}
            <div className="border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Webhook Secret (whsec_*)</h3>
              <p className="text-sm text-gray-300 mb-3">Used to verify webhook events from Stripe. Essential for handling payment confirmations and other events.</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Go to Developers → Webhooks → Add Endpoint</p>
                <p>• Enter your webhook URL (e.g., https://your-domain.com/api/stripe/webhook)</p>
                <p>• Select events to listen for (e.g., payment_intent.succeeded)</p>
                <p>• Copy the Signing Secret provided</p>
              </div>
            </div>

            {/* Environment Setup */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Setting Up Environment Variables</h3>
              <p className="text-sm text-gray-400 mb-3">Add these to your .env.local file:</p>
              <code className="block p-4 bg-gray-900/50 rounded text-sm text-purple-400 whitespace-pre">
{`STRIPE_PUBLIC_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret`}
              </code>
              <p className="text-sm text-gray-400 mt-3">
                Remember to update these keys when moving to production, replacing test keys with live keys.
              </p>
            </div>
          </div>
        </div>

        {/* Testing */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Testing</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Use Stripe&apos;s test card numbers (e.g., 4242 4242 4242 4242)</li>
            <li>• Verify successful payment flow in Stripe Dashboard</li>
          </ul>
        </section>
        Switch API keys from test mode to live mode in Stripe Dashboard. And run npm run dev 
      </div>

      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Integration Guide
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
   Setting Up Lemon Squeezy Payments

      </h1>
      
      {/* Lemon Squeezy Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/lemon-squezy-logo.jpeg"
          alt="Lemon Squeezy Logo"
          width={100}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="space-y-8">
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold text-gray-200">Setting Up Lemon Squeezy Payments</span>
            <span className="ml-2 px-2 py-1 text-xs bg-yellow-500/10 text-yellow-400 rounded-full">
              Setup
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Lemon Squeezy is a modern alternative to Stripe, specifically designed for digital products and subscriptions. Here&apos;s how to set it up:
          </p>

          <div className="space-y-6">
            {/* Account Setup */}
            <div className="border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">1. Create Your Store</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Sign up at lemonsqueezy.com</p>
                <p>• Create a new store from the dashboard</p>
                <p>• Complete your store profile and branding</p>
                <p>• Add payment methods (Stripe Connect will be set up automatically)</p>
              </div>
            </div>

            {/* Product Setup */}
            <div className="border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">2. Create Products</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Go to Products → Add Product</p>
                <p>• Choose product type (One-time, Subscription, or License)</p>
                <p>• Set up pricing, variants, and download files if applicable</p>
                <p>• Configure product options and checkout settings</p>
              </div>
            </div>

            {/* API Integration */}
            <div className="border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">3. API Setup</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Navigate to Settings → API & Webhooks</p>
                <p>• Generate a new API key</p>
                <p>• Copy your Store ID from the dashboard</p>
                <p>• Set up webhook endpoints for order notifications</p>
              </div>
            </div>

            {/* Environment Variables */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">4. Environment Setup</h3>
              <p className="text-sm text-gray-400 mb-3">Add to your .env.local:</p>
              <code className="block p-4 bg-gray-900/50 rounded text-sm text-purple-400 whitespace-pre">
{`LEMON_API_KEY=your_api_key_here
LEMON_STORE_ID=your_store_id
LEMON_WEBHOOK_SECRET=your_webhook_secret`}
              </code>
            </div>

            {/* Usage Example */}
            
          </div>
        </div>

        {/* Testing Section */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">Testing Your Integration</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Test Mode is automatically enabled in development</li>
            <li>• Use test card: 4242 4242 4242 4242</li>
            <li>• Any future date for expiry</li>
            <li>• Any 3 digits for CVC</li>
            <li>• Monitor webhooks in your dashboard</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StripeSetup;
