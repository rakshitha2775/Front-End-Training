import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="section page">
        <h2>Product not found</h2>
        <Link to="/products" className="btn primary-btn">
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="product-detail page">
      <div className="detail-image-box">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-content">
        <span className="tag">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="detail-price">₹{product.price.toLocaleString("en-IN")}</p>
        <p className="detail-description">{product.description}</p>

        <div className="hero-actions">
          <button
  type="button"
  className="btn primary-btn"
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>

          <Link to="/products" className="btn secondary-btn">
            Back
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;