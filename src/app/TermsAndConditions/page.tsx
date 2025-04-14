import React from 'react';


const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-neutral-950 min-h-screen">

      <div className="container mx-auto py-12 px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-200 mb-4">Terms of Service </h1>
          
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-neutral-900/50 p-6 rounded-lg mb-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you and Webdone (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) 
              governing your access to and use of our website, services, applications, and tools (collectively, the &quot;Services&quot;).
            </p>
          </div>






          <div className="bg-neutral-900/50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-neutral-200 mb-4">Full Access License with Usage Control</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
              When you purchase the WebDone Software License, you get lifetime access—no subscriptions, no recurring fees. Whether you&apos;re an independent creator, entrepreneur, or small business owner.
              </p>
           
              <p className="text-neutral-300 leading-relaxed">
              After purchasing the WebDone  Kit, you have the freedom to scale your product as you see fit. However, we do not guarantee the outcome of any changes you make. The success and stability of your  startup/Saas depend entirely on your decisions. After purchasing startup/Saas kit or Any modifications or integrations you implement are at your own risk. We strongly recommend reviewing all dependencies and ensuring compatibility before making changes. While your access is unlimited
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-neutral-200 mb-4">Refund</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
              When you purchase the WebDone  kit, you get lifetime access—no subscriptions, no recurring fees. Whether you&apos;re an independent creator, entrepreneur, or small business owner,once you purchase webdone kit  its once time purchase and not refundable
              </p>
              <h2 className="text-2xl font-semibold text-neutral-200 mb-4">AI Web Builder</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
              When you purchase the WebDone AI Web Builder Starter or Pro plane , you get monthly and yearly subscriptions which will help you build landing page/site/page without  knowing coding in TypeScript/Javascript  and you have hours to setup your startup/Saas and ship your startup/Saas in hours  its ALl in one web builder in typescript/javascript. Whether you&apos;re an independent creator, entrepreneur, or small business owner,
              </p>
        
             
            </div>
          {/* Terms Sections */}
          <div className="space-y-12">
            

            {termsSection("Account Registration and Security", [
              "You must be at least 18 years old to create an account",
              "Provide accurate and complete information during registration",
              "Maintain the security of your account credentials",
              "Notify us immediately of any unauthorized access",

            ])}

            {termsSection("User Obligations", [
              "Comply with all applicable laws and regulations",
              "Respect intellectual property rights",
              "Maintain appropriate conduct in all interactions",
              "Not engage in any fraudulent or deceptive practices",
              "Not attempt to circumvent any security measures"
            ])}
             {termsSection("Liability & Warranties", [
              "WebDone provides powerful tools,",
              "We are not liable for any loss of profits",
              "By using WebDone, you acknowledge and accept these terms.",
            
            ])}

            {termsSection("Subscription and Payments", [
              "Subscription fees are billed in advance on a monthly or annual basis",
              "Prices are subject to change with 30 days notice",
              "Refunds ",
              "Cancellation can be done at any time through your account settings",
              "Premium features are only accessible with an active subscription"
            ])}

            {termsSection("Data Privacy and Security", [
              "We process personal data as described in our Privacy Policy",
              "Implementation of industry-standard security measures",
              "Regular security audits and updates",
              "Data encryption in transit and at rest",
              "Third-party service providers are carefully vetted"
            ])}
              {termsSection("Changes", [
              "As WebDone evolves with new features and updates",
              "the price may change. Lock in your purchase now to secure the current rate and avoid future price increases.",
          
            ])}

            {termsSection("Intellectual Property", [
              "All Service content is protected by copyright and other IP laws",
              "Users retain ownership of their uploaded content",
              "Limited license granted for using our platform features",
              "Prohibition of unauthorized use of our trademarks",
              "Respect for third-party intellectual property rights"
            ])}

            {termsSection("User Responsibility", [
              "You are fully responsible for how you use WebDone webdone kit",
              "While we provide the platform, the content and its usage are entirely in your hands",

            ])}

            {termsSection("Termination", [
              "Right to terminate accounts for Terms violations",
              "Account deletion process and data retention",
              "Effect on existing subscriptions and data",
              "Appeal process for terminated accounts"
            ])}


            {/* Legal Disclaimers */}
            <div className="bg-neutral-900/50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-neutral-200 mb-4">Legal Disclaimers</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. 
                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>
          
              <p className="text-neutral-300 leading-relaxed">
                IN NO EVENT SHALL WEBDONE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
              </p>
              
            </div>

            {/* Contact Information */}
            <div className="bg-neutral-800 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">
                Contact Information
              </h3>
              <div className="space-y-2 text-neutral-300">
                <p>For any questions regarding these Terms:</p>
                <p>Email: <a href="mailto:support@webdo.one" className="text-blue-400 hover:text-blue-300">support@webdo.one</a></p>
                <p>Support: <a href="mailto:support@webdo.one" className="text-blue-400 hover:text-blue-300">support@webdo.one</a></p>
                <p>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
              </div>
            </div>
          </div>
          <p className="text-neutral-400 text-sm">
      Date: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper function for terms sections remains the same
const termsSection = (title: string, points: string[]) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-neutral-200 mb-4">{title}</h2>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="text-neutral-300 leading-relaxed pl-4 border-l-2 border-neutral-700">
          {point}
        </li>
      ))}
    </ul>
  </section>
);

export default TermsAndConditions;
