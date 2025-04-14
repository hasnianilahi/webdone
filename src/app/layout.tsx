
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme-provider'
import GoogleAnalytics from '@/app/GoogleAnalytics'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://webd.one'),
  title: 'Webdone - Create Stunning Landing Pages & Site with AI and Ship Your Startup Super-Fast With Nextjs',
  description: 'Webdone Create a stunning landing page & site with AI. No generic layouts—everything is fresh and uniquely .Build web apps with Next.js superfast, from database to payment. ',

  openGraph: {
    title: 'Webdone (webd.one)- Create Custom Landing Pages with AI',
    description: 'Webdone Create a stunning landing page & site with AI. No generic layouts—everything is fresh and uniquely .Build web apps with Next.js superfast, from database to payment',
    type: 'website',
    url: 'https://webd.one',
    images: [{
      url: 'https://webd.one/twitter-card.png',
      width: 1200,
      height: 630,
    }],

  },
  twitter: {
    card: 'summary_large_image',
    site: '@webdone',
    creator: '@hasnain',
    title: 'Create Stunning Landing Pages & Site with AI and Ship Your Startup Super-Fast With Nextjs ',
    description: 'Webdone (webd.one)Create stunning, high-converting pages with AI. No coding--needed, fully customizable. Typescript/javascript ',
    images: ['https://webd.one/twitter-card.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <meta
    name="keywords"
    content="Webdone (webd.one)how to start a business online,simple landing page react
react landing page template free,
react landing page templates,
react landing page template,
nextjs landing page template,

nextjs landing page,
react tailwind landing page,

nextjs landing page template,
react landing page builder,
free react landing page builder,
nextjs landing page templates,
React animated landing page,
SaaS landing page React,
React landing page components,
Saas landing page react example,
React landing page tutorial,
create landing page in react,
react typescript landing page,steps to start a business, how to start a startup company, startup idea, validate startup idea reddit"
/>






      </Head>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Webdone (webd.one)",
      "url": "https://webd.one",
      "logo": "https://webd.one/logo.png",
      "image": "https://webd.one/twitter-card.png",
      "description": "Webdone (webd.one) - Create stunning, high-converting pages with AI. And ship your start super with NExt-js boilerplate",
      "sameAs": [
        "https://twitter.com/webdone"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://webd.one/contact"
      },
      "offers": [
        {
          "@type": "Offer",
          "price": "238.00",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "price": "39.00",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "price": "18.00",
          "priceCurrency": "USD"
        }
      ],
      "datePublished": "2025-02-16",
      "applicationCategory": "DeveloperApplication",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "200"
      },
      "author": {
        "@type": "Person",
        "name": "Hasnain"
      }
    })
  }}
/>

      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="White" enableSystem>
          {children}
          <Toaster position="top-center" />
             <GoogleAnalytics />
        </ThemeProvider>  
      </body>
    </html>
  )
}
