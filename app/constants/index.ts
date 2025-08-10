import { BREAKPOINTS } from '../types'

// Animation constants
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const

export const ANIMATION_DELAYS = {
  none: 0,
  small: 0.1,
  medium: 0.2,
  large: 0.3,
} as const

export const ANIMATION_EASINGS = {
  easeOut: [0.4, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.4, 0, 0.2, 1],
} as const

// Common animation variants
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: ANIMATION_DURATIONS.normal }
}

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: ANIMATION_DURATIONS.normal }
}

export const SCALE_ON_HOVER = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

// Responsive breakpoints
export const RESPONSIVE_BREAKPOINTS = {
  ...BREAKPOINTS,
  // Additional breakpoints for specific use cases
  mobileLarge: 480,
  tabletLarge: 1200,
} as const

// Z-index layers for consistent layering
export const Z_INDEX = {
  base: 0,
  content: 10,
  overlay: 20,
  modal: 30,
  tooltip: 40,
  notification: 50,
} as const

// Color palette (can be extended for theming)
export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
  },
  accent: {
    50: '#fef3c7',
    100: '#fde68a',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const

// Spacing scale
export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
} as const

// Typography scale
export const TYPOGRAPHY = {
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const

// Shadow configurations
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const

// Border radius values
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const

// API endpoints and configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.github.com',
  timeout: 10000,
  retries: 3,
} as const

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/llrizvanll',
  linkedin: 'https://linkedin.com/in/rizvan-hawaldar',
  twitter: 'https://twitter.com/rizvan_hawaldar',
} as const

// Navigation configuration
export const NAVIGATION = {
  sections: [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
} as const
