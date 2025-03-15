'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTheme } from '../../context/ThemeContext'
import { trackEvent } from '../../GoogleAnalytics'

// This would be replaced with your actual project data fetching logic
const getProjectDetails = (slug: string) => {
  // Sample data - in a real app, this would come from your API or CMS
  return {
    title: 'Project ' + slug.charAt(0).toUpperCase() + slug.slice(1),
    description: 'This is a detailed description of the project.',
    image: '/images/projects/placeholder.jpg',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    features: [
      'Cross-platform compatibility',
      'Real-time data synchronization',
      'Offline capabilities',
      'Push notifications'
    ],
    githubUrl: 'https://github.com/llRizvanll/project-example',
    liveUrl: 'https://example.com'
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params?.slug as string
  const project = getProjectDetails(slug)
  
  const { theme } = useTheme()
  const isHackerTheme = theme === 'hacker'
  const [loaded, setLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isHackerTheme) {
      const timer1 = setTimeout(() => setLoaded(true), 800)
      const timer2 = setTimeout(() => setShowContent(true), 1500)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    } else {
      setLoaded(true)
      setShowContent(true)
    }
  }, [isHackerTheme])

  const handleGithubClick = () => {
    trackEvent('click', 'project_detail', `github_${slug}`)
  }

  const handleLiveClick = () => {
    trackEvent('click', 'project_detail', `live_${slug}`)
  }

  return (
    <>
      <Navbar />
      <main className={`pt-24 min-h-screen ${isHackerTheme ? "bg-black text-green-400 relative overflow-hidden" : ""}`}>
        {isHackerTheme && (
          <>
            <div className="absolute inset-0 matrix-rain"></div>
            <div className="absolute inset-0 grid-pattern"></div>
          </>
        )}
        
        <div className={`container mx-auto px-4 py-12 ${isHackerTheme ? "relative z-10" : ""}`}>
          {!loaded && isHackerTheme ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-green-400 font-mono">
              <p>$ loading project_{slug}.dat</p>
              <p className="text-green-300/70 mt-2">Initializing project data...</p>
              <div className="loading-dots flex justify-center space-x-2 mt-4">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="/projects" 
                className={`inline-flex items-center mb-8 ${
                  isHackerTheme 
                    ? "text-green-400 hover:text-green-300 font-mono" 
                    : "text-fb-blue hover:text-fb-blue-dark"
                }`}
              >
                {isHackerTheme ? '$ cd ..' : '← Back to all projects'}
              </Link>
              
              <h1 className={`text-4xl font-bold mb-8 ${isHackerTheme ? "text-green-500 font-mono glitch-text" : ""}`}>
                {isHackerTheme ? `$ cat ${slug}.md` : project.title}
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className={`lg:col-span-2 ${isHackerTheme ? "border border-green-500/30 p-6 bg-black/80" : ""}`}>
                  <div className={`mb-8 relative ${isHackerTheme ? "border border-green-500/30 p-2" : ""}`}>
                    {isHackerTheme && <div className="absolute inset-0 bg-grid-green opacity-20"></div>}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={500}
                      className="w-full h-auto rounded"
                    />
                    {isHackerTheme && <div className="scan-line"></div>}
                  </div>
                  
                  <div className="mb-8">
                    <h2 className={`text-2xl font-semibold mb-4 ${isHackerTheme ? "text-green-400 font-mono" : ""}`}>
                      {isHackerTheme ? "# Description" : "Description"}
                    </h2>
                    <p className={isHackerTheme ? "text-green-300/90 font-mono" : "text-gray-700"}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <h2 className={`text-2xl font-semibold mb-4 ${isHackerTheme ? "text-green-400 font-mono" : ""}`}>
                      {isHackerTheme ? "# Key Features" : "Key Features"}
                    </h2>
                    <ul className={`list-disc pl-5 ${isHackerTheme ? "text-green-300/90 font-mono space-y-2" : "text-gray-700 space-y-2"}`}>
                      {project.features.map((feature, index) => (
                        <li key={index}>
                          {isHackerTheme ? `> ${feature}` : feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className={`mb-8 ${isHackerTheme ? "border border-green-500/30 p-6 bg-black/80" : "bg-gray-50 p-6 rounded-lg"}`}>
                    <h2 className={`text-xl font-semibold mb-4 ${isHackerTheme ? "text-green-400 font-mono" : ""}`}>
                      {isHackerTheme ? "# Technologies" : "Technologies Used"}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className={`px-3 py-1 rounded-full text-sm ${
                            isHackerTheme 
                              ? "bg-green-900/30 text-green-400 border border-green-500/30 font-mono" 
                              : "bg-fb-blue/10 text-fb-blue"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={isHackerTheme ? "border border-green-500/30 p-6 bg-black/80" : "bg-gray-50 p-6 rounded-lg"}>
                    <h2 className={`text-xl font-semibold mb-4 ${isHackerTheme ? "text-green-400 font-mono" : ""}`}>
                      {isHackerTheme ? "# Links" : "Project Links"}
                    </h2>
                    <div className="space-y-4">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-2 text-center rounded ${
                          isHackerTheme 
                            ? "bg-green-900/30 text-green-400 border border-green-500/30 hover:bg-green-800/40 font-mono" 
                            : "bg-fb-blue text-white hover:bg-fb-blue-dark"
                        }`}
                        onClick={handleGithubClick}
                      >
                        {isHackerTheme ? "$ git clone" : "View on GitHub"}
                      </a>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-2 text-center rounded ${
                          isHackerTheme 
                            ? "bg-black text-green-400 border border-green-500/30 hover:border-green-400 font-mono" 
                            : "bg-white text-fb-blue border border-fb-blue hover:bg-fb-blue/5"
                        }`}
                        onClick={handleLiveClick}
                      >
                        {isHackerTheme ? "$ ssh live_demo" : "View Live Demo"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
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
            
            .bg-grid-green {
              background-image: 
                linear-gradient(to right, rgba(0,255,0,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,255,0,0.1) 1px, transparent 1px);
              background-size: 8px 8px;
            }
            
            .scan-line {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 10px;
              background: rgba(0, 255, 0, 0.3);
              animation: scan 2s linear infinite;
              z-index: 10;
            }
            
            @keyframes scan {
              0% { top: 0%; }
              100% { top: 100%; }
            }
            
            @keyframes rain {
              0% { background-position: 0 0; }
              100% { background-position: 0 100%; }
            }
            
            .glitch-text {
              position: relative;
            }
            
            .glitch-text::before {
              content: '$ cat ${slug}.md';
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
      </main>
      <Footer />
    </>
  )
} 