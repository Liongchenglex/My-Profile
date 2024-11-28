// src/components/Projects/index.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  // Status badge styles
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'mvp':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Projects
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A collection of my work and side projects
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.article
                key={project.id}
                layoutId={`project-${project.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => navigate(`/projects/${project.slug}`)} 
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Links Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4"
                  >
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <Github size={24} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Problem Statement */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-2 ">
                      Problem Statement
                    </h3>
                    <p className="text-gray-700 text-justify">
                      {project.brief.problemStatement}
                    </p>
                  </div>

                  {/* Solution Description */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2 y">
                      Solution
                    </h3>
                    <p className="text-gray-700 text-justify">
                      {project.brief.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    whileHover={{ gap: '12px' }}
                  >
                    View Details
                    <ChevronRight size={16} />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;