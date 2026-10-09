function SectionTitle({ subtitle, title, description, align = 'center' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {subtitle && <span className="section-title__eyebrow">{subtitle}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  )
}

export default SectionTitle
