"use client";

import { useEffect, useRef } from "react";
import CustomCursor from "./CustomCursor";
import ProfileInfo from "./ProfileInfo";
import ScrollIndicator from "./ScrollIndicator";
import TechSkills from "./TechSkills";
import { trackEvent } from "../../GoogleAnalytics";
import heroData from "@/data/hero.json";
import { useMobileDetection } from "../../hooks/useMobileDetection";
import { useCustomCursor } from "../../hooks/useCustomCursor";
import {HeroBackground} from "./HeroBackground";

export default function Hero() {
  const { techSkills } = heroData;
  const profileInfoRef = useRef<HTMLDivElement>(null);
  
  // Custom hooks for better organization
  const { mobile } = useMobileDetection();
  const { cursorPosition, showCursor } = useCustomCursor();

  // Auto-scroll to profile info section on mobile
  useEffect(() => {
    if (mobile && profileInfoRef.current) {
      profileInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mobile]);

  // Event handlers
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
    <section 
      className="relative min-h-screen flex items-center justify-center pt-8 pb-12 px-4 overflow-hidden" 
      ref={profileInfoRef}
    >
      {/* Background Effects - Only show on desktop */}
      {!mobile && <HeroBackground />}
      
      {/* Custom cursor - Only show on desktop */}
      {!mobile && (
        <CustomCursor 
          cursorPosition={cursorPosition} 
          showCursor={showCursor} 
        />
      )}
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
          <ProfileInfo />
          <TechSkills />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
