'use client'
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { 
  Mail, CreditCard, User, Database, 
  FileText, Paintbrush, MoreHorizontal, CheckCircle, Menu, X
} from 'lucide-react';

interface SideNavItemProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

interface FeatureContentProps {
  feature: string;
  details: string[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface TechItem {
  name: string;
  logo: string;
}

interface FeatureTechStack {
  [key: string]: TechItem[];
}

type FeatureType = {
  [key in 'Emails' | 'Payments Gateway' | 'Login' | 'Database' | 'SEO' | 'Style' | 'More' | 'Auth']: string[];
}

type IconType = {
  [key in keyof FeatureType]: LucideIcon;
}

const SideNavItem = ({ icon: Icon, title, isActive, onClick }: SideNavItemProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all
      ${isActive 
        ? 'bg-gradient-to-r from-green-900/50 to-green-800/50 text-green-400 shadow-sm' 
        : 'hover:bg-gray-800/50 text-gray-400 hover:text-gray-200'}`}
  >
    <Icon className={`w-5 h-5 ${isActive ? 'text-green-400' : 'text-gray-500'}`} />
    <span className="font-medium">{title}</span>
  </button>
);

const MobileNav = ({ isOpen, onClose, children }: MobileNavProps) => (
  <div className={`
    fixed inset-0 bg-white/80 backdrop-blur-sm z-50 lg:hidden
    transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `}>
    <div className={`
      absolute inset-y-0 left-0 w-80 bg-white shadow-2xl transform transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-900">Features</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-lg">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  </div>
);

const TechStack = ({ items }: { items: TechItem[] }) => (
  <div className="mt-8 border-t border-gray-100 pt-6">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-sm font-medium text-gray-700">Built with:</span>
      <span className="px-2 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-medium">
        {items.length} Technologies
      </span>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="group relative bg-gray-50 p-3 rounded-xl border border-gray-100 
            hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/20 
            transition-all duration-300"
        >
          <div className="w-12 h-12 mx-auto relative mb-3 rounded-lg overflow-hidden">
            <img
              src={tech.logo}
              alt={tech.name}
              className="object-contain w-full h-full transform group-hover:scale-110 
                transition-transform duration-300"
            />
          </div>
          <p className="text-xs text-center font-medium text-gray-600 group-hover:text-violet-600">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const FeatureContent = ({ feature, details }: FeatureContentProps) => {
  const techStacks: FeatureTechStack = {
    'Emails': [
      { name: "Resend", logo: "/resend-logo.png" },

    ],
    'Payments Gateway': [
      { name: "Stripe", logo: "/stripelogo.png" },
      { name: "LemonSqueezy", logo: "/lemon-squezy-logo.jpeg" },
    ],
    'Login': [
      { name: "Next.js", logo: "/Nextjs.png" },
      { name: "Google Auth", logo: "/google-logo.jpeg" },
    ],
    'Database': [
      { name: "MongoDB", logo: "/Mongodb.png" },
    ],
    'Auth': [
      { name: "Google Auth", logo: "/google-logo.jpeg" },
      { name: "GitHub Auth", logo: "/GitHub-Logo-webdone.jpeg" },
  
    ],
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-100">
            {feature}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Everything you need to implement {feature.toLowerCase()}
          </p>
        </div>

        <div className="grid gap-4">
          {details.map((detail: string, index: number) => (
            <div 
              key={index}
              className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-700 
                hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300"
            >
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">{detail}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full 
                      text-xs font-medium bg-green-900/50 text-green-400">
                      Ready to use
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {techStacks[feature] && <TechStack items={techStacks[feature]} />}

      <div className="mt-8 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg 
        border border-green-800/50">
        <p className="text-sm text-gray-300">
          Need help with {feature.toLowerCase()}?{' '}
          <a href="/documents" className="text-green-400 hover:text-green-300 hover:underline">View documentation →</a>
        </p>
      </div>
    </div>
  );
};

const DashboardLayout = () => {
  const [activeFeature, setActiveFeature] = useState<keyof FeatureType>('Emails');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const features: FeatureType = {
    'Auth': [
      'Social login with Google',
      'GitHub OAuth integration',
     
    ],
    'Emails': [
      'Send OTP emails for authentication and verification',
      'Very user ',
  
    ],
    'Payments Gateway': [
      'Process payments ALL in one Database',
      'Handle subscriptions',
      'Manage refunds',
      'Monthly /Yearly subcription management'
    ],
    'Login': [
      'User authentication',
      'Password reset flow',
      
    ],
    'Database': [
      'Store data ',
      'Subscription and authentication data storage',
      'Easy scaling'
    ],
    'SEO': [
      'Meta tags optimization',
      'Sitemap generation',
      'Schema markup',
        'H1 ,H2 Tittle'
    ],
    'Style': [
      'Create page with AI ',
      'AI themes',
      'Fonts styling',
      'Creative Layout ',
      'AI Builder '
    ],
    'More': [
      'Future updates',
      'Performance Imporving'
    ]
  };

  const icons: IconType = {
    'Auth': User,
    'Emails': Mail,
    'Payments Gateway': CreditCard,
    'Login': User,
    'Database': Database,
    'SEO': FileText,
    'Style': Paintbrush,
    'More': MoreHorizontal
  };

  return (
    <div className="relative bg-gray-900 min-h-screen">
      {/* Hero Section */}
    

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto p-3 sm:p-4 lg:p-8">
        {/* Mobile Nav Toggle */}
        <button 
          onClick={() => setIsMobileNavOpen(true)}
          className="lg:hidden mb-4 p-2 hover:bg-gray-800 rounded-lg border border-gray-700"
        >
          <Menu className="w-5 h-5 text-gray-400" />
        </button>

        {/* Mobile Navigation Drawer */}
        <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)}>
          <div className="space-y-1">
            {Object.keys(features).map((feature) => (
              <SideNavItem
                key={feature}
                icon={icons[feature as keyof IconType]}
                title={feature}
                isActive={activeFeature === feature}
                onClick={() => {
                  setActiveFeature(feature as keyof FeatureType);
                  setIsMobileNavOpen(false);
                }}
              />
            ))}
          </div>
        </MobileNav>

        <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden 
          shadow-xl shadow-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-700">
            {/* Side Navigation - Desktop */}
            <div className="hidden lg:block lg:col-span-3 p-6 bg-gray-800/50">
              <div className="space-y-1 sticky top-6">
                {Object.keys(features).map((feature) => (
                  <SideNavItem
                    key={feature}
                    icon={icons[feature as keyof IconType]}
                    title={feature}
                    isActive={activeFeature === feature}
                    onClick={() => setActiveFeature(feature as keyof FeatureType)}
                  />
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 p-4 sm:p-6 lg:p-8 bg-gray-800">
              <FeatureContent 
                feature={activeFeature} 
                details={features[activeFeature]} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
