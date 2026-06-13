import Section from './Section'

export default function Projects({ projects }) {
  return (
    <Section title="Projects">
      {projects.map((proj, i) => (
        <div key={i} className="mb-4">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-serif font-bold text-[16px]/[20px] text-gray-900">{proj.name}</span>
            <span className="text-gray-600 text-sm">|</span>
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link font-serif italic text-[16px]/[20px] font-semibold"
            >
              GitHub
            </a>
          </div>
          <ul className="mt-3 space-y-2 pl-4">
            {proj.bullets.map((b, j) => (
              <li key={j} className="font-heading text-sm text-gray-800 flex gap-2">
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
