import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured picks</p>
          <h2>Popular Products</h2>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;