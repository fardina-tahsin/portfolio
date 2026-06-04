import Section from './Section'

export default function Skills({ skills }) {
  return (
    <Section title="Skills">
      <div className="space-y-2.5">
        {skills.map((skill, i) => (
          <p key={i} className="text-xs text-gray-800">
            <span className="font-semibold">{skill.category}:</span>{' '}
            <span className="font-heading">{skill.items}</span>
          </p>
        ))}
      </div>
    </Section>
  )
}
