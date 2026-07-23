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
      className="fixed top-2 left-1/2 z-50"
      style={{ 
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}
    >
      {/* Floating pill */}
      <div
        className="hidden md:flex items-center gap-8 px-7 py-2.5 rounded-full text-lg tracking-widest"
        style={{
          backgroundColor: 'rgba(20, 30, 20, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(77, 105, 78, 0.4)',
          fontFamily: "Consolas, monospace",
          color: '#EEDEC5',
          fontWeight: 'bold',
        }}
      >
        <button onClick={() => scrollTo('about')} className="hover:text-[#69916a] transition-colors uppercase">About</button>
        <button onClick={() => scrollTo('skills')} className="hover:text-[#69916a] transition-colors uppercase">Skills</button>
        <button onClick={() => scrollTo('education')} className="hover:text-[#69916a] transition-colors uppercase">Education</button>
        <button onClick={() => scrollTo('experience')} className="hover:text-[#69916a] transition-colors uppercase">Experience</button>
        <button onClick={() => scrollTo('projects')} className="hover:text-[#69916a] transition-colors uppercase">Projects</button>
        
        <button
          onClick={() => scrollTo('contact')}
          className="px-4 py-0 rounded-full text-base transition-all hover:opacity-80"
          
          style={{
            border: '1px solid rgba(250, 142, 184, 0.95)',
            color: 'rgba(250, 142, 184, 0.95)',
            fontFamily: "Consolas, monospace",
            fontWeight: 'bold',
          }}
        >
          CONTACT
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden absolute top-1 left-44">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex flex-col gap-1.5 px-4 py-3 rounded-full"
          
          style={{ 
            backgroundColor: 'rgba(20, 30, 20, 0.75)', 
            backdropFilter: 'blur(12px)' 
          }}
          onMouseEnter={(e) => { 
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 90, 121, 0.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(20, 30, 20, 0.75)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 90, 121, 0)';
            
          }}
        >
          <span className="block w-6 h-0.5 bg-[#EEDEC5] group-hover:bg-[#69916a] transition-colors duration-300" />
          <span className="block w-6 h-0.5 bg-[#EEDEC5] group-hover:bg-[#69916a] transition-colors duration-300" />
          <span className="block w-6 h-0.5 bg-[#EEDEC5] group-hover:bg-[#69916a] transition-colors duration-300" />
        </button>

        {menuOpen && (
          <div
            className="absolute top-12 right-0 flex flex-col gap-4 px-6 py-6 rounded-xl text-base tracking-widest"
            
            style={{
              backgroundColor: 'rgba(20, 30, 20, 0.9)',
              backdropFilter: 'blur(12px)',
              fontFamily: "Consolas, monospace",
              color: '#EEDEC5',
              minWidth: '160px',
              fontWeight: 'bold',
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