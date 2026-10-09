import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/companyData.js'

function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle subtitle={services.subtitle} title={services.title} />
        <div className="card-grid card-grid--3">
          {services.items.map((item) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
