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
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(resume.projects.map(p => p.category))]
  const filtered = selectedCategory === 'All'
    ? resume.projects
    : resume.projects.filter(p => p.category === selectedCategory)

  return (
    <main style={{ backgroundColor: '#0D1A0E', minHeight: '100vh' }}>
      <div className="w-full px-6 md:px-12 lg:px-20 py-24">

        {/* Header */}
        <div ref={ref} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '32px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.5s ease 0.1s',
        }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '52px', 
              height: '52px',
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
            fontFamily: "Consolas, monospace",
            fontSize: '2rem', 
            letterSpacing: '0.15em',
            color: '#EEDEC5', 
            lineHeight: 1.2,
            flex: 1, 
            textAlign: 'center', 
            margin: 0,
            fontWeight: 'bold',
          }}>
            ALL PROJECTS
          </h2>
        </div>

        {/* Category filter */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '40px',
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                fontFamily: "Consolas, monospace",
                fontSize: '1rem',
                letterSpacing: '0.1em',
                padding: '4px 16px',
                borderRadius: '999px',
                border: `1px solid ${selectedCategory === cat ? '#69916a' : 'rgba(238,222,197,0.3)'}`,
                backgroundColor: selectedCategory === cat ? 'rgba(105,145,106,0.2)' : 'transparent',
                color: selectedCategory === cat ? '#69916a' : 'rgba(238,222,197,0.6)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.color = '#69916a'
                  e.currentTarget.style.borderColor = 'rgba(105,145,106,0.7)'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.color = 'rgba(238,222,197,0.6)'
                  e.currentTarget.style.borderColor = 'rgba(238,222,197,0.3)'
                }
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
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