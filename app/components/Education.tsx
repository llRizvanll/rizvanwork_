'use client'

import { motion } from 'framer-motion'
import Section from './Section'

export default function Education() {
  const education = [
    {
      degree: "M.Tech - Master's Degree in Computing Systems and Infrastructure",
      school: "Birla Institute of Technology & Science, Pilani",
      year: "2018 - 2020",
      icon: "🎓",
      description: "Focused on advanced computing systems and infrastructure management"
    },
    {
      degree: "B.E - Bachelor's Degree in Computer Science Engineering",
      school: "Visvesvaraya Technological University (VTU)",
      year: "2007 - 2011",
      icon: "🎓",
      description: "Core computer science fundamentals and engineering principles"
    }
  ]

  const courses = [
    {
      name: "Kotlin for Java developers by Jetbrains",
      period: "May 2020 — Jun 2020",
      provider: "Coursera/kotlin.org",
      icon: "⚡",
      certificate: "#" // Add your certificate link
    },
    {
      name: "Deep Learning Nanodegree Foundation Course",
      period: "Jun 2017 — Oct 2017",
      provider: "Udacity.com",
      icon: "🧠",
      certificate: "#"
    },
    {
      name: "C3 Advanced Application Development by C3.ai",
      period: "Mar 2020 — Mar 2020",
      provider: "Coursera/C3.ai",
      icon: "💻",
      certificate: "#"
    },
    {
      name: "Become a React Native Developer",
      period: "May 2020 — Sep 2020",
      provider: "Linkedin Learning",
      icon: "📱",
      certificate: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <Section id="education" className="bg-gradient-to-b from-white to-fb-blue/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-fb-black mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-fb-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formal Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-semibold mb-8 text-fb-blue flex items-center">
              <span className="text-3xl mr-2">🎓</span>
              Formal Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-fb-grey/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{edu.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-fb-black">{edu.degree}</h4>
                      <p className="text-fb-blue">{edu.school}</p>
                      <p className="text-fb-grey text-sm mt-1">{edu.year}</p>
                      <p className="text-fb-grey mt-2">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-semibold mb-8 text-fb-blue flex items-center">
              <span className="text-3xl mr-2">📜</span>
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-fb-grey/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{course.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-fb-black">{course.name}</h4>
                      <p className="text-fb-blue">{course.provider}</p>
                      <p className="text-fb-grey text-sm">{course.period}</p>
                    </div>
                    <motion.a
                      href={course.certificate}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-fb-blue hover:text-fb-blue-light transition-colors"
                    >
                      <span className="text-2xl">🔗</span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-fb-black mb-8">Continuous Learning</h3>
          <p className="text-fb-grey max-w-2xl mx-auto">
            Committed to continuous professional development through online courses,
            workshops, and industry certifications to stay current with the latest
            technologies and best practices.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}