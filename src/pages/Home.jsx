import HomeSection from '../sections/HomeSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import ProductsSection from '../sections/ProductsSection.jsx'
import WhyChooseUsSection from '../sections/WhyChooseUsSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'

function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      {/* <StatisticsSection /> */}
      <WhyChooseUsSection />
      <ContactSection />
    </>
  )
}

export default Home
