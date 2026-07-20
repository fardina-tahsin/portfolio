import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Github } from 'lucide-react'

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

export default function ProjectsSection({ projects, limit = 4 }) {
  const [ref, inView] = useInView(0.05)
  const displayed = projects.slice(0, limit)

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16" ref={ref}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '48px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s',
      }}>

        <h2 style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '2.5rem',
          fontWeight: 'bold',
          letterSpacing: '0.18em',
          color: '#EEDEC5',
          lineHeight: 1.3,
          margin: '20px 0 0 0',
          alignSelf: 'flex-start',
        }}>
          ALL CREATIVE WORKS,<br />SELECTED PROJECTS
        </h2>
      </div>

      {(() => {
        const renderCard = (project, delayIdx) => (
          <div style={{
            background: 'linear-gradient(140deg, #F9F5EE 0%, #EEDEC5 50%, #C3D1C4 100%)',
            borderRadius: '0 120px 120px 0',
            border: '1px solid rgba(77,105,78,0.3)',
            borderLeft: 'none',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {[240, 160, 100].map((size, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: `${size}px`, 
                height: `${size}px`,
                borderRadius: '50%',
                border: `1px solid rgba(77,105,78,${0.12 - i * 0.03})`,
                right: `${-40 + i * 35}px`,
                bottom: `${-60 + i * 35}px`,
                pointerEvents: 'none',
              }} />
            ))}

            <div style={{
              position: 'absolute',
              left: 0, 
              top: '8%',
              bottom: '8%',
              width: '3px',
              background: 'linear-gradient(to bottom, transparent, #4D694E, transparent)',
              borderRadius: '999px',
            }} />

            <div style={{ 
                padding: '32px 28px 36px 32px', 
                position: 'relative', 
                zIndex: 1 
              }}>
                {/* VISUAL ASSET ZONE */}
                  <div style={{
                    backgroundColor: '#0D1A0E',
                    borderRadius: '0 90px 0 0',
                    marginBottom: '22px',
                    padding: '12px',
                    border: '1px solid rgba(77,105,78,0.2)',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: '100%',
                      maxWidth: '570px',
                      aspectRatio: '16/8',
                      borderRadius: '12px',
                      border: '1px solid rgba(77,105,78,0.15)',
                      transform: 'perspective(800px) rotateY(-6deg) rotateX(3deg)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                      background: project.image
                        ? '#0D1A0E'
                        : 'linear-gradient(135deg, #1C331D 0%, #0D1A0E 100%)',
                    }}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      ) : (
                        <>
                          <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `
                              linear-gradient(rgba(77,105,78,0.08) 1px, transparent 1px),
                              linear-gradient(90deg, (77,105,78,0.08) 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px',
                          }} />
                          <div style={{
                            position: 'absolute',
                            top: '30%', 
                            left: '20%',
                            width: '60%', 
                            height: '40%',
                            background: 'radial-gradient(ellipse, rgba(77,105,78,0.15) 0%, transparent 70%)',
                            borderRadius: '50%',
                          }} />
                          <div style={{
                            position: 'absolute',
                            top: '15%', 
                            right: '15%',
                            width: '12px', 
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#4D694E',
                            opacity: 0.4,
                          }} />
                          <div style={{
                            position: 'absolute',
                            bottom: '25%', left: '25%',
                            width: '8px', height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#69916a',
                            opacity: 0.3,
                          }} />
                        </>
                      )}
                    </div>
                  </div>

              {/* Title + Category */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <h3 style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '1.7rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.02em',
                  color: 'rgba(13, 26, 14, 0.85)',
                  margin: 0,
                }}>
                  {project.name}
                </h3>

                <span style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.5rem',
                  color: 'rgba(238,222,197,0.9)',
                  backgroundColor: 'rgba(13,26,14,0.7)',
                  border: '1px solid rgba(28, 51, 29, 0.1)',
                  borderRadius: '999px',
                  padding: '3px 14px',
                  letterSpacing: '0.06em',
                  whiteSpace: 'nowrap',
                }}>
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.68rem',
                color: 'rgba(13, 26, 14, 0.75)',
                letterSpacing: '0.04em',
                lineHeight: 1.7,
                margin: '0 0 16px 0',
              }}>
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '20px',
              }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: '0.5rem',
                    letterSpacing: '0.02em',
                    color: 'rgba(28, 51, 29, 0.9)',
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(77,105,78,0.1)',
                    border: '1px solid rgba(28, 51, 29, 0.8)',
                    borderRadius: '999px',
                    padding: '1px 16px',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action link */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.16em',
                  color: '#846927',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderBottom: '2px solid rgba(132, 105, 39, 0.6)',
                  paddingBottom: '2px',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1C331D'
                  e.currentTarget.style.borderColor = 'rgba(28, 51, 29, 0.5)'
                  e.currentTarget.querySelector('.arrow').style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#846927'
                  e.currentTarget.style.borderColor = 'rgba(132, 105, 39, 0.6)'
                  e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0px)'
                }}
              >
                <Github size={22} style={{ flexShrink: 0 }} />
                <span>EXPLORE SOURCE</span>
                <span className="arrow" style={{
                  marginLeft: '2px',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease',
                }}>
                  ↗
                </span>
              </a>
            </div>
          </div>
        );

        return (
          <>
            {/* Mobile: single column, original order */}
            <div className="grid grid-cols-1 gap-6 md:hidden">
              {displayed.map((project, idx) => (
                <div key={idx} style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.7s ease ${0.3 + idx * 0.2}s, transform 0.7s ease ${0.3 + idx * 0.2}s`,
                }}>
                  {renderCard(project, idx)}
                </div>
              ))}
            </div>

            {/* Desktop: left column items 1&3, right column items 2&4 */}
            <div className="hidden md:block md:columns-2 gap-6" style={{ alignItems: 'start' }}>
              {(() => {
                const leftColumnItems = displayed.filter((_, idx) => idx % 2 === 0);
                const rightColumnItems = displayed.filter((_, idx) => idx % 2 === 1);
                const sortedForColumns = [...leftColumnItems, ...rightColumnItems];

                return sortedForColumns.map((project, idx) => {
                  const isRightColumn = idx >= leftColumnItems.length;
                  return (
                    <div
                      key={project.name + idx}
                      style={{
                        marginTop: isRightColumn && idx === leftColumnItems.length ? 'clamp(40px, 6vw, 80px)' : '0',
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(30px)',
                        transition: `opacity 0.7s ease ${0.3 + idx * 0.2}s, transform 0.7s ease ${0.3 + idx * 0.2}s`,
                        breakInside: 'avoid',
                        display: 'inline-block',
                        width: '100%',
                        marginBottom: '28px'
                      }}
                    >
                      {renderCard(project, idx)}
                    </div>
                  );
                });
              })()}
            </div>
          </>
        );
      })()}

      {projects.length > limit && (
        <div style={{
          textAlign: 'center',
          marginTop: '48px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.6s',
        }}>
          <Link
            to="/projects"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.8rem',
              letterSpacing: '0.35em',
              color: 'rgba(250, 142, 184, 0.95)', 
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '2px solid rgba(250, 142, 184, 0.95)', 
              padding: '12px 32px',
              backgroundColor: 'rgba(250, 142, 184, 0.2)', 
              borderRadius: '999px',
              boxShadow: '0 4px 20px rgba(13, 26, 14, 0.3)',
              transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f74a8e'; 
              e.currentTarget.style.backgroundColor = '#EEDEC5'; 
              e.currentTarget.style.borderColor = '#f74a8e';
              e.currentTarget.style.transform = 'translateY(-2px)'; 
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(238, 222, 197, 0.15)'; 
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(250, 142, 184, 0.95)';
              e.currentTarget.style.backgroundColor = 'rgba(250, 142, 184, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(250, 142, 184, 0.95)';
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(13, 26, 14, 0.2)';
            }}
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>
      )}
    </div>
  )
}
