import { testimonials } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TestimonialCard = ({ t, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div ref={ref} className={`reveal reveal-up delay-${(index % 3 + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
      style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', padding: '40px 32px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)', position: 'relative', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}>
      
      <div style={{ position: 'absolute', top: 24, right: 32, fontSize: '4rem', color: 'var(--primary)', opacity: 0.05, fontFamily: "'Outfit', sans-serif", lineHeight: 1, fontWeight: 900 }}>"</div>
      
      <div style={{ fontSize: '1.2rem', marginBottom: 20 }}>{'⭐'.repeat(t.rating)}</div>
      <p style={{ color: 'var(--text)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32, fontWeight: 500 }}>"{t.text}"</p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg)', color: 'var(--primary)', fontWeight: 800, fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--border)' }}>
          {t.name.charAt(0)}
        </div>
        <div>
          <p style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.05rem', letterSpacing: '-0.3px' }}>{t.name}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>📍 {t.city}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [footerRef, footerVisible] = useScrollReveal();

  return (
    <section className="section" id="testimoni" style={{ background: '#ffffff', position: 'relative', padding: '100px 20px' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '-1.5px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Real people. Real crunch.</h2>
          <p className="section-subtitle" style={{ maxWidth: 600, margin: '0 auto 60px', fontSize: '1.2rem' }}>See what our customers are saying about the reinvented snack routine.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, marginBottom: 60 }}>
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
        </div>

        <div ref={footerRef} className={`reveal reveal-scale ${footerVisible ? 'is-visible' : ''}`} style={{ textAlign: 'center' }}>
          <span style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 50, padding: '12px 28px', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.5px' }}>
            🔒 100% verified authentic reviews
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
