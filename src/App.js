// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { projects } from './data/projects';
import { getAllUniqueTags, filterProjectsByTags } from './utils/filterUtils';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

// ProjectCard Component
const ProjectCard = ({ project, className, isVisible, isActive }) => {
  return (
    <div 
      className={`project-card ${className}`}
      style={{
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <div className="project-header">
        <div>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <a 
          href={project.colabLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="colab-link"
          style={{
            pointerEvents: 'auto',
            position: 'relative',
            zIndex: 1000
          }}
        >
          <span>📓</span>
          Open in Colab
        </a>
      </div>
      
      <div className="code-snippet">
        <pre>{project.codeSnippet}</pre>
      </div>
      
      <div className="tags-container">
        {project.tags.map((tag, index) => (
          <span 
            key={index} 
            className="tag"
            style={{
              pointerEvents: 'auto'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Grid Card Component
const GridCard = ({ project }) => {
  return (
    <div className="grid-card">
      <div className="project-header">
        <div>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <a 
          href={project.colabLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="colab-link"
        >
          <span>📓</span>
          Open in Colab
        </a>
      </div>
      
      <div className="code-snippet">
        <pre>{project.codeSnippet}</pre>
      </div>
      
      <div className="tags-container">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Filter Section Component
const FilterSection = ({ selectedTags, onTagToggle }) => {
  const allTags = getAllUniqueTags();
  
  return (
    <div className="filter-section">
      <h3 className="filter-title">Filter by Technology</h3>
      <div className="filter-tags">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`filter-tag ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  // State declarations
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showViewAll, setShowViewAll] = useState(false);
  const [allProjectsVisible, setAllProjectsVisible] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [darkMode, setDarkMode] = useState(true);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  // Scroll effect for stack view
  useEffect(() => {
    if (viewMode !== 'stack') return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      const heroHeight = windowHeight;
      
      if (scrollTop < heroHeight) {
        setCurrentProjectIndex(0);
        setShowViewAll(false);
        return;
      }
      
      const projectsScrollStart = heroHeight;
      const projectsScrollDistance = windowHeight * 4;
      const relativeScroll = scrollTop - projectsScrollStart;
      const scrollProgress = Math.min(relativeScroll / projectsScrollDistance, 1);
      
      const totalProjects = allProjectsVisible ? filteredProjects.length : 5;
      const newIndex = Math.floor(scrollProgress * totalProjects);
      const clampedIndex = Math.max(0, Math.min(newIndex, totalProjects - 1));
      
      setCurrentProjectIndex(clampedIndex);
      
      const shouldShow = clampedIndex >= 4 && 
                        !allProjectsVisible && 
                        filteredProjects.length > 5 &&
                        scrollProgress > 0.8;
      
      setShowViewAll(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode, allProjectsVisible, filteredProjects.length]);

  useEffect(() => {
    const newFilteredProjects = filterProjectsByTags(selectedTags);
    setFilteredProjects(newFilteredProjects);
    
    setCurrentProjectIndex(0);
    setShowViewAll(false);
    setAllProjectsVisible(false);
  }, [selectedTags]);

  // Function to get card position for stack animation
  const getCardPosition = (index) => {
    const diff = index - currentProjectIndex;
    
    if (diff === 0) return 'active';
    if (diff === -1) return 'exiting';
    if (diff === 1) return 'next';
    if (diff === 2) return 'hidden';
    if (diff === 3) return 'far';
    if (diff >= 4) return 'furthest';
    
    return 'furthest';
  };

  // Handle tag toggle
  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Handle view all button click
  const handleViewAll = () => {
    setAllProjectsVisible(true);
    setShowViewAll(false);
    setCurrentProjectIndex(0);
    
    // Smooth scroll back to start of projects
    setTimeout(() => {
      const projectsSection = document.querySelector('.projects-container');
      if (projectsSection) {
        const heroHeight = window.innerHeight;
        window.scrollTo({
          top: heroHeight + 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* Logo with Tooltip */}
        <div className="hero-logo-container">
          <div className="hero-logo-wrapper">
            <img 
              src={darkMode ? "./white_for_dark_mode.ico" : "./black_for_light_mode.ico"}
              alt="AI/ML Portfolio Logo"
              className="hero-logo"
            />
            <div className="logo-tooltip">
              This represents a 3D loss surface (Gradient Descent, very fundamental to AI) and Neural Networks together.
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <h1 className="hero-title">Namaskaram</h1>
        <p className="hero-subtitle">
          Crafting Intelligence Through Algorithms
        </p>
        <p className="hero-description">
          With a strong passion for technology, I am focused on progressing in the areas of artificial intelligence, machine learning, deep learning, and reinforcement learning. I consistently work to deepen my understanding of algorithms and data, approaching innovation in intelligent systems with dedication and precision.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        {/* View Toggle */}
        <div className="view-toggle-container">
          <div className="view-toggle">
            <button 
              className={`toggle-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button 
              className={`toggle-button ${viewMode === 'stack' ? 'active' : ''}`}
              onClick={() => setViewMode('stack')}
            >
              Stack View
            </button>
          </div>
        </div>

        {/* Filter Section - Only show in grid view */}
        {viewMode === 'grid' && (
          <FilterSection 
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
          />
        )}

        {/* Stack View */}
        {viewMode === 'stack' && (
          <div className="projects-container">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="stacked-cards">
              {(allProjectsVisible ? filteredProjects : filteredProjects.slice(0, 5)).map((project, index) => {
                const position = getCardPosition(index);
                const isActive = index === currentProjectIndex;
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className={position}
                    isVisible={index <= currentProjectIndex + 1}
                    isActive={isActive}
                  />
                );
              })}
              
              {/* View All Button */}
              {showViewAll && (
                <div className="view-all-button-container">
                  <button onClick={handleViewAll} className="view-all-button">
                    <span className="button-text">View All Projects</span>
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid-view">
            {filteredProjects.map((project) => (
              <GridCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* About Section */}
      <About darkMode={darkMode} />

      {/* Contact Section */}
      <Contact darkMode={darkMode} />

      {/* Scroll space for stack view */}
      {viewMode === 'stack' && (
        <div className="scroll-spacer"></div>
      )}
    </div>
  );
}

export default App;
