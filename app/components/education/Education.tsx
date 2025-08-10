'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import CourseCard from './CourseCard';
import educationData from '@/data/education.json';
import { EducationBackground } from './EducationBackground';

interface EducationItem {
  icon: string;
  degree: string;
  school: string;
  year: string;
  description: string;
}

interface Course {
  name: string;
  period: string;
  provider: string;
  icon: string;
  certificate: string;
  description: string;
}

interface EducationData {
  education: EducationItem[];
  courses: Course[];
}

const Education: React.FC = () => {
  const { education, courses }: EducationData = educationData;

  return (
    <Section id="education" className="relative overflow-hidden py-24">
      <EducationBackground />

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
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
            Academic Journey
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formal Education */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-600 flex items-center">
              <span className="text-3xl mr-2">{education[0].icon}</span>
              Formal Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.1)' }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{edu.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                    <p className="text-blue-600">{edu.school}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                    <p className="text-gray-600 mt-2">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-600 flex items-center">
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Continuous Learning</h3>
          <p className="text-gray-600 max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-blue-50">
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
