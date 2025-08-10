import { useState, useEffect, useCallback } from 'react';
import { RESPONSIVE_BREAKPOINTS } from '../constants';

export interface ResponsiveState {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isMobileLarge: boolean
  isTabletLarge: boolean
  screenWidth: number
  screenHeight: number
  orientation: 'portrait' | 'landscape'
}

export interface ResponsiveBreakpoints {
  isAbove: (breakpoint: keyof typeof RESPONSIVE_BREAKPOINTS) => boolean
  isBelow: (breakpoint: keyof typeof RESPONSIVE_BREAKPOINTS) => boolean
  isBetween: (min: keyof typeof RESPONSIVE_BREAKPOINTS, max: keyof typeof RESPONSIVE_BREAKPOINTS) => boolean
}

/**
 * Comprehensive responsive hook that provides device detection and responsive utilities
 *
 * @returns Object containing responsive state and utility functions
 */
export const useResponsive = (): ResponsiveState & ResponsiveBreakpoints => {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isMobileLarge: false,
    isTabletLarge: false,
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'portrait',
  });

  const updateResponsiveState = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newState: ResponsiveState = {
      isMobile: width < RESPONSIVE_BREAKPOINTS.tablet,
      isTablet: width >= RESPONSIVE_BREAKPOINTS.tablet && width < RESPONSIVE_BREAKPOINTS.desktop,
      isDesktop: width >= RESPONSIVE_BREAKPOINTS.desktop,
      isMobileLarge: width >= RESPONSIVE_BREAKPOINTS.mobileLarge && width < RESPONSIVE_BREAKPOINTS.tablet,
      isTabletLarge: width >= RESPONSIVE_BREAKPOINTS.tabletLarge,
      screenWidth: width,
      screenHeight: height,
      orientation: width > height ? 'landscape' : 'portrait',
    };

    setState(newState);
  }, []);

  useEffect(() => {
    // Initial check
    updateResponsiveState();

    // Add event listener for window resize with debouncing
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateResponsiveState, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', updateResponsiveState);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', updateResponsiveState);
      clearTimeout(timeoutId);
    };
  }, [updateResponsiveState]);

  // Utility functions for breakpoint checking
  const isAbove = useCallback((breakpoint: keyof typeof RESPONSIVE_BREAKPOINTS): boolean => {
    return state.screenWidth >= RESPONSIVE_BREAKPOINTS[breakpoint];
  }, [state.screenWidth]);

  const isBelow = useCallback((breakpoint: keyof typeof RESPONSIVE_BREAKPOINTS): boolean => {
    return state.screenWidth < RESPONSIVE_BREAKPOINTS[breakpoint];
  }, [state.screenWidth]);

  const isBetween = useCallback((
    min: keyof typeof RESPONSIVE_BREAKPOINTS,
    max: keyof typeof RESPONSIVE_BREAKPOINTS
  ): boolean => {
    return state.screenWidth >= RESPONSIVE_BREAKPOINTS[min] &&
           state.screenWidth < RESPONSIVE_BREAKPOINTS[max];
  }, [state.screenWidth]);

  return {
    ...state,
    isAbove,
    isBelow,
    isBetween,
  };
};
