'use client';
import React, { useState } from "react";
import { FiSearch, FiImage } from 'react-icons/fi';
import { Sparkles } from 'lucide-react';
import Image from "next/image";


interface GeneratedImage {
  id: string;
}
interface GalleryProps {
  onSelectImage: (file: File, imageUrl: string) => void;
  isBackgroundMode?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ onSelectImage, isBackgroundMode = false }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [incomingImages, setIncomingImages] = useState<GeneratedImage[]>([]);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const examplePrompts = [
    {
      title: "Glass Morphism",
      description: "Modern transparent design",
      prompt: "Floating circular elements, Blurred glass effect, Light transparency, Soft pastel gradients, Overlapping shapes"
    },
    {
      title: "Dynamic Dots",
      description: "Interactive particle design",
      prompt: "Moving dot matrix, Connected line elements, Interactive particle effect, Minimalist design"
    },
    {
      title: "Geometric Gradient",
      description: "Modern geometric patterns",
      prompt: "Soft tessellated triangles, Deep purple fading to teal, Subtle shadow effects, Clean geometric shapes"
    }
  ];

  const handleGenerate = async () => {
    if (!prompt) {
      alert('Please enter a prompt.');
      return;
    }

    try {
      const response = await fetch('/api/users/generate/weblike-fast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate images.');
      }

      const { images } = await response.json();
      setIncomingImages(images);
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      alert('Image generation failed. Please try again later.');
    }
  };

  const handleSelectImage = async (image: GeneratedImage) => {
    try {
      const imageUrl = `/api/users/generate/weblike-fast?id=${image.id}`;
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      const blob = await response.blob();
      const file = new File([blob], `image-${image.id}.jpg`, { type: blob.type });
      setSelectedImageId(image.id);
      
      // If in background mode, pass the actual URL instead of blob URL
      if (isBackgroundMode) {
        onSelectImage(file, imageUrl);
      } else {
        const objectUrl = URL.createObjectURL(blob);
        onSelectImage(file, objectUrl);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setPrompt(prompt);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Prompts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {examplePrompts.map((example, index) => (
            <div 
              key={index}
              onClick={() => handleCopyPrompt(example.prompt)}
              className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium mb-1">{example.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{example.description}</p>
              <p className="text-sm text-gray-600">{example.prompt}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your prompt or click a suggestion above"
          />
          <button
            onClick={handleGenerate}
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Generate</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        {incomingImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {incomingImages.map((image) => (
              <div
                key={image.id}
                onClick={() => handleSelectImage(image)}
                className={`cursor-pointer rounded-lg overflow-hidden ${
                  selectedImageId === image.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <Image
                  src={`/api/users/generate/weblike-fast?id=${image.id}`}
                  alt="Generated Image"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FiImage className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-gray-500">No images generated yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
