import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { resume } from '../data/resume'


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

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [ref, inView] = useInView(0.05)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async () => {
    if (sending) return
    setSending(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: resume.contact.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      alert('Failed to send. Please try again or email me directly at ' + resume.contact.email)
    } finally {
      setSending(false)
    }
  }

  return (
    <section style={{ 
      backgroundColor: '#0D1A0E', 
      width: '100%' 
      }}>

      <div className="w-full px-6 md:px-12 lg:px-80 py-16" ref={ref}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '24px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
        }}>         
          <p style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '2.5rem',
            color: '#EEDEC5',
            letterSpacing: '0.12em',
            alignSelf: 'flex-start',
            textAlign: 'left',
          }}>
            GET IN TOUCH
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(140deg, #4D694E 20%, #1B3A1C 100%)',
          borderRadius: '0 120px 120px 0',
          border: '1px solid rgba(250, 142, 184, 0.3)',
          borderLeft: 'none',
          position: 'relative',
          overflow: 'hidden',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
        }}>
          {[320, 220, 140].map((size, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: `${size}px`, 
              height: `${size}px`,
              borderRadius: '50%',
              border: `1px solid rgba(77,105,78,${0.12 - i * 0.03})`,
              right: `${-60 + i * 50}px`,
              bottom: `${-80 + i * 50}px`,
              pointerEvents: 'none',
            }} />
          ))}

          <div style={{
            position: 'absolute',
            left: 0, 
            top: '10%', 
            bottom: '10%',
            width: '3px',
            background: 'linear-gradient(to bottom, transparent, #4D694E, transparent)',
            borderRadius: '999px',
          }} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '44px 72px 44px 48px',
            position: 'relative',
            zIndex: 1,
          }}>
            <style>{`
              .contact-input::placeholder {
                color: rgba(250, 142, 184, 0.5);
                font-family: 'Share Tech Mono', monospace;
                font-size: 0.7rem;
                letter-spacing: 0.08em;
              }
            `}</style>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              maxWidth: '1100px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s',
            }}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handle}
                className="contact-input"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.06em',
                  color: 'rgba(250, 142, 184, 0.95)',
                  backgroundColor: 'rgba(13,26,14,0.5)',
                  border: '2px solid rgba(250, 142, 184, 0.6)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              />
              <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handle}
                className="contact-input"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.06em',
                  color: 'rgba(250, 142, 184, 0.95)',
                  backgroundColor: 'rgba(13,26,14,0.5)',
                  border: '2px solid rgba(250, 142, 184, 0.6)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handle}
                className="contact-input"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.06em',
                  color: 'rgba(250, 142, 184, 0.95)',
                  backgroundColor: 'rgba(13,26,14,0.5)',
                  border: '2px solid rgba(250, 142, 184, 0.6)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              />
              <button
                onClick={submit}
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.2rem',
                  letterSpacing: '0.35em',
                  color: 'rgba(250, 142, 184, 0.95)',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(250, 142, 184, 0.1)',
                  border: '2px solid rgba(250, 142, 184, 0.95)',
                  borderRadius: '999px',
                  padding: '4px 18px',
                  alignSelf: 'flex-start',
                  cursor: 'pointer',
                  marginTop: '10px',
                  boxShadow: '0 4px 20px rgba(13, 26, 14, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
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
                  e.currentTarget.style.backgroundColor = 'rgba(250, 142, 184, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(250, 142, 184, 0.95)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(13, 26, 14, 0.2)';
                }}
              >
                {sending ? 'SENDING...' : sent ? 'SENT!' : 'SEND MESSAGE'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
