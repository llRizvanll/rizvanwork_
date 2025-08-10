import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { FADE_IN_UP, SCALE_ON_HOVER } from '../../constants';

interface ProjectSearchProps {
  projects: Project[];
  onSearchResults: (results: Project[]) => void;
  className?: string;
}

export const ProjectSearch: React.FC<ProjectSearchProps> = ({ 
  projects, 
  onSearchResults, 
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Get unique categories and technologies from projects
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(projects.map(p => p.category))];
    return cats;
  }, [projects]);

  const technologies = useMemo(() => {
    const techs = ['all', ...new Set(projects.flatMap(p => p.tech))];
    return techs;
  }, [projects]);

  // Filter projects based on search criteria
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.features.some(feature => 
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory = selectedCategory === 'all' || 
        project.category === selectedCategory;

      const matchesTech = selectedTech === 'all' || 
        project.tech.includes(selectedTech);

      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [projects, searchTerm, selectedCategory, selectedTech]);

  // Update parent component with filtered results
  useEffect(() => {
    onSearchResults(filteredProjects);
  }, [filteredProjects, onSearchResults]);

  return (
    <motion.div
      {...FADE_IN_UP}
      className={`space-y-4 ${className}`}
    >
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3">
        {/* Category Filter */}
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Technology Filter */}
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="tech-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Technology
          </label>
          <select
            id="tech-filter"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            {technologies.map(tech => (
              <option key={tech} value={tech}>
                {tech === 'all' ? 'All Technologies' : tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>

      {/* Clear Filters Button */}
      {(searchTerm !== '' || selectedCategory !== 'all' || selectedTech !== 'all') && (
        <motion.button
          {...SCALE_ON_HOVER}
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
            setSelectedTech('all');
          }}
          className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 transition-all"
        >
          Clear Filters
        </motion.button>
      )}
    </motion.div>
  );
};
