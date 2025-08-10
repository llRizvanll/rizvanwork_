'use client';

import { useState } from 'react';
import Section from '../Section';
import experienceData from '@/data/experience.json';
import BackgroundEffects from './BackgroundEffects';
import SectionHeader from '../shared/SectionHeader';
import TechnologyFilter from './TechnologyFilter';
import ExperienceTimeline from './ExperienceTimeline';
import AchievementsSection from './AchievementsSection';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Experience() {
  const [filter, setFilter] = useState('all');

  const {
    title,
    subtitle,
    experiences,
    achievements,
    animation,
  } = experienceData;

  // Custom hook for scroll-based animation
  const { animateTimeline } = useScrollAnimation('experience');

  // Filter experiences based on selected technology
  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter(exp => exp.tech.includes(filter));

  // Get unique technologies for filter options
  const uniqueTechnologies = [...new Set(experiences.flatMap(exp => exp.tech))];

  return (
    <Section
      id="experience"
      className="relative overflow-hidden py-24 min-h-screen"
    >
      <BackgroundEffects />

      <div className="content-wrapper max-w-5xl mx-auto px-4 relative z-10">
        <SectionHeader
          title={title}
          subtitle={subtitle}
        />

        <TechnologyFilter
          technologies={uniqueTechnologies}
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <ExperienceTimeline
          experiences={filteredExperiences}
          animateTimeline={animateTimeline}
          animation={animation}
          onTechClick={setFilter}
        />

        <AchievementsSection achievements={achievements} />
      </div>
    </Section>
  );
}
