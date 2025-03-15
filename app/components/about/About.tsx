'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import ProfileImage from './ProfileImage';
import KeyPoint from './KeyPoint';
import StatCard from './StatCard';
import aboutData from '@/data/about.json';

const About: React.FC = () => {
  const { stats, keyPoints } = aboutData;

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
            <ProfileImage />
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
              12+ years of experience in application development with Android, Java, Kotlin, and React Native. Respectfully have worked with startups and MNCs, worked on real face-value products that are used by millions of users.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
              {stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {keyPoints.map((point) => (
                <KeyPoint key={point.title} title={point.title} description={point.description} icon={point.icon} />
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
                href="/assets/rizvan_hawaldar_2024.pdf"
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
};

export default About;