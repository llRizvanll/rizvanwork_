import Hero from './hero/Hero'
import About from './about/About'
import Experience from './experience/Experience'
import Skills from './Skills'
import Education from './education/Education'
import Projects from './Projects'
import Contact from './Contact'
import CompanyLogos from './experience/CompanyLogos'

export default function MainContent() {
  return (
    <div className="relative">
      <section className="relative z-10">
        <Hero />
      </section>
      <section className="relative z-20">
        <About />
      </section>
      <section className="relative z-20">
        <Experience />
      </section>
      <section className="relative z-20">
        <Skills />
      </section>
      <section className="relative z-20">
        <Projects />
      </section>
      <section className="relative z-20">
        <Education />
      </section>
      <section className="relative z-20">
        <Contact />
      </section>
      <section className="relative z-20">
        <CompanyLogos />
      </section>
    </div>
  )
} 