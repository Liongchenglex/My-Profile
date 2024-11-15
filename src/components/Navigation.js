// src/components/Navigation.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { Github, Linkedin, Mail, Briefcase, User, MessageSquare, BookOpen } from 'lucide-react';

const Navigation = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Log the context usage
  const navigationContext = useNavigation();
  
  const { isExpanded, setIsExpanded } = navigationContext;

  // Define navItems
  const navItems = [
    { 
      name: 'Projects', 
      path: '/projects',
      icon: <Briefcase size={20} />,
      description: 'View my portfolio of work'
    },
    { 
      name: 'About', 
      path: '/about',
      icon: <User size={20} />,
      description: 'Learn more about me'
    },
    { 
      name: 'Blogs', 
      path: '/blogs',
      icon: <BookOpen size={20} />,
      description: 'Just my thoughts'
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: <MessageSquare size={20} />,
      description: 'Get in touch with me'
    }
  ];

  const sidebarVariants = {
    expanded: {
      width: "16rem",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    collapsed: {
      width: "4rem",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 h-full bg-white shadow-lg z-40
          ${isMobileMenuOpen ? 'left-0' : '-left-full'} 
          md:left-0`}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={sidebarVariants}
        initial={false}
      >
        {/* Collapse Toggle Button */}
        <button
          onClick={() => {
            console.log('Toggle button clicked, current isExpanded:', isExpanded);
            setIsExpanded(!isExpanded);
          }}
          className="hidden md:flex absolute -right-3 top-6 bg-white rounded-full p-1.5 shadow-lg z-50 hover:bg-gray-50"
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <div className="h-full flex flex-col">
          {/* Profile Section */}
          <motion.div 
            className={`flex flex-col items-center pt-6 pb-8 ${isExpanded ? 'px-6' : 'px-2'}`}
            onClick={() => navigate('/')}
          >
            {/* Profile Image */}
            <div className={`relative ${isExpanded ? 'w-32 h-32' : 'w-10 h-10'} transition-all duration-300`}>
              <img
                src="images/Profile.jpeg" 
                alt="Liong Cheng Lex"
                className="w-full h-full rounded-full object-cover border-2 border-indigo-200 cursor-pointer hover:border-indigo-400 transition-colors"
              />
            </div>

            {/* Name and Title - Only show if expanded */}
            {isExpanded && (
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-indigo-600">Liong Cheng Lex</h2>
                <p className="text-sm text-gray-500 mt-1">AI and Data Enthusiast</p>
              </div>
            )}
          </motion.div>

          {/* Navigation Items */}
          <ul className={`flex-1 ${isExpanded ? 'px-4' : 'px-2'}`}>
            {console.log('About to map navItems:', navItems)}
            {navItems && navItems.map((item, index) => {
              console.log('Mapping item:', item, 'at index:', index);
              return (
                <motion.li 
                  key={item.name}
                  className="mb-2"
                  onClick={() => navigate(item.path)}
                >
                  <motion.div
                    className={`p-2 rounded-lg cursor-pointer transition-colors relative
                      ${location.pathname === item.path 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'hover:bg-gray-50'}`}
                  >
                    <div className={`flex items-center ${isExpanded ? 'justify-start' : 'justify-center'}`}>
                      <span className="text-gray-600">{item.icon}</span>
                      {isExpanded && (
                        <span className="ml-3 font-medium">{item.name}</span>
                      )}
                    </div>
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>

          {/* Footer */}
          {isExpanded && (
            <div className="absolute bottom-4 left-6 right-6 text-sm text-gray-400">
              <div className="flex justify-center space-x-4 mb-4">
                <a 
                  href="https://github.com/Liongchenglex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/liong-cheng-lex-90b983160/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:chenglex1@gmail.com"
                  className="hover:text-gray-600 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
              <div className="text-center">
                © 2024 Liong Cheng Lex
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;