import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        BlueCart
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart" className="cart-badge">
          Cart: {cartCount}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;