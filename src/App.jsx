import React, { useState, useEffect } from 'react'
import { resume } from './data/resume.jsx'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'

export default function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function handleResize() {
      // Base design width plus side margins
      const targetWidth = 1160 
      const currentWidth = window.innerWidth
      
      if (currentWidth < targetWidth) {
        // Calculate the shrink ratio
        setScale(currentWidth / targetWidth)
      } 
      else {
        // Stay full scale on larger screens
        setScale(1)
      }
    }

    // Run on initial load and setup event listener
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div 
      className="min-h-screen py-8 flex items-start justify-center overflow-x-hidden" 
      style={{ backgroundColor: '#f5f4f0' }}
    >
      {/* Wrapper container that controls the scaling matrix */}
      <div 
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: '1120px',
          /* Dynamic margin compensation prevents whitespace gaps below the scaled container */
          marginBottom: scale < 1 ? `calc((1120px * ${1 - scale}) * -1)` : '0px',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* CV Paper layout */}
        <div
          className="bg-white shadow-md mx-auto"
          style={{
            width: '1120px',
            padding: '48px 56px',
            fontFamily: "'Georgia', 'Lora', serif",
          }}
        >
          <Header name={resume.name} contact={resume.contact} />
          {/* Thin colored upper divider */}
          <div className="border-t border-purple-300 mb-2"></div>
          <Education education={resume.education} />
          <Experience experience={resume.experience} />
          <Projects projects={resume.projects} />
          <Skills skills={resume.skills} />
          <Achievements achievements={resume.achievements} />
        </div>
      </div>
    </div>
  )
}
