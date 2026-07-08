import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="section page">
        <h2>Product not found</h2>
        <Link to="/products" className="btn">Back to Products</Link>
      </section>
    );
  }

  return (
    <section className="product-detail page">
      <img src={product.image} alt={product.name} />

      <div>
        <p className="eyebrow">{product.category}</p>
        <h2>{product.name}</h2>
        <p className="detail-price">₹{product.price.toLocaleString("en-IN")}</p>
        <p>{product.description}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </section>
  );
}

export default ProductDetail;