/**
 * @fileoverview Projects section component that displays a portfolio of work
 * with filtering, search, and interactive project cards.
 */

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { ReactElement } from 'react';

import { useProjectFilter } from '../hooks/useProjectFilter';
import type { IProject, ITechSkill, IProjectsData } from '../types';
import { FADE_IN_DOWN, FADE_IN_UP, SCALE_ON_HOVER } from '../constants';
import { generateKey } from '../utils';
import projectsData from '@/data/projects.json';

import Section from './Section';
import GitHubRepos from './GitHubRepos';
import { ProjectsBackground } from './ProjectsBackground';
import { ProjectCard } from './ProjectCard';
import { ProjectSearch } from './shared/ProjectSearch';

// Type assertion for the imported JSON data
const typedProjectsData = projectsData as IProjectsData;

// Sub-components for better modularity
interface IProjectHeaderProps {
  heading: string;
  subheading: string;
}

/**
 * ProjectHeader component that displays the section title and description.
 *
 * @param props - The component props
 * @param props.heading - The main heading text
 * @param props.subheading - The subheading description text
 * @returns The ProjectHeader component JSX element
 */
const ProjectHeader = ({ heading, subheading }: IProjectHeaderProps): ReactElement => (
  <motion.div
    {...FADE_IN_DOWN}
    className="text-center mb-16"
  >
    <motion.span
      className="inline-block text-blue-600 font-medium text-sm uppercase tracking-wider mb-2 px-4 py-1 bg-blue-50 rounded-full"
      {...SCALE_ON_HOVER}
    >
      My Work
    </motion.span>
    <h2 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      {subheading}
    </p>
  </motion.div>
);

interface IProjectFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

/**
 * ProjectFilters component that displays filter buttons for project categories.
 *
 * @param props - The component props
 * @param props.filters - Array of available filter options
 * @param props.activeFilter - Currently selected filter
 * @param props.onFilterChange - Callback function when filter changes
 * @returns The ProjectFilters component JSX element
 */
const ProjectFilters = ({
  filters,
  activeFilter,
  onFilterChange,
}: IProjectFiltersProps): ReactElement => (
  <motion.div
    {...FADE_IN_UP}
    className="flex justify-center gap-4 mb-8 flex-wrap"
  >
    {filters.map((filter) => (
      <motion.button
        key={filter}
        {...SCALE_ON_HOVER}
        onClick={() => onFilterChange(filter)}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
          activeFilter === filter
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
            : 'bg-white/80 text-blue-600 border border-blue-100 hover:bg-blue-50'
        }`}
        aria-pressed={activeFilter === filter}
        aria-label={`Filter projects by ${filter}`}
      >
        {filter}
      </motion.button>
    ))}
  </motion.div>
);

interface IProjectGridProps {
  projects: IProject[];
}

/**
 * ProjectGrid component that displays a grid of project cards.
 *
 * @param props - The component props
 * @param props.projects - Array of projects to display
 * @returns The ProjectGrid component JSX element
 */
const ProjectGrid = ({ projects }: IProjectGridProps): ReactElement => (
  <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <ProjectCard
        key={generateKey('project', project.title)}
        project={project}
        index={index}
      />
    ))}
  </motion.div>
);

interface IProjectCTAProps {
  ctaText: string;
  githubButtonText: string;
}

/**
 * ProjectCTA component that displays call-to-action section with GitHub link.
 *
 * @param props - The component props
 * @param props.ctaText - The call-to-action text
 * @param props.githubButtonText - The GitHub button text
 * @returns The ProjectCTA component JSX element
 */
const ProjectCTA = ({ ctaText, githubButtonText }: IProjectCTAProps): ReactElement => (
  <motion.div
    {...FADE_IN_UP}
    transition={{ delay: 0.3 }}
    className="text-center mt-16"
  >
    <p className="text-gray-600 mb-6">
      {ctaText}
    </p>
    <motion.a
      href="https://github.com/llrizvanll"
      target="_blank"
      rel="noopener noreferrer"
      {...SCALE_ON_HOVER}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
      }}
      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg shadow-blue-500/20 transition-all"
      aria-label="Visit my GitHub profile to see more projects"
    >
      {githubButtonText}
      <span aria-hidden="true">→</span>
    </motion.a>
  </motion.div>
);

/**
 * Projects component that displays a portfolio of work with filtering and search capabilities.
 * Includes project cards, category filters, search functionality, and call-to-action.
 *
 * @returns The Projects component JSX element
 */
export function Projects(): ReactElement {
  const {
    techSkills,
    projects,
    filters,
    heading,
    subheading,
    ctaText,
    githubButtonText,
  } = typedProjectsData;

  const { activeFilter, setActiveFilter, filteredProjects: impactFilteredProjects } = useProjectFilter(projects, 'All');

  // State for search results
  const [searchResults, setSearchResults] = useState<IProject[]>(impactFilteredProjects);

  // Use search results if available, otherwise fall back to impact filtered projects
  const displayProjects = searchResults.length > 0 ? searchResults : impactFilteredProjects;

  return (
    <Section id="projects" className="relative overflow-hidden py-24">
      <ProjectsBackground />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Project Header */}
        <ProjectHeader heading={heading} subheading={subheading} />

        {/* Project Filters */}
        <ProjectFilters
          filters={['All', ...filters]}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Enhanced Search and Filtering */}
        <div className="mb-12">
          <ProjectSearch
            projects={projects}
            onSearchResults={setSearchResults}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Projects Grid or GitHub Repos */}
        {displayProjects.length > 0 ? (
          <ProjectGrid projects={displayProjects} />
        ) : (
          <div className="text-center mt-8">
            <GitHubRepos />
          </div>
        )}

        {/* Call to Action */}
        <ProjectCTA ctaText={ctaText} githubButtonText={githubButtonText} />
      </div>
    </Section>
  );
}

// Legacy default export for backward compatibility
export default Projects;
