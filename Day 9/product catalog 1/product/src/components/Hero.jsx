import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">New arrivals available now</p>
        <h1>Find products that fit your everyday life</h1>
        <p>
          Browse a clean catalog of electronics, fashion, accessories, and home
          essentials in one place.
        </p>
        <Link to="/products" className="btn">Shop Products</Link>
      </div>

      <img src={heroImage} alt="Featured products" className="hero-image" />
    </section>
  );
}

export default Hero;