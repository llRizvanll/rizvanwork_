import React from 'react'
import { motion, MotionProps } from 'framer-motion'
import { AnimationConfig } from '../../types'
import { FADE_IN_UP, FADE_IN_DOWN, SCALE_ON_HOVER } from '../../constants'

interface AnimatedWrapperProps extends MotionProps {
  children: React.ReactNode
  animation?: 'fadeInUp' | 'fadeInDown' | 'scaleOnHover' | 'custom'
  customAnimation?: AnimationConfig
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
  as?: keyof React.JSX.IntrinsicElements
}

/**
 * Reusable animated wrapper component that provides consistent animations
 * 
 * @param props - Component props
 * @returns Animated component with specified animation
 */
export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animation = 'fadeInUp',
  customAnimation,
  className = '',
  delay = 0,
  duration,
  threshold = 0.1,
  triggerOnce = true,
  as = 'div',
  ...motionProps
}) => {
  // Get animation configuration based on type
  const getAnimationConfig = (): AnimationConfig => {
    switch (animation) {
      case 'fadeInUp':
        return {
          ...FADE_IN_UP,
          transition: {
            ...FADE_IN_UP.transition,
            delay,
            ...(duration && { duration })
          }
        }
      case 'fadeInDown':
        return {
          ...FADE_IN_DOWN,
          transition: {
            ...FADE_IN_DOWN.transition,
            delay,
            ...(duration && { duration })
          }
        }
      case 'scaleOnHover':
        return {
          initial: { opacity: 1, scale: 1 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: duration || 0.2 },
          ...SCALE_ON_HOVER
        }
      case 'custom':
        return customAnimation || FADE_IN_UP
      default:
        return FADE_IN_UP
    }
  }

  const animationConfig = getAnimationConfig()

  // Create motion component with proper element type
  const MotionComponent = motion[as as keyof typeof motion] as any

  return (
    <MotionComponent
      {...animationConfig}
      {...motionProps}
      className={className}
      whileInView={{
        ...(animationConfig.whileInView || {}),
        threshold,
        once: triggerOnce
      }}
      viewport={{ threshold, once: triggerOnce }}
    >
      {children}
    </MotionComponent>
  )
}

// Export specific animation variants for convenience
export const FadeInUp: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
  <AnimatedWrapper animation="fadeInUp" {...props} />
)

export const FadeInDown: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
  <AnimatedWrapper animation="fadeInDown" {...props} />
)

export const ScaleOnHover: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
  <AnimatedWrapper animation="scaleOnHover" {...props} />
)

export default AnimatedWrapper
