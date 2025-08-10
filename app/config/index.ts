import { ThemeConfig } from '../types'

// Environment configuration
export const ENV_CONFIG = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
} as const

// Application configuration
export const APP_CONFIG = {
  name: 'Rizvan Hawaldar Portfolio',
  version: '1.0.0',
  description: 'Professional portfolio showcasing mobile and web development expertise',
  author: 'Rizvan Hawaldar',
  contact: {
    email: 'rizvan.hawaldar@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
  },
} as const

// Performance configuration
export const PERFORMANCE_CONFIG = {
  // Animation performance settings
  animation: {
    reducedMotion: false, // Respect user's motion preferences
    frameRate: 60,
    debounceDelay: 100,
    throttleDelay: 16, // ~60fps
  },
  // Image optimization
  images: {
    quality: 85,
    formats: ['webp', 'avif', 'jpeg'] as const,
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840] as const,
  },
  // Lazy loading
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '50px',
  },
} as const

// SEO configuration
export const SEO_CONFIG = {
  defaultTitle: 'Rizvan Hawaldar - Mobile & Web Developer',
  defaultDescription: 'Professional portfolio showcasing expertise in React Native, AI/ML, and full-stack development',
  defaultImage: '/assets/images/profile_image.jpeg',
  siteUrl: 'https://rizvan.work',
  twitterHandle: '@rizvan_hawaldar',
  keywords: [
    'React Native',
    'Mobile Development',
    'Web Development',
    'AI/ML',
    'TypeScript',
    'Kotlin',
    'Python',
    'Full Stack',
    'Portfolio',
  ],
} as const

// Analytics configuration
export const ANALYTICS_CONFIG = {
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
    enabled: process.env.NODE_ENV === 'production',
  },
  simpleAnalytics: {
    enabled: false,
    scriptUrl: 'https://scripts.simpleanalyticscdn.com/latest.js',
  },
} as const

// Feature flags for easy toggling
export const FEATURE_FLAGS = {
  // Enable/disable specific features
  animations: true,
  darkMode: false,
  offlineSupport: false,
  pwa: false,
  // Component-specific flags
  customCursor: true,
  backgroundEffects: true,
  scrollAnimations: true,
  // Performance flags
  imageOptimization: true,
  codeSplitting: true,
  lazyLoading: true,
} as const

// Theme configuration
export const THEME_CONFIG: ThemeConfig = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#f59e0b',
    background: '#ffffff',
    text: '#1f2937',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
} as const

// Content configuration
export const CONTENT_CONFIG = {
  // Pagination settings
  pagination: {
    projectsPerPage: 6,
    reposPerPage: 9,
  },
  // Search and filtering
  search: {
    minQueryLength: 2,
    maxResults: 50,
    debounceDelay: 300,
  },
  // Social media
  social: {
    platforms: ['github', 'linkedin', 'twitter'] as const,
    updateInterval: 300000, // 5 minutes
  },
} as const

// Error handling configuration
export const ERROR_CONFIG = {
  // Error boundaries
  errorBoundary: {
    fallbackUI: true,
    logErrors: true,
    retryAttempts: 3,
  },
  // API error handling
  api: {
    timeout: 10000,
    retryAttempts: 3,
    retryDelay: 1000,
  },
  // User feedback
  userFeedback: {
    showErrorMessages: true,
    errorMessageDuration: 5000,
    showRetryOptions: true,
  },
} as const

// Accessibility configuration
export const ACCESSIBILITY_CONFIG = {
  // ARIA labels and descriptions
  aria: {
    enableDescriptions: true,
    enableLiveRegions: true,
  },
  // Keyboard navigation
  keyboard: {
    enableFocusIndicators: true,
    enableKeyboardShortcuts: true,
    tabIndex: 'auto' as const,
  },
  // Screen reader support
  screenReader: {
    enableAnnouncements: true,
    enableSkipLinks: true,
  },
  // Color contrast
  contrast: {
    minimumRatio: 4.5,
    enableHighContrast: false,
  },
} as const

// Development and debugging configuration
export const DEV_CONFIG = {
  // Logging levels
  logging: {
    level: ENV_CONFIG.isDevelopment ? 'debug' : 'error',
    enableConsoleLogs: ENV_CONFIG.isDevelopment,
    enablePerformanceLogs: ENV_CONFIG.isDevelopment,
  },
  // Debug tools
  debug: {
    enableReactDevTools: ENV_CONFIG.isDevelopment,
    enablePerformanceProfiler: ENV_CONFIG.isDevelopment,
    enableErrorBoundary: true,
  },
  // Hot reload and development server
  development: {
    enableHotReload: ENV_CONFIG.isDevelopment,
    enableSourceMaps: ENV_CONFIG.isDevelopment,
    enableFastRefresh: true,
  },
} as const
