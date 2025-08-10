'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import CompanyLogoCard from './CompanyLogoCard';

const CompanyLogos: React.FC = () => {
  const companies = [
    {
      name: 'Loop Health',
      logo: '/assets/images/companies/loophealth.png',
      alt: 'Loop Health Logo',
      year: '2022-2023',
      location: 'Bangalore, India',
    },
    {
      name: 'Baker Hughes',
      logo: '/assets/images/companies/bhge.png',
      alt: 'Baker Hughes Logo',
      year: '2017-2022',
      location: 'Bangalore, India',
    },
    {
      name: 'Justdial',
      logo: '/assets/images/companies/jd.webp',
      alt: 'Justdial Logo',
      year: '2012-2016',
      location: 'Mumbai, India',
    },
    {
      name: 'Shaw Academy',
      logo: '/assets/images/companies/sh.png',
      alt: 'Shaw Academy Logo',
      year: '2016-2017',
      location: 'Bangalore, India',
    },
    {
      name: 'Xelp Design',
      logo: '/assets/images/companies/xelp.jpg',
      alt: 'Xelp Design Logo',
      year: '2015-2016',
      location: 'Mumbai, India',
    },
    {
      name: 'Swiftsku',
      logo: '/assets/images/companies/swiftsku.png',
      alt: 'Swiftsku USA',
      year: '2023-2023',
      location: 'Remote, USA',
    },
    {
      name: 'NCR',
      logo: '/assets/images/companies/ncr.jpg',
      alt: 'NCR USA Logo',
      year: '-',
      location: 'Remote, USA',
    },
    {
      name: 'Expedia',
      logo: '/assets/images/companies/expedia.webp',
      alt: 'Expedia Logo',
      year: '2022-2023',
      location: 'Remote, USA',
    },
    {
      name: 'Irish Life',
      logo: '/assets/images/companies/irishlife.svg',
      alt: 'Irish Life Logo',
      year: '2022-2023',
      location: 'Remote, Ireland(Europe)',
    },
  ];

  return (
    <Section id="company-logos" className="relative overflow-hidden py-20">
      {/* Beautiful layered background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

        {/* Animated floating gradients */}
        <motion.div
          className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[30%] rounded-full bg-gradient-to-br from-blue-200/15 to-purple-200/10 blur-3xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)
            `,
          }}
        ></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 border border-blue-200 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block text-blue-600 font-medium text-sm uppercase tracking-wider mb-2 px-4 py-1 bg-blue-50 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Career Journey
          </motion.span>
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Professional Journey</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center flex-wrap gap-16 py-8">
            {companies.map((company, index) => (
              <CompanyLogoCard
                key={company.name}
                company={company}
                index={index}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Experience</h3>
          <p className="text-gray-600 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-blue-50">
            A decade of experience working with companies across India and the United States,
            contributing to diverse projects and teams, and building solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default CompanyLogos;
