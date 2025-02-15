'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import CourseCard from './CourseCard';

const Education: React.FC = () => {
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
  ];

  const courses = [
    {
      name: "Kotlin for Java developers by Jetbrains",
      period: "May 2020 — Jun 2020",
      provider: "Coursera/kotlin.org",
      icon: "⚡",
      certificate: "https://www.coursera.org/account/accomplishments/verify/PJTTHNLZQ5KS?utm_campaign=copybutton_certificate&utm_medium=certificate&utm_source=link", // Add your certificate link
      description: "Advanced Kotlin programming and Android development"
    },
    {
      name: "Deep Learning Nanodegree Foundation Course",
      period: "Jun 2017 — Oct 2017",
      provider: "Udacity.com",
      icon: "🧠",
      certificate: "https://drive.google.com/file/d/0B4R0clK0nq8GOVJXejlkaHlhRVE/view?resourcekey=0-VaTH9zueUISSjRNE7XeFnw",
      description: "Neural networks and deep learning fundamentals"
    },
    {
      name: "C3 Advanced Application Development by C3.ai",
      period: "Mar 2020 — Mar 2020",
      provider: "Coursera/C3.ai",
      icon: "💻",
      certificate: "https://www.coursera.org/account/accomplishments/verify/QPS5FRKYFRXZ?utm_campaign=copybutton_certificate&utm_medium=certificate&utm_source=link",
      description: "Enterprise-scale application development"
    },
    {
      name: "Become a React Native Developer",
      period: "May 2020 — Sep 2020",
      provider: "Linkedin Learning",
      icon: "📱",
      certificate: "https://www.linkedin.com/learning/certificates/0eac55e29fa7aefb745ed0c5fcf86c5c7956b69cc0567eeb42e5adbf2c4b54de?trk=backfilled_certificate",
      description: "Cross-platform mobile app development"
    }
  ];

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