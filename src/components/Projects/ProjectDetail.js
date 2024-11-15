// src/components/Projects/ProjectDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../../data/projects';

// Section components
const TextSection = ({ title, content }) => (
  <div className="prose max-w-none">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

const ListSection = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const TechStackSection = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {Object.entries(items).map(([category, technologies]) => (
      <div key={category} className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 mb-2">{category}</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const GallerySection = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <img
            src={item.image}
            alt={item.caption}
            className="rounded-lg w-full"
          />
          <p className="text-sm text-gray-600">{item.caption}</p>
        </div>
      ))}
    </div>
  </div>
);

const MetricsSection = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
        >
          <span className="text-gray-600">{item.label}</span>
          <div className="text-right">
            <span className="font-bold text-gray-900">{item.value}</span>
            {item.change && (
              <span className={`ml-2 text-sm ${
                item.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'
              }`}>
                {item.change}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VideoSection = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="space-y-4">
          {/* Updated video container with better sizing */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
            <iframe
              src={item.url}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="pt-2">
            <h4 className="font-medium text-gray-900 text-lg">{item.title}</h4>
            {item.description && (
              <p className="text-gray-600 mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main component
const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) return null;

  // Map section types to components
  const sectionComponents = {
    text: TextSection,
    list: ListSection,
    'tech-stack': TechStackSection,
    gallery: GallerySection,
    metrics: MetricsSection,
    video: VideoSection 
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </button>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>
         
            <div className="flex items-center gap-6">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Github size={20} />
                  View Source
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brief Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Problem Statement
              </h3>
              <p className="text-gray-700">{project.brief.problemStatement}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Solution
              </h3>
              <p className="text-gray-700">{project.brief.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Sections */}
        <div className="grid grid-cols-1 gap-8">
          {project.sections.map((section, index) => {
            const SectionComponent = sectionComponents[section.type];
            if (!SectionComponent) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <SectionComponent {...section} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;