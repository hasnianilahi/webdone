import React from 'react';
import Head from 'next/head';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Webdone ",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "url": "https://webd.one",
    "image": "https://webd.one/twitter-card.png",
    "description": "Ship your startup superfast in hours. All-in-One kit to create a page, site, or landing page with AI. Ready to launch your startup in hours ",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "creator": {
      "@type": "Organization",
      "name": "Webdone",
      "url": "https://webd.one/twitter-card.png",
      "logo": "https://webd.one/logo.png"
    },
    "featureList": [
      "AI-powered page generation",
      "Custom design templates",
      "Instant page creation",
      "Conversion optimization"
    ]
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
};

export default StructuredData;

