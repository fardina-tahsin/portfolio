import { resume } from '../data/resume'
import { Linkedin, Facebook, Mail, Github } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full flex items-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/hero_pic.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        scrollMarginTop: 90,
      }}
    >
      {/* Overlay — lighter so background shows more */}
      <div
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(to right, rgba(15,25,15,0.82) 55%, rgba(15,25,15,0.3) 100%)' 
        }}
      />

      {/* Main content row */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <div className="flex-1">
          <p
            className="mb-5 text-xs tracking-[0.3em] uppercase"
            style={{ 
              fontFamily: "'Share Tech Mono', monospace", 
              color: 'rgba(250, 142, 184, 0.65)' ,
              fontWeight: 'bold'
            }}
          >
            STEP INTO MY PORTFOLIO...
          </p>

          <h1
            className="uppercase leading-[1.05] mb-2"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              color: '#EEDEC5',
              letterSpacing: '0.04em',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            {resume.name.split(' ')[0]}
          </h1>

          <div className="flex items-baseline gap-4 mb-8 flex-wrap">
            <h1
              className="uppercase leading-none"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 'clamp(3rem, 9vw, 7rem)',
                color: '#69916a',
                letterSpacing: '0.04em',
                textShadow: '0 4px 30px rgba(0,0,0,0.4)',
              }}
            >
              {resume.name.split(' ')[1]}
            </h1>
          </div>

          <p
            className="mb-10 text-sm leading-[1.9] max-w-md"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: '#EEDEC5',
              opacity: 0.75,
            }}
          >
            Like building web apps<br />
            & solving real-world problems with technology.
          </p>

          <div className='space-y-10'>
            <div className="flex items-center gap-8">
                {/* LinkedIn */}
                <a 
                  href={resume.contact.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 stroke-[#fa8eb8] group-hover:stroke-[#69916a] transition-colors duration-300" strokeWidth={2} />
                </a>

                {/* Facebook */}
                <a 
                  href={resume.contact.facebook}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 stroke-[#fa8eb8] group-hover:stroke-[#69916a] transition-colors duration-300" strokeWidth={2} />
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${resume.contact.email}`}
                  className="group relative transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 stroke-[#fa8eb8] group-hover:stroke-[#69916a] transition-colors duration-300" strokeWidth={2} />
                </a>

                {/* GitHub */}
                <a 
                  href={resume.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 stroke-[#fa8eb8] group-hover:stroke-[#69916a] transition-colors duration-300" strokeWidth={2} />
                </a>
            </div>

            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm tracking-widest transition-all hover:opacity-60 hover:tracking-[0.25em]"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: '#EEDEC5',
                borderBottom: '1px solid #fa8eb8',
                paddingBottom: '4px',
              }}
            >
              Let's explore --&gt;
            </button>
          </div>
    
        </div>

        {/* RIGHT */}
        <div className="shrink-0 flex items-center justify-center">
          <div
            className="overflow-hidden"
            style={{
              width: 'clamp(200px, 28vw, 340px)',
              height: 'clamp(200px, 28vw, 340px)',
              borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%',
              border: '2px solid rgba(77, 105, 78, 0.6)',
              boxShadow: '0 0 60px rgba(77,105,78,0.25), 0 0 120px rgba(77,105,78,0.1)',
            }}
          >
            <img
              src="/pic.jpg"
              alt="Fardina Tahsin"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.9) contrast(1.05)' }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.style.backgroundColor = '#2A3D2B'
              }}
            />
          </div>

          {/* Decorative ring */}
          <div
            className="absolute"
            style={{
              width: 'clamp(220px, 30vw, 370px)',
              height: 'clamp(220px, 30vw, 370px)',
              borderRadius: '60% 40% 55% 45% / 50% 55% 45% 50%',
              border: '1px solid rgba(238, 222, 197, 0.12)',
              pointerEvents: 'none',
            }}
          />
        </div>

      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #1A2B1B)' }}
      />
    </section>
  )
}