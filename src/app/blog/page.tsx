'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { janblog } from '@/models/blogdata/jan/route';
import { janlast, janLast } from '@/models/blogdata/janlast/route';
import Footer from '../UI/footer/page';
import Nav from '@/app/UI/Nav/page';
import { FiSearch, FiClock, FiCalendar, FiTag } from 'react-icons/fi';
import { feb,keywords} from '@/models/blogdata/feb/route';

const BlogList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allPosts = [...janblog,...janlast,...feb,];



  const filteredPosts = allPosts.filter(
    (post) =>

      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()))||
       (keywords ?? []).some(keyword => 
        keyword?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      
    
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080D1B] to-[#0c1337] text-gray-100">
      <Nav />
      
      {/* Hero Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
   Webdone
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          
        </div>
      </div>

      {/* Blog Posts List */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block mb-8 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all"
              >
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center">
                    <FiClock className="mr-2" /> 5 min read
                  </span>
                  <span className="flex items-center">
                    <FiCalendar className="mr-2" /> {post.publishDate}
                  </span>
                
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                <span className="text-blue-400 font-medium inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No posts found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
//without image
