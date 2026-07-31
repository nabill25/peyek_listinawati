import { WHATSAPP_NUMBER } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAdmin } from '../context/AdminContext';

const ProductCard = ({ product, index }) => {
  const { name, price, weight, description, image, badge, badgeColor, highlights, emoji } = product;
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const { addToCart } = useCart();

  return (
    <div ref={ref} className={`reveal reveal-up delay-${(index + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
      style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', border: '1px solid var(--border)', transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}>
      
      {/* Image */}
      <div className="product-img-wrapper" style={{ position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)', mixBlendMode: 'multiply' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15) rotate(2deg)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'} />
        <span className="badge" style={{ position: 'absolute', top: 16, left: 16 }}>{badge}</span>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,37,48,0.2) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 20, pointerEvents: 'none' }}>
          <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>{emoji}</span>
        </div>
      </div>

      {/* Body */}
      <div className="product-body-wrapper" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 className="product-title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 12, letterSpacing: '-0.5px' }}>{name}</h3>
        <p className="product-desc" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 24 }}>{description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {highlights.map((h, i) => (
            <span key={i} style={{ background: 'var(--bg)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, padding: '6px 14px', borderRadius: 20 }}>✓ {h}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: 24 }}>
          <div>
            <span className="product-price" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{price}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: 4, fontWeight: 600 }}>/ {weight}</span>
          </div>
          <button onClick={() => addToCart(product, 1)} className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.9rem', cursor: 'pointer', background: 'transparent' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const bundleLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak! Saya tertarik dengan paket bundling Peyek. Boleh minta info harga dan variannya? 😊')}`;
  const [headerRef, headerVisible] = useScrollReveal();
  const [bundleRef, bundleVisible] = useScrollReveal();
  const { liveProducts, loading } = useAdmin();

  const [activeCategory, setActiveCategory] = useState('Semua');
  const categories = ['Semua', ...new Set(liveProducts.map(p => p.category).filter(Boolean))];

  const filteredProducts = activeCategory === 'Semua' 
    ? liveProducts 
    : liveProducts.filter(p => p.category === activeCategory);

  return (
    <section className="section" id="produk" style={{ background: 'var(--bg)', position: 'relative', padding: '120px 20px' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '-1.5px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Shop the collection.</h2>
          <p className="section-subtitle" style={{ maxWidth: 600, margin: '0 auto 60px', fontSize: '1.2rem' }}>Made fresh daily. The clean crunch you've been looking for.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 48, opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '50px',
                border: 'none',
                background: activeCategory === cat ? 'var(--primary)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--text)',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: activeCategory === cat ? '0 8px 20px rgba(26, 37, 48, 0.2)' : '0 2px 10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => { if (activeCategory !== cat) e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { if (activeCategory !== cat) e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, marginBottom: 80 }}>
          {filteredProducts.map((p, index) => <ProductCard key={p.id} product={p} index={index} />)}
        </div>

        <div ref={bundleRef} className={`reveal reveal-scale ${bundleVisible ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', background: 'white', border: '1px solid var(--border)', borderRadius: '24px', padding: '60px 40px', boxShadow: '0 20px 60px rgba(26, 37, 48, 0.05)' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: 16, fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '-1px' }}>Looking for variety?</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: '1.1rem', maxWidth: 500, margin: '0 auto 32px' }}>Try our custom bundling options and taste every flavor profile we have to offer.</p>
          <a href={bundleLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Get the Bundle
          </a>
        </div>
      </div>

      <style>{`
        .product-img-wrapper { height: 260px; }
        .product-body-wrapper { padding: 32px; }
        @media (max-width: 768px) {
          .product-img-wrapper { height: 180px; }
          .product-body-wrapper { padding: 20px; }
          .product-title { font-size: 1.25rem !important; margin-bottom: 8px !important; }
          .product-desc { font-size: 0.85rem !important; margin-bottom: 16px !important; line-height: 1.4 !important; }
          .product-price { font-size: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Products;
