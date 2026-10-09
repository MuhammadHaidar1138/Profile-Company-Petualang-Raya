import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
