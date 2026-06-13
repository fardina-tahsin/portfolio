import Section from './Section'

export default function Skills({ skills }) {
  return (
    <Section title="Skills">
      <div className="space-y-2">
        {skills.map((skill, i) => (
          <p key={i} className="text-sm text-gray-900">
            <span className="font-serif font-bold">{skill.category}:</span>{' '}
            <span className="font-heading font-normal">{skill.items}</span>
          </p>
        ))}
      </div>
    </Section>
  )
}



