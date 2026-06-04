
import Section from './Section'

export default function Achievements({ achievements }) {
  return (
    <Section title="Algorithmic Competitions/Achievements">
      <ul className="space-y-2">
        {achievements.map((item, i) => (
          <li key={i} className="flex justify-between items-baseline text-lg text-gray-800 gap-4">
            <div className="flex gap-3">
              <span className="text-gray-400 select-none">-</span>
              <span>{item.bullets[0]}</span>
            </div>

            {item.position && (
              <span className="font-heading text-sm text-gray-700 shrink-0 font-normal">
                {item.position}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}

