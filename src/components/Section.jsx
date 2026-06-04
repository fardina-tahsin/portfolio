export default function Section({ title, children }) {
  return (
    <div className="mb-8 block break-inside-avoid">
      {/* Section Title */}
      <h2 className="section-heading">{title}</h2>
      {/* Thin colored bottom divider */}
      <div className="section-divider"></div>
      <div>{children}</div>
    </div>
  )
}
