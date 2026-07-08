import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home({ addToCart }) {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="section-heading">
          <span className="tag">Featured</span>
          <h2>Popular Products</h2>
          <p>Handpicked products customers love the most.</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;