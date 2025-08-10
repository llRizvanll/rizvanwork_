import { useState, useMemo, useCallback } from 'react'
import { Project, ProjectFilterReturn } from '../types'

/**
 * Custom hook for filtering projects based on selected technology/category
 * 
 * @param projects - Array of all projects
 * @param defaultFilter - Default filter to apply initially
 * @returns Object containing activeFilter, setActiveFilter, and filteredProjects
 */
export function useProjectFilter(projects: Project[], defaultFilter: string): ProjectFilterReturn {
  const [activeFilter, setActiveFilter] = useState<string>(defaultFilter)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }
    
    return projects.filter(project => 
      project.key === activeFilter || 
      project.tech.includes(activeFilter) || 
      project.category === activeFilter
    )
  }, [projects, activeFilter])

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter)
  }, [])

  return {
    activeFilter,
    setActiveFilter: handleFilterChange,
    filteredProjects
  }
}
