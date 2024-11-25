// src/components/About.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineData, timelineTabs } from '../data/timeline';


const About = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [selectedRole, setSelectedRole] = useState(null);

  // Timeline data with integrated skills

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-indigo-600">
        <motion.div 
          className="h-[250px] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
            <motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.p 
                className="text-xl text-indigo-100"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Always learning and growing
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* About Section */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image Section */}
              <div className="md:w-1/3">
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square">
                  {/* Replace this div with your image when ready */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <img
                      src='images/picture2.jpeg'
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
   
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-6 text-indigo-600">
                  Hello! I'm Liong Cheng Lex
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4 text-justify">
                  My journey began in the courtrooms, but my heart found its true calling in the world of technology. 
                  The transition from law to tech wasn't just a career change – it was a natural evolution where I discovered that 
                  the analytical thinking I developed as a lawyer perfectly complemented my passion for building digital solutions.
                  I've always been fascinated by how technology can solve real-world problems, and this intersection of tech, business, 
                  and law is where I thrive.
                  </p>
                  <p className="text-justify">
                  I'm an eternally curious soul, always excited about learning something new and taking on fresh challenges. 
                  Whether it's exploring emerging technologies or understanding complex business problems, I find myself constantly driven to grow and innovate. My ultimate dream? 
                  Building products that make a real difference in people's lives. When I'm not diving into new technologies or brainstorming product ideas,
                  you'll find me seeking out opportunities to expand my horizons. 
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-indigo-600">My Journey</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b">
              {timelineTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedRole(null);
                  }}
                  className={`px-4 py-2 font-medium transition-colors relative
                    ${activeTab === tab.id 
                      ? 'text-indigo-600' 
                      : 'text-gray-500 hover:text-indigo-400'}`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {timelineData[activeTab].map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="ml-12 mb-12 relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      onClick={() => setSelectedRole(selectedRole === item.id ? null : item.id)}
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-12 top-2 w-4 h-4">
                        <div className={`w-4 h-4 ${
                          selectedRole === item.id 
                            ? 'bg-indigo-600 ring-4 ring-indigo-100' 
                            : 'bg-gray-300'
                          } rounded-full transition-all duration-300`} 
                        />
                        {selectedRole === item.id && (
                          <div className="absolute w-4 h-4 bg-indigo-400 rounded-full animate-ping" />
                        )}
                      </div>

                      {/* Content */}
                      <div 
                        className={`bg-gray-50 rounded-lg p-6 cursor-pointer
                          transition-all duration-300 ${
                            selectedRole === item.id 
                              ? 'shadow-lg ring-2 ring-indigo-100 scale-[1.02]'
                              : 'hover:shadow-md'
                          }`}
                      >
                        <div className="flex flex-wrap justify-between mb-2">
                          <h3 className={`text-xl font-bold ${
                            selectedRole === item.id ? 'text-indigo-600' : 'text-gray-700'
                          }`}>
                            {item.role}
                          </h3>
                          <span className="text-gray-500">{item.period}</span>
                        </div>
                        <div className="text-gray-600 mb-4">
                          {item.company}
                          {item.location && (
                            <span className="text-gray-400"> • {item.location}</span>
                          )}
                        </div>

                        {/* Experience Content */}
                        <motion.div
                          initial="collapsed"
                          animate={selectedRole === item.id ? "expanded" : "collapsed"}
                          variants={{
                            expanded: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0.8, height: "auto" }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Highlights */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-700 mb-2">Highlights:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                              {item.highlights.map((highlight, i) => (
                                <li key={i} className="mb-1">{highlight}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills - Only shown for professional experiences */}
                          {activeTab === 'professional' && item.skills && (
                            <div className="mt-6 pt-4 border-t border-gray-200">
                              <h4 className="font-semibold text-gray-700 mb-3">Skills:</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                  <span 
                                    key={i}
                                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;