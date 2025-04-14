import React from 'react';
import { Facebook, X, Linkedin, Youtube, Instagram, Globe, Mail, Phone, ChevronRight, Heart } from 'lucide-react';
import Logo from '@/app/UI/logo/page';
import Link from 'next/link';
import Baner from '@/app/UI/baner/page'
import Head from 'next/head';


const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1A1A1A] mt-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 py-16">
              <Head>
        {/* Newsletter Section */}
  <title>Webdone (webd.one)Create Landing Pages & Websites with AI </title>
                <meta name="description" content="Webdone (webd.one)Transform your ideas into stunning landing pages and websites instantly with AI-powered design tools. No coding required. Start creating with webdone today." />
                <meta name="keywords" content="Webdone (webd.one)AI website builder, landing page creator,webdone, react landing page builder,next js landing page,AI web design, no-code website builder, webdone, AI landing page generator, website design AI,React landing page ai,webdone,react landing page builder,drag and drop page building for react,Launch your startup in hours,generate landing page with ai,landing page ai builder,landing page builder ai" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Webdone (webd.one) Create Landing Pages & Websites with AI |Ship your startup in time with webdone" />
                <meta property="og:description" content="Webdone (webd.one) Create beautiful, conversion-focused landing pages instantly with AI. No coding needed And Ship your startup in time with webdone" />
                <meta property="og:image" content="https://www.webd.one/logo.png" />
                <meta property="og:url" content="https://www.webd.one" />
                <meta property="og:type" content="website" />
                            </Head>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 transform hover:scale-105 transition-transform">
                <Logo />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300 font-['Inter']">
                Webdone
              </h1>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
support@webd.one
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Mail size={20} />, href: "mailto:support@webd.one" },
               
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#0A0A0A]/5 flex items-center justify-center 
                           hover:bg-[#0A0A0A]/10 transition-colors duration-200 text-gray-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>


          {[
            {
              title: "Product",
              links: [

                { name: "Next js  Complete setup", href: "/signup" },

                { name: "Ai Landing page builder", href: "/signup" },
                { name: "Drag and Drop Builder", href: "/signup" },
                { name: "landing page Theme", href: "/signup" },

                { name: "Documentation", href: "/documents" },
                { name: "AI Builder", href: "/signup" },

              ]
            },
            {
              title: "Company",
              links: [
          


                { name: "Terms of Service", href: "/TermsAndConditions" },
                { name: "Privacy Policy", href: "/PrivacyPolicy" }
              ]
            },
            {
              title: "Resources",
              links: [
                { name: "Blog", href: "/signup" },


              ]
            },

            {
              title: "SOLUTION",
              links: [
                { name: "Getting Started", href: "/documents" },
              ],
              customContent: (
                <div className="mt-4 transform hover:scale-105 transition-all duration-300">
                  <Baner />
                </div>
              )
            }
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-white font-semibold tracking-wide uppercase text-sm">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {section.customContent}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#1A1A1A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© 2025 Webdone. All rights reserved</span>
          

            </div>
       
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
