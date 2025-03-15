'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface CourseCardProps {
  name: string;
  period: string;
  provider: string;
  icon: string;
  certificate: string;
  description: string;
  onCertificateClick: () => void;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  name, 
  period, 
  provider, 
  icon, 
  certificate, 
  description, 
  onCertificateClick,
  index 
}) => {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: isHackerTheme 
          ? "0 0 15px rgba(0, 255, 0, 0.3)" 
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-lg overflow-hidden ${
        isHackerTheme 
          ? "bg-black/80 border border-green-500/30 hover:border-green-400 p-5" 
          : "bg-white shadow-md p-5"
      }`}
    >
      {isHackerTheme && (
        <div className="w-full flex justify-between items-center mb-4 pb-2 border-b border-green-500/30">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs text-green-400/70 font-mono">cert_{period}.bin</div>
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <div>
          <h4 className={`font-semibold ${
            isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
          }`}>
            {name}
          </h4>
          <p className={`text-sm ${
            isHackerTheme ? "text-green-300/70 font-mono" : "text-gray-600"
          }`}>
            {provider}
          </p>
        </div>
      </div>
      
      <p className={`text-sm mb-4 ${
        isHackerTheme ? "text-green-400/80 font-mono" : "text-gray-700"
      }`}>
        {description}
      </p>
      
      <div className="flex justify-between items-center">
        <span className={`text-sm ${
          isHackerTheme ? "text-green-300/60 font-mono" : "text-gray-500"
        }`}>
          {period}
        </span>
        
        <motion.a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-sm ${
            isHackerTheme 
              ? "text-green-400 hover:text-green-300 font-mono" 
              : "text-fb-blue hover:text-fb-blue-dark"
          }`}
          onClick={onCertificateClick}
          whileHover={{ x: 3 }}
          whileTap={{ x: 0 }}
        >
          {isHackerTheme ? (
            <>$ verify <span className="animate-pulse">▌</span></>
          ) : (
            <>View Certificate →</>
          )}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CourseCard;