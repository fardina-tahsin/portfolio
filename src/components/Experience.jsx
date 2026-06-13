import Section from './Section'

export default function Experience({ experience }) {
  return (
    <Section title="Experience">
      {experience.map((exp, i) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between items-baseline flex-wrap gap-1 mb-2">
            <span className="font-serif font-bold text-[16px]/[20px] text-gray-950">{exp.title}</span>
            <span className="font-serif font-bold text-sm text-gray-700 shrink-0">{exp.period}</span>
          </div>
          <div className="font-heading italic text-sm text-gray-700 mb-3">{exp.role}</div>
          <ul className="space-y-2 pl-4">
            {exp.bullets.map((d, j) => (
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


// import Section from './Section'

// export default function Experience({ experience }) {
//   return (
//     <Section title="Experience">
//       {experience.map((exp, i) => (
//         <div key={i} className="mb-4 last:mb-0 break-inside-avoid">
//           {/* Top Line: Club/Company Name and Date Period */}
//           <div className="flex justify-between items-baseline flex-wrap gap-x-4">
//             <span className="font-medium text-sm text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
//               {exp.title}
//             </span>
//             <span className="text-xs text-gray-600 font-normal shrink-0">
//               {exp.period}
//             </span>
//           </div>

//           {/* Sub-line: Role (Italicized) and Location (Right-aligned) */}
//           <div className="flex justify-between items-baseline text-xs text-gray-700 italic mb-1.5">
//             <span>{exp.role}</span>
//             <span className="not-italic text-gray-500 font-normal text-[11px] uppercase tracking-wider">
//               {exp.location}
//             </span>
//           </div>

//           {/* Bullet Descriptions */}
//           <ul className="space-y-1 pl-1">
//             {exp.bullets.map((bullet, j) => (
//               <li key={j} className="text-sm text-gray-800 flex gap-2.5 leading-relaxed">
//                 {/* Clean inline bullet symbol */}
//                 <span className="text-gray-400 select-none font-light">—</span>
//                 <span>{bullet}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </Section>
//   )
// }
