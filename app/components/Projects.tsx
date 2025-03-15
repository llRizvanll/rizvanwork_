'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import GitHubRepos from './GitHubRepos'
import Typewriter from 'typewriter-effect'
import { trackEvent } from '../GoogleAnalytics'
import { useTheme } from '../context/ThemeContext'
// List of technologies you work with
const techSkills = [
  { name: "React Native", logo: "/images/tech/rn_banner.png" },
  { name: "AI+ML", logo: "/images/tech/ai_plus_banner.jpg" },
  { name: "Ts/Js", logo: "/images/tech/jt_banner.webp" },
  { name: "Kotlin", logo: "/images/tech/kt_banner.png" },
  { name: "Java", logo: "/images/tech/jv_banner.png" },
  { name: "A-I", logo: "/images/tech/ai_banner.webp" },
  { name: "Python", logo: "/images/tech/py_banner.png" },
  { name: "Mobile DevOps", logo: "/images/tech/md_banner.png" },
]
export default function Projects() {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [activeFilter, setActiveFilter] = useState('Impact')
  const [loaded, setLoaded] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  useEffect(() => {
    // Only use loading animation in hacker theme
    if (isHackerTheme) {
      const timer1 = setTimeout(() => setLoaded(true), 800)
      const timer2 = setTimeout(() => setShowProjects(true), 1500)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    } else {
      // Immediately show content in default theme
      setLoaded(true)
      setShowProjects(true)
    }
  }, [isHackerTheme])

  // Reset component state when theme changes
  useEffect(() => {
    setActiveFilter('Impact')
  }, [theme])

  const projects = [
    {
      title: "Healthcare Mobile App",
      description:
        "React Native application for healthcare and insurance industry with real-time consultations.",
      tech: ["React Native", "TypeScript", "Redux", "Firebase", "Kotlin", "Ts/Js", "Mobile DevOps"],
      image: "/images/companies/lh_banner.webp",
      link: "https://play.google.com/store/apps/details?id=com.invoqhealth.loophealth.patient&hl=en",
      category: "Mobile",
      key: "Impact",
      features: [
        "Real-time doctor consultations",
        "Insurance claim processing",
        "Medical records management"
      ]
    },
    {
      title: "AI Visualization Framework",
      description: "Framework for visualizing AI/ML data with interactive components.",
      tech: ["Python", "React Native", "D3.js", "TensorFlow", "Kotlin", "Ts/Js", "Mobile DevOps"],
      image: "/images/companies/ai_ge.png",
      link: "https://bakerhughes.com",
      category: "Mobile/Web/AI",
      key: "Impact",
      features: [
        "Interactive data visualization",
        "Real-time analytics",
        "Custom chart components"
      ]
    },
    {
      title: "Logistics Platform",
      description:
        "Android application for fleet management and transport operations.",
      tech: ["Kotlin", "Android", "Google Maps API", "Firebase", "Ts/Js", "React Native", "iOS"],
      image: "/images/companies/4tigo_banner.jpg",
      link: "https://www.xelpmoc.in/4tigo",
      category: "Mobile",
      key: "Impact",
      features: [
        "Real-time tracking",
        "Route optimization",
        "Fleet management"
      ]
    }
    // If you want to show projects under 'More', ensure some projects have key: "More"
  ]

  const filters = ['Impact', 'More']

  // Updated filtering logic:
  const filteredProjects =
    activeFilter === 'Impact'
      ? projects.filter((project) => project.key === 'Impact')
      : projects.filter((project) => project.key !== 'Impact')

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    trackEvent('click', 'projects', `filter_${filter.toLowerCase()}`)
  }

  const handleProjectClick = (projectTitle: string) => {
    trackEvent('click', 'projects', `project_${projectTitle.toLowerCase().replace(/\s+/g, '_')}`)
  }

  return (
    <Section className={isHackerTheme ? "bg-black relative overflow-hidden" : ""}>
      {isHackerTheme && (
        <>
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="absolute inset-0 grid-pattern"></div>
        </>
      )}
      
      <div className={`max-w-6xl mx-auto px-4 ${isHackerTheme ? "relative z-10" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl font-bold mb-4 ${
            isHackerTheme ? "text-green-400 font-mono glitch-text" : "text-fb-black"
          }`}>
            {isHackerTheme ? "$ projects.exe" : "Projects & Tech Stacks"}
          </h2>
          <div className={`w-20 h-1 mx-auto ${
            isHackerTheme ? "bg-green-500" : "bg-fb-blue"
          }`}></div>
        </motion.div>

        {!loaded && isHackerTheme ? (
          <div className="font-mono text-green-400 space-y-2 text-center">
            <p>$ exec /bin/fetch_projects</p>
            <p className="text-green-300/70">Retrieving project database...</p>
            <div className="loading-dots flex justify-center space-x-2 mt-4">
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
            </div>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showProjects ? 1 : 0, y: showProjects ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Project filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {['Impact', 'Technology', 'Repositories'].map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => handleFilterClick(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter
                        ? isHackerTheme
                          ? 'bg-green-500 text-black font-mono'
                          : 'bg-fb-blue text-white'
                        : isHackerTheme
                          ? 'bg-green-900/20 text-green-400 border border-green-500/30 hover:bg-green-800/40 font-mono'
                          : 'bg-fb-blue/10 text-fb-blue hover:bg-fb-blue/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isHackerTheme ? `$ ${filter.toLowerCase()}` : filter}
                  </motion.button>
                ))}
              </div>

              {/* Dynamic content based on active filter */}
              {activeFilter === 'Impact' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Impact projects */}
                  <div className={`rounded-lg overflow-hidden shadow-lg ${
                    isHackerTheme ? 'bg-black/70 border border-green-500/30' : 'bg-white'
                  }`}>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 ${
                        isHackerTheme ? 'text-green-400 font-mono' : 'text-fb-black'
                      }`}>
                        {isHackerTheme ? 'LoopHealth_MobileApp' : 'Loop Health Mobile App'}
                      </h3>
                      <p className={isHackerTheme ? 'text-green-300/80 font-mono' : 'text-gray-700'}>
                        Led the development of healthcare mobile applications that provide virtual consultations, 
                        medicine delivery, and insurance claims processing to thousands of users daily.
                      </p>
                    </div>
                  </div>
                  
                  <div className={`rounded-lg overflow-hidden shadow-lg ${
                    isHackerTheme ? 'bg-black/70 border border-green-500/30' : 'bg-white'
                  }`}>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 ${
                        isHackerTheme ? 'text-green-400 font-mono' : 'text-fb-black'
                      }`}>
                        {isHackerTheme ? 'AI_Visualization_Framework' : 'AI Visualization Framework'}
                      </h3>
                      <p className={isHackerTheme ? 'text-green-300/80 font-mono' : 'text-gray-700'}>
                        Architected a cross-platform visualization framework that helps engineers and scientists 
                        analyze complex AI-generated data in the oil and gas industry.
                      </p>
                    </div>
                  </div>
                  
                  <div className={`rounded-lg overflow-hidden shadow-lg ${
                    isHackerTheme ? 'bg-black/70 border border-green-500/30' : 'bg-white'
                  }`}>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 ${
                        isHackerTheme ? 'text-green-400 font-mono' : 'text-fb-black'
                      }`}>
                        {isHackerTheme ? 'JustDial_MobileApps' : 'JustDial Mobile Apps'}
                      </h3>
                      <p className={isHackerTheme ? 'text-green-300/80 font-mono' : 'text-gray-700'}>
                        Scaled the JustDial mobile app to serve millions of users across multiple countries, 
                        providing local search, ratings, and reviews for businesses.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeFilter === 'Technology' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {techSkills.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-lg overflow-hidden shadow-md ${
                        isHackerTheme ? 'border border-green-500/30' : ''
                      }`}
                    >
                      <div className="relative h-32">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          fill
                          className="object-cover"
                        />
                        {isHackerTheme && <div className="absolute inset-0 bg-black/50"></div>}
                      </div>
                      <div className={`p-4 ${isHackerTheme ? 'bg-black' : 'bg-white'}`}>
                        <h3 className={`text-center font-medium ${
                          isHackerTheme ? 'text-green-400 font-mono' : 'text-fb-black'
                        }`}>
                          {tech.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeFilter === 'Repositories' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GitHubRepos />
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </div>
      
      {/* CSS for effects - only applied in hacker theme */}
      {isHackerTheme && (
        <style jsx>{`
          .matrix-rain {
            background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,255,0,0.05) 100%);
            background-size: 100% 100%;
            animation: rain 5s linear infinite;
          }
          
          .grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(0,255,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,0,0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          @keyframes rain {
            0% { background-position: 0 0; }
            100% { background-position: 0 100%; }
          }
          
          .glitch-text {
            position: relative;
          }
          
          .glitch-text::before {
            content: '$ projects.exe';
            position: absolute;
            left: -2px;
            text-shadow: 2px 0 #00ff00;
            top: 0;
            color: #00ff00;
            background: black;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            animation: glitch-anim 3s infinite linear alternate-reverse;
          }
          
          @keyframes glitch-anim {
            0% {
              clip: rect(0, 900px, 5px, 0);
            }
            20% {
              clip: rect(0, 900px, 5px, 0);
            }
            21% {
              clip: rect(0, 900px, 0, 0);
            }
            49% {
              clip: rect(0, 900px, 0, 0);
            }
            50% {
              clip: rect(0, 900px, 5px, 0);
            }
            100% {
              clip: rect(0, 900px, 0, 0);
            }
          }
        `}</style>
      )}
    </Section>
  )
}