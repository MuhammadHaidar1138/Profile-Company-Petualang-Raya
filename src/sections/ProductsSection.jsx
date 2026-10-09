import SectionTitle from '../components/SectionTitle.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/companyData.js'

function ProductsSection() {
  return (
    <section id="products" className="section section--light">
      <div className="container">
        <SectionTitle subtitle={products.subtitle} title={products.title} />
        <div className="card-grid card-grid--4">
          {products.items.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              category={item.category}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
