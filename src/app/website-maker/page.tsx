import React from 'react';

interface SearchResultProps {
  title: string;
  url: string;
  description: string;
}
import Head from 'next/head';

const WebsiteMaker: React.FC<SearchResultProps> = ({ title, url, description }) => {
  return (
    <article className="search-result p-4 border-b border-gray-200" itemScope itemType="http://schema.org/Article">
      <h2 itemProp="headline">
        <a href={url} className="title text-blue-600 text-lg font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <link itemProp="url" href={url} />
      <p className="url text-sm text-gray-500">{new URL(url).hostname}</p>
      <p className="description text-gray-700 mt-2" itemProp="description">{description}</p>
    </article>
  );
};

const WebsiteMakerPage: React.FC = () => {
  const results = [
    {
      title: 'Build a Stunning Website in Minutes—No Coding Needed!',
      url: 'https://www.webd.one/blog/landing-page-ai',
      description: 'Say goodbye to complicated coding! Our drag-and-drop website builder makes it easy for beginners to create professional websites. Perfect for small businesses and entrepreneurs. Start building today!"',
    },
    {
      title: 'Launch Your Online Store in a Day—With Next js !',
      url: 'https://www.webd.one/blog/landing-page-ai-generator',
      description: 'Start selling online fast with  website builder. Next js , its everything you need to grow your business!".',
    },
    {
      title: '10 Essential Elements for High-Converting Landing Pages',
      url: 'https://www.webd.one/blog/Drag-and-drop-react-landing-page-maker',
      description: 'Learn the key components that make a landing page successful. Tips and best practices for maximum conversion rates.',
    },
    {
      title: 'Custom Websites That Wow—Tailored to Your Business',
      url: 'https://www.webd.one/',
      description: 'Need a website that stands out?  from simple landing pages to complex web apps. ".',
    },
  
  ];

  const pageTitle = "Website & Landing Page Builder with AI   | Webdone";
  const pageDescription = "Create professional websites and high-converting landing pages with AI For React use website builder. No coding required. typescript/javascript";

  return (
    <>
        <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.webd.one/website-builder" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webd.one/website-builder" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        </Head>
      <div className="search-results-page max-w-4xl mx-auto my-10">
     
        
        {results.map((result, index) => (
          <WebsiteMaker
            key={index}
            title={result.title}
            url={result.url}
            description={result.description}
          />
        ))}
      </div>
    </>
  );
};

export default WebsiteMakerPage;