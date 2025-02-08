"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Companies Worked', value: '5+' },
    { label: 'Mobile Apps', value: '20+' }
  ];

  const keyPoints = [
    {
      title: 'Mobile Development Expert',
      description: 'Specialized in Native and React Native mobile applications with a focus on performance and user experience.',
      icon: '📱'
    },
    {
      title: 'Full Stack Developer',
      description: 'Experienced in both frontend and backend development, creating comprehensive solutions.',
      icon: '💻'
    },
    {
      title: 'Team Leader',
      description: 'Led and mentored development teams, fostering collaboration and innovation.',
      icon: '👥'
    }
  ];

  // For placeholder image
  const placeholderImage = "/profile_image.jpeg"

  return (
    <Section id="about" className="bg-gradient-to-b from-fb-blue/5 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-fb-black">About Me</h2>
          <div className="w-20 h-1 bg-fb-blue mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
            <Image
                src={placeholderImage}
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                className="object-cover "
                priority
              />
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-fb-blue/10 rounded-full z-0"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-fb-blue/10 rounded-full z-0"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-fb-black">
              Hello, I'm <span className="text-fb-blue">Mohammed Rizvan</span>
            </h3>
            
            <p className="text-fb-grey leading-relaxed">
              With 10+ years of experience primarily in Mobile Applications, I have a strong 
              inclination towards full-stack development. My expertise lies in spearheading 
              app development, fostering collaboration, and enhancing user experiences across 
              diverse projects.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white rounded-lg shadow-lg border border-fb-grey/10"
                >
                  <h4 className="text-3xl font-bold text-fb-blue">{stat.value}</h4>
                  <p className="text-fb-grey text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-fb-grey/10"
                >
                  <span className="text-2xl">{point.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-fb-blue">{point.title}</h4>
                    <p className="text-fb-grey text-sm">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-fb-blue text-white rounded-lg hover:bg-fb-blue-light transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 border-2 border-fb-blue text-fb-blue rounded-lg hover:bg-fb-blue/5 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
