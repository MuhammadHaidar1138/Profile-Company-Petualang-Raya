import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { whyChooseUs } from '../data/companyData.js'

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <SectionTitle subtitle={whyChooseUs.subtitle} title={whyChooseUs.title} />
        <div className="card-grid card-grid--4">
          {whyChooseUs.items.map((item) => (
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

export default WhyChooseUsSection
