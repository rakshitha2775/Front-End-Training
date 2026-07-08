import React, { useState, useMemo } from 'react'
import './App.css'

const PRODUCTS = [
  { id: 1, name: "Ember Ceramic Vase", cat: "home", price: 38, seed: "blaze-vase-1", h: 420, tag: "NEW DROP" },
  { id: 2, name: "Smoked Amber Candle", cat: "home", price: 24, seed: "blaze-candle-1", h: 520, tag: "BEST SELLER" },
  { id: 3, name: "Terracotta Bowl Set", cat: "home", price: 46, seed: "blaze-bowl-1", h: 380, tag: "LIMITED" },
  { id: 4, name: "Woven Rattan Tray", cat: "home", price: 32, seed: "blaze-tray-1", h: 460, tag: "NEW DROP" },
  { id: 5, name: "Rust Clay Lip Tint", cat: "beauty", price: 18, seed: "blaze-lip-1", h: 400, tag: "CULT FAV" },
  { id: 6, name: "Golden Hour Oil", cat: "beauty", price: 29, seed: "blaze-oil-1", h: 500, tag: "BEST SELLER" },
  { id: 7, name: "Copper Facial Roller", cat: "beauty", price: 22, seed: "blaze-roller-1", h: 420, tag: "NEW DROP" },
  { id: 8, name: "Sunburst Hoop Earrings", cat: "accessories", price: 34, seed: "blaze-earring-1", h: 440, tag: "LIMITED" },
  { id: 9, name: "Tortoise Sunglasses", cat: "accessories", price: 52, seed: "blaze-sunnies-1", h: 500, tag: "NEW DROP" },
  { id: 10, name: "Woven Market Tote", cat: "accessories", price: 44, seed: "blaze-tote-1", h: 480, tag: "BEST SELLER" },
  { id: 11, name: "Burnt Orange Knit", cat: "apparel", price: 68, seed: "blaze-knit-1", h: 540, tag: "NEW DROP" },
  { id: 12, name: "Charcoal Linen Shirt", cat: "apparel", price: 58, seed: "blaze-shirt-1", h: 460, tag: "LIMITED" },
]

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "home", label: "Home" },
  { key: "beauty", label: "Beauty" },
  { key: "accessories", label: "Accessories" },
  { key: "apparel", label: "Apparel" },
]

function ProductCard({ product, onAdd }) {
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = () => {
    onAdd()
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 900)
  }

  return (
    <div className="card">
      <div className="card-img-wrap">
        <div className="tape" />
        <img
          src={`https://picsum.photos/seed/${product.seed}/500/${product.h}`}
          alt={product.name}
          loading="lazy"
        />
        <div className="stamp">{product.tag}</div>
      </div>
      <div className="card-body">
        <span className="card-cat">{product.cat}</span>
        <h3 className="card-title">{product.name}</h3>
        <div className="card-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button
            className={`add-btn${justAdded ? ' added' : ''}`}
            onClick={handleAdd}
          >
            {justAdded ? 'ADDED' : '+ ADD'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [activeCat, setActiveCat] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCat === 'all' || p.cat === activeCat
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQuery
    })
  }, [activeCat, query])

  return (
    <>
      <nav className="nav">
        <div className="brand"><span className="dot" />BLAZE GOODS</div>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#shop">Shop</a>
            <a href="#">New</a>
            <a href="#">About</a>
          </div>
          <button className="cart-btn">CART (<span>{cartCount}</span>)</button>
        </div>
      </nav>

      <section className="hero">
        <span className="eyebrow">Curated Goods · Small Batch</span>
        <h1>Objects worth<br /><em>lingering</em> on.</h1>
        <p>A hand-picked edit of home, beauty and everyday pieces — warm tones, honest materials, no clutter.</p>
      </section>

      <div className="controls">
        <div className="search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search the catalog…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="chips">
          {CATEGORIES.map(c => (
            <button
              key={c.key}
              className={`chip${activeCat === c.key ? ' active' : ''}`}
              onClick={() => setActiveCat(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-wrap" id="shop">
        {filtered.length > 0 ? (
          <div className="grid">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={() => setCartCount(c => c + 1)} />
            ))}
          </div>
        ) : (
          <div className="empty-state" style={{ display: 'block' }}>
            No pieces match that search — try another word or category.
          </div>
        )}
      </div>

      <footer>
        <div className="brand" style={{ justifyContent: 'center' }}><span className="dot" />BLAZE GOODS</div>
        <div>&copy; 2026 Blaze Goods. Basic catalog build — more features coming.</div>
      </footer>
    </>
  )
}
