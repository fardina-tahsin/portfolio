import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollTo = (id) => {
    setMenuOpen(false)
    
    if (!isHome) {
      window.location.href = '/#' + id
      return
    }

    const el = document.getElementById(id)
    
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  
  }

  return (
    <nav
      className="fixed top-4 left-1/2 z-50"
      style={{ 
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}
    >
      {/* Floating pill */}
      <div
        className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full text-sm tracking-widest"
        style={{
          backgroundColor: 'rgba(20, 30, 20, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(77, 105, 78, 0.4)',
          fontFamily: "'Share Tech Mono', monospace",
          color: '#EEDEC5',
        }}
      >
        <button onClick={() => scrollTo('about')} className="hover:text-[#69916a] transition-colors uppercase">About</button>
        <button onClick={() => scrollTo('skills')} className="hover:text-[#69916a] transition-colors uppercase">Skills</button>
        <button onClick={() => scrollTo('education')} className="hover:text-[#69916a] transition-colors uppercase">Education</button>
        <button onClick={() => scrollTo('experience')} className="hover:text-[#69916a] transition-colors uppercase">Experience</button>
        <button onClick={() => scrollTo('projects')} className="hover:text-[#69916a] transition-colors uppercase">Projects</button>
        
        <button
          onClick={() => scrollTo('contact')}
          className="px-4 py-1 rounded-full text-xs transition-all hover:opacity-80"
          
          style={{
            border: '1px solid rgba(250, 142, 184, 0.95)',
            color: 'rgba(250, 142, 184, 0.95)',
            fontFamily: "'Share Tech Mono', monospace",
          }}
        >
          CONTACT
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden absolute top-2 left-48">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 px-4 py-3 rounded-full"
          
          style={{ 
            backgroundColor: 'rgba(20, 30, 20, 0.75)', 
            backdropFilter: 'blur(12px)' 
          }}
        >
          <span className="block w-6 h-0.5" style={{ backgroundColor: '#EEDEC5' }} />
          <span className="block w-6 h-0.5" style={{ backgroundColor: '#EEDEC5' }} />
          <span className="block w-6 h-0.5" style={{ backgroundColor: '#EEDEC5' }} />
        </button>

        {menuOpen && (
          <div
            className="absolute top-12 right-0 flex flex-col gap-6 px-6 py-6 rounded-xl text-xs tracking-widest"
            
            style={{
              backgroundColor: 'rgba(20, 30, 20, 0.9)',
              backdropFilter: 'blur(12px)',
              fontFamily: "'Share Tech Mono', monospace",
              color: '#EEDEC5',
              minWidth: '160px',
            }}
          >
            <button onClick={() => scrollTo('about')} className="text-left hover:text-[#69916a] uppercase">About</button>
            <button onClick={() => scrollTo('skills')} className="text-left hover:text-[#69916a] uppercase">Skills</button>
            <button onClick={() => scrollTo('education')} className="text-left hover:text-[#69916a] uppercase">Education</button>
            <button onClick={() => scrollTo('experience')} className="text-left hover:text-[#69916a] uppercase">Experience</button>
            <button onClick={() => scrollTo('projects')} className="text-left hover:text-[#69916a] uppercase">Projects</button>
            <button onClick={() => scrollTo('contact')} className="text-left hover:text-[#69916a] uppercase">Contact</button>
          </div>
        )}
      </div>
    </nav>
  )
}