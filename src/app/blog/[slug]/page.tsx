'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { janblog } from '@/models/blogdata/jan/route';
import { janlast, janLast } from '@/models/blogdata/janlast/route';
import Head from 'next/head';
import Footer from '@/app/UI/footer/page';
import Nav from '@/app/UI/Nav/page';
import { FiClock, FiCalendar } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { feb,keywords} from '@/models/blogdata/feb/route';

// Remove the formatDate function as we won't need it anymore

const BlogPost: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const allPosts = [...janblog,...janlast,...feb,];
  const post = allPosts.find((p) => p.slug === slug);

  useEffect(() => {
    // Wait for client-side hydration to complete
    setIsLoading(false);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#03050a] to-[#1E293B] text-gray-100">
        <Nav />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <p className="text-gray-400">The blog post you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A1122] to-[#02071c] text-gray-100">
        <Nav />
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-6"></div>
            <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
    


  <div className="mt-40 md:mt-60"> {/* Increased gap */}
      <Nav />
      </div>
      <div className="bg-gradient-to-b from-[#0A1122] to-[#02071c] text-gray-100 min-h-screen">

        
        <main className="container mx-auto px-4 pt-24"> {/* Changed pt-32 to pt-24 for better spacing */}
          {/* Article Header */}
          <div className="mb-8">
            {!isLoading && (
              <>
                <h1 className="text-4xl font-bold mb-4 text-white"> {/* Removed gradient classes, added text-white */}
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-300">
                  {post.summary}
                </p>
              </>
            )}
          </div>

          {/* Article Content */}
          <article>
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-200"
            />
          </article>

          {/* Date and Read Time - Moved below content */}
          <div className="flex items-center gap-4 text-gray-400 my-8 border-t border-gray-800 pt-8">
            <span className="flex items-center">
              <FiClock className="mr-2" /> 5 min read
            </span>
            <span className="flex items-center">
              <FiCalendar className="mr-2" /> {post.publishDate}
            </span>
          </div>

          {/* Call to Action */}
          {post.buyNowLink && (
            <div className="mt-12 text-center">
              <a
                href={post.buyNowLink}
                className="inline-block px-8 py-4 bg-neutral-950 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Get Started Now
              </a>
            </div>
          )}

          {/* Recommended Posts */}
          <div className="max-w-6xl mx-auto mt-16 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Recommended Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {allPosts
                .filter(p => p.slug !== slug)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map((recommendedPost) => (
                  <a
                    key={recommendedPost.slug}
                    href={`/blog/${recommendedPost.slug}`}
                    className="block group"
                  >
                    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl p-6 
                                  hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300
                                  border border-neutral-800 hover:border-blue-500/50">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-neutral-400">
                          <FiClock />
                          <span>5 min read</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 
                                     transition-colors line-clamp-2">
                          {recommendedPost.title}
                        </h3>
                        <p className="text-neutral-400 text-sm line-clamp-3">
                          {recommendedPost.summary}
                        </p>
                        <div className="flex items-center text-blue-400 text-sm font-medium pt-2">
                          Read More
                          <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
