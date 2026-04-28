import { features } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeatureCard = ({ f, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={`reveal reveal-scale delay-${(index % 3 + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '40px 28px', textAlign: 'center', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'default', boxShadow: '0 4px 20px rgba(26, 37, 48, 0.03)' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(26, 37, 48, 0.08)'; e.currentTarget.style.borderColor = 'rgba(26, 37, 48, 0.15)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(26, 37, 48, 0.03)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
      <span style={{ fontSize: '3rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, background: 'var(--bg)', borderRadius: '50%', marginBottom: 24, transition: 'transform 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0)'}>{f.icon}</span>
      <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 800, marginBottom: 12 }}>{f.title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.desc}</p>
    </div>
  );
};

const Features = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section" id="keunggulan" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden', padding: '100px 20px' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">Keunggulan Kami</p>
          <h2 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '-1px' }}>Mengapa Memilih Kami?</h2>
          <p className="section-subtitle" style={{ maxWidth: 500, margin: '0 auto 48px' }}>Dibuat dengan penuh cinta dan bahan berkualitas terbaik untuk kepuasan Anda.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {features.map((f, i) => <FeatureCard key={i} f={f} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Features;
