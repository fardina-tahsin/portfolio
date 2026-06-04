import { resume } from './data/resume'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'

export default function App() {
  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#f5f4f0' }}>
      {/* CV Paper page */}
      <div
        className="mx-auto bg-white shadow-md"
        style={{
          maxWidth: '1120px',
          padding: '48px 56px',
          fontFamily: "'Georgia', serif",
        }}
      >

        {/* Header */}
        <Header name={resume.name} contact={resume.contact} />

        {/* Thin top rule under header */}
        <hr className="border-t border-gray-300 mb-2" />

        {/* Sections */}
        <Education education={resume.education} />
        <Experience experience={resume.experience} />
        <Projects projects={resume.projects} />
        <Skills skills={resume.skills} />
        <Achievements achievements={resume.achievements} />

      </div>
    </div>
  )
}

