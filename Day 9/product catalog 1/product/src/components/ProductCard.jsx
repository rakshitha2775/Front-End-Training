import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <p>₹{product.price.toLocaleString("en-IN")}</p>
        <Link to={`/products/${product.id}`} className="card-btn">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;