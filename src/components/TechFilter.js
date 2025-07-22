// src/components/TechFilter.js
import React, { useState } from 'react';
import './TechFilter.css';

const TechFilter = ({ onFilterChange, onViewModeChange }) => {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [viewMode, setViewMode] = useState('stack'); // 'stack' or 'grid'

  // All available technologies from your projects
  const allTechnologies = [
    'CNN', 'Conv2D', 'Dense layers', 'GPT-2', 'Google Colab',
    'NLTK', 'OpenCV', 'Random Forest', 'SVM', 'Sequential',
    'TF-IDF', 'TensorBoard', 'deep learning', 'hyperparameter tuning',
    'image classification', 'keras', 'matplotlib', 'medical diagnosis',
    'medical imaging', 'neural networks', 'nltk', 'numpy',
    'pandas', 'scikit-learn', 'sentiment analysis', 'stock prediction',
    'tensorflow', 'text processing', 'time series', 'tokenizers',
    'torch', 'transformers', 'GridSearchCV', 'gradient descent',
    'Naive Bayes', 'Decision Trees', 'Logistic Regression',
    'ReLU', 'Softmax', 'MNIST', 'probability', 'entropy',
    'information gain', 'hypothesis', 'loss function'
  ];

  const handleTechClick = (tech) => {
    let newSelectedTechs;
    if (selectedTechs.includes(tech)) {
      newSelectedTechs = selectedTechs.filter(t => t !== tech);
    } else {
      newSelectedTechs = [...selectedTechs, tech];
    }
    setSelectedTechs(newSelectedTechs);
    onFilterChange(newSelectedTechs);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    onViewModeChange(mode);
  };

  const clearFilters = () => {
    setSelectedTechs([]);
    onFilterChange([]);
  };

  return (
    <div className="tech-filter-container">
      {/* View Mode Toggle */}
      <div className="view-mode-toggle">
        <button 
          className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => handleViewModeChange('grid')}
        >
          Grid View
        </button>
        <button 
          className={`view-btn ${viewMode === 'stack' ? 'active' : ''}`}
          onClick={() => handleViewModeChange('stack')}
        >
          Stack View
        </button>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-header">
          <h3>Filter by Technology</h3>
          {selectedTechs.length > 0 && (
            <button className="clear-filters" onClick={clearFilters}>
              Clear Filters ({selectedTechs.length})
            </button>
          )}
        </div>
        
        <div className="tech-tags">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              className={`tech-tag ${selectedTechs.includes(tech) ? 'selected' : ''}`}
              onClick={() => handleTechClick(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechFilter;