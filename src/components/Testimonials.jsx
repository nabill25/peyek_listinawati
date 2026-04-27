import { testimonials } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TestimonialCard = ({ t, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div ref={ref} className={`reveal reveal-up delay-${(index % 3 + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
      style={{ background: 'white', borderRadius: 16, padding: 28, boxShadow: '0 4px 24px rgba(230,126,34,0.08)', border: '1px solid #f0e6d3', position: 'relative', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(230,126,34,0.15)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,126,34,0.08)'; }}>
      
      <div style={{ position: 'absolute', top: 16, right: 20, fontSize: '5rem', color: '#e67e22', opacity: 0.08, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>"</div>
      
      <div style={{ fontSize: '1.1rem', marginBottom: 14 }}>{'⭐'.repeat(t.rating)}</div>
      <p style={{ color: '#2c3e50', fontSize: '1rem', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#e67e22,#f39c12)', color: 'white', fontWeight: 700, fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(230,126,34,0.3)' }}>
          {t.name.charAt(0)}
        </div>
        <div>
          <p style={{ fontWeight: 700, color: '#2c3e50', fontSize: '1rem' }}>{t.name}</p>
          <p style={{ color: '#7f8c8d', fontSize: '0.85rem', marginTop: 2 }}>📍 {t.city}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [footerRef, footerVisible] = useScrollReveal();

  return (
    <section className="section" id="testimoni" style={{ background: 'linear-gradient(to bottom, #fdf8f3 0%, #fff8f0 100%)', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">💬 Kata Pelanggan</p>
          <h2 className="section-title">Testimoni Nyata</h2>
          <div className="divider" />
          <p className="section-subtitle">Kepuasan pelanggan adalah prioritas utama kami</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginBottom: 40 }}>
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
        </div>

        <div ref={footerRef} className={`reveal reveal-scale ${footerVisible ? 'is-visible' : ''}`} style={{ textAlign: 'center' }}>
          <span style={{ background: 'white', border: '1px solid #f0e6d3', borderRadius: 20, padding: '12px 24px', fontSize: '0.9rem', color: '#7f8c8d', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
            🔒 Semua testimoni asli dari pelanggan setia kami
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
