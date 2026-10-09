import { company, navLinks, services, contact, footer } from '../data/companyData.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__about">
          <a href="#home" className="footer__brand">
            <img src={company.logo} alt="" width="36" height="36" />
            <strong>{company.name}</strong>
          </a>
          <p>{footer.description}</p>
        </div>

        <div className="footer__col">
          <h3>Navigasi</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Layanan</h3>
          <ul>
            {services.items.slice(0, 4).map((item) => (
              <li key={item.id}>
                <a href="#services">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Kontak</h3>
          <ul>
            <li>{contact.address}</li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
