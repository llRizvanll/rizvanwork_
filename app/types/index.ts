/**
 * @fileoverview Type definitions for the portfolio application.
 * Contains interfaces, types, and constants used throughout the application.
 */

// Core data types
export interface IProject {
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  features: string[];
  link: string;
  key: string;
}

export interface ITechSkill {
  name: string;
  logo: string;
}

export interface IProjectsData {
  techSkills: ITechSkill[];
  filters: string[];
  heading: string;
  subheading: string;
  ctaText: string;
  githubButtonText: string;
  projects: IProject[];
}

export interface ICompany {
  name: string;
  logo: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface IEducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  courses: string[];
  gpa?: string;
}

export interface ISkill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface IContactInfo {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface IHeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  profileImage: string;
  techSkills: string[];
}

export interface IAboutData {
  summary: string;
  keyPoints: string[];
  stats: {
    experience: string;
    projects: string;
    companies: string;
    technologies: string;
  };
}

// Component configuration types
export interface ISectionConfig {
  id: string;
  name: string;
  component: React.ComponentType;
  zIndex: number;
  className?: string;
  isVisible?: boolean;
}

// Hook return types
export interface IProjectFilterReturn {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filteredProjects: IProject[];
}

export interface IMobileDetectionReturn {
  mobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface IScrollAnimationReturn {
  isVisible: boolean;
  ref: React.RefObject<HTMLElement>;
}

// Animation and motion types
export interface IAnimationConfig {
  initial: object;
  animate: object;
  transition: object;
  whileHover?: object;
  whileTap?: object;
  whileInView?: object;
}

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// Theme and styling types
export interface IThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// API and data fetching types
export interface IApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface IGitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Legacy type aliases for backward compatibility
export type Project = IProject;
export type TechSkill = ITechSkill;
export type ProjectsData = IProjectsData;
export type Company = ICompany;
export type EducationItem = IEducationItem;
export type Skill = ISkill;
export type ContactInfo = IContactInfo;
export type HeroData = IHeroData;
export type AboutData = IAboutData;
export type SectionConfig = ISectionConfig;
export type ProjectFilterReturn = IProjectFilterReturn;
export type MobileDetectionReturn = IMobileDetectionReturn;
export type ScrollAnimationReturn = IScrollAnimationReturn;
export type AnimationConfig = IAnimationConfig;
export type ThemeConfig = IThemeConfig;
export type ApiResponse<T> = IApiResponse<T>;
export type GitHubRepo = IGitHubRepo;
