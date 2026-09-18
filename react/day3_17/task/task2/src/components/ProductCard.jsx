import "./ProductCard.css"
import productImg from "../assets/hero.png"

const ProductCard = () => {
  return (
    <div className="product-card">
      <img className="brand-logo" src="/images/logo.jpg" alt="brand logo" />
      <img className="product-img" src={productImg} alt="product" />
      <h3 className="product-name">Wireless Headphones</h3>
      <p className="product-price">₹1999</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  )
}
export default ProductCard