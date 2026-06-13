import Section from './Section'

export default function Education({ education }) {
  return (
    <Section title="Education">
      {education.map((edu, i) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between items-baseline flex-wrap gap-1 mb-2">
            <span className="font-serif font-bold text-[16px]/[20px] text-gray-900">{edu.institution}</span>
            <span className="font-serif font-bold text-sm text-gray-700 shrink-0">{edu.period}</span>
          </div>
          <div className="font-heading italic text-sm text-gray-700 mb-3">{edu.degree}</div>
          <ul className="space-y-2 pl-8">
            {edu.details.map((d, j) => (
              <li key={j} className="font-heading text-sm text-gray-800 list-none flex gap-2">
                <span className="text-gray-400 select-none">-</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
