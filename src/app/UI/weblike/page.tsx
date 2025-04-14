"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { Info } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Send,Plus } from 'lucide-react';
import PricingUI from '../../pricing/page';

const Webllix: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [incomingImages, setIncomingImages] = useState<{ id: string; url: string; aspect_ratio: string }[]>([]);
  const [company, setCompany] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [codeLoading, setCodeLoading] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [codePrompt, setCodePrompt] = useState<string>();
  const [showPricing, setShowPricing] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [codeMinutes, setCodeMinutes] = useState<number>(5);
  const [codeSeconds, setCodeSeconds] = useState<number>(0);
  const [isCodeTimerActive, setIsCodeTimerActive] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUserId(res.data.data._id);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, []);

  useEffect(() => {
    // Automatically select the first image whenever incomingImages are updated
    if (incomingImages.length > 0) {
      setSelectedImageId(incomingImages[0].id);
    } else {
      setSelectedImageId(null);
    }
  }, [incomingImages]);

  useEffect(() => {
    // Show success message when an image is selected or generated
    if (incomingImages.length > 0 || selectedImageId) {
      setShowSuccessMessage(true);
    } else {
      setShowSuccessMessage(false);
    }
  }, [incomingImages, selectedImageId]);

  // Add timer effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isTimerActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsTimerActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerActive, minutes, seconds]);

  // Add new timer effect for code generation
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isCodeTimerActive) {
      intervalId = setInterval(() => {
        if (codeSeconds === 0) {
          if (codeMinutes === 0) {
            clearInterval(intervalId);
            setIsCodeTimerActive(false);
          } else {
            setCodeMinutes(codeMinutes - 1);
            setCodeSeconds(59);
          }
        } else {
          setCodeSeconds(codeSeconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isCodeTimerActive, codeMinutes, codeSeconds]);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    if (!userId) {
      router.push('/signup');
      return;
    }

    setLoading(true);
    setIncomingImages([]); // Clear previous images
    setIsTimerActive(true);
    setMinutes(5);
    setSeconds(0);

    const fullPrompt = `${company} for ${prompt} modern landing page ,website `;

    try {
      const response = await fetch(`/api/users/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, prompt: fullPrompt, company }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate images.");
      }

      const { images } = await response.json();
      setIncomingImages(images);
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error");
      setShowPricing(true);
    } finally {
      setLoading(false);
    }
  };

  const SendImage = useCallback(async () => {
    if (!selectedImageId) {
      alert("Please select an image first.");
      return;
    }

    setCodeLoading(true);
    setIsCodeTimerActive(true);
    setCodeMinutes(5);
    setCodeSeconds(0);

    try {
      const formData = new FormData();
      formData.append('imageId', selectedImageId);
      formData.append('prompt', codePrompt || '');

      const response = await fetch('/api/users/openaigpt', {
        method: 'POST',
        body: formData,
      });

      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        throw new Error('Invalid response format from server');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to generate code');
      }

      if (!data.result) {
        throw new Error('No code was generated');
      }

      const htmlCode = extractHtmlCode(data.result);
      if (!htmlCode) {
        throw new Error('Failed to extract HTML code');
      }

      setGeneratedCode(htmlCode);
      router.push(`/weblike/builder?code=${encodeURIComponent(htmlCode)}`);

    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'Failed to generate code. Please try again.');
    } finally {
      setCodeLoading(false);
      setIsCodeTimerActive(false);
    }
  }, [selectedImageId, codePrompt, router]);

  // Function to extract only the HTML code
  const extractHtmlCode = (result: string): string => {
    const htmlRegex = /<html[\s\S]*?<\/html>/i;
    const match = result.match(htmlRegex);
    return match ? match[0] : result;
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[#0D1117]">
      {/* Header */}
    

      {/* Main Content */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-80 bg-[#161B22] border-r border-gray-800 flex flex-col flex-shrink-0">
          <div className="p-4">
            <button
              onClick={() => {
                setPrompt('');
                setIncomingImages([]);
                setGeneratedCode('');
              }}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-md bg-[#238636] hover:bg-[#2ea043] text-white transition-colors"
            >
              <Plus size={16} />
              New Design
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {/* History items can go here */}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col min-h-0 max-h-full">
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-[1200px] mx-auto p-8">
              {incomingImages.length > 0 ? (
                <div className="space-y-8">
                  {/* User Message */}
                  <div className="flex items-start gap-4 bg-[#161B22] p-6 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium">You</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-lg">{prompt}</p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium">AI</span>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        {incomingImages.map((image) => (
                          <div
                            key={image.id}
                            className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                              selectedImageId === image.id 
                                ? 'border-purple-500 shadow-xl shadow-purple-500/20' 
                                : 'border-transparent hover:border-gray-700'
                            }`}
                            onClick={() => setSelectedImageId(image.id)}
                          >
                            <div className="aspect-w-16 aspect-h-9">
                              <Image
                                src={image.url}
                                alt="Generated design"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white">Click to select</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[calc(100vh-240px)] flex items-center justify-center">
                  {loading ? (
                    <div className="text-center space-y-8">
                      {/* Timer Animation */}
                      <div className="relative w-48 h-48 mx-auto">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-purple-200/20" />
                        
                        {/* Spinning gradient ring */}
                        <div className="absolute inset-2 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                        
                        {/* Inner container */}
                        <div className="absolute inset-4 rounded-full bg-[#161B22] flex items-center justify-center flex-col">
                          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                          </div>
                          <div className="text-sm text-gray-400">remaining</div>
                        </div>

                        {/* Decorative dots */}
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-purple-500/50"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 30}deg) translateY(-24px)`,
                              transformOrigin: '0 0',
                            }}
                          />
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                          Generating Your Website
                        </h3>
                        <p className="text-gray-400">
                          Please wait while we create your custom design
                        </p>
                      </div>

                      {/* Loading Steps */}
                      <div className="max-w-md mx-auto">
                        <div className="space-y-3 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            <span>Analyzing your requirements...</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                            <span>Generating design concepts...</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500/30" />
                            <span>Optimizing layouts...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4 max-w-md mx-auto">
                      <h2 className="text-2xl font-bold text-white">What Will You Create Today</h2>
                      <p className="text-gray-400">Describe  landing page needs below and wait for Landing page to be generated. </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-800 bg-[#161B22] p-6">
            <div className="max-w-[1200px] mx-auto space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your website needs..."
                  className="w-full p-4 pr-20 rounded-xl bg-[#0D1117] text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none text-lg"
                  rows={3}
                />
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="absolute right-4 bottom-4 p-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 transition-colors flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
           
                    </>
                  )}
                </button>
              </div>
              
              {showSuccessMessage && (
                <div className="space-y-4">
                  <textarea
                    value={codePrompt}
                    onChange={(e) => setCodePrompt(e.target.value)}
                    placeholder="Add additional details about your website..."
                    className="w-full p-4 rounded-xl bg-[#0D1117] text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none text-lg"
                    rows={2}
                  />
                  <div className="relative">
                    <button
                      onClick={SendImage}
                      disabled={codeLoading || !selectedImageId}
                      className="relative w-full p-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl disabled:opacity-50 transition-all duration-200 text-lg font-medium overflow-hidden group"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        {codeLoading ? (
                          <>
                            <div className="relative w-6 h-6">
                              <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                              <div className="absolute inset-0 rounded-full border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                            </div>
                            <span className="flex items-center gap-2">
                              <span>Generating Code</span>
                              <span className="font-mono">
                                {String(codeMinutes).padStart(2, '0')}:{String(codeSeconds).padStart(2, '0')}
                              </span>
                            </span>
                          </>
                        ) : (
                          <>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Generate Code</span>
                          </>
                        )}
                      </div>
                      {codeLoading && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-purple-800/50 animate-pulse" />
                          <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
                            <div 
                              className="h-full bg-white transition-all duration-1000"
                              style={{ 
                                width: `${((5 * 60 - (codeMinutes * 60 + codeSeconds)) / (5 * 60)) * 100}%` 
                              }}
                            />
                          </div>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800">
            {/* Close button - enhanced */}
            <button 
              onClick={() => setShowPricing(false)}
              className="absolute -top-4 -right-4 z-[9999] p-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Pricing content wrapper */}
            <div className="max-h-[80vh] overflow-y-auto p-6">
              <PricingUI />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Webllix;
