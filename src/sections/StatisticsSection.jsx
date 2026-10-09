import { statistics } from '../data/companyData.js'

function StatisticsSection() {
  return (
    <section id="statistics" className="stats">
      <div className="container stats__grid">
        {statistics.map((stat) => (
          <div key={stat.id} className="stats__item">
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatisticsSection
