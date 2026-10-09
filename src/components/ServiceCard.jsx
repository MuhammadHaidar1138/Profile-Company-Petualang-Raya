import Icon from './Icon.jsx'

// Dipakai untuk kartu layanan maupun kartu "Why Choose Us".
function ServiceCard({ icon, title, description }) {
  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon name={icon} size={28} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
    </article>
  )
}

export default ServiceCard
