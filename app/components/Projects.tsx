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
    <Section id="projects" className="bg-gradient-to-b from-fb-blue/5 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-fb-black mb-4">{heading}</h2>
          <p className="text-fb-grey max-w-2xl mx-auto">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-fb-blue text-white'
                  : 'bg-fb-blue/10 text-fb-blue hover:bg-fb-blue/20'
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
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-fb-grey/10 flex flex-col"
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
                  <p className="text-fb-grey mb-4">{project.description}</p>
        
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-fb-blue font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-fb-grey text-sm space-y-1">
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
                        className="px-3 py-1 text-sm bg-fb-blue/10 text-fb-blue rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
        
                {/* Project Link aligned to the bottom */}
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto inline-flex items-center gap-2 px-6 py-2 bg-fb-blue text-white rounded-full hover:bg-fb-blue-light transition-colors"
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
          <p className="text-fb-grey mb-6">
            {ctaText}
          </p>
          <motion.a
            href="https://github.com/llrizvanll"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-fb-blue text-white rounded-full hover:bg-fb-blue-light transition-colors"
          >
            {githubButtonText}
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  )
}