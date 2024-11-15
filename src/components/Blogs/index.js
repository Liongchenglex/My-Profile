// src/components/Blogs/index.js
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, X, Filter } from 'lucide-react';
import { 
  blogSections, 
  blogPosts,
  getPostsBySection,
  getTagsBySection 
} from '../../data/blogPosts';

// Blog data structure
// const blogSections = {
//     'public-diary': {
//       title: 'Public Diary',
//       description: 'Personal thoughts and daily musings',
//       activeClass: 'bg-purple-600 text-white',
//       hoverClass: 'hover:bg-purple-50'
//     },
//     'technology': {
//       title: 'Technology',
//       description: 'Insights and experiences in tech',
//       activeClass: 'bg-blue-600 text-white',
//       hoverClass: 'hover:bg-blue-50'
//     },
//     'wellbeing': {
//       title: 'Wellbeing',
//       description: 'Health, mindfulness, and personal growth',
//       activeClass: 'bg-green-600 text-white',
//       hoverClass: 'hover:bg-green-50'
//     }
//   };

// Sample blog posts (you'll replace this with your actual data)
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Understanding Blockchain Fundamentals',
//     description: 'A deep dive into blockchain technology and its applications',
//     section: 'technology',
//     tags: ['blockchain', 'cryptocurrency', 'web3'],
//     date: '2024-01-15',
//     readTime: '5 min',
//     slug: 'understanding-blockchain-fundamentals',
//     image: '/api/placeholder/400/300'
//   },
//   {
//     id: 2,
//     title: 'Understanding Blockchain Fundamentals',
//     description: 'A deep dive into blockchain technology and its applications',
//     section: 'technology',
//     tags: ['blockchain', 'cryptocurrency', 'web3'],
//     date: '2024-01-15',
//     readTime: '5 min',
//     slug: 'understanding-blockchain-fundamentals',
//     image: '/api/placeholder/400/300'
//   },
//   // Add more posts...
// ];

const Blogs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('all');
    const [activeTags, setActiveTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    
  

  // Get all unique tags
  // const sectionTags = useMemo(() => {
  //   const tags = new Set();
  //   blogPosts
  //     .filter(post => activeSection === 'all' || post.section === activeSection)
  //     .forEach(post => {
  //       post.tags.forEach(tag => tags.add(tag));
  //     });
  //   return Array.from(tags);
  // }, [activeSection]); // Now depends on activeSection

   // Get tags for current section
   const sectionTags = useMemo(() => {
    return getTagsBySection(activeSection);
  }, [activeSection]);

  // Modify the filtered posts logic to handle section-specific filtering
  // const filteredPosts = useMemo(() => {
  //   return blogPosts.filter(post => {
  //     const matchesSection = activeSection === 'all' || post.section === activeSection;
  //     const matchesTags = activeTags.length === 0 || 
  //       activeTags.some(tag => post.tags.includes(tag));
  //     const matchesSearch = post.title.toLowerCase()
  //       .includes(searchQuery.toLowerCase()) ||
  //       post.description.toLowerCase().includes(searchQuery.toLowerCase());
      
  //     return matchesSection && matchesTags && matchesSearch;
  //   });
  // }, [activeSection, activeTags, searchQuery]);

  const filteredPosts = useMemo(() => {
    return getPostsBySection(activeSection).filter(post => {
      const matchesTags = activeTags.length === 0 || 
        activeTags.some(tag => post.tags.includes(tag));
      const matchesSearch = post.title.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesTags && matchesSearch;
    });
  }, [activeSection, activeTags, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const filterVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: {
          duration: 0.4
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-[300px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Thoughts, experiences, and insights
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <motion.div 
          className="relative mb-8"
          animate={{ 
            scale: isSearchFocused ? 1.02 : 1,
            boxShadow: isSearchFocused ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
          }}
        >
          <Search 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchQuery('')}
            >
              <X size={18} className="text-gray-400 hover:text-gray-600" />
            </motion.button>
          )}
        </motion.div>

        {/* Section Navigation */}
        <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeSection === 'all' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Posts
          </motion.button>
          {Object.entries(blogSections).map(([key, section]) => (
            <motion.button
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 rounded-full transition-colors ${
                activeSection === key
                    ? section.activeClass
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
                {section.title}
            </motion.button>
            ))}
        </motion.div>

      {/* Tags - Only show if there are tags for the current section */}
      {sectionTags.length > 0 && (
        <motion.div 
          className="mb-8"
          variants={filterVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap gap-2">
            {sectionTags.map(tag => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTags(prev => 
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  activeTags.includes(tag)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Add a visual indicator for active filters */}
      {activeTags.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-4 flex items-center gap-2"
        >
          <span className="text-sm text-gray-500">Active filters:</span>
          {activeTags.map(tag => (
            <span 
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-700"
            >
              #{tag}
              <button
                onClick={() => setActiveTags(prev => prev.filter(t => t !== tag))}
                className="ml-1 hover:text-indigo-900"
              >
                ×
              </button>
            </span>
          ))}
          <button
            onClick={() => setActiveTags([])}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Clear all
          </button>
        </motion.div>
      )}

      {/* Blog Posts Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

          <AnimatePresence mode="popLayout">
            {filteredPosts.map(post => (
              <motion.article
                key={post.id}
                layoutId={`post-${post.id}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                onClick={() => navigate(`/blogs/${post.slug}`)}
              >
                <motion.img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </motion.div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No posts found matching your criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blogs;