import { useState } from 'react'
import { Github } from 'lucide-react'

export default function ProjectCard({ project, idx, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${0.25 + idx * 0.12}s, transform 0.5s ease ${0.25 + idx * 0.12}s`,
        position: 'relative',
        height: '100%',      
        zIndex: hovered ? 50 : 1, 
      }}
    >
      <div style={{
        background: 'linear-gradient(140deg, #F9F5EE 0%, #EEDEC5 50%, #C3D1C4 100%)',
        border: '1px solid rgba(28, 51, 29, 0.12)',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'visible',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)', 
        boxShadow: hovered 
          ? '0 25px 50px rgba(13, 26, 14, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)' 
          : '0 4px 20px rgba(13, 26, 14, 0.02)',
        transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
      }}>
        <div style={{
          padding: '18px 18px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>

          {/* Image */}
          <div style={{
            borderRadius: '12px',
            border: '1px solid rgba(77,105,78,0.15)',
            overflow: 'hidden',
            marginBottom: '18px',
            aspectRatio: '16/9',
            background: project.image
              ? '#0D1A0E'
              : 'linear-gradient(135deg, #1C331D 0%, #0D1A0E 100%)',
            position: 'relative',
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
                  transform: hovered ? 'scale(1)' : 'scale(0.9)', 
                  transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            ) : (
             <>
              <div style={{
                position: 'absolute', 
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(238,222,197,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(238,222,197,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '14px 14px',
              }} />
            </>
          )}
        </div>

        {/* Title + Category */}
        <div style={{
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '14px', 
          gap: '6px',
        }}>
          <h3 style={{
              fontFamily: "Consolas, monospace",
              fontSize: '1.2rem', 
              fontWeight: 'bold',
              letterSpacing: '0.02em',
              color: 'rgba(13, 26, 14, 0.85)', 
              margin: 0,
          }}>
            {project.name}
          </h3>

          <span style={{
            fontFamily: "Consolas, monospace",
            fontSize: '0.9rem',
            color: 'rgba(238,222,197,0.9)',
            backgroundColor: 'rgba(13,26,14,0.7)',
            border: '1px solid rgba(28, 51, 29, 0.1)',
            borderRadius: '999px',
            padding: '2px 10px',
            letterSpacing: '0.06em',
          }}>
            {project.category}
          </span>
        </div>

        {/* Tech badges */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px', 
          marginBottom: '14px' 
          }}>
          {project.techStack.map((tech, i) => (
            <span key={i} style={{
              fontFamily: "Consolas, monospace",
              fontSize: '0.9rem', 
              letterSpacing: '0.02em',
              color: 'rgba(28, 51, 29, 0.9)', 
              fontWeight: 'bold',
              backgroundColor: 'rgba(77,105,78,0.1)',
              border: '1px solid rgba(28, 51, 29, 0.8)',
              borderRadius: '999px', 
              padding: '1px 8px',
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Consolas, monospace",
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            paddingBottom: '2px',
            marginBottom: '14px', 
            alignSelf: 'flex-start',
            color: '#846927',
            fontWeight: 'bold',
            borderBottom: '2px solid rgba(132, 105, 39, 0.6)',
            transition: 'all 0.3s ease',
            marginTop: 'auto', 
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
          <Github size={16} style={{ marginRight: '4px', flexShrink: 0 }} />
          <span>EXPLORE SOURCE</span>
          <span className="arrow" style={{
            marginLeft: '4px',
            display: 'inline-block',
            transition: 'transform 0.3s ease',
          }}>
            ↗
          </span>
        </a>

        {/* Description Base Container */}
        <div style={{
            cursor: 'default',
            position: 'relative',
          }}>

            {/* Expanded text overlay panel - Positioned cleanly right underneath your link */}
            {hovered && (
              <div style={{
                position: 'absolute',
                top: '0px', 
                left: '-12px',
                right: '-12px',
                zIndex: 100, 
                fontFamily: "Consolas, monospace",
                fontSize: '0.9rem',
                color: 'rgba(13, 26, 14, 0.85)',
                letterSpacing: '0.02em',
                lineHeight: 1.5,
                background: 'linear-gradient(140deg, rgba(249, 245, 238, 0.95) 0%, rgba(238, 222, 197, 0.95) 50%, rgba(195, 209, 196, 0.95) 100%)',
                backdropFilter: 'blur(12px)', 
                padding: '12px 16px',
                borderRadius: '12px',
                boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                border: '1px solid rgba(77,105,78,0.3)',
              }}>
                {project.description}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
