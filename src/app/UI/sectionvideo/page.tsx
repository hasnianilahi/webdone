'use client';
import React, { useState } from 'react';
import { Play, Clock, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';

interface Video {
    id: number;
    youtubeId: string;
    title: string;
    duration: string;
    thumbnail: string;
    link: string;
}

const VideoSection = () => {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    const videos = [
        {
            id: 1,
            youtubeId: "SdRm6EFsn4I",
            title: "Build Simple React Landing Pages in 2 Minutes",
            duration: "1:35",
        },
        {
            id: 2,
            youtubeId: "YSgOKaSP37Q",
            title: "React Drag and Drop Builder ",
            duration: "1:24",
        },
        {
            id: 3,
            youtubeId: "sj9xzNciZ_8",
            title: "Turn a Basic Landing Page into a Cyberpunk style",
            duration: "3;19",
        }
    ].map(video => ({
        ...video,
        thumbnail: `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
        link: `https://www.youtube.com/watch?v=${video.youtubeId}`
    }));

    const VideoModal = ({ video, onClose }: { video: Video; onClose: () => void }) => (
        <div className="fixed inset-0 backdrop-blur-md bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900/90 rounded-xl max-w-4xl w-full backdrop-blur-lg border border-gray-700/50">
                <div className="p-4 flex justify-end">
                    <button onClick={onClose} className="text-white hover:text-gray-300">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="relative pt-[56.25%] mx-4 mb-4">
                    <iframe
                        className="absolute inset-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0A0A0F] bg-gradient-to-br from-gray-900 via-[#0F0F1A] to-gray-900">
           

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Watch How It Works
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Step-by-step tutorials on creating modern landing pages using AI
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group relative bg-gray-800/40 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div
                                className="relative cursor-pointer aspect-video"
                                onClick={() => setSelectedVideo(video)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setSelectedVideo(video);
                                    }
                                }}
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Play className="w-16 h-16 text-white" />
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                    {video.duration}
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white font-medium line-clamp-2">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
            </div>
        </div>
    );
};

export default VideoSection;
