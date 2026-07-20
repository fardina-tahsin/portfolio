import { useState, useEffect, useRef } from 'react'

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

export default function Education({ education }) {
  const [ref, inView] = useInView(0.05)

  const bulletColors = ['#69916a', '#ff5a79', '#846927']

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-24" ref={ref}>
      {/* SECTION HEADER */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '64px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
      }}>
        <h2 style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '2.5rem',
          fontWeight: 'bold',
          letterSpacing: '0.15em',
          color: '#EEDEC5',
          backgroundColor: 'rgba(238, 222, 197, 0.08)',
          padding: '4px 22px',
          borderLeft: '3px solid #EEDEC5',
          borderRight: '3px solid #EEDEC5',
          borderRadius: '6px',
          margin: 0,
        }}>
          EDUCATION
        </h2>
      </div>

      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.6s ease 0.2s',
        maxWidth: '990px', 
        margin: '0 auto',
        width: '100%'
      }}>

        <div 
          className="absolute top-4 bottom-4 left-8 md:left-1/2"
          style={{
            width: '2px',
            borderLeft: '2px dashed #69916a', 
            zIndex: 1,
            transform: 'translateX(-50%)',
          }} 
        />

        {education.map((item, idx) => {
          const accentColor = bulletColors[idx % bulletColors.length]

          return (
            <div 
              key={idx}
              style={{
                display: 'grid',
                position: 'relative',
                zIndex: 2,
                paddingLeft: '70px',
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 1, 0.5, 1) ${0.3 + idx * 0.15}s`,
              }}
              className="grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-x-20 md:pl-0"
            >
              <div 
                className="absolute top-1 left-8 md:left-1/2"
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(20, 30, 20, 0.98)', 
                  border: `2px dashed ${accentColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transform: 'translateX(-50%)',
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: accentColor,
                }} />
              </div>

              <div 
                style={{
                  textAlign: 'left',
                  marginBottom: '10px',
                }}
                className="md:mb-0 md:pr-4"
              >
                <h3 style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.02em',
                  color: '#EEDEC5',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  {item.institution}
                </h3>

                <p style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '1.6rem',
                  color: 'rgba(238, 222, 197, 0.6)',
                  letterSpacing: '0.04em',
                  margin: '6px 0 0 0',
                }}>
                  {item.period}
                </p>
              </div>

              {/* RIGHT SIDE COLUMN (Left-aligned text) */}
              <div 
                style={{ textAlign: 'left' }}
                className="md:pl-4"
              >
                <h4 style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.02em',
                  color: accentColor, 
                  margin: '0 0 12px 0',
                  lineHeight: 1.2,
                }}>
                  {item.degree}
                </h4>

                <div 
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                  className="md:items-start"
                >
                  {item.details?.map((detail, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '8px',
                        maxWidth: '540px',
                      }}
                    >
                      <span style={{
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: '0.6rem', 
                        color: accentColor,
                        marginTop: '2px', 
                        flexShrink: 0,
                      }}>
                        *
                      </span>
                      <p style={{
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: '0.7rem',
                        color: 'rgba(238, 222, 197, 0.65)',
                        letterSpacing: '0.02em',
                        lineHeight: 1.6,
                        margin: 0,
                      }}>
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}
