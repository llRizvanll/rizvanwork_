"use client";

import { motion } from "framer-motion";
import Section from "../Section";
import CompanyLogoCard from "./CompanyLogoCard"; 

const CompanyLogos: React.FC = () => {
  const companies = [
    {
      name: "Loop Health",
      logo: "/images/companies/loophealth.png",
      alt: "Loop Health Logo",
      year: "2022-2023",
      location: "Bangalore, India",
    },
    {
      name: "Baker Hughes",
      logo: "/images/companies/bhge.png",
      alt: "Baker Hughes Logo",
      year: "2017-2022",
      location: "Bangalore, India",
    },
    {
      name: "Justdial",
      logo: "/images/companies/jd.webp",
      alt: "Justdial Logo",
      year: "2012-2016",
      location: "Mumbai, India",
    },
    {
      name: "Shaw Academy",
      logo: "/images/companies/sh.png",
      alt: "Shaw Academy Logo",
      year: "2016-2017",
      location: "Bangalore, India",
    },
    {
      name: "Xelp Design",
      logo: "/images/companies/xelp.jpg",
      alt: "Xelp Design Logo",
      year: "2015-2016",
      location: "Mumbai, India",
    },
    {
      name: "Swiftsku",
      logo: "/images/companies/swiftsku.png",
      alt: "Swiftsku USA",
      year: "2023-2023",
      location: "Remote, USA",
    },
    {
      name: "NCR",
      logo: "/images/companies/ncr.jpg",
      alt: "NCR USA Logo",
      year: "2024-2025",
      location: "Remote, USA",
    },
    {
      name: "Expedia",
      logo: "/images/companies/expedia.webp",
      alt: "Expedia Logo",
      year: "2024-2024",
      location: "Remote, USA",
    },
    {
      name: "Irish Life",
      logo: "/images/companies/irishlife.svg",
      alt: "Irish Life Logo",
      year: "2023-2024",
      location: "Remote, Ireland(Europe)",
    }
  ];

  return (
    <Section id="company-logos" className="bg-white border-t border-[#DDDDDD] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-serif text-[#222222] mb-3">Professional Journey</h3>
          <div className="w-16 h-0.5 bg-[#222222] mx-auto"></div>
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
          <h3 className="text-2xl font-semibold text-[#222222] mb-4">Global Experience</h3>
          <p className="text-[#666666]">
            A decade of experience working with companies across India and the United States,
            contributing to diverse projects and teams.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default CompanyLogos;