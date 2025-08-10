import { Project, TechSkill, Company, EducationItem, Skill } from '../types';

/**
 * Utility functions for common operations across the application
 */

/**
 * Filters projects by technology or category
 * @param projects - Array of projects to filter
 * @param filter - Filter string to match against
 * @returns Filtered array of projects
 */
export const filterProjects = (projects: Project[], filter: string): Project[] => {
  if (filter === 'All') return projects;

  return projects.filter(project =>
    project.tech.includes(filter) || project.category === filter
  );
};

/**
 * Sorts projects by a given criteria
 * @param projects - Array of projects to sort
 * @param sortBy - Sort criteria ('title', 'category', 'tech')
 * @param order - Sort order ('asc' or 'desc')
 * @returns Sorted array of projects
 */
export const sortProjects = (
  projects: Project[],
  sortBy: keyof Project = 'title',
  order: 'asc' | 'desc' = 'asc'
): Project[] => {
  return [...projects].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });
};

/**
 * Groups projects by category
 * @param projects - Array of projects to group
 * @returns Object with category keys and project arrays
 */
export const groupProjectsByCategory = (projects: Project[]): Record<string, Project[]> => {
  return projects.reduce((groups, project) => {
    const category = project.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(project);
    return groups;
  }, {} as Record<string, Project[]>);
};

/**
 * Gets unique technologies from all projects
 * @param projects - Array of projects
 * @returns Array of unique technology names
 */
export const getUniqueTechnologies = (projects: Project[]): string[] => {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.tech.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

/**
 * Formats date strings to a readable format
 * @param dateString - Date string to format
 * @param options - Intl.DateTimeFormatOptions for formatting
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  }
): string => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch {
    return dateString;
  }
};

/**
 * Truncates text to a specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to add when truncated
 * @returns Truncated text
 */
export const truncateText = (
  text: string,
  maxLength: number,
  suffix: string = '...'
): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + suffix;
};

/**
 * Generates a unique key for React components
 * @param prefix - Prefix for the key
 * @param id - Unique identifier
 * @returns Unique key string
 */
export const generateKey = (prefix: string, id: string | number): string => {
  return `${prefix}-${id}`;
};

/**
 * Debounces a function call
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttles a function call
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Checks if a value is within a specified range
 * @param value - Value to check
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Boolean indicating if value is in range
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * Capitalizes the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Generates a random ID
 * @param length - Length of the ID
 * @returns Random ID string
 */
export const generateRandomId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Deep clones an object
 * @param obj - Object to clone
 * @returns Deep cloned object
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as T;
  if (typeof obj === 'object') {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
};
