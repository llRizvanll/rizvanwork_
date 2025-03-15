'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import Image from 'next/image'
import { useState } from 'react'
import GitHubRepos from './GitHubRepos'
import projectsData from '@/data/projects.json'

export default function Projects() {
  const { techSkills, projects, filters, heading, subheading, ctaText, githubButtonText } = projectsData;
  const [activeFilter, setActiveFilter] = useState(filters[0])

  // Updated filtering logic:
  const filteredProjects =
    activeFilter === 'Impact'
      ? projects.filter((project) => project.key === 'Impact')
      : projects.filter((project) => project.key !== 'Impact')

  return (
    <Section id="projects" className="relative overflow-hidden py-24">
      {/* Beautiful layered background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        
        {/* Animated floating gradients */}
        <motion.div 
          className="absolute -top-[30%] -left-[20%] w-[80%] h-[60%] rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[60%] rounded-full bg-gradient-to-tl from-blue-200/20 to-emerald-200/20 blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
              radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
            `
          }}
        ></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-40 h-40 border border-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-60 right-40 w-60 h-60 border border-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-blue-200 rounded-md opacity-30 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-blue-600 font-medium text-sm uppercase tracking-wider mb-2 px-4 py-1 bg-blue-50 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            My Work
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/80 text-blue-600 border border-blue-100 hover:bg-blue-50'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-blue-100/50 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
        
              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
        
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-blue-600 font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
        
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
        
                {/* Project Link aligned to the bottom */}
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md shadow-blue-500/20 transition-all"
                >
                  View Project
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        ) : (
          <div className="text-center mt-8">
            <GitHubRepos />
          </div>
        )}

        {/* Call to Action (always visible) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            {ctaText}
          </p>
          <motion.a
            href="https://github.com/llrizvanll"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg shadow-blue-500/20 transition-all"
          >
            {githubButtonText}
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  )
}