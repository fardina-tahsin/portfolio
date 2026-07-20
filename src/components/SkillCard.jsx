import { useState, useEffect, useRef } from 'react'

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

export default function SkillCard({ category, number, emoji, skills, delay }) {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl overflow-hidden flex flex-col"
      
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(77,105,78,0.7), 0 16px 40px rgba(0,0,0,0.5)'
          : '0 0 0 1px rgba(77,105,78,0.18), 0 4px 16px rgba(0,0,0,0.3)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, box-shadow 0.3s ease`,
      }}
    >
      {/* TOP icon area */}
      <div
        className="relative flex flex-col items-center justify-center py-5 px-3 overflow-hidden"
        style={{
          backgroundColor: hovered ? '#1E3B1F' : '#162B17',
          transition: 'background-color 0.3s ease',
          minHeight: '110px',
        }}
      >
        {/* emoji */}
        <span
          className="mb-3 block transition-all duration-300"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.85rem',
            color: '#69916a',
            letterSpacing: '0.1em',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            textShadow: hovered ? '0 0 12px rgba(77,105,78,0.7)' : 'none',
          }}
        >
          {emoji}
        </span>

        {/* icons row */}
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((s, i) => (
            <img
              key={i}
              src={s.icon}
              alt={s.name}
              width={26}
              height={26}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? hovered ? 'translateY(-3px) scale(1.15)' : 'translateY(0) scale(1)'
                  : 'translateY(8px)',
                transition: `opacity 0.4s ease ${delay + 150 + i * 50}ms, transform 0.3s ease ${i * 40}ms`,
                filter: 'brightness(1.05)',
              }}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM text area */}
      <div
        className="px-4 py-3 flex flex-col gap-2"
        style={{
          backgroundColor: '#0D1A0E',
          borderTop: '1px solid #4D694E',
          flex: 1,
        }}
      >
        {/* title */}
        <div className="flex items-center gap-2">
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#EEDEC5', fontWeight: 'bold', letterSpacing: '0.18em' }}>
            {category.toUpperCase()}
          </span>
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5">
          {skills.map((s, i) => (
            <span
              key={i}
              className="rounded-full px-2 py-0.5"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.56rem',
                letterSpacing: '0.06em',
                color: hovered ? '#EEDEC5' : 'rgba(238,222,197,0.8)',
                backgroundColor: hovered ? 'rgba(77,105,78,0.25)' : 'rgba(77,105,78,0.1)',
                border: '1px solid rgba(238,222,197,0.35)',
                transition: `all 0.2s ease ${i * 30}ms`,
              }}
            >
              {s.name}
            </span>
            
          ))}
        </div>
      </div>
    </div>
  )
}