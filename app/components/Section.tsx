'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative min-h-screen w-full py-20 ${className}`}
      style={{ opacity }}
    >
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 bg-white/90" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  )
}