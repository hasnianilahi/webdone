'use client'
import React from "react";
import Link from "next/link";

const AuthGuide = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>

      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        Quick Setup Guide
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Setting Up Social Login 🔐
      </h1>

      <div className="space-y-8">
        {/* Google Auth Setup */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <h2 className="text-2xl font-semibold">Google & GitHub Authentication </h2>
          </div>
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <span className="text-lg font-semibold text-gray-200">Complete Google OAuth Setup Guide</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Follow this comprehensive guide to implement Google authentication in your Next.js application. Well cover everything from setting up your Google Cloud Console to implementing the authentication flow.
            </p>

            <div className="space-y-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">1. Google Cloud Console Setup</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>a. Visit the <a href="https://console.cloud.google.com" className="text-blue-400 hover:underline">Google Cloud Console</a></p>
                  <p>b. Create a new project or select an existing one</p>
                  <p>c. Enable the Google OAuth API:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Go to &quot;APIs & Services&quot; → &quot;Library&quot;</li>
                    <li>Search for &quot;Google+ API&quot; or &quot;Google OAuth API&quot;</li>
                    <li>Click Enable</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">2. Configure OAuth Consent Screen</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>a. Go to &quot;APIs & Services&quot; → &quot;OAuth consent screen&quot;</p>
                  <p>b. Choose &quot;External&quot; user type</p>
                  <p>c. Fill in required information:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>App name</li>
                    <li>User support email</li>
                    <li>Developer contact email</li>
                    <li>Authorized domains</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">3. Create OAuth 2.0 Client ID</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>Configure the following URLs:</p>
                  <code className="block bg-black/50 p-2 rounded mt-2">
                    Authorized JavaScript origins:
                    http://localhost:3000
                    https://your-production-domain.com

                    Authorized redirect URIs:
                    http://localhost:3000/api/auth/callback/google
                    https://your-production-domain.com/api/auth/callback/google
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg">Hey there! Let&apos;s get Google login working in just 3 simple steps:</p>

            <div className="bg-black/30 p-4 rounded-lg space-y-3">
              <p>1First, head over to the <a href="https://console.cloud.google.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Console</a> and create a new project.</p>

              <p>Enable OAuth and grab these two important things:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Your Client ID</li>
                <li>Your Client Secret</li>
              </ul>

              <p>3️⃣ Add them to your .env file like this:</p>
              <code className="text-purple-400 block mt-2">
                GOOGLE_CLIENT_ID=your_client_id_here<br />
                GOOGLE_CLIENT_SECRET=your_secret_here
              </code>
            </div>

            <div className="bg-blue-500/10 p-4 rounded-lg mt-4">
              <p className="font-medium">🔥 Pro Tip: Make sure to add these URLs to your Google OAuth settings:</p>
              <code className="text-sm block mt-2 text-gray-400">
                Authorized origin: http://localhost:3000<br />
                Redirect URI: http://localhost:3000/api/auth/callback/google
              </code>
            </div>
          </div>
        </section>

        {/* GitHub Auth Setup */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <h2 className="text-2xl font-semibold">Set Up GitHub Authentication
            </h2>
          </div>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg">Setting up GitHub login is super easy too:</p>

            <div className="bg-black/30 p-4 rounded-lg space-y-3">
              <p> Go to GitHub Developer Settings. <a href="https://github.com/settings/developers" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Developer Settings</a> and create a new OAuth app.</p>

          
              <p>  Click New OAuth App.</p>
            
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Set up</li>
                <li>Homepage URL: http://localhost:3000</li>
              </ul>

              <p>Authorization Callback URL:</p>
              <code className="text-purple-400 block mt-2">
  
                http://localhost:3000/api/auth/callback/github

              </code>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Click Register Application</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Copy the Client ID and Client Secret.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">2</span>
                <span>Add GitHub Credentials to .env.local.</span>
              </div>
              <code className="text-purple-400 block mt-2">
  
              GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret


</code>
            </div>

            <div className="bg-emerald-500/10 p-4 rounded-lg mt-4">
              <p className="font-medium">💡 Quick Tip: For your GitHub OAuth settings:</p>
              <code className="text-sm block mt-2 text-gray-400">
                Homepage URL: http://localhost:3000<br />
                Authorization callback URL: http://localhost:3000/api/user/auth/callback/github
              </code>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Detailed GitHub OAuth Setup</h3>
            
            <div className="space-y-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">1. GitHub OAuth App Creation</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>a. Go to GitHub Settings → Developer Settings → OAuth Apps</p>
                  <p>b. Click &quot;New OAuth App&quot;</p>
                  <p>c. Fill in the application details:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Application name: Your App Name</li>
                    <li>Homepage URL: http://localhost:3000</li>
                    <li>Application description (optional)</li>
                    <li>Authorization callback URL: http://localhost:3000/api/auth/callback/github</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">2. Security Configuration</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>After creating the OAuth app:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Generate a new client secret</li>
                    <li>Store both client ID and secret securely</li>
                    <li>Enable security features like IP allow list if needed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Environment Variables Setup</h3>
                <code className="block bg-black/50 p-2 rounded">
                  # .env.local
                  NEXTAUTH_URL=http://localhost:3000
                  NEXTAUTH_SECRET=your-secret-key
                  
                  # Google credentials
                  GOOGLE_CLIENT_ID=your-google-client-id
                  GOOGLE_CLIENT_SECRET=your-google-client-secret
                  
                  # GitHub credentials
                  GITHUB_CLIENT_ID=your-github-client-id
                  GITHUB_CLIENT_SECRET=your-github-client-secret
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">😅 Running into issues?</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Double-check your callback URLs - they&apos;re usually the culprit!</li>
            <li>• Make sure your .env variables are exactly as shown above</li>
            <li>• Try using incognito mode if you&apos;re testing multiple accounts</li>
            <li>• Still stuck? Drop us a message support@webd.one</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AuthGuide;
