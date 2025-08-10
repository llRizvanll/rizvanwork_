import { useEffect, useState, useCallback } from 'react'
import { MobileDetectionReturn } from '../types'
import { RESPONSIVE_BREAKPOINTS } from '../constants'

/**
 * Custom hook for detecting device type and screen size
 * Provides responsive breakpoint detection for mobile, tablet, and desktop
 * 
 * @returns Object containing mobile, isTablet, and isDesktop boolean values
 */
export const useMobileDetection = (): MobileDetectionReturn => {
  const [mobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  const checkDeviceType = useCallback(() => {
    const width = window.innerWidth
    
    const newMobile = width < RESPONSIVE_BREAKPOINTS.tablet
    const newTablet = width >= RESPONSIVE_BREAKPOINTS.tablet && width < RESPONSIVE_BREAKPOINTS.desktop
    const newDesktop = width >= RESPONSIVE_BREAKPOINTS.desktop
    
    setIsMobile(newMobile)
    setIsTablet(newTablet)
    setIsDesktop(newDesktop)
  }, [])

  useEffect(() => {
    // Initial check
    checkDeviceType()
    
    // Add event listener for window resize with debouncing
    let timeoutId: NodeJS.Timeout
    
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkDeviceType, 100)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [checkDeviceType])

  return { mobile, isTablet, isDesktop }
}
