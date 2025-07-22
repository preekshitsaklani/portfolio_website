// src/utils/filterUtils.js

import { projects } from '../data/projects';

// Extracting all unique tags from all projects
export const getAllUniqueTags = () => {
  const allTags = projects.reduce((tags, project) => {
    return [...tags, ...project.tags];
  }, []);
  
  // Remove duplicates and sort alphabetically
  return [...new Set(allTags)].sort();
};

// Filter projects by selected tags
export const filterProjectsByTags = (selectedTags) => {
  if (selectedTags.length === 0) {
    return projects;
  }
  
  return projects.filter(project => 
    selectedTags.some(tag => project.tags.includes(tag))
  );
};