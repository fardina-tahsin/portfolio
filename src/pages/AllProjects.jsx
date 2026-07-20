import { useState, useEffect, useRef } from 'react'
import { resume } from '../data/resume'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

export default function AllProjects() {
  const [ref, inView] = useInView(0.05)

  return (
    <main style={{ backgroundColor: '#0D1A0E', minHeight: '100vh' }}>
      <div className="w-full px-6 md:px-12 lg:px-20 py-24">

        {/* Header */}
        <div ref={ref} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '48px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.5s ease 0.1s',
        }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px', 
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(238,222,197,0.32)',
              color: '#EEDEC5',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff5a79'; 
              e.currentTarget.style.backgroundColor = 'rgba(255, 90, 121, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 90, 121, 0.5)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 90, 121, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#EEDEC5';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.borderColor = 'rgba(238, 222, 197, 0.32)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 90, 121, 0)';
              
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor"
              strokeWidth="2.25" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M10 19l-7-7 7-7" />
              <path d="M20 19l-7-7 7-7" />
            </svg>
          </Link>

          <h2 style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '2.2rem', 
            letterSpacing: '0.18em',
            color: '#EEDEC5', 
            lineHeight: 1.3,
            flex: 1, 
            textAlign: 'center', 
            margin: 0,
          }}>
            ALL PROJECTS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resume.projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              idx={idx} 
              inView={true} 
            />
          ))}
        </div>

      </div>
    </main>
  )
}