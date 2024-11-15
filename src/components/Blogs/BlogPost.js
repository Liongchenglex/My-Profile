// src/components/Blogs/BlogPost.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Clock, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // Optional: for markdown support
import { getPostBySlug, getRecommendedPosts  } from '../../data/blogPosts';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Prism from 'prismjs';
// Import Prism themes and languages you need
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = getPostBySlug(slug);
  const recommendedPosts = post ? getRecommendedPosts(post) : [];

    // Initialize syntax highlighting
    useEffect(() => {
      Prism.highlightAll();
    }, [post]);

    // Handle case where post is not found
    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <button
              onClick={() => navigate('/blogs')}
              className="text-indigo-600 hover:text-indigo-800"
            >
              Return to Blog
            </button>
          </div>
        </div>
      );
    }

      // Custom components for markdown rendering
  const components = {
    // Headers
    h1: ({ node, ...props }) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-6" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6" {...props} />
    ),
    // Paragraphs
    p: ({ node, ...props }) => (
      <p className="text-gray-600 leading-relaxed mb-6" {...props} />
    ),
    // Links
    a: ({ node, ...props }) => (
      <a 
        className="text-indigo-600 hover:text-indigo-800 underline" 
        target="_blank"
        rel="noopener noreferrer"
        {...props} 
      />
    ),
    // Lists
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside mb-6 text-gray-600" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal list-inside mb-6 text-gray-600" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="mb-2" {...props} />
    ),
    // Code blocks
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      return !inline ? (
        <div className="mb-6">
          <div className="bg-gray-800 rounded-t-lg px-4 py-2 text-sm text-gray-400">
            {language}
          </div>
          <pre className="line-numbers">
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code 
          className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm" 
          {...props}
        >
          {children}
        </code>
      );
    },
    // Blockquotes
    blockquote: ({ node, ...props }) => (
      <blockquote 
        className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 mb-6" 
        {...props} 
      />
    ),
    // Images
    img: ({ node, ...props }) => (
      <img 
        className="rounded-lg shadow-lg my-6 max-w-full h-auto" 
        {...props} 
      />
    ),
    // Tables
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table 
          className="min-w-full divide-y divide-gray-200 border" 
          {...props} 
        />
      </div>
    ),
    th: ({ node, ...props }) => (
      <th 
        className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" 
        {...props} 
      />
    ),
    td: ({ node, ...props }) => (
      <td 
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" 
        {...props} 
      />
    ),
  };

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft size={20} className="group-hover:text-indigo-600" />
            </motion.div>
            <span className="group-hover:text-indigo-600">Back to Blog</span>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime} read</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div> */}

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>
        
        {/* Tags */}
        <motion.div 
          className="mt-12 pt-8 border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <motion.button
                key={tag}
                // onClick={() => navigate(`/blogs?section=${post.section}&tag=${tag}`)}
                className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm hover:bg-indigo-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Recommended Posts Section */}
      {recommendedPosts.length > 0 && (
        <motion.section 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recommended Reads
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {recommendedPosts.map((recommendedPost, index) => (
                <motion.div
                  key={recommendedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    onClick={() => {
                      // Force a reload to ensure clean state
                      window.location.href = `/blogs/${recommendedPost.slug}`;
                      // Alternatively, if you want to use React Router navigation:
                      // navigate(`/blogs/${recommendedPost.slug}`, { replace: true });
                    }}
                  >
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden cursor-pointer">
                      <motion.img
                        src={recommendedPost.image}
                        alt={recommendedPost.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Overlay with shared tags */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <div className="flex flex-wrap gap-2">
                          {recommendedPost.tags
                            .filter(tag => post.tags.includes(tag))
                            .map(tag => (
                              <span 
                                key={tag}
                                className="text-xs text-white bg-white/20 px-2 py-1 rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* Post Info */}
                    <div className="p-4 cursor-pointer">
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                        {recommendedPost.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {recommendedPost.readTime}
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center text-indigo-600"
                        >
                          Read more
                          <ArrowRight size={14} className="ml-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>
      )}
    </article>
  );
};

export default BlogPost;