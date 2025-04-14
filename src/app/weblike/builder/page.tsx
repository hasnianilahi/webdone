"use client";
import React, { useState, useEffect, useRef, ChangeEvent, MouseEvent, useCallback, Suspense } from 'react';

import { Download, Maximize2, Code, Minimize2, Sparkles, ExternalLink, Redo2, Undo2, Type, Eye, Smartphone, MousePointerClick, UserCircle } from 'lucide-react';
import axios from 'axios';
import StyleControls from '@/app/weblike/weblike/style/StyleControls';
import Gallery from '@/app/weblike/weblike/gallery/Gallery';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import PricingUI from '../../pricing/page';
import BuilderPage from './ BuilderPage';
import { FiGrid, FiX, FiMinimize2, FiMaximize2, FiCode, FiEye, FiDownload, FiSmartphone, FiMonitor, FiSave, FiShare2, FiSliders, FiImage, FiDroplet, FiPlay } from 'react-icons/fi';
import { Rnd } from 'react-rnd';
import { FiMessageSquare, FiSend } from 'react-icons/fi';
import Logo from '@/app/UI/logo/page';
import { FiMove, FiCornerRightDown, } from 'react-icons/fi';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CodePreviewProps {
  initialCode: string;
}
const initialCode = ''; // Define initialCode
const CodePreview: React.FC = () => {
  const [code, setCode] = useState<string>(initialCode); // Ensure code is initialized
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('preview');
  const [codeType, setCodeType] = useState<string>('html');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isApplyingColor, setIsApplyingColor] = useState<boolean>(false);
  const [isApplyingImage, setIsApplyingImage] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [imageSize, setImageSize] = useState<string>('medium');
  const [selectedAnimation, setSelectedAnimation] = useState<string>('');
  const [isApplyingAnimation, setIsApplyingAnimation] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [images, setImages] = useState<{ [key: string]: File }>({});
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});
  const [imageCounter, setImageCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [isGalleryMinimized, setIsGalleryMinimized] = useState<boolean>(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<{ file: File | null, url: string | null } | null>(null);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [galleryTab, setGalleryTab] = useState<'images' | 'logos' | 'client'>('images');
  const [addedImages, setAddedImages] = useState<Array<{ id: string, src: string, position: { x: number, y: number }, size: { width: number, height: number } }>>([]);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [showChangePrompt, setShowChangePrompt] = useState(false);
  const [showStyleControls, setShowStyleControls] = useState<boolean>(false);
  const [isTextEditing, setIsTextEditing] = useState<boolean>(false);
  const [isLeftSidebarMinimized, setIsLeftSidebarMinimized] = useState(false);
  const [isRightSidebarMinimized, setIsRightSidebarMinimized] = useState(true); // Set default to true
  const [selectedColors, setSelectedColors] = useState<string[]>(['#000000', '#000000', '#000000']);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
  const [isChatSessionActive, setIsChatSessionActive] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isStyleControlsMinimized, setIsStyleControlsMinimized] = useState(true);
  const [activeImageId, setActiveImageId] = useState<string | null>(null);
  const [showAIModal, setShowAIModal] = useState<boolean>(false);
  const [codeLoading, setCodeLoading] = useState<boolean>(false);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [showPricing, setShowPricing] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [incomingImages, setIncomingImages] = useState<{ id: string; url: string; aspect_ratio: string }[]>([]);
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const router = useRouter();
  const [company, setCompany] = useState<string>("");





  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
      setOutput(initialCode);
    }
  }, []);

  ;
  const toggleLeftSidebar = () => {
    setIsLeftSidebarMinimized(!isLeftSidebarMinimized);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarMinimized(!isRightSidebarMinimized);
  }
  useEffect(() => {
    if (previewRef.current) {
      if (isTextEditing) {
        previewRef.current.setAttribute('contenteditable', 'true');
      } else {
        previewRef.current.removeAttribute('contenteditable');
      }
    }
  }, [isTextEditing])


  const toggleTextEditing = () => {
    if (isTextEditing) {
      // Save the changes when exiting text editing mode
      if (previewRef.current) {
        const updatedContent = previewRef.current.innerHTML;
        setOutput(updatedContent);
        setCode(updatedContent);
      }
    }
    setIsTextEditing(!isTextEditing);
  };

  const showCodeSection = () => {
    setActiveTab('code');
  };


  useEffect(() => {
    // Clean up object URLs when component unmounts
    return () => {
      Object.values(imageUrls).forEach(URL.revokeObjectURL);
    };
  }, [imageUrls]);

  // Replace the state variables with refs
  const hoveredElementRef = useRef<Element | null>(null);
  const [selectedElementRef, setSelectedElementRef] = useState<{ current: Element | null }>({ current: null });
  const forceUpdate = useCallback(() => updateState({}), []);
  // Modify the handleMouseEvent function
  const handleMouseEvent = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!isTextEditing) {
      const target = event.target as Element;
      if (event.type === 'mouseover') {
        hoveredElementRef.current = target;
      } else if (event.type === 'mouseout') {
        hoveredElementRef.current = null;
      } else if (event.type === 'click') {
        selectedElementRef.current = target;
        // Force a re-render
        forceUpdate();
      }
    }
  }, [isTextEditing, forceUpdate, selectedElementRef]);



  const handleOpenLive = () => {
    // Generate full HTML document with styles and images
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Live Preview</title>
        <style>
          ${Object.entries(imageUrls).map(([imageId, url]) => `
            [data-image-id="${imageId}"] {
              background-image: url('${url}');
              background-size: ${imageSize};
              background-position: center;
              background-repeat: no-repeat;
            }
          `).join('\n')}
        </style>
      </head>
      <body>
        ${output}
      </body>
      </html>
    `;

    // Create a Blob with the HTML content
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const dataUrl = URL.createObjectURL(blob);

    // Open the data URL in a new tab
    window.open(dataUrl, '_blank');

    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(dataUrl), 100);
  };

  // ... existing code ...


  // Add this to force re-render when needed
  const [, updateState] = useState({});


  useEffect(() => {
    try {
      if (code.trim().startsWith('<')) {
        setOutput(code);
        setError('');
      } else {
        const transformedCode = code
          .replace(/className=/g, 'class=')
          .replace(/\{([^}]+)\}/g, (_, content) => {
            try {
              return new Function(`return ${content}`)();
            } catch {
              return `\${${content}}`;
            }
          })
          .replace(/&nbsp;/g, ' ');
        setOutput(transformedCode);
        setError('');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }, [code]);

  const [selectedText, setSelectedText] = useState<string | null>(null);


  const toggleEditMode = () => {
    setIsEditMode((prev: boolean) => !prev); // Toggle edit mode
    if (!isEditMode) {
      // Additional logic to activate edit mode (if needed)
      // e.g., select elements or enable editing features
    }
  };

  const saveCode = useCallback(async () => {
    if (!previewRef.current) return;

    const zip = new JSZip();
    const fileExtension = codeType === 'html' ? 'html' : codeType === 'jsx' ? 'jsx' : 'tsx';
        // Add README.txt with setup instructions
    const readmeContent = `Here is step by step guid to quick setup 

Setup Instructions:
1. Replace 
  Ex- in this <style><style> replace with >style jsx global>{backticks}<style>

2. File Structure:
   - index.${fileExtension}: Main component file
   - images/: Contains all image assets
   - README.txt: This file

3. If theme applied move the theme in to directory 
   - ANd in page where image has name img3 with this replace with public directory image like name "apple.png"
  
   - Ensure your project supports ${fileExtension === 'tsx' ? 'TypeScript' : 'JavaScript'} and image handling

4. Dependencies:
   - React ${fileExtension === 'tsx' ? 'with TypeScript' : ''}
   - Next.js for image optimization
   - Tailwind CSS for styling (recommended)



Happy coding! 🚀`;

    zip.file("README.txt", readmeContent);

    let saveableCode = previewRef.current.innerHTML;

    // Process images and create image imports
    const imagePromises = Object.entries(images).map(async ([imageId, file]) => {
      const imageContent = await file.arrayBuffer();
      const fileName = `image_${imageId}.${file.name.split('.').pop()}`;
      zip.file(`images/${fileName}`, imageContent);
      return { imageId, fileName };
    });

    const processedImages = await Promise.all(imagePromises);

    if (codeType === 'html') {
      // For HTML, update image paths and create a style tag
      let styleContent = '';
      processedImages.forEach(({ imageId, fileName }) => {
        const imgRegex = new RegExp(`data-image-id="${imageId}"`, 'g');
        saveableCode = saveableCode.replace(imgRegex, `data-image-id="${imageId}" style="background-image: url('./images/${fileName}')"`);

        // Add to style content
        styleContent += `
            [data-image-id="${imageId}"] {
              background-size: ${imageSize};
              background-position: center;
              background-repeat: no-repeat;
            }
          `;
      });

      // Add style tag to the head of the HTML
      saveableCode = `
          <html>
            <head>
              <style>${styleContent}</style>
            </head>
            <body>
              ${saveableCode}
            </body>
          </html>
        `;
    } else {
      // JSX/TSX format with proper image handling
      const imageVariableNames = processedImages.reduce((acc, { imageId }) => {
        const safeName = `image${imageId.replace(/[^a-zA-Z0-9]/g, '')}`;
        acc[imageId] = safeName;
        return acc;
      }, {} as { [key: string]: string });

      // Transform the code to use proper React/TSX syntax
      saveableCode = saveableCode
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/charset=/g, 'charSet=')
        .replace(/data-image-id="([^"]+)"/g, (match, imageId) => {
          const varName = imageVariableNames[imageId];
          return `data-temp-image="${imageId}" data-var-name="${varName}"`;
        })
        .replace(/style="([^"]*)"/g, (match, styles) => {
          const styleObject = styles.split(';')
            .filter((style: string) => style.trim())
            .reduce((acc: Record<string, string>, style: string) => {
              const [key, value] = style.split(':').map(s => s.trim());
              if (key && value) {
                const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                acc[camelKey] = value;
              }
              return acc;
            }, {});
          return `style={${JSON.stringify(styleObject)}}`;
        });

      // Now replace the temporary image attributes with proper style objects
      saveableCode = saveableCode.replace(/data-temp-image="([^"]+)"\s+data-var-name="([^"]+)"/g,
        (match, imageId, varName) => {
          return `style={{ backgroundImage: \`url(\${${imageId}})\` }}`;
        }
      );

      // Self-closing tags
      saveableCode = saveableCode.replace(/<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)([^>]*?)>/g,
        (match, tag, attributes) => `<${tag}${attributes} />`);

      // Create React component with image imports
      saveableCode = `import React from 'react';
  ${processedImages.map(({ fileName, imageId }) =>
        `import ${imageVariableNames[imageId]} from './images/${fileName}';`
      ).join('\n')}
  
  ${codeType === 'tsx' ? 'interface Props {}\n' : ''}
  
  const GeneratedComponent: React.FC${codeType === 'tsx' ? '<Props>' : ''} = () => {
    return (
    <div>
      ${saveableCode}
      </div>

    );
  };
  
  export default GeneratedComponent;`;
    }

    // Add code to zip
    zip.file(`index.${fileExtension}`, saveableCode);

    // Add images to zip
    for (const { fileName, imageId } of processedImages) {
      const imageFile = images[imageId];
      if (imageFile) {
        const imageContent = await imageFile.arrayBuffer();
        zip.file(`images/${fileName}`, imageContent);
      }
    }

    // Generate and save zip
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `webdone.zip`);
  }, [codeType, images, imageSize, addedImages, imageUrls]);
  // ... rest of the code ...


  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColors = [...selectedColors];
    newColors[activeColorIndex] = e.target.value;
    setSelectedColors(newColors);
  };

  const applyColor = useCallback(() => {
    setIsApplyingColor(true);
  }, []);
  const [hoverStyle, setHoverStyle] = useState<{ backgroundColor?: string; backgroundImage?: string }>({});
  const removeColor = () => {
    setIsApplyingColor(false);
    if (previewRef.current) {
      // Get all elements with background color or gradient
      const elements = previewRef.current.getElementsByTagName('*');
      Array.from(elements).forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.backgroundColor = '';
          element.style.background = '';
          element.style.backgroundImage = ''; // Remove any gradients
        }
      });

      // Update the preview content
      setOutput(previewRef.current.innerHTML);
      setCode(previewRef.current.innerHTML);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageId = `img_${imageCounter}`;
      setImages(prevImages => ({ ...prevImages, [imageId]: file }));
      const objectUrl = URL.createObjectURL(file);
      setImageUrls(prevUrls => ({ ...prevUrls, [imageId]: objectUrl }));
      setImageCounter(prevCounter => prevCounter + 1);
      setImageSrc(objectUrl);
    }
  };

  const applyImage = useCallback(() => {
    if (imageSrc) {
      setIsApplyingImage(true);
    }
  }, [imageSrc]);

  const removeImage = () => {
    setIsApplyingImage(false);
    if (previewRef.current) {
      // Get all elements with data-image-id
      const elementsWithImage = previewRef.current.querySelectorAll('[data-image-id]');


      // Update the preview content
      setOutput(previewRef.current.innerHTML);
      setCode(previewRef.current.innerHTML);
    }
  };

  const handlePreviewInteraction = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTextEditing) {
      // If we're in text editing mode, don't do anything else
      e.stopPropagation();
      return;
    } // Don't apply styles or images when text editing is active

    const target = e.target as HTMLElement;

    // Handle click events for applying color, image, or animation
    if (isApplyingColor) {
      const gradientColors = selectedColors.filter(color => color !== '#000000').join(', ');
      if (gradientColors.length > 0) {
        target.style.background = `linear-gradient(45deg, ${gradientColors})`;
      } else {
        target.style.backgroundColor = selectedColors[0];
      }
      setIsApplyingColor(false);
    }
    if (isApplyingImage) {
      const imageId = `img_${imageCounter - 1}`;
      target.setAttribute('data-image-id', imageId);

      setIsApplyingImage(false);
    }
    if (isApplyingAnimation && selectedAnimation) {
      target.style.animation = `${selectedAnimation} 1s`;
      target.style.animationFillMode = 'both';
      setIsApplyingAnimation(false);
    }

    // Update output and code
    if (previewRef.current) {
      const newContent = previewRef.current.innerHTML;
      setOutput(newContent);
      setCode(newContent); // Update the code state as well
    }
  }, [
    isTextEditing,
    isApplyingColor,
    isApplyingImage,
    isApplyingAnimation,
    selectedColors,
    imageSrc,
    imageSize,
    selectedAnimation,
    imageCounter
  ]);

  const toggleMobileView = () => {
    setIsMobileView(!isMobileView);
  };

  const handleImageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setImageSize(e.target.value);
  };

  const removeAppliedStyle = (style: 'color' | 'image') => {
    if (previewRef.current) {
      const elements = previewRef.current.querySelectorAll('*');
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          if (style === 'color') {
            el.style.removeProperty('background-color');
          } else if (style === 'image') {
            el.style.removeProperty('background-image');
            el.style.removeProperty('background-size');
            el.style.removeProperty('background-position');
            el.style.removeProperty('background-repeat');
          }
        }
      });
      updateOutputAndCode();
    }
  };

  const handleAnimationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedAnimation(e.target.value);
  };

  const applyAnimation = () => {
    if (selectedAnimation) {
      setIsApplyingAnimation(true);
    }
  };

  const removeAllAnimations = () => {
    if (previewRef.current) {
      const elements = previewRef.current.querySelectorAll('*');
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.removeProperty('animation');
          el.style.removeProperty('animation-fill-mode');
        }
      });
      setOutput(previewRef.current.innerHTML);
      setCode(previewRef.current.innerHTML);
    }
  };

  const extractComponents = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const elements = doc.body.querySelectorAll('*');
    const uniqueComponents = new Set<string>();
    elements.forEach((el) => {
      if (el.tagName && el.tagName.includes('-')) {
        uniqueComponents.add(el.tagName.toLowerCase());
      } else if (el.tagName) {
        uniqueComponents.add(el.tagName.toLowerCase());
      }
    });
  };

  useEffect(() => {
    extractComponents(output);
  }, [output]);



  useEffect(() => {
    // Clean up object URLs when component unmounts
    return () => {
      Object.values(imageUrls).forEach(URL.revokeObjectURL);
    };
  }, [imageUrls]);

  const handleSelectImage = (file: File | null, imageUrl: string | null) => {
    if (file && imageUrl) {
      const imageId = `img_${imageCounter}`;
      setImages(prevImages => ({ ...prevImages, [imageId]: file }));
      const objectUrl = URL.createObjectURL(file);
      setImageUrls(prevUrls => ({ ...prevUrls, [imageId]: objectUrl }));
      setImageCounter(prevCounter => prevCounter + 1);
      setImageSrc(imageUrl);
      setIsApplyingImage(true); // Set to true to apply the image
    }
  };




  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
    setIsGalleryMinimized(false);
  };

  const toggleMinimizeGallery = () => {
    setIsGalleryMinimized(!isGalleryMinimized);
  };

  const handleSelectGalleryImage = (file: File, imageUrl: string) => {
    setSelectedGalleryImage({ file, url: imageUrl });
    setImageSrc(imageUrl);
    setIsApplyingImage(true);
  };


  const applySelectedImage = () => {
    if (selectedGalleryImage && selectedGalleryImage.file && selectedGalleryImage.url) {
      const imageId = `img_${imageCounter}`;
      setImages(prevImages => ({
        ...prevImages,
        [imageId]: selectedGalleryImage.file as File
      }));
      setImageUrls(prevUrls => ({
        ...prevUrls,
        [imageId]: selectedGalleryImage.url || ''
      }));
      setImageCounter(prevCounter => prevCounter + 1);
      setImageSrc(selectedGalleryImage.url || '');
      setIsApplyingImage(true);
      setSelectedGalleryImage(null);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageAdd(e.target.files[0]);
    }
  };

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

  const updateImagePosition = (id: string, position: { x: number, y: number }) => {
    setAddedImages(prev => prev.map(img =>
      img.id === id ? { ...img, position } : img
    ));
  };

  const updateImageSize = (id: string, size: { width: number, height: number }) => {
    setAddedImages(prev => prev.map(img =>
      img.id === id ? { ...img, size } : img
    ));
  };

  const removeAddedImage = (id: string) => {
    setAddedImages(prev => prev.filter(img => img.id !== id));
  };

  useEffect(() => {
    const handleBlur = () => {
      if (isTextEditing && previewRef.current) {
        const updatedContent = previewRef.current.innerHTML;
        setOutput(updatedContent);
        setCode(updatedContent);
      }
    };

    const currentPreviewRef = previewRef.current;

    if (currentPreviewRef) {
      if (isTextEditing) {
        currentPreviewRef.setAttribute('contenteditable', 'true');
        currentPreviewRef.addEventListener('blur', handleBlur);
      } else {
        currentPreviewRef.removeAttribute('contenteditable');
        currentPreviewRef.removeEventListener('blur', handleBlur);
      }
    }

    return () => {
      if (currentPreviewRef) {
        currentPreviewRef.removeEventListener('blur', handleBlur);
      }
    };
  }, [isTextEditing]);

  const [isTyping, setIsTyping] = useState(false);
  const typingSpeedMs = 1; // Adjust this value to change typing speed


  const typeCode = async (codeToType: string) => {
    setIsTyping(true);
    let tempDiv = document.createElement('div');

    for (let i = 0; i < codeToType.length; i++) {
      await new Promise(resolve => setTimeout(resolve, typingSpeedMs));
      tempDiv.innerHTML = codeToType.substring(0, i + 1);

      if (selectedElementRef.current) {
        const newCode = code.replace(selectedElementRef.current.outerHTML, tempDiv.innerHTML);
        setCode(newCode);
        setOutput(newCode);
      } else {
        setCode(tempDiv.innerHTML);
        setOutput(tempDiv.innerHTML);
      }
    }

    // Cleanup step: remove any temporary attributes and classes
    tempDiv.querySelectorAll('*').forEach(el => {
      el.removeAttribute('data-typing');
      el.classList.remove('typing-cursor');
    });

    // Final update to ensure correct display
    if (selectedElementRef.current) {
      const finalCode = code.replace(selectedElementRef.current.outerHTML, tempDiv.innerHTML);
      setCode(finalCode);
      setOutput(finalCode);
    } else {
      setCode(tempDiv.innerHTML);
      setOutput(tempDiv.innerHTML);
    }

    setIsTyping(false);
  };

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
    setIncomingImages([]);
    setIsTimerActive(true);
    setMinutes(5);
    setSeconds(0);

    const fullPrompt = `${company} for ${prompt} modern landing page, website`;

    try {
      const response = await fetch(`/api/users/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, prompt: fullPrompt, company }),
      });

      if (!response.ok) throw new Error("Failed to generate images.");

      const { images } = await response.json();
      setIncomingImages(images);

      // Automatically select the first image for code generation
      if (images && images.length > 0) {
        setSelectedImageId(images[0].id);
        await handleSendToCodeGeneration(images[0].id);
      }

      // Minimize the AI modal after successful generation
      setShowAIModal(false);

    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error");
      setShowPricing(true);
    } finally {
      setLoading(false);
    }
  };

  // New function to handle sending image to code generation
  const handleSendToCodeGeneration = async (imageId: string) => {
    setCodeLoading(true);
    try {
      const formData = new FormData();
      formData.append('imageId', imageId);

      // Combine codePrompt with additional instructions
      const fullPrompt = `${prompt}Create a modern, based on this image using HTML and Tailwind CSS. Include 2000 line longer:
      - Semantic HTML structure
      - Mobile-first responsive design
      - Interactive elements
      - Modern UI components
      - Optimized for performance
      .`;

      formData.append('prompt', fullPrompt);

      const response = await fetch('/api/users/openaigpt', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate code');
      }

      const data = await response.json();
      const htmlCode = extractHtmlCode(data.result);

      // Update the code and output states
      setCode(htmlCode);
      setGeneratedCode(htmlCode);
      setActiveTab('preview'); // Switch to preview tab by default

      // Display the code with a typing effect
      await typeCode(htmlCode);

    } catch (error) {
      console.error('Error generating code:', error);
      alert(error instanceof Error ? error.message : 'Failed to generate code. Please try again.');
    } finally {
      setCodeLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() && !selectedImage) return;
    if (!userId || !sessionId) {
      alert('Session not initialized properly');
      return;
    }

    // New check for selected element
    if (!selectedElementRef.current) {
      setChatMessages(prevMessages => [
        ...prevMessages,
        { role: 'assistant', content: 'Please select an element first.' }
      ]);
      return;
    }

    setLoading(true);
    const userMessage = { role: 'user', content: inputMessage };
    setChatMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      let selectedCode = selectedElementRef.current ? selectedElementRef.current.outerHTML : code;

      const formData = new FormData();
      formData.append('prompt', inputMessage);
      formData.append('selectedCode', selectedCode);
      formData.append('sessionId', sessionId);
      formData.append('userId', userId);
      formData.append('isContinuation', 'true');

      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const response = await fetch('/api/users/weblike-fast', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aiMessage = { role: 'assistant', content: '' };
      let fullCodeResponse = '';
      let isCodeBlock = false;
      let codeBlockContent = '';

      while (true) {
        const { done, value } = await reader?.read() ?? { done: true, value: undefined };
        if (done) break;

        const chunk = decoder.decode(value);

        for (const char of chunk) {
          if (char === '`' && !isCodeBlock) {
            isCodeBlock = true;
            codeBlockContent = '';
            continue;
          }
          if (char === '`' && isCodeBlock) {
            isCodeBlock = false;
            fullCodeResponse += codeBlockContent;
            continue;
          }

          if (isCodeBlock) {
            codeBlockContent += char;
          } else {
            aiMessage.content += char;
            setChatMessages(prevMessages => {
              const updatedMessages = [...prevMessages];
              updatedMessages[updatedMessages.length - 1] = { ...aiMessage };
              return updatedMessages;
            });
          }
        }
      }

      if (fullCodeResponse) {
        await typeCode(fullCodeResponse);
      }

      setInputMessage('');
      setSelectedImage(null);
      setSelectedElementRef({ current: null });
    } catch (error) {
      console.error('Error sending message:', error);
      setChatMessages(prevMessages => [
        ...prevMessages,
        { role: 'assistant', content: 'Sorry, there was an error processing your request.' }
      ]);
      setError('Failed to generate response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Add this function to generate a session ID
  const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const toggleChat = () => {
    if (!isChatOpen) {
      // Starting a new chat session
      if (!sessionId) {
        const newSessionId = generateSessionId();
        setSessionId(newSessionId);
        setIsChatSessionActive(true);
      }
    } else {
      // Prompt user before closing chat
      if (chatMessages.length > 0) {
        const shouldClose = window.confirm('Closing the chat will end your current session. Are you sure?');
        if (shouldClose) {
          endChatSession();
        } else {
          return; // Don't close if user cancels
        }
      } else {
        endChatSession();
      }
    }
    setIsChatOpen(!isChatOpen);
  };

  const endChatSession = () => {
    setSessionId(null);
    setIsChatSessionActive(false);
    setChatMessages([]);
  };


  const applyStyleToSelection = (style: { [key: string]: string }) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      for (const [styleProperty, value] of Object.entries(style)) {
        span.style[styleProperty as any] = value;
      }
      applyStyle(span, range);
    }
  };

  const applyStyle = (span: HTMLSpanElement, range: Range) => {
    const fragment = range.extractContents();
    span.appendChild(fragment);
    range.insertNode(span);
    updateOutputAndCode();
  };

  const updateOutputAndCode = () => {
    if (previewRef.current) {
      const updatedHtml = previewRef.current.innerHTML;
      setOutput(updatedHtml);
      setCode(updatedHtml);
    }
  };

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageAdd(e.dataTransfer.files[0]);
    }
  };
  const handleImageAdd = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target?.result as string;
      setAddedImages(prev => [...prev, {
        id: `image-${Date.now()}`,
        src,
        position: { x: 0, y: 0 },
        size: { width: 200, height: 200 }
      }]);
    };
    reader.readAsDataURL(file);
  };
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };



  const editorRef = useRef(null);
  const [selectedDesignLabImage, setSelectedDesignLabImage] = useState<{ file: File; url: string } | null>(null);


  const handleDesignLabImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          const imageId = `img_${imageCounter}`;
          setImages(prevImages => ({ ...prevImages, [imageId]: file }));
          setImageUrls(prevUrls => ({ ...prevUrls, [imageId]: event.target?.result as string }));
          setImageCounter(prevCounter => prevCounter + 1);

          // Add the image directly to the preview
          if (previewRef.current) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.setAttribute('data-image-id', imageId);
            previewRef.current.appendChild(img);
            setOutput(previewRef.current.innerHTML);
            setCode(previewRef.current.innerHTML);
          }

          setSelectedDesignLabImage({ file, url: event.target.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addSelectedImageToPreview = () => {
    if (selectedDesignLabImage) {
      const imageId = `img_${imageCounter}`;
      setImages(prevImages => ({ ...prevImages, [imageId]: selectedDesignLabImage.file }));
      setImageUrls(prevUrls => ({ ...prevUrls, [imageId]: selectedDesignLabImage.url }));
      setImageCounter(prevCounter => prevCounter + 1);

      // Add the image to addedImages for draggable functionality
      setAddedImages(prev => [...prev, {
        id: imageId,
        src: selectedDesignLabImage.url,
        position: { x: 0, y: 0 },
        size: { width: 200, height: 200 }
      }]);

      // Reset the selected image
      setSelectedDesignLabImage(null);
    }
  };



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




  // Add this helper function
  const extractHtmlCode = (result: string): string => {
    const htmlRegex = /<html[\s\S]*?<\/html>/i;
    const match = result.match(htmlRegex);
    return match ? match[0] : result;
  };



  const quickActions = [
    { icon: <MousePointerClick size={24} />, label: "Select", onClick: () => { } },
    { icon: <Type size={24} />, label: "Text", onClick: toggleTextEditing },
    { icon: <FiMessageSquare size={24} />, label: "Chat", onClick: toggleChat },
    { icon: <FiGrid size={24} />, label: "Gallery", onClick: toggleGallery }
  ];

  const handleProfileClick = () => {
    router.push('/profile');
  };

  return (
    <div className='bg-neutral-800'>
      <div className="flex h-screen bg-neutral-800">
        <div className={`w-80 bg--n border-r border-neutral-500 flex flex-col ${isChatOpen ? '' : 'hidden'}`}>
          <div className="p-4 border-b border-neutral-700 flex justify-between items-center">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold text-white">Chat</h2>
              {isChatSessionActive && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Active
                </span>
              )}
            </div>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              <FiX size={24} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-gray-100'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>


          <div className="p-4 border-t border-neutral-700">
            <div className="flex">
              {/* Image selection input */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    setSelectedImage(files[0]); // Set the selected image
                  }
                }}
                className="hidden" // Hide the default file input
                id="imageInput"
              />
              <label htmlFor="imageInput" className="px-4 py-2 bg-gray-900 text-black rounded-l-md hover:bg-gray-400 transition-colors cursor-pointer">
                <FiImage /> {/* Use an appropriate icon for the gallery */}
              </label>

              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-grow p-2 border bg-neutral-600 border-neutral-700 rounded-r-md text-white"
                placeholder="Type your message..."
              />

              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition-colors"
              >
                <FiSend />
              </button>
            </div>
          </div>

        </div>
        {/* Left Sidebar */}
        <div className={`bg-neutral-800 border-r border-neutral-700 flex flex-col transition-all duration-300 ${isLeftSidebarMinimized ? 'w-16' : 'w-64'}`}>
          <div className="p-4 border-b border-neutral-700 flex justify-between items-center">
            {!isLeftSidebarMinimized && <h2 className="text-lg font-semibold"></h2>}
            <button onClick={toggleLeftSidebar} className="text-white hover:text-white">
              {isLeftSidebarMinimized ? <Sparkles size={24} /> : <Smartphone size={24} />}
            </button>
            <div className="flex space-x-2">
              <button
                className="px-1 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-gray-200 transition-colors"
                onClick={toggleMobileView}
              >
                {isMobileView ? <FiMonitor className="inline-block mr-1" size={14} /> : <FiSmartphone className="inline-block mr-1" size={14} />}
                {isMobileView ? '' : ''}
              </button>
              <button
                className="px-1 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-200 transition-colors"
                onClick={saveCode}
              >
                <FiSave className="inline-block mr-1" size={14} />

              </button>
              <button
                className="px-1 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
                onClick={handleOpenLive}
              >
                <FiShare2 className="inline-block mr-1" size={14} />

              </button>
              <button
                className="px-1 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
                onClick={handleProfileClick}
                title="Profile"
              >
                <UserCircle size={14} />
              </button>
            </div>
           
          </div>
          {!isLeftSidebarMinimized && (
            <>
              <StyleControls onStyleChange={applyStyleToSelection} />
             

            </>
          )}
          <div className="flex space-x-2">
            {/* ... existing buttons ... */}
            <button
              className="w-full px-4 py-2 rounded bg-purple-500 text-white flex items-center justify-center"
              onClick={() => setShowAIModal(true)}
            >
              <Sparkles className="inline-block mr-2" size={18} />
              Start with AI
            </button>
              <button onClick={toggleRightSidebar} className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                {isRightSidebarMinimized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
            {showAIModal && (
              <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="relative w-full max-w-4xl bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-800">
                  <button
                    onClick={() => setShowAIModal(false)}
                    className="absolute -top-3 -right-3 z-50 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg"
                  >
                    <FiX size={18} />
                  </button>

                  {/* AI Generation Form */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                      <Sparkles className="mr-3" size={24} />
                      Generate with AI
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <textarea
                          placeholder="Describe your webpage (e.g., 'Create a modern landing page for a tech startup with hero section, features, and contact form')"
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          className="w-full p-4 bg-neutral-800 text-white border border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                          rows={4}
                        />
                      </div>
                      <button
                        onClick={handleGenerate}
                        className="w-full py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles size={20} />
                            <span>Generate Design</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col">
          {/* Top Toolbar */}

          {/* Editor Area */}
          <div className="flex-grow flex overflow-hidden">
            <div className="flex-grow overflow-auto">
              <div className={`h-full ${isMobileView ? 'w-[375px] mx-auto' : 'w-full'}`}>
                {/* Preview Section */}
                <div className="relative">
                  <div
                    id="preview-container"
                    className={`${activeTab === 'preview' ? 'block' : 'hidden'} h-full`}
                  >
                    <div
                      ref={previewRef}
                      dangerouslySetInnerHTML={{ __html: output }}
                      className={`w-full h-full min-h-screen bg-slate-800 ${isTextEditing ? 'cursor-text' : ''}`}
                      contentEditable
                      onMouseOver={handleMouseEvent}
                      onMouseOut={handleMouseEvent}
                      onClick={handleMouseEvent}
                      onMouseDown={handlePreviewInteraction}
                      suppressContentEditableWarning={true}
                    />

                    {hoveredElementRef.current && hoveredElementRef.current !== selectedElementRef.current && (
                      <div
                        className="absolute border border-blue-300 pointer-events-none transition-all duration-200 ease-in-out"
                        style={{
                          top: hoveredElementRef.current.getBoundingClientRect().top - previewRef.current!.getBoundingClientRect().top,
                          left: hoveredElementRef.current.getBoundingClientRect().left - previewRef.current!.getBoundingClientRect().left,
                          width: hoveredElementRef.current.getBoundingClientRect().width,
                          height: hoveredElementRef.current.getBoundingClientRect().height,
                        }}
                      />
                    )}
                  </div>
                  {selectedElementRef.current && (
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        top: selectedElementRef.current.getBoundingClientRect().top - previewRef.current!.getBoundingClientRect().top,
                        left: selectedElementRef.current.getBoundingClientRect().left - previewRef.current!.getBoundingClientRect().left,
                        width: selectedElementRef.current.getBoundingClientRect().width,
                        height: selectedElementRef.current.getBoundingClientRect().height,
                      }}
                    >
                      {/* Main border */}
                      <div className="absolute inset-0 border-2 border-blue-500 rounded-sm transition-all duration-200 ease-in-out"></div>

                      {/* Corner handles */}
                      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
                        <div
                          key={corner}
                          className={`absolute w-3 h-3 bg-white border-2 border-blue-500 rounded-full ${corner.includes('top') ? 'top-0' : 'bottom-0'
                            } ${corner.includes('left') ? 'left-0' : 'right-0'} -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out`}
                        ></div>
                      ))}

                      {/* Side handles */}
                      {['top', 'right', 'bottom', 'left'].map((side) => (
                        <div
                          key={side}
                          className={`absolute bg-gray-500 border-2 border-blue-500 ${side === 'top' || side === 'bottom' ? 'w-4 h-3 -translate-x-1/2' : 'w-3 h-4 -translate-y-1/2'
                            } ${side === 'top' ? 'top-0' : side === 'bottom' ? 'bottom-0' : ''} ${side === 'left' ? 'left-0' : side === 'right' ? 'right-0' : ''
                            } transition-all duration-200 ease-in-out`}
                        ></div>
                      ))}

                      {/* Element type label */}
                      <div className="absolute top-0 left-0 -translate-y-full bg-blue-500 text-white text-xs px-2 py-1 rounded-t-sm shadow-md transition-all duration-200 ease-in-out">
                        <span className="font-semibold">{selectedElementRef.current.tagName.toLowerCase()}</span>
                        <span className="ml-2 text-blue-200">#{selectedElementRef.current.id}</span>
                        <span className="ml-2 text-blue-200">.{Array.from(selectedElementRef.current.classList).join('.')}</span>
                      </div>

                      {/* Action buttons */}
                      <div className="absolute top-0 right-0 -translate-y-full flex space-x-1 bg-blue-500 rounded-t-sm overflow-hidden shadow-md">
                        <button className="p-1 hover:bg-blue-600 transition-colors duration-200">
                          <FiMove size={14} className="text-white" />
                        </button>
                        <button className="p-1 hover:bg-blue-600 transition-colors duration-200">
                          <FiMaximize2 size={14} className="text-white" />
                        </button>
                        <button className="p-1 hover:bg-blue-600 transition-colors duration-200">
                          <FiCornerRightDown size={14} className="text-white" />
                        </button>
                      </div>
                    </div>
                  )}
                  {addedImages.map(img => (
                    <Rnd
                      key={img.id}
                      position={img.position}
                      size={img.size}
                      onDragStop={(e, d) => updateImagePosition(img.id, { x: d.x, y: d.y })}
                      onResizeStop={(e, direction, ref, delta, position) => {
                        updateImageSize(img.id, {
                          width: parseInt(ref.style.width),
                          height: parseInt(ref.style.height)
                        });
                        updateImagePosition(img.id, position);
                      }}
                      bounds="parent"
                    >
                      <Image
                        src={img.src}
                        alt="Added image"
                        layout="fill"
                        objectFit="contain"
                        style={{ pointerEvents: 'none' }}
                      />
                      <button
                        onClick={() => removeAddedImage(img.id)}
                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                        style={{ zIndex: 1000 }}
                      >
                        X
                      </button>
                    </Rnd>
                  ))}


                  {/* Code Section */}
                  <div className={`${activeTab === 'code' ? 'block' : 'hidden'} h-full`}>
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-full min-h-screen p-4 text-white bg-neutral-800 border-none outline-none"
                    />
                    <Suspense fallback={<div>Loading...</div>}>
                      <BuilderPage setCode={setCode} />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className={`bg-neutral-800 border-l border-neutral-700 flex flex-col transition-all duration-300 ${isRightSidebarMinimized ? 'w-14' : 'w-60'}`}>
          <div className="p-2 border-b border-neutral-700 flex justify-center items-center bg-neutral-800">
            <div className="flex items-center space-x-1">
              <button onClick={toggleRightSidebar} className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                {isRightSidebarMinimized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
              <button
                className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                onClick={() => setActiveTab('preview')}
              >
                <Eye size={20} />
              </button>
             
            
            </div>
          </div>

          {isRightSidebarMinimized ? (
            <div className="flex-grow overflow-y-auto  p-2">
              <div className="flex flex-col space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.onClick}
                    className="p-2 rounded-lg hover:bg-gray-700 bg-slate-200 transition-all duration-200 flex justify-center"
                    title={action.label}
                  >
                    {React.cloneElement(action.icon, { size: 20 })}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto px-2">


              <div className="space-y-8">
                {/* Image Settings */}
                <div className="bg-neutral-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-white flex items-center mb-4">
                    <FiImage className="mr-2" size={18} />
                    Image
                  </h3>
                  <div className="space-y-4">
                    <select
                      value={imageSize}
                      onChange={handleImageSizeChange}
                      className="w-full p-2 border border-neutral-700 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="small">Compact</option>
                      <option value="medium">Standard</option>
                      <option value="large">Expansive</option>
                    </select>
                    <div className="flex space-x-2">
                      <button onClick={applyImage} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors">Apply</button>
                      <button onClick={removeImage} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors">Remove</button>
                    </div>
                    <div className="relative">
                      <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <div className="w-full px-4 py-2 bg-gray-100 text-center text-gray-600 rounded-md border-2 border-dashed border-neutral-700 hover:bg-gray-200 transition-colors">
                        Upload Image
                      </div>
                    </div>
                    
                    {selectedDesignLabImage && (
                      <div className="mt-4">
                        <Image
                          src={selectedDesignLabImage.url}
                          alt="Selected design lab image"
                          width={300}
                          height={160}
                          objectFit="cover"
                          className="rounded-md"
                        />
                        <button
                          onClick={addSelectedImageToPreview}
                          className="mt-2 w-full px-4 py-2 bg-neutral-800 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
                        >
                          Add to Preview
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Color Settings */}
                <div className="bbg-neutral-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-white flex items-center mb-4">
                    <FiDroplet className="mr-2" size={18} />
                    Color
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      {selectedColors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <input
                            type="color"
                            value={color}
                            onChange={handleColorChange}
                            onClick={() => setActiveColorIndex(index)}
                            className={`w-12 h-12 rounded-full border-4 ${activeColorIndex === index ? 'border-indigo-500' : 'border-white'} shadow-inner`}
                          />
                          <div className="mt-1 text-xs text-gray-500 text-center">{color}</div>
                        </div>
                      ))}
                    </div>
                    <div className="h-8 rounded-md" style={{ background: `linear-gradient(45deg, ${selectedColors.join(', ')})` }}></div>
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={applyColor} className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors">Apply</button>
                      <button onClick={removeColor} className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors">Remove</button>
                      <button onClick={() => removeAppliedStyle('color')} className="col-span-2 px-4 py-2 bg-gray-600 text-white rounded-md text-sm hover:bg-gray-700 transition-colors">Reset Palette</button>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-white uppercase mb-2">Code Type</h3>
                  <select
                    value={codeType}
                    onChange={(e) => setCodeType(e.target.value)}
                    className="w-full p-2 border border-neutral-700 rounded-md text-sm"
                  >

                    <option value="jsx">Javascript</option>
                    <option value="tsx">Typescript</option>
                  </select>
                </div>
                {/* Animation Settings */}
                 <button
                className="px-1 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-200 transition-colors"
                onClick={saveCode}
              >
                <FiSave className="inline-block mr-1" size={14} />Export Code

              </button>
              
              <button
                className="px-1 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
                onClick={handleOpenLive}
              >
                <FiShare2 className="inline-block mr-1" size={14} />Live

              </button>

              </div>
            </div>
          )}


        </div>

        {/* Gallery Modal */}
        {isGalleryOpen && (
          <div className={`fixed inset-y-0 right-0 bg-neutral-600 shadow-lg z-50 transition-all duration-300 ${isGalleryMinimized ? 'w-16' : 'w-96'
            }`}>
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                {!isGalleryMinimized && <h2 className="text-xl font-bold">Gallery</h2>}
                <div className="flex items-center">
                  <button onClick={toggleMinimizeGallery} className="text-gray-500 hover:text-gray-700 mr-2">
                    {isGalleryMinimized ? <FiMaximize2 className="text-xl" /> : <FiMinimize2 className="text-xl" />}
                  </button>
                  <button onClick={toggleGallery} className="text-gray-500 hover:text-gray-700">
                    <FiX className="text-xl" />
                  </button>
                </div>
              </div>
              {!isGalleryMinimized && (
                <>
                  <div className="flex space-x-2 mb-4">
                    <button
                      onClick={() => setGalleryTab('images')}
                      className={`px-3 py-1 rounded ${galleryTab === 'images' ? 'bg-neutral-800 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      Theme
                    </button>
                   
                  </div>
                  <div className="flex-grow overflow-y-auto">
                    {galleryTab === 'images' && <Gallery onSelectImage={handleSelectGalleryImage} />}

                  </div>
                  {selectedGalleryImage && galleryTab !== 'client' && (
                    <button
                      onClick={applySelectedImage}
                      className="mt-4 w-full px-4 py-2 bg-neutral-800 text-white rounded hover:bg-indigo-700 transition duration-200"
                    >
                      Apply Selected {galleryTab === 'logos' ? 'Logo' : 'Image'}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* Minimized Gallery Preview */}
        {isGalleryOpen && isGalleryMinimized && selectedGalleryImage && (
          <div className="fixed bottom-4 right-20 bg-white p-2 rounded-lg shadow-md">
            <Image
              src={selectedGalleryImage.url ?? ''}
              alt="Selected gallery image"
              width={48}
              height={48}
              objectFit="cover"
              className="rounded"
            />
            <button
              onClick={applySelectedImage}
              className="mt-2 w-full px-2 py-1 bg-neutral-800 text-white text-xs rounded hover:bg-indigo-700 transition duration-200"
            >
              Apply
            </button>
          </div>
        )}


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




        {/* Global Styles */}
        <style jsx global>{`
            #preview-container *[data-image-id] {
              background-size: ${imageSize};
              background-position: center;
              background-repeat: no-repeat;
            }
            ${Object.entries(imageUrls).map(([imageId, url]) => `
              #preview-container *[data-image-id="${imageId}"] {
                background-image: url('${url}');
              }
            `).join('\n')}
            .typing-cursor::after {
              content: '|';
              animation: blink 0.7s infinite;
            }
            @keyframes blink {
              0% { opacity: 0; }
              50% { opacity: 1; }
              100% { opacity: 0; }
            }
          `}</style>
      </div>
    </div>

  );
};

export default CodePreview;


///latest in this everything is organised  in better way
