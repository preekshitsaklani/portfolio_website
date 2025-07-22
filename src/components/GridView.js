// src/components/GridView.js
import React from 'react';
import './GridView.css';

const GridProjectCard = ({ project }) => {
  return (
    <div className="grid-project-card">
      <div className="grid-card-header">
        <h3 className="grid-project-title">{project.title}</h3>
        <a 
          href={project.colabLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="grid-colab-link"
        >
          <span>📓</span>
          Colab
        </a>
      </div>
      
      <p className="grid-project-description">{project.description}</p>
      
      <div className="grid-code-snippet">
        <pre>{project.codeSnippet}</pre>
      </div>
      
      <div className="grid-tags-container">
        {project.tags.map((tag, index) => (
          <span key={index} className="grid-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const GridView = ({ projects, filteredProjects, selectedTechs }) => {
  const projectsToShow = selectedTechs.length > 0 ? filteredProjects : projects;
  
  if (projectsToShow.length === 0) {
    return (
      <div className="no-results">
        <h3>No projects found</h3>
        <p>Try adjusting your technology filters</p>
      </div>
    );
  }
  
  return (
    <div className="grid-view-container">
      {selectedTechs.length > 0 && (
        <div className="filter-results-header">
          <h3>
            Found {projectsToShow.length} project{projectsToShow.length !== 1 ? 's' : ''} 
            {selectedTechs.length > 0 && (
              <span> matching: {selectedTechs.join(', ')}</span>
            )}
          </h3>
        </div>
      )}
      
      <div className="grid-projects">
        {projectsToShow.map((project) => (
          <GridProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default GridView;