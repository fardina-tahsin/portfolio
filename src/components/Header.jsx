import { Phone, Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function Header({ contact, name }) {
  return (
    <div className="text-center mb-6 pt-1">
      {/* Name in small caps serif style */}
      <h1
        className="font-heading font-normal mb-2"
        style={{
          fontSize: '2.5rem',
          letterSpacing: '0.03em',
          fontVariant: 'small-caps',
          color: '#1a1a1a',
        }}
      >
        {name}
      </h1>

      {/* Contact row */}
      <div className="font-heading flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-gray-800">
        <a href={`tel:${contact.phone}`} className="flex items-center gap-1 hover:text-purple-700 transition-colors">
          <Phone size={13} strokeWidth={1.8} />
          <span>{contact.phone}</span>
        </a>

        <a href={`mailto:${contact.email}`} className="flex items-center gap-1 cv-link">
          <Mail size={13} strokeWidth={1.8} />
          <span>{contact.email}</span>
        </a>

        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cv-link">
          <Linkedin size={13} strokeWidth={1.8} />
          <span>LinkedIn</span>
        </a>

        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cv-link">
          <Github size={13} strokeWidth={1.8} />
          <span>Github</span>
        </a>

        <span className="flex items-center gap-1 text-gray-800">
          <MapPin size={13} strokeWidth={1.8} />
          <span>{contact.location}</span>
        </span>
      </div>
    </div>
  )
}

