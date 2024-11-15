// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the background image/circle
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image/circle with animation */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2" 
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-96 h-96 bg-indigo-200 rounded-full flex items-center justify-center 
                      blur-sm opacity-75 animate-pulse">
          {/* <span className="text-indigo-600">picture1.webp</span>  */}
        </div> 
        
        
      </motion.div>

      {/* Content container with higher z-index */}
      <div className="relative z-10 max-w-4xl h-screen flex items-center justify-center mx-auto px-6">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Animated title */}
          <motion.h1 
            className="text-6xl font-bold mb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: "linear-gradient(45deg, #4F46E5, #818CF8, #4F46E5)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            AI & Data
            <br />
            <span>ENTHUSIAST</span>
          </motion.h1>

          {/* Animated description */}
          <motion.p 
            className="text-xl text-gray-600 mb-12"
            variants={textVariants}
          >
            Harnessing AI to create solutions, and building solutions that harness AI.
            <br />
            <span>I'm also passionate about leveraging data to drive insights and innovation.</span>
          </motion.p>

          {/* Animated buttons */}
          <div className="flex gap-6 justify-center">
            <motion.button
              variants={buttonVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="px-8 py-3 bg-indigo-600 text-white rounded-full 
                       shadow-lg hover:shadow-xl transform transition-all 
                       duration-200 hover:bg-indigo-700"
            >
              <Link to="/projects">Projects</Link>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              custom={1}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 
                       rounded-full shadow-lg hover:shadow-xl transform 
                       transition-all duration-200 hover:bg-indigo-50"
            >
              <Link to="/contact">Contact Me</Link> 
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-200 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 rounded-full blur-xl" />
      </motion.div>
    </div>
  );
};

export default Hero;