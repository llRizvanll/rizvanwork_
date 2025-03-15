"use client";

import { useState, useEffect } from "react";
import Section from "../Section";
import experienceData from "@/data/experience.json";
import BackgroundEffects from "./BackgroundEffects";
import SectionHeader from "../shared/SectionHeader";
import TechnologyFilter from "./TechnologyFilter";
import ExperienceTimeline from "./ExperienceTimeline";
import AchievementsSection from "./AchievementsSection";

export default function Experience() {
  const [filter, setFilter] = useState("all");
  const [animateTimeline, setAnimateTimeline] = useState(false);
  
  const { 
    title, 
    subtitle, 
    experiences, 
    achievements, 
    animation 
  } = experienceData;

  useEffect(() => {
    const handleScroll = () => {
      // Add timeline animation trigger
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && !animateTimeline) {
          setAnimateTimeline(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateTimeline]);

  const filteredExperiences = filter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.tech.includes(filter));
    
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
