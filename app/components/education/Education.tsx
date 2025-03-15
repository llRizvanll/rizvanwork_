'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import CourseCard from './CourseCard';
import educationData from '@/data/education.json';

const Education: React.FC = () => {
  const { education, courses } = educationData;

  return (
    <Section id="education" className="bg-gradient-to-b from-white to-fb-blue/5">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-fb-black mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-fb-blue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formal Education */}
          <motion.div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-fb-blue flex items-center">
              <span className="text-3xl mr-2">{education[0].icon}</span>
              Formal Education
            </h3>
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
          </motion.div>

          {/* Certifications */}
          <motion.div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-fb-blue flex items-center">
              <span className="text-3xl mr-2">📜</span>
              Professional Certifications
            </h3>
            <div className="flex flex-col gap-6">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  name={course.name}
                  period={course.period}
                  provider={course.provider}
                  icon={course.icon}
                  certificate={course.certificate}
                  description={course.description}
                />
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
  );
};

export default Education;