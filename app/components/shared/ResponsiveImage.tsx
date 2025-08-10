import React from 'react'
import Image from 'next/image'
import { useResponsive } from '../../hooks/useResponsive'
import { PERFORMANCE_CONFIG } from '../../config'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

/**
 * Responsive image component that optimizes images for different screen sizes
 * 
 * @param props - Component props
 * @returns Optimized image component
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = PERFORMANCE_CONFIG.images.quality,
  sizes,
  fill = false,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || (() => {
    if (isMobile) return '(max-width: 768px) 100vw'
    if (isTablet) return '(max-width: 1024px) 50vw'
    if (isDesktop) return '(max-width: 1280px) 33vw'
    return '100vw'
  })()

  // Determine optimal quality based on device
  const optimalQuality = isMobile ? Math.min(quality, 75) : quality

  // Generate responsive width and height if not provided
  const responsiveWidth = width || (() => {
    if (isMobile) return 400
    if (isTablet) return 600
    if (isDesktop) return 800
    return 1200
  })()

  const responsiveHeight = height || (() => {
    if (isMobile) return 300
    if (isTablet) return 450
    if (isDesktop) return 600
    return 900
  })()

  // Handle image loading states
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  // Show loading skeleton while image loads
  if (isLoading && placeholder === 'blur') {
    return (
      <div 
        className={`animate-pulse bg-gray-200 ${className}`}
        style={{ 
          width: fill ? '100%' : responsiveWidth, 
          height: fill ? '100%' : responsiveHeight 
        }}
      />
    )
  }

  // Show error state if image fails to load
  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 text-gray-500 ${className}`}
        style={{ 
          width: fill ? '100%' : responsiveWidth, 
          height: fill ? '100%' : responsiveHeight 
        }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : responsiveWidth}
        height={fill ? undefined : responsiveHeight}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority={priority}
        quality={optimalQuality}
        sizes={responsiveSizes}
        fill={fill}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: fill ? 'cover' : 'contain',
        }}
      />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      )}
    </div>
  )
}

// Export specific variants for common use cases
export const ProfileImage: React.FC<Omit<ResponsiveImageProps, 'fill' | 'sizes'>> = (props) => (
  <ResponsiveImage
    {...props}
    className={`rounded-full ${props.className || ''}`}
    priority={true}
  />
)

export const ProjectImage: React.FC<Omit<ResponsiveImageProps, 'fill' | 'sizes'>> = (props) => (
  <ResponsiveImage
    {...props}
    className={`rounded-lg ${props.className || ''}`}
    placeholder="blur"
  />
)

export const BackgroundImage: React.FC<Omit<ResponsiveImageProps, 'sizes'>> = (props) => (
  <ResponsiveImage
    {...props}
    fill={true}
    className={`object-cover ${props.className || ''}`}
    priority={false}
  />
)

export default ResponsiveImage
