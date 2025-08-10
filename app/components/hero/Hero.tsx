/**
 * @fileoverview Hero section component that displays the main landing area
 * with profile information, tech skills, and interactive elements.
 */

'use client';

import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';

import { trackEvent } from '../../GoogleAnalytics';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { useCustomCursor } from '../../hooks/useCustomCursor';
import heroData from '@/data/hero.json';

import CustomCursor from './CustomCursor';
import ProfileInfo from './ProfileInfo';
import ScrollIndicator from './ScrollIndicator';
import TechSkills from './TechSkills';
import { HeroBackground } from './HeroBackground';

/**
 * Hero component that renders the main landing section of the portfolio.
 * Includes profile information, tech skills display, and interactive elements
 * like custom cursor and scroll indicators.
 *
 * @returns The Hero component JSX element
 */
export function Hero(): ReactElement {
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

  /**
   * Handles contact button click events and tracks analytics.
   */
  const handleContactClick = (): void => {
    trackEvent('click', 'hero', 'contact_button');
  };

  /**
   * Handles resume download click events and tracks analytics.
   */
  const handleResumeClick = (): void => {
    trackEvent('click', 'hero', 'resume_download');
  };

  /**
   * Handles skill click events and tracks analytics.
   *
   * @param skill - The name of the skill that was clicked
   */
  const handleSkillClick = (skill: string): void => {
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

// Legacy default export for backward compatibility
export default Hero;
