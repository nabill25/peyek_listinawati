import { features } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeatureCard = ({ f, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={`reveal reveal-scale delay-${(index % 3 + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
      style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '32px 28px', textAlign: 'center', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'default' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'rgba(230,126,34,0.6)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}>
      <span style={{ fontSize: '3.2rem', display: 'block', marginBottom: 20, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))', transition: 'transform 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>{f.icon}</span>
      <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.desc}</p>
    </div>
  );
};

const Features = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section" id="keunggulan" style={{ background: 'linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative BG elements */}
      <div className="animate-float" style={{ position: 'absolute', top: '-10%', left: '-5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(230,126,34,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div className="animate-float delay-200" style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(41,128,185,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <p className="section-tag" style={{ color: '#f39c12', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>💎 Mengapa Pilih Kami</p>
          <h2 className="section-title" style={{ color: 'white', textShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Keunggulan Produk Kami</h2>
          <div className="divider" style={{ background: 'linear-gradient(90deg, #f39c12, #e67e22)' }} />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Kami berkomitmen memberikan yang terbaik untuk pelanggan setia kami</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {features.map((f, i) => <FeatureCard key={i} f={f} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Features;
