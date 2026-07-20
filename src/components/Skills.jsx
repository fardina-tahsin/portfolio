import { useState, useEffect, useRef } from 'react'
import { resume } from '../data/resume'
import SkillCard from './SkillCard'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  
  useEffect(() => {
    const currentRef = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (currentRef) obs.observe(currentRef)
    return () => {
      if (currentRef) obs.unobserve(currentRef)
      obs.disconnect()
    }
  }, [threshold])
  
  return [ref, inView]
}

export default function Skills({ number }) {
  const [ref, inView] = useInView(0.05)

  return (
    <section
      id="skills"
      style={{
        backgroundColor: '#EEDEC5',
        width: '100%',
        padding: '44px 0',
      }}
    >
      <div className="w-full px-6 md:px-12 lg:px-20" ref={ref}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '24px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
        }}>
          <h2 style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '2.5rem',
            letterSpacing: '0.15em',
            fontWeight: 'bold',
            color: '#4D694E',
            backgroundColor: 'rgba(77, 105, 78, 0.08)',
            padding: '4px 22px',
            borderLeft: '3px solid #4D694E',
            borderRight: '3px solid #4D694E',
            borderRadius: '6px',
            margin: 0,
          }}>
            SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {resume.skills.map((block, i) => (
            <SkillCard
              key={i}
              category={block.category}
              emoji={block.emoji}
              skills={block.items} 
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
