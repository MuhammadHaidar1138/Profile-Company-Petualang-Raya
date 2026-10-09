import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { contact } from '../data/companyData.js'

const initialForm = { name: '', email: '', message: '' }

function ContactSection() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Tanpa backend: pesan dikirim melalui WhatsApp perusahaan.
  const handleSubmit = (event) => {
    event.preventDefault()
    const text = `Halo, saya ${form.name} (${form.email}).\n\n${form.message}`
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setForm(initialForm)
  }

  const infoItems = [
    { icon: 'pin', label: 'Alamat', value: contact.address },
    {
      icon: 'mail',
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: 'phone',
      label: 'Telepon',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: contact.whatsappLabel,
      href: `https://wa.me/${contact.whatsappNumber}`,
    },
    { icon: 'clock', label: 'Jam Operasional', value: contact.hours },
  ]

  return (
    <section id="contact" className="section section--light">
      <div className="container">
        <SectionTitle
          subtitle={contact.subtitle}
          title={contact.title}
          description={contact.description}
        />

        <div className="contact__grid">
          <ul className="contact__info">
            {infoItems.map((item) => (
              <li key={item.label} className="contact__item">
                <span className="contact__icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <span className="contact__label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.icon === 'whatsapp' ? '_blank' : undefined} rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn--primary">
              Kirim via WhatsApp
              <Icon name="arrow" size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
