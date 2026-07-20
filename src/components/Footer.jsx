import { Facebook, Linkedin, Mail } from 'lucide-react'
import { resume } from '../data/resume'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0D1A0E',
        borderTop: '1px solid rgba(77,105,78,0.25)',
        padding: '40px 0',
        textAlign: 'center',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        marginBottom: '16px',
      }}>
        <a
          href={`mailto:${resume.contact.email}`}
          style={{ 
            color: 'rgba(250, 142, 184, 0.95)', 
            transition: 'color 0.3s ease, transform 0.3s ease', 
            display: 'inline-flex' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Mail size={24} />
        </a>
        <a
          href={resume.contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: 'rgba(250, 142, 184, 0.95)', 
            transition: 'color 0.3s ease, transform 0.3s ease', 
            display: 'inline-flex' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Facebook size={24} />
        </a>
        <a
          href={resume.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: 'rgba(250, 142, 184, 0.95)', 
            transition: 'color 0.3s ease, transform 0.3s ease', 
            display: 'inline-flex' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Linkedin size={24} />
        </a>
      </div>
      <p style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.08em',
        color: 'rgba(250, 142, 184, 0.75)',
        margin: 0,
      }}>
        © {new Date().getFullYear()} Fardina Tahsin. All rights reserved.
      </p>
    </footer>
  )
}