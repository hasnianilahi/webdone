'use client';
import { FaReact } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CheckCircle, DollarSign, XCircle, HelpCircle, X } from 'lucide-react';
import { Inter, Outfit } from 'next/font/google';
import PricingHero from '@/app/UI/pricingHero/page'
import Testaminol from '@/app/UI/testaminol/page'

const outfit = Outfit({ subsets: ['latin'] });

const PricingUI = () => {
  const [isYearly, setIsYearly] = useState(true);
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Add this to handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const togglePricing = () => {
    setIsYearly((prevState) => !prevState);
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await fetch('/api/users/me');
        const data = await res.json();
        setUserId(data.data._id);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    getUserDetails();
  }, []);

  const handleBuy = async (priceId: string) => {
    if (!userId) {
      router.push('/login');
      return;
    }

    if (!priceId) {
      toast.error('Invalid product selection');
      return;
    }

    setLoadingPlanId(priceId);

    try {
      const response = await fetch('/api/users/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId, userId }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      toast.error('Failed to initiate purchase. Please try again.');
      setLoadingPlanId(null);
    }
  };

  const plans = [
    {
      title: 'Starter',
      price: isYearly ? '14/mo' : '18/mo',
      originalPrice: isYearly ? '19/mo' : '27/mo',
      description: isYearly ? 'Perfect for those getting started. Get 20% off with yearly billing—just $172/year!' : '',
      features: [
        { feature: 'Up to 4-Page ', tooltip: 'Create up to 4 pages /site' },
        {
          feature: 'Drag-and-Drop Builder',
          tooltip: 'Easily change fonts, background colors, images, and more with intuitive drag-and-drop functionality.'
        },
        {
          feature: 'SEO-Optimized Pages',
          tooltip: 'Web pages built to rank higher on google.'
        },
        {
          feature: 'Export Source Code',
          tooltip: 'Download source code in typescript&javascript '
        },
        { feature: 'web page AI them ', tooltip: 'A theme designed to make the background more stunning ' },
        { feature: 'Email Support (support@webd.one)', tooltip: 'Get help via email at support@webd.one' },
        { feature: 'Access 200 Premium Request/month ', tooltip: 'Receive  200 AI model (Claude Sonnet) requests, add more additional feature Build landing page based your choice and  your needs.  ' },
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STANDARD_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STANDARD_MONTHLY_PRICE_ID,
    },
    {
      title: 'Pro',
      price: isYearly ? '31/mo' : '39/mo',
      originalPrice: isYearly ? '49/mo' : '57/mo',
      description: isYearly ? 'Save more while you build! Get an annual plan for just $374/year with 20% off' : '',
      isPopular: true,
      features: [
        { feature: 'Up to 10-Page', tooltip: 'Create up to 10  pages /site ' },
        {
          feature: 'Drag-and-Drop Builder',
          tooltip: 'Easily change fonts, background colors, images, and more with intuitive drag-and-drop functionality.'
        },
        {
          feature: 'Export Source Code',
          tooltip: 'Download source code in typescript&javascript '
        },
        {
          feature: 'SEO-Optimized Pages',
          tooltip: 'Web pages built to rank higher on google.'
        },
        { feature: 'Web page AI them ', tooltip: 'A theme designed to make the background more stunning  ' },
        { feature: '24/7 customer support', included: false },
        { feature: 'Access Unlimited Premium Request/month ', tooltip: 'Receive unlimited  AI model (Claude Sonnet) requests,  ' },

      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_CREATOR_PRO_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_CREATOR_PRO_MONTHLY_PRICE_ID,
    },
    {
      title: 'Next-js  + Starter',
      price: isYearly ? '294' : '294',
      originalPrice: isYearly ? '399' : '399',
      description: isYearly ? ' Complete Next.js  Everything You Need in One Package' : '',
      features: [
       
        {
          feature: 'Google Analytics',
          tooltip: 'Track click,view live event'
        },
        {
          feature: 'SEO Boost',
          tooltip: 'Everythings set for  rank higher on Google '
        },

        {
          feature: 'Stripe/Lemonsquezy',
          tooltip: 'Accept payments easily with pre-configured Stripe and Lemon Squeezy - no complex setup needed!'
        },
        {
          feature: 'Mailtrip/Resend ',
          tooltip: 'Built-in email functionality using Mailtrip and Resend - perfect for user notifications and marketing'
        },
        {
          feature: 'Google /GitHub',
          tooltip: 'Let your users sign in with their Google or GitHub accounts - secure and hassle-free'
        },
        {
          feature: 'Lifetime Updates',
          tooltip: 'Get all future improvements and new features at no extra cost - your framework keeps getting better'
        },
 

        {
          feature: 'Supabase/MongoDB ',
          tooltip: 'Choose between Supabase or MongoDB - both configured and ready for your data needs'
        },

        {
          feature: 'Typescript/javascript',
          tooltip: 'Next.js with TypeScript and javascript  built-in, so you can write  scalable code without the hassle'
        },
        'Export Source Code'
      ],
      priceId: isYearly
        ? process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PREMIUM_YEARLY_PRICE_ID
        : process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PREMIUM_MONTHLY_PRICE_ID,
    },

  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 py-20">
        <PricingHero />
        {/* Modern Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-400 text-lg">
            Choose the perfect plan for your needs witt simple pricing options
          </p>

          {/* Enhanced Toggle */}
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full p-1.5 mt-8 border border-gray-700/50">
            <button
              onClick={togglePricing}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isYearly
                ? 'bg-blue-500/90 shadow-lg shadow-blue-500/20 text-white'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Yearly
              {isYearly && <span className="ml-2 text-xs bg-blue-400/20 px-2 py-0.5 rounded-full">Save 20%</span>}
            </button>
            <button
              onClick={togglePricing}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${!isYearly
                ? 'bg-blue-500/90 shadow-lg shadow-blue-500/20 text-white'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Monthly
            </button>
          </div>

          {/* Moved and Redesigned Launch Offer Banner */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/20 to-purple-600/20 blur-xl"></div>
            <div className="relative bg-gradient-to-r from-indigo-600/10 via-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="animate-bounce text-2xl"></span>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Special Offer</h3>
                    <p className="text-sm text-gray-300">Join now and enjoy a limited-time discount</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-px bg-white/20"></div>
                  <div className="text-center">
                    <span className="text-sm text-gray-300">Use code</span>
                    <code className="block font-mono text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                      WEBDONE
                    </code>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div className="text-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                      20% OFF
                    </span>
                    <p className="text-sm text-gray-300">on all plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx}
              className={`relative group transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1
                bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                rounded-2xl p-8 border border-gray-800/50
                ${plan.isPopular ? 'ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20' : ''}
              `}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-medium px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    ${plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                {/* Feature list with fixed tooltips */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300 flex items-center gap-2">
                        {typeof feature === 'string' ? feature : feature.feature.replace(' NEW', '')}
                        {typeof feature !== 'string' && feature.feature.includes('NEW') && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            NEW
                          </span>
                        )}
                      </span>
                      {typeof feature !== 'string' && feature.tooltip && (
                        <div className="group/tooltip relative inline-block">
                          <HelpCircle className="w-4 h-4 text-gray-500 hover:text-gray-400 cursor-help" />
                          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 
                                        opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible 
                                        transition-all duration-200 z-[60] pointer-events-none">
                            <div className="relative bg-gray-900 text-gray-300 text-sm rounded-lg p-4 
                                          shadow-xl border border-gray-700">
                              {feature.tooltip}
                              <div className="absolute w-3 h-3 bg-gray-900 border-gray-700 
                                            border-r border-b transform rotate-45 
                                            -bottom-1.5 left-1/2 -translate-x-1/2">
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleBuy(plan.priceId!)}
                  disabled={loadingPlanId === plan.priceId}
                  className={`w-full py-2.5 rounded-lg font-medium transition-colors ${plan.isPopular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                    }`}
                >
                  {loadingPlanId === plan.priceId ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    'Get started'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Detailed Feature Comparison Section */}

        <Testaminol />
        {/* Enhanced Trust Badges Section */}
        <div className="mt-24  pt-14 ">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Trusted by Maker Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-7xl mx-auto px-6">
            <div className="space-y-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-violet-400 flex justify-center">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Secure Payments</h3>
              <p className="text-sm text-gray-400">Enterprise-grade security with 256-bit SSL encryption</p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-violet-400 flex justify-center">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Lightning Fast</h3>
              <p className="text-sm text-gray-400">Fast, smooth, and seamless—response times under a second!</p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-violet-400 flex justify-center">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">100% Reliable</h3>
              <p className="text-sm text-gray-400">Your business runs non-stop</p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-violet-400 flex justify-center">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">24/7 Support</h3>
              <p className="text-sm text-gray-400">Have questions about your business project? Reach out at support@webd.one. </p>
            </div>
          </div>

          {/* Additional Trust Elements */}
          

          {/* Certification Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-xl">
              <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-white text-sm font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-xl">
              <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-xl">
              <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              <span className="text-white text-sm font-medium">SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingUI;
