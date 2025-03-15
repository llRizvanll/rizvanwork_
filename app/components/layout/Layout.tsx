'use client'

import { motion, useScroll } from 'framer-motion'
import Navbar from '../Navbar'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll()

  return (
    <main className="relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-fb-blue transform-origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      
      {children}
    </main>
  )
} 