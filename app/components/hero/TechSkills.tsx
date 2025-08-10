import Image from 'next/image';
import { motion } from 'framer-motion';
import { trackEvent } from '../../GoogleAnalytics';

interface TechSkill {
  name: string;
  logo: string;
  color: string;
}

export default function TechSkills() {
  const techSkills = [
    {
      name: 'A-I',
      logo: '/assets/images/tech/ai_banner.png',
      color: '#FF5252',
    },
    {
      name: 'React Native',
      logo: '/assets/images/tech/rn_banner.png',
      color: '#2196F3',
    },
    {
      name: 'Kotlin',
      logo: '/assets/images/tech/kt_banner.png',
      color: '#7C4DFF',
    },
    {
      name: 'Mobile DevOps',
      logo: '/assets/images/tech/md_banner.png',
      color: '#00BFA5',
    },
    {
      name: 'AI+ML',
      logo: '/assets/images/tech/ai_plus_banner.jpg',
      color: '#FF4081',
    },
    {
      name: 'Ts/Js',
      logo: '/assets/images/tech/jt_banner.png',
      color: '#FFC107',
    },
    {
      name: 'Java',
      logo: '/assets/images/tech/jv_banner.png',
      color: '#FF9800',
    },
    {
      name: 'Python',
      logo: '/assets/images/tech/py_banner.png',
      color: '#4CAF50',
    },
  ];

  const handleSkillClick = (skill: string) => {
    trackEvent('click', 'skill', skill);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
      {techSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="material-card"
          style={
            {
              '--card-color': skill.color,
            } as React.CSSProperties
          }
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: index * 0.08, duration: 0.25 },
          }}
          whileHover={{
            y: -8,
            boxShadow: `0 9px 20px rgba(0,0,0,0.14), 0 6px 6px rgba(0,0,0,0.18), 0 0 0 1px ${skill.color}40`,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSkillClick(skill.name)}
        >
          <div className="card-accent" />
          <div className="card-content">
            <Image
              src={skill.logo}
              alt={skill.name}
              width={150}
              height={150}
              className="skill-icon"
            />
          </div>

          <style jsx>{`
            .material-card {
              position: relative;
              background: white;
              border-radius: 8px;
              overflow: hidden;
              height: 140px;
              display: flex;
              flex-direction: column;
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1),
                0 3px 6px rgba(0, 0, 0, 0.15);
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
              cursor: pointer;
              z-index: 1;
            }

            .card-accent {
              position: absolute;
              top: 0;
              left: 0;
              height: 6px;
              width: 100%;
              background-color: var(--card-color);
              z-index: 2;
            }

            .card-content {
              display: flex;
              flex-direction: column;
              padding: 16px;
              height: 100%;
              position: relative;
              z-index: 3;
            }

            .icon-wrapper {
              margin-bottom: 16px;
              display: flex;
              align-items: center;
            }

            .icon-bg {
              width: 64px;
              height: 64px;
              background-color: rgba(var(--card-color-rgb, 0, 0, 0), 0.08);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .skill-icon {
              max-width: 45px;
              max-height: 45px;
              object-fit: contain;
            }

            .skill-info {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .skill-name {
              margin: 0;
              font-size: 16px;
              font-weight: 600;
              color: #333;
            }

            .skill-dots {
              display: flex;
              gap: 4px;
            }

            .dot {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: var(--card-color);
              opacity: 0.7;
            }
          `}</style>
        </motion.div>
      ))}
    </div>
  );
}
