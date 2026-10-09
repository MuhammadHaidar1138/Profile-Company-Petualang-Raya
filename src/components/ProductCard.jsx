import SmartImage from './SmartImage.jsx'

function ProductCard({ name, category, description, image }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <SmartImage src={image} alt={`Produk ${name}`} />
        <span className="product-card__badge">{category}</span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{name}</h3>
        <p className="product-card__desc">{description}</p>
      </div>
    </article>
  )
}

export default ProductCard
