import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Experience from './experience/Experience'
import Skills from './Skills'
import Education from './education/Education'
import Projects from './Projects'
import Contact from './Contact'
import CompanyLogos from './experience/CompanyLogos'
import { SectionConfig } from '../types'
import { Z_INDEX } from '../constants'

/**
 * Array of all sections with their configurations
 * This makes it easy to reorder, hide, or modify sections
 */
const sections: SectionConfig[] = [
  {
    id: 'hero',
    name: 'Hero Section',
    component: Hero,
    zIndex: Z_INDEX.content,
    className: 'relative z-10',
    isVisible: true
  },
  {
    id: 'about',
    name: 'About Section',
    component: About,
    zIndex: Z_INDEX.content,
    className: 'relative z-20',
    isVisible: true
  },
  {
    id: 'experience',
    name: 'Experience Section',
    component: Experience,
    zIndex: Z_INDEX.content,
    className: 'relative z-20',
    isVisible: true
  },
  {
    id: 'skills',
    name: 'Skills Section',
    component: Skills,
    zIndex: Z_INDEX.content,
    className: 'relative z-20',
    isVisible: true
  },
  {
    id: 'projects',
    name: 'Projects Section',
    component: Projects,
    zIndex: Z_INDEX.content,
    className: 'relative z-20',
    isVisible: true
  },
  {
    id: 'education',
    name: 'Education Section',
    component: Education,
    zIndex: Z_INDEX.content,
    className: 'relative z-20',
    isVisible: true
  },
  {
    id: 'contact',
    name: 'Contact Section',
    component: Contact,
    zIndex: Z_INDEX.content,
    className: 'relative z-20',
    isVisible: true
  },
  {
    id: 'company-logos',
    name: 'Company Logos Section',
    component: CompanyLogos,
    zIndex: Z_INDEX.content,
    className: 'relative z-20',
    isVisible: true
  }
]

/**
 * MainContent component that renders all sections of the portfolio
 * 
 * Features:
 * - Modular section configuration
 * - Easy section reordering
 * - Conditional section visibility
 * - Consistent z-index layering
 * 
 * @returns JSX element containing all portfolio sections
 */
export default function MainContent(): React.JSX.Element {
  // Filter visible sections for potential future conditional rendering
  const visibleSections = sections.filter(section => section.isVisible)

  return (
    <div className="relative">
      {visibleSections.map(({ id, component: Component, className }) => (
        <section key={id} className={className}>
          <Component />
        </section>
      ))}
    </div>
  )
} 