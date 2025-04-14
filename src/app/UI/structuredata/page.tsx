import React from 'react';
import Head from 'next/head';
import Hero from '../Hero/page';

const StructuredData = () => {
  // Default SEO values
  const defaultSEO = {
    title: " Webdone|Create Eye-Catching Websites & Landing Pages in Minutes—No Coding, Just AI Magic ",
    description: " Create fresh, unique, and professional websites & landing pages in minutes with AI  no cookie-cutter designs, ",
    ogImage: "https://www.webd.one/logo.png",
    canonicalUrl: "https://www.webd.one",
  };

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "create website &landing page with AI ",
    "url": "https://webd.one",
    "image": "https://webd.one/logo.png",
    "name": defaultSEO.title,
    "description": defaultSEO.description,
    "publisher": {
      "@type": "Organization",
      "name": "Webdone",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.webd.one/logo.png",
      },
      "provider": {
        "@type": "Organization",
        "name": "webdone",
        "url": "https://webd.one"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://webd.one/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
  };

  // Add user data management
  const getUserData = () => {
    // You can implement logic to get user data from your auth system
    const isLoggedIn = false; // Replace with actual auth check
    
    return {
      id: isLoggedIn ? 'user-id' : null,
      is_mail_reader: isLoggedIn ? false : null,
      type: isLoggedIn ? 'registered' : 'anonymous',
      premium: isLoggedIn ? false : null,
      premium_type: isLoggedIn ? null : null,
      premium_package: isLoggedIn ? null : null,
      premium_count_package: isLoggedIn ? 0 : null,
      premium_count_all: isLoggedIn ? 0 : null,
      email: isLoggedIn ? 'user@example.com' : null,
      login_count: isLoggedIn ? 0 : null,
      last_login: isLoggedIn ? new Date().toISOString() : null,
      pre_last_login: isLoggedIn ? null : null,
      country: 'ca', // Can be determined from IP or user settings
      revenue: isLoggedIn ? 0 : null,
    };
  };

  return (
    <Head>
      {/* Basic Metadata */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <title>{defaultSEO.title}</title>
      <meta name="description" content={defaultSEO.description} />
      <meta name="keywords" content="webdone, web sites, for free, creation of web pages, easily, webdesign, blog, picture gallery" />
      <meta name="author" content="webdone AG [webd.one]" />

    

      {/* Canonical URL */}
      <link rel="canonical" href={defaultSEO.canonicalUrl} />

      {/* Open Graph Metadata */}
      <meta property="og:title" content={defaultSEO.title} />
      <meta property="og:description" content={defaultSEO.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={defaultSEO.canonicalUrl} />
      <meta property="og:image" content={defaultSEO.ogImage} />
      <meta property="og:site_name" content="Webdone" />

      {/* Twitter Card Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@webdone" />
      <meta name="twitter:title" content={defaultSEO.title} />
      <meta name="twitter:description" content={defaultSEO.description} />
      <meta name="twitter:image" content={defaultSEO.ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Preconnect and Preload for Performance */}

      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.gstatic.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://googleads.g.doubleclick.net" />

      {/* Google Tag Manager */}
      <script nonce="">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("consent", "default", {
            ad_storage: "denied",
            analytics_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            functionality_storage: "granted",
            personalization_storage: "granted",
            security_storage: "granted",
          });
          dataLayer.push({
            event: "page_view",
            language: "en",
            currency: "USD",
            affiliate_id: null,
            user: ${JSON.stringify(getUserData())},
            page: {
              portal_domain: "www.wed.one",
              type: "homepage",
              title: "${defaultSEO.title}",
              url: "${defaultSEO.canonicalUrl}",
              path: "/",
            },
          });
        `}
      </script>
      <script nonce="">
        {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "G-NK7SBNFQCZ");
        `}
      </script>
<Hero/>
      {/* Additional Styles */}
      <style>
        {`
          .grecaptcha-badge {
            visibility: hidden;
          }
        `}
      </style>
    </Head>
  );
};

export default StructuredData;
