'use client'
import React from "react";
import Link from "next/link";

const Assistant = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-8">
        <Link href="/documents" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
          ← Back to Documentation
        </Link>
      </div>
      
      <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
        AI Assistant Guide
      </div>
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Building with AI Assistants 🤖
      </h1>
      
      <div className="space-y-8">
        {/* Getting Started */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">🚀 Getting Started with AI</h2>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg">Let&appos;s explore how AI can supercharge your web development!</p>
            
            <div className="bg-black/30 p-4 rounded-lg space-y-3">
              <p>Popular AI Assistants:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>GitHub Copilot - Your coding companion</li>
                <li>ChatGPT - For brainstorming and problem-solving</li>
                <li>Claude - Advanced reasoning and explanations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">💡 What Can AI Help With?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-400 mb-2">🎨 Design Ideas</h3>
              <p className="text-gray-300">Get layout suggestions and design patterns</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-400 mb-2">📝 Code Generation</h3>
              <p className="text-gray-300">Generate components and basic functionality</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-400 mb-2">🐛 Debug Help</h3>
              <p className="text-gray-300">Get suggestions for fixing errors</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-400 mb-2">📚 Learning</h3>
              <p className="text-gray-300">Understand complex concepts and patterns</p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">✨ Best Practices</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-blue-500/10 p-4 rounded-lg">
              <p className="font-medium mb-2">1. Be Specific</p>
              <p>The more detailed your prompts, the better the results!</p>
            </div>
            <div className="bg-purple-500/10 p-4 rounded-lg">
              <p className="font-medium mb-2">2. Review & Refine</p>
              <p>Always review AI-generated code and make necessary adjustments</p>
            </div>
            <div className="bg-green-500/10 p-4 rounded-lg">
              <p className="font-medium mb-2">3. Iterate</p>
              <p>Use AI as a starting point and build upon its suggestions</p>
            </div>
          </div>
        </section>

        {/* Example Prompts */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">🎯 Example Prompts</h2>
          <div className="space-y-4">
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="font-medium text-blue-400 mb-2">For Landing Pages:</p>
              <code className="text-gray-300 block">
                Create a modern hero section with a gradient background, centered content, and a CTA button
              </code>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="font-medium text-blue-400 mb-2">For Components:</p>
              <code className="text-gray-300 block">
                Generate a responsive navigation bar with mobile menu functionality&quot;
              </code>
            </div>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4">💫 Pro Tips</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Break down complex tasks into smaller prompts
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Use AI for repetitive tasks
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Learn from AI-generated code
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Combine multiple AI tools for better results
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Assistant;
