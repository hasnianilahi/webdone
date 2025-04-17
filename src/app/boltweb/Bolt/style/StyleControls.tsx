'use client'

import React, { useState, ChangeEvent, useRef } from 'react';
import { Droplet, Square, Type,ChevronDown, Image, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, ChevronRight, TextCursor, PaintBucket, Layout, Settings2, Layers, Palette, Sliders } from 'lucide-react';

interface StyleControlsProps {
    onStyleChange: (style: { [key: string]: string }) => void;
}

const StyleControls: React.FC<StyleControlsProps> = ({ onStyleChange = () => {} }) => {
    const [color, setColor] = useState<string>('#000000');
    const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
    const [fontSize, setFontSize] = useState<string>('16px');
    const [fontFamily, setFontFamily] = useState<string>('Arial, sans-serif');
    const [borderRadius, setBorderRadius] = useState<string>('rounded-none');
    const [shape, setShape] = useState<string>('none');
    const [imageSrc, setImageSrc] = useState<string>('');
    const [imageWidth, setImageWidth] = useState<number>(200);
    const [imageHeight, setImageHeight] = useState<number>(200);
    const [textAlign, setTextAlign] = useState<string>('left');
    const [fontWeight, setFontWeight] = useState<string>('normal');
    const [fontStyle, setFontStyle] = useState<string>('normal');
    const [textDecoration, setTextDecoration] = useState<string>('none');

    const [lineHeight, setLineHeight] = useState<string>('normal');
    const [letterSpacing, setLetterSpacing] = useState<string>('normal');
    const [textTransform, setTextTransform] = useState<string>('none');
    const [sectionsOpen, setSectionsOpen] = useState({
        text: false,
        colors: false,
        shape: false,
        textProperties: false
    });

    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

    const controls = [
        {
            id: 'text',
            icon: <TextCursor size={20} />,
            label: 'Text Styling',
            tooltip: 'Text formatting options'
        },
        {
            id: 'colors',
            icon: <PaintBucket size={20} />,
            label: 'Colors',
            tooltip: 'Color settings'
        },
        {
            id: 'shape',
            icon: <Layout size={20} />,
            label: 'Shape',
            tooltip: 'Shape and border options'
        },
        {
            id: 'textProperties',
            icon: <Settings2 size={20} />,
            label: 'Properties',
            tooltip: 'Advanced text properties'
        }
    ];

    const toggleSection = (section: keyof typeof sectionsOpen) => {
        setSectionsOpen(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleLineHeightChange = (value: string) => {
        setLineHeight(value);
        handleStyleChange('lineHeight', value);
    };

    const handleLetterSpacingChange = (value: string) => {
        setLetterSpacing(value);
        handleStyleChange('letterSpacing', value);
    };

    const handleTextTransformChange = (value: string) => {
        setTextTransform(value);
        handleStyleChange('textTransform', value);
    };

    const resizerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleStyleChange = (styleProperty: string, value: string) => {
        onStyleChange({ [styleProperty]: value });
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    const imageDataUrl = event.target.result as string;
                    setImageSrc(imageDataUrl);
                    handleStyleChange('imageSrc', imageDataUrl);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const container = containerRef.current;
        if (container) {
            const rect = container.getBoundingClientRect();
            setImageWidth(Math.max(e.clientX - rect.left, 50));
            setImageHeight(Math.max(e.clientY - rect.top, 50));
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTextAlign = (alignment: string) => {
        setTextAlign(alignment);
        handleStyleChange('textAlign', alignment);
    };

    const handleFontWeight = () => {
        const newWeight = fontWeight === 'normal' ? 'bold' : 'normal';
        setFontWeight(newWeight);
        handleStyleChange('fontWeight', newWeight);
    };

    const handleFontStyle = () => {
        const newStyle = fontStyle === 'normal' ? 'italic' : 'normal';
        setFontStyle(newStyle);
        handleStyleChange('fontStyle', newStyle);
    };

    const handleTextDecoration = () => {
        const newDecoration = textDecoration === 'none' ? 'underline' : 'none';
        setTextDecoration(newDecoration);
        handleStyleChange('textDecoration', newDecoration);
    };

    const handleApplyFontSize = () => {
        handleStyleChange('fontSize', fontSize);
    };

    return (
        <div className="bg-neutral-900 rounded-lg shadow-sm w-full p-3 text-sm">
            {/* Minimized View */}
            <div className="flex flex-col space-y-2">
                {controls.map((control) => (
                    <div
                        key={control.id}
                        className="relative"
                        onMouseEnter={() => setActiveTooltip(control.id)}
                        onMouseLeave={() => setActiveTooltip(null)}
                    >
                        <button
                            onClick={() => toggleSection(control.id as keyof typeof sectionsOpen)}
                            className={`w-full flex items-center p-2 rounded-lg transition-all duration-200 ${
                                sectionsOpen[control.id as keyof typeof sectionsOpen]
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-neutral-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    {control.icon}
                                    <span className="ml-2 text-sm">{control.label}</span>
                                </div>
                                {sectionsOpen[control.id as keyof typeof sectionsOpen] ? (
                                    <ChevronDown size={16} />
                                ) : (
                                    <ChevronRight size={16} />
                                )}
                            </div>
                        </button>

                        {/* Tooltip */}
                        {activeTooltip === control.id && !sectionsOpen[control.id as keyof typeof sectionsOpen] && (
                            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50">
                                {control.tooltip}
                            </div>
                        )}

                        {/* Section Content */}
                        {sectionsOpen[control.id as keyof typeof sectionsOpen] && (
                            <div className="mt-2 pl-8 pr-2 py-2 bg-neutral-800 rounded-lg">
                                {control.id === 'text' && (
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Font</label>
                                            <select
                            value={fontFamily}
                            onChange={(e) => {
                                setFontFamily(e.target.value);
                                handleStyleChange('fontFamily', e.target.value);
                            }}
                            className="w-2/3 p-1 text-xs border rounded bg-gray-500"
                        >
                            <option value="Arial, sans-serif">Arial</option>
                            <option value="'Courier New', Courier, monospace">Courier New</option>
                            <option value="Georgia, serif">Georgia</option>
                            <option value="Tahoma, sans-serif">Tahoma</option>
                            <option value="'Times New Roman', Times, serif">Times New Roman</option>
                            <option value="Verdana, sans-serif">Verdana</option>
                            <option value="'Comic Sans MS', cursive">Comic Sans MS</option>
                            <option value="'Impact', sans-serif">Impact</option>
                            <option value="'Lucida Console', Monaco, monospace">Lucida Console</option>
                            <option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">Palatino Linotype</option>
                            <option value="'Segoe UI', Tahoma, Geneva, sans-serif">Segoe UI</option>
                            <option value="'Trebuchet MS', Helvetica, sans-serif">Trebuchet MS</option>
                            <option value="'Arial Black', Gadget, sans-serif">Arial Black</option>
                            <option value="'Frank Ruhl Libre', serif">Frank Ruhl Libre</option>
                            <option value="'Fira Sans', sans-serif">Fira Sans</option>
                            <option value="'Open Sans', sans-serif">Open Sans</option>
                            <option value="'Roboto', sans-serif">Roboto</option>
                            <option value="'Lora', serif">Lora</option>
                            <option value="'Merriweather', serif">Merriweather</option>
                            <option value="'Montserrat', sans-serif">Montserrat</option>
                            <option value="'Raleway', sans-serif">Raleway</option>
                            <option value="'Poppins', sans-serif">Poppins</option>
                            <option value="'Oswald', sans-serif">Oswald</option>
                            <option value="'Dancing Script', cursive">Dancing Script</option>
                            <option value="'Lobster', cursive">Lobster</option>
                            <option value="'Bebas Neue', sans-serif">Bebas Neue</option>
                            <option value="'Playfair Display', serif">Playfair Display</option>
                            <option value="'Source Sans Pro', sans-serif">Source Sans Pro</option>
                            <option value="'Noto Sans', sans-serif">Noto Sans</option>
                            <option value="'Ubuntu', sans-serif">Ubuntu</option>
                            <option value="'Raleway', sans-serif">Raleway</option>
                            <option value="'Titillium Web', sans-serif">Titillium Web</option>
                            <option value="'Quicksand', sans-serif">Quicksand</option>
                            <option value="'Zilla Slab', serif">Zilla Slab</option>
                            <option value="'Cabin', sans-serif">Cabin</option>
                            <option value="'Inconsolata', monospace">Inconsolata</option>
                            <option value="'Noto Serif', serif">Noto Serif</option>
                            <option value="'Work Sans', sans-serif">Work Sans</option>
                            <option value="'E40', sans-serif">E40</option>
                            <option value="'Alegreya', serif">Alegreya</option>
                            <option value="'Bitter', serif">Bitter</option>
                            <option value="'Cairo', sans-serif">Cairo</option>
                            <option value="'Droid Sans', sans-serif">Droid Sans</option>
                            <option value="'Exo', sans-serif">Exo</option>
                            <option value="'Fjalla One', sans-serif">Fjalla One</option>
                            <option value="'Gloock', serif">Gloock</option>
                            <option value="'Hind', sans-serif">Hind</option>
                            <option value="'Julius Sans One', sans-serif">Julius Sans One</option>
                            <option value="'Karla', sans-serif">Karla</option>
                            <option value="'Lato', sans-serif">Lato</option>
                            <option value="'Muli', sans-serif">Muli</option>
                            <option value="'Noto Sans JP', sans-serif">Noto Sans JP</option>
                            <option value="'Oxygen', sans-serif">Oxygen</option>
                            <option value="'PT Sans', sans-serif">PT Sans</option>
                            <option value="'Quattrocento', serif">Quattrocento</option>
                            <option value="'Raleway Dots', cursive">Raleway Dots</option>
                            <option value="'Satisfy', cursive">Satisfy</option>
                            <option value="'Titillium Web', sans-serif">Titillium Web</option>
                            <option value="'Varela Round', sans-serif">Varela Round</option>
                            <option value="'Zilla Slab Highlight', serif">Zilla Slab Highlight</option>
                            <option value="'Abril Fatface', serif">Abril Fatface</option>
                            <option value="'Averia Serif Libre', serif">Averia Serif Libre</option>
                            <option value="'Bree Serif', serif">Bree Serif</option>
                            <option value="'Creepster', cursive">Creepster</option>
                            <option value="'Dancing Script', cursive">Dancing Script</option>
                            <option value="'Eagle Lake', cursive">Eagle Lake</option>
                            <option value="'Fjalla One', sans-serif">Fjalla One</option>
                            <option value="'Gloock', serif">Gloock</option>
                            <option value="'Hind', sans-serif">Hind</option>
                            <option value="'Julius Sans One', sans-serif">Julius Sans One</option>
                            <option value="'Karla', sans-serif">Karla</option>
                            <option value="'Lato', sans-serif">Lato</option>
                            <option value="'Muli', sans-serif">Muli</option>
                            <option value="'Noto Sans JP', sans-serif">Noto Sans JP</option>
                            <option value="'Oxygen', sans-serif">Oxygen</option>
                            <option value="'PT Sans', sans-serif">PT Sans</option>
                            <option value="'Quattrocento', serif">Quattrocento</option>
                            <option value="'Raleway Dots', cursive">Raleway Dots</option>
                            <option value="'Satisfy', cursive">Satisfy</option>
                            <option value="'Titillium Web', sans-serif">Titillium Web</option>
                            <option value="'Varela Round', sans-serif">Varela Round</option>
                            <option value="'Zilla Slab Highlight', serif">Zilla Slab Highlight</option>
                            <option value="'Abril Fatface', serif">Abril Fatface</option>
                            <option value="'Averia Serif Libre', serif">Averia Serif Libre</option>
                            <option value="'Bree Serif', serif">Bree Serif</option>
                            <option value="'Creepster', cursive">Creepster</option>
                            <option value="'Dancing Script', cursive">Dancing Script</option>
                            <option value="'Eagle Lake', cursive">Eagle Lake</option>
                            <option value="'Fjalla One', sans-serif">Fjalla One</option>
                            <option value="'Gloock', serif">Gloock</option>
                            <option value="'Hind', sans-serif">Hind</option>
                            <option value="'Julius Sans One', sans-serif">Julius Sans One</option>
                            <option value="'Karla', sans-serif">Karla</option>
                            <option value="'Lato', sans-serif">Lato</option>
                            <option value="'Muli', sans-serif">Muli</option>
                            <option value="'Noto Sans JP', sans-serif">Noto Sans JP</option>
                            <option value="'Oxygen', sans-serif">Oxygen</option>
                            <option value="'PT Sans', sans-serif">PT Sans</option>
                            <option value="'Quattrocento', serif">Quattrocento</option>
                            <option value="'Raleway Dots', cursive">Raleway Dots</option>
                            <option value="'Satisfy', cursive">Satisfy</option>
                            <option value="'Titillium Web', sans-serif">Titillium Web</option>
                            <option value="'Varela Round', sans-serif">Varela Round</option>
                            <option value="'Zilla Slab Highlight', serif">Zilla Slab Highlight</option>
                        </select>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Size</label>
                                            <div className="flex items-center">
                                                <input
                                                    type="number"
                                                    value={fontSize.replace('px', '')}
                                                    onChange={(e) => {
                                                        const newSize = `${e.target.value}px`;
                                                        setFontSize(newSize);
                                                    }}
                                                    className="w-1/3 p-1 text-xs border rounded bg-gray-500"
                                                />
                                                <button onClick={handleApplyFontSize} className="ml-2 p-1 bg-gray-500 text-black-500 rounded">
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Style</label>
                                            <div className="flex space-x-1">
                                                <button onClick={handleFontWeight} className={`p-1 rounded ${fontWeight === 'bold' ? 'bg-blue-100 text-blue-600' : 'bg-gray-500 text-black'}`}>
                                                    <Bold size={14} />
                                                </button>
                                                <button onClick={handleFontStyle} className={`p-1 rounded ${fontStyle === 'italic' ? 'bg-blue-100 text-blue-600' : 'bg-gray-500 text-black'}`}>
                                                    <Italic size={14} />
                                                </button>
                                                <button onClick={handleTextDecoration} className={`p-1 rounded ${textDecoration === 'underline' ? 'bg-blue-100 text-blue-600' : 'bg-gray-500 text-black'}`}>
                                                    <Underline size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Align</label>
                                            <div className="flex space-x-1">
                                                <button onClick={() => handleTextAlign('left')} className={`p-1 rounded ${textAlign === 'left' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                                    <AlignLeft size={14} />
                                                </button>
                                                <button onClick={() => handleTextAlign('center')} className={`p-1 rounded ${textAlign === 'center' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                                    <AlignCenter size={14} />
                                                </button>
                                                <button onClick={() => handleTextAlign('right')} className={`p-1 rounded ${textAlign === 'right' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                                    <AlignRight size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {control.id === 'colors' && (
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Text</label>
                                            <div className="flex items-center">
                                                <input
                                                    type="color"
                                                    value={color}
                                                    onChange={(e) => {
                                                        setColor(e.target.value);
                                                        handleStyleChange('color', e.target.value);
                                                    }}
                                                    className="w-6 h-6 border bg-gray-500 rounded mr-1"
                                                />
                                                <input
                                                    type="text"
                                                    value={color}
                                                    onChange={(e) => {
                                                        setColor(e.target.value);
                                                        handleStyleChange('color', e.target.value);
                                                    }}
                                                    className="w-20 p-1 text-xs border rounded bg-gray-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Background</label>
                                            <div className="flex items-center">
                                                <input
                                                    type="color"
                                                    value={backgroundColor}
                                                    onChange={(e) => {
                                                        setBackgroundColor(e.target.value);
                                                        handleStyleChange('backgroundColor', e.target.value);
                                                    }}
                                                    className="w-6 h-6 border bg-gray-500 rounded mr-1"
                                                />
                                                <input
                                                    type="text"
                                                    value={backgroundColor}
                                                    onChange={(e) => {
                                                        setBackgroundColor(e.target.value);
                                                        handleStyleChange('backgroundColor', e.target.value);
                                                    }}
                                                    className="w-20 p-1 text-xs border rounded bg-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {control.id === 'shape' && (
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Border Radius</label>
                                            <select
                                                value={borderRadius}
                                                onChange={(e) => {
                                                    setBorderRadius(e.target.value);
                                                    handleStyleChange('class', e.target.value);
                                                }}
                                                className="w-2/3 p-1 text-xs border rounded bg-gray-500"
                                            >
                                                <option value="rounded-none">None</option>
                                                <option value="rounded-xl">Extra Large</option>
                                                <option value="rounded-3xl">Triple Extra Large</option>
                                            </select>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Shape</label>
                                            <select
                                                value={shape}
                                                onChange={(e) => {
                                                    setShape(e.target.value);
                                                    handleStyleChange('class', e.target.value === 'circle' ? 'rounded-full' : 'rounded-none');
                                                }}
                                                className="w-2/3 p-1 text-xs border rounded bg-gray-500"
                                            >
                                                <option value="none">None</option>
                                                <option value="circle">Circle</option>
                                                <option value="square">Square</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                                {control.id === 'textProperties' && (
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Line Height</label>
                                            <select
                                                value={lineHeight}
                                                onChange={(e) => handleLineHeightChange(e.target.value)}
                                                className="w-2/3 p-1 text-xs border rounded bg-gray-500"
                                            >
                                                <option value="normal">Normal</option>
                                                <option value="1.5">1.5</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Letter Spacing</label>
                                            <select
                                                value={letterSpacing}
                                                onChange={(e) => handleLetterSpacingChange(e.target.value)}
                                                className="w-2/3 p-1 text-xs border rounded bg-gray-500"
                                            >
                                                <option value="normal">Normal</option>
                                                <option value="0.1em">0.1em</option>
                                                <option value="0.2em">0.2em</option>
                                                <option value="0.3em">0.3em</option>
                                            </select>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label className="text-xs text-gray-500">Text Transform</label>
                                            <select
                                                value={textTransform}
                                                onChange={(e) => handleTextTransformChange(e.target.value)}
                                                className="w-2/3 p-1 text-xs border rounded bg-gray-500"
                                            >
                                                <option value="none">None</option>
                                                <option value="uppercase">Uppercase</option>
                                                <option value="lowercase">Lowercase</option>
                                                <option value="capitalize">Capitalize</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Quick Access Tools */}
            <div className="mt-4 flex justify-center space-x-2 border-t border-gray-700 pt-4">
                <button
                    className="p-2 rounded-lg bg-neutral-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200"
                    title="Layers"
                >
                    <Layers size={20} />
                </button>
                <button
                    className="p-2 rounded-lg bg-neutral-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200"
                    title="Color Palette"
                >
                    <Palette size={20} />
                </button>
                <button
                    className="p-2 rounded-lg bg-neutral-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200"
                    title="Effects"
                >
                    <Sliders size={20} />
                </button>
            </div>
        </div>
    );
};

export default StyleControls;

