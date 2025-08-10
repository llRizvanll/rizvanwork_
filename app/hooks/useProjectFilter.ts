/**
 * @fileoverview Custom hook for filtering projects based on selected technology/category.
 * Provides state management and filtering logic for project display.
 */

import { useState, useMemo, useCallback } from 'react';
import type { IProject, IProjectFilterReturn } from '../types';

/**
 * Custom hook for filtering projects based on selected technology/category.
 *
 * @param projects - Array of all projects to filter
 * @param defaultFilter - Default filter to apply initially
 * @returns Object containing activeFilter, setActiveFilter, and filteredProjects
 */
export function useProjectFilter(projects: IProject[], defaultFilter: string): IProjectFilterReturn {
  const [activeFilter, setActiveFilter] = useState<string>(defaultFilter);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.key === activeFilter ||
      project.tech.includes(activeFilter) ||
      project.category === activeFilter,
    );
  }, [projects, activeFilter]);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  return {
    activeFilter,
    setActiveFilter: handleFilterChange,
    filteredProjects,
  };
}
