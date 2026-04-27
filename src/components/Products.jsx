import { products, WHATSAPP_NUMBER } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProductCard = ({ product, index }) => {
  const { name, price, weight, description, image, badge, badgeColor, highlights, emoji } = product;
  const message = `Halo Kak Listinawati! Saya ingin memesan *${name}* (${price}/pack). Apakah tersedia? 😊`;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  return (
    <div ref={ref} className={`reveal reveal-up delay-${(index + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
      style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(230,126,34,0.12)', border: '1px solid #f0e6d3', transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(230,126,34,0.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,126,34,0.12)'; }}>
      
      {/* Image */}
      <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15) rotate(2deg)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'} />
        <span className="badge" style={{ position: 'absolute', top: 16, left: 16, background: badgeColor, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>{badge}</span>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 20 }}>
          <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>{emoji}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 28 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#2c3e50', marginBottom: 12 }}>{name}</h3>
        <p style={{ color: '#7f8c8d', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 20 }}>{description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {highlights.map((h, i) => (
            <span key={i} style={{ background: '#fdf0e6', color: '#ca6f1e', fontSize: '0.8rem', fontWeight: 600, padding: '6px 12px', borderRadius: 20 }}>✓ {h}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <div>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#e67e22' }}>{price}</span>
            <span style={{ color: '#7f8c8d', fontSize: '0.85rem', marginLeft: 4 }}>/ {weight}</span>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', padding: '12px 24px', borderRadius: 50, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(37,211,102,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            💬 Pesan
          </a>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const bundleLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak! Saya tertarik dengan paket bundling Peyek. Boleh minta info harga dan variannya? 😊')}`;
  const [headerRef, headerVisible] = useScrollReveal();
  const [bundleRef, bundleVisible] = useScrollReveal();

  return (
    <section className="section" id="produk" style={{ background: '#fdf8f3', position: 'relative' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">🛒 Katalog Kami</p>
          <h2 className="section-title">Pilihan Produk Unggulan</h2>
          <div className="divider" />
          <p className="section-subtitle">Dibuat fresh setiap hari dari bahan pilihan berkualitas tinggi</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 60 }}>
          {products.map((p, index) => <ProductCard key={p.id} product={p} index={index} />)}
        </div>

        <div ref={bundleRef} className={`reveal reveal-scale ${bundleVisible ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', background: 'linear-gradient(135deg, #ffffff 0%, #fdf0e6 100%)', border: '1px solid #f0e6d3', borderRadius: 24, padding: '48px 36px', boxShadow: '0 8px 32px rgba(230,126,34,0.08)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#2c3e50', marginBottom: 12, fontFamily: "'Playfair Display', serif" }}>Ingin varian yang berbeda?</h3>
          <p style={{ color: '#7f8c8d', marginBottom: 24, fontSize: '1.05rem' }}>Kami menyediakan paket bundling khusus untuk Anda yang ingin mencoba semua rasa!</p>
          <a href={bundleLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            🎁 Tanya Paket Bundling
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
