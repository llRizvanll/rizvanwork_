"use client";

import { useEffect, useRef, useState } from "react";
import CustomCursor from "./CustomCursor";
import ProfileInfo from "./ProfileInfo";
import ProfileImage from "./ProfileImage";
import ScrollIndicator from "./ScrollIndicator";
import { trackEvent } from "../../GoogleAnalytics";
import TechSkills from "./TechSkills";
import heroData from "@/data/hero.json";

export default function Hero() {
  const { techSkills } = heroData;

  const profileInfoRef = useRef<HTMLDivElement>(null);

  const [mobile, setIsMobile] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);


  useEffect(() => {
    // Auto-scroll to profile info section on mobile
    if (mobile && profileInfoRef.current) {
      profileInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mobile]); // Only re-run when mobile state changes

  useEffect(() => {
    // Check for mobile viewport width after component mounts
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 950);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Add event listener for mouse move
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setShowCursor(true);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleContactClick = () => {
    trackEvent('click', 'hero', 'contact_button');
  };

  const handleResumeClick = () => {
    trackEvent('click', 'hero', 'resume_download');
  };

  const handleSkillClick = (skill: string) => {
    trackEvent('click', 'skill', skill);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-8 pb-12 px-4 overflow-hidden" ref={profileInfoRef}>
      {/* Elegant Background Design */}
      
       {!mobile && (
        <div className="hero-background">
         <div className="gradient-orb orb1"></div>
         <div className="gradient-orb orb2"></div>
         <div className="gradient-orb orb3"></div>
         <div className="gradient-orb orb4"></div>
         <svg className="wave-pattern" viewBox="0 0 1440 320" preserveAspectRatio="none">
           <path className="wave wave1" d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,165.3C672,128,768,96,864,96C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           <path className="wave wave2" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           <path className="wave wave3" d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,160C672,171,768,213,864,213.3C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
         <div className="geometric-pattern" ></div>
         </div>
       )}
      
      
      {/* Custom cursor (only shows on desktop) */}
      {!mobile && (
        <CustomCursor cursorPosition={cursorPosition} showCursor={showCursor} />
      )}
      
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full mt-16" >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10" >
          <ProfileInfo  />
          {/* <ProfileImage /> */}
          <TechSkills
           />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      <style jsx>{`
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.25;
        }
        
        .orb1 {
          top: 10%;
          left: 5%;
          width: 35vw;
          height: 35vw;
          background: radial-gradient(circle, rgba(125, 105, 255, 0.7) 0%, rgba(125, 105, 255, 0) 70%);
          animation: float-slow 25s infinite alternate ease-in-out;
        }
        
        .orb2 {
          bottom: 5%;
          right: 10%;
          width: 25vw;
          height: 25vw;
          background: radial-gradient(circle, rgba(0, 191, 255, 0.7) 0%, rgba(0, 191, 255, 0) 70%);
          animation: float-slow 20s infinite alternate-reverse ease-in-out;
        }
        
        .orb3 {
          top: 25%;
          right: 15%;
          width: 20vw;
          height: 20vw;
          background: radial-gradient(circle, rgba(255, 105, 180, 0.5) 0%, rgba(255, 105, 180, 0) 70%);
          animation: float-slow 22s infinite alternate ease-in-out;
        }
        
        .orb4 {
          bottom: 25%;
          left: 20%;
          width: 30vw;
          height: 30vw;
          background: radial-gradient(circle, rgba(64, 224, 208, 0.5) 0%, rgba(64, 224, 208, 0) 70%);
          animation: float-slow 18s infinite alternate-reverse ease-in-out;
        }
        
        .wave-pattern {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          opacity: 0.15;
          z-index: -1;
        }
        
        .wave {
          fill: none;
          stroke-width: 2px;
          animation: wave-animation 20s linear infinite;
        }
        
        .wave1 {
          stroke: rgba(125, 105, 255, 0.8);
          animation-duration: 20s;
        }
        
        .wave2 {
          stroke: rgba(0, 191, 255, 0.8);
          animation-duration: 15s;
          animation-delay: -5s;
        }
        
        .wave3 {
          stroke: rgba(255, 105, 180, 0.8);
          animation-duration: 25s;
          animation-delay: -10s;
        }
        
        .geometric-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to right, rgba(125, 105, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(125, 105, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.4;
          z-index: -2;
        }
        
        @keyframes float-slow {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(3%, 2%) scale(1.05);
          }
          100% {
            transform: translate(-3%, -2%) scale(0.95);
          }
        }
        
        @keyframes wave-animation {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
