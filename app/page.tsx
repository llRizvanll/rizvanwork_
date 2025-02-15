'use client'

import { motion, useScroll } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import CompanyLogos from './components/CompanyLogos'

export default function Home() {
  const { scrollYProgress } = useScroll()

  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        const element = document.getElementById(id!)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <main className="relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-fb-blue transform-origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      
      <div className="relative">
        <section className="relative z-10">
          <Hero />
        </section>
        <section className="relative z-20">
          <About />
        </section>
        <section className="relative z-20">
          <Experience />
        </section>
        <section className="relative z-20">
          <Skills />
        </section>
        <section className="relative z-20">
          <Projects />
        </section>
        <section className="relative z-20">
          <Education />
        </section>
        <section className="relative z-20">
          <Contact />
        </section>
        <section className="relative z-20">
          <CompanyLogos />
        </section>
      </div>
    </main>
  )
}