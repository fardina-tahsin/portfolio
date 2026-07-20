import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'
import ContactSection from '../components/ContactSection'
import ProjectsSection from '../components/ProjectsSection'
import { resume } from '../data/resume'

export default function Home() {
  return (
    <main>
      <Hero />
        <div id="skills" style={{ backgroundColor: '#0D1A0E', width: '100%', scrollMarginTop: 50 }}>
          <Skills number="SECTION_02" />
        </div>

        <div id="education" style={{ backgroundColor: '#0D1A0E', width: '100%', scrollMarginTop: 50 }}>
          <Education education={resume.education} number="SECTION_03" />
        </div>

        <div id="experience" style={{ backgroundColor: '#0D1A0E', width: '100%', scrollMarginTop: 50 }}>
          <Experience experience={resume.experience} number="SECTION_04" />
        </div>

        <div id="projects" style={{ backgroundColor: '#0D1A0E', width: '100%', scrollMarginTop: 50 }}>
          <ProjectsSection projects={resume.projects} />
        </div>

      <div id="contact" style={{ scrollMarginTop: 50 }}><ContactSection /></div>
    </main>
  )
}