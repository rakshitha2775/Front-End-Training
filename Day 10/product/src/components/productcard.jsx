import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-box">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">₹{product.price.toLocaleString("en-IN")}</p>

        <div className="card-actions">
          <Link to={`/products/${product.id}`} className="card-btn">
            Details
          </Link>

          <button
  type="button"
  className="card-btn add-btn"
  onClick={() => addToCart(product)}
>
  Add Cart
</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;