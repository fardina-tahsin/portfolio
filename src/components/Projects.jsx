import Section from './Section'

export default function Projects({ projects }) {
  return (
    <Section title="Projects">
      {projects.map((proj, i) => (
        <div key={i} className="mb-4">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-semibold text-sm text-gray-900">{proj.name}</span>
            <span className="text-gray-400 text-sm">|</span>
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link text-sm italic font-medium"
            >
              GitHub
            </a>
          </div>
          <ul className="mt-3 space-y-2 pl-4">
            {proj.bullets.map((b, j) => (
              <li key={j} className="font-heading text-lg text-gray-800 flex gap-2">
                <span className="text-gray-400 select-none shrink-0">-</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
