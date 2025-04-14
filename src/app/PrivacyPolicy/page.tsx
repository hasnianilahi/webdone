import React from 'react';
import Nav from "@/app/UI/Nav/page";
import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-900  text-white min-h-screen overflow-hidden">
      <Nav /> {/* Assuming you want to include the Nav component */}
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Privacy Policy</h1>
        
          <p className="mb-6 leading-relaxed text-white">
            This privacy policy explains how we collect, use, and protect your information. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
 
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

          {/* Section 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="mb-4 leading-relaxed text-white">
              We collect information that you provide to us directly, including your name, email address, password, and any other details you choose to share. Additionally, we may automatically gather certain data related to your use of our services.
            </p>
            <p className="mb-4 leading-relaxed text-white">
              <strong>Google User Data:</strong> If you choose to sign in or register using your Google account, we collect your Google account information—such as your email address, profile name, and profile picture. This data is used solely for the purpose of creating and managing your account and subscription services.
            </p>
    

          {/* Section 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Use of Information</h2>
            <p className="mb-4 leading-relaxed text-white">
              We utilize your information to provide and enhance our services, communicate with you regarding your account or our offerings, and personalize your experience. This may include sending you newsletters, marketing communications, and updates on new features and services.
            </p>
            <p className="mb-4 leading-relaxed text-white">
              <strong>Service Providers:</strong> We may share data with trusted third-party providers that assist us in managing our services, including payment processing and customer support. These providers are contractually obligated to protect your data.
            </p>
            <p className="mb-4 leading-relaxed text-white">
              <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.
            </p>
          </div>

      

          {/* Section 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4 leading-relaxed text-white">
              We may use cookies and similar tracking technologies to enhance your experience on our website. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your ability to use certain features or functions on our website.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Changes to Policy</h2>
            <p className="mb-4 leading-relaxed text-white">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any updates or changes.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
            <p className="mb-4 leading-relaxed text-white">
              For any questions, concerns, or requests regarding this privacy policy, please contact us at:
            </p>
            <p className="mb-4 leading-relaxed text-white">
              Email: <a href="support@webd.one" className="underline hover:text-white">support@webd.one</a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-white">
          <p>Thank you for trusting us with your information. Your privacy is our priority.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
