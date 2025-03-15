import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { trackEvent } from "../../GoogleAnalytics";

export default function ProfileInfo() {
  const handleContactClick = () => {
    trackEvent('click', 'hero', 'contact_button');
  };

  const handleResumeClick = () => {
    trackEvent('click', 'hero', 'resume_download');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-fb-black">
        Rizvan Hawaldar
      </h1>
      
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-fb-blue">
        <Typewriter
          options={{
            strings: [
              'Mobile Software Engineer',
              'Mobile DevOps Engineer',
              'Mobile AI Engineer',
              'Performance Engineer for Mobile',
              'React Native Migration',
              'Mobile Security Engineer',
              'React Native Expert',
              'AI Engineering Enthusiast',
              'Android & iOS Developer'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </h2>
      
      <p className="text-base sm:text-lg mb-6 sm:mb-8 mx-auto md:mx-0 max-w-md text-gray-600">
        I build exceptional mobile experiences with code and creativity. Specializing in cross-platform solutions and AI/ML integrations.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium bg-fb-blue text-white hover:bg-fb-blue-dark transition-colors"
          onClick={handleContactClick}
        >
          Get In Touch
        </motion.a>
        
        <motion.a
          href="/assets/rizvan_hawaldar_2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium bg-white text-fb-blue border border-fb-blue hover:bg-fb-blue/10 transition-colors"
          onClick={handleResumeClick}
        >
          View Resume
        </motion.a>
      </div>
    </motion.div>
  );
} 