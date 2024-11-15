import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import Blogs from './components/Blogs';
import About from './components/About';
import { NavigationProvider } from './contexts/NavigationContext';
import BlogPost from './components/Blogs/BlogPost'; // New import
import Contact from './components/Contact';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  console.log('App rendering');
  return (
    <Router>
      <NavigationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} /> {/* Add this line */}
            <Route path="/blogs/:slug" element={<BlogPost />} /> {/* New route for individual blog posts */}
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </Layout>
      </NavigationProvider>
    </Router>
  );
};

export default App;