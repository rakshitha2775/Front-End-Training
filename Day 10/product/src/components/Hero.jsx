import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="tag">New Season Collection</span>
        <h1>Discover quality products for everyday life</h1>
        <p>
          Explore electronics, fashion, home essentials, and accessories with a
          clean and modern shopping experience.
        </p>

        <div className="hero-actions">
          <Link to="/products" className="btn primary-btn">
            Shop Now
          </Link>
          <Link to="/about" className="btn secondary-btn">
            Learn More
          </Link>
        </div>
      </div>

      <div className="hero-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900"
          alt="Product collection"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;