// src/components/Layout.js
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../contexts/NavigationContext';
import Footer from './shared/Footer';

const Layout = ({ children }) => {
  const { isExpanded } = useNavigation();
  const location = useLocation(); // Add this hook

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

React.useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  // Animation variants for the main content
  const mainContentVariants = {
    expanded: {
      marginLeft: windowWidth >= 768 ? "16rem" : "0", // 768px is Tailwind's md breakpoint
      transition: { duration: 0.3 }
    },
    collapsed: {
      marginLeft: windowWidth >= 768 ? "4rem" : "0",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <motion.main
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={mainContentVariants}
        className="min-h-screen transition-all duration-300 md:ml-auto" 
      >
        {children}
        {!['/','/contact'].includes(location.pathname) && <Footer />}
      </motion.main>
    </div>
  );
};

export default Layout;