import { WHATSAPP_NUMBER } from '../data/config';

const Hero = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak Listinawati! Saya ingin memesan Peyek. Boleh minta info lengkapnya? 😊')}`;

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg)', paddingTop: 80 }}>
      
      {/* Container */}
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '40px 20px', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          
          {/* Left Column: Text Content */}
          <div style={{ maxWidth: 600 }}>
            <div className="animate-fadeInUp badge" style={{ marginBottom: 24 }}>
              Zero Preservatives. 100% Homemade.
            </div>

            <h1 className="animate-fadeInUp delay-100" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3rem, 7vw, 5rem)', color: 'var(--primary)', lineHeight: 1.05, marginBottom: 24, fontWeight: 800, letterSpacing: '-1.5px' }}>
              Meet your snack routine, <span style={{ color: '#2980b9' }}>reinvented.</span>
            </h1>

            <p className="animate-fadeInUp delay-200" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: 40, fontWeight: 400 }}>
              The only fresh, crisp, and clean way to replace the mass-produced snacks you've used your whole life.
            </p>

            <div className="animate-fadeInUp delay-300" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#produk" className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                Shop Now
              </a>
            </div>

            {/* Stats (Clean minimal style) */}
            <div className="animate-fadeInUp delay-400" style={{ display: 'flex', alignItems: 'center', gap: 40, borderTop: '1px solid var(--border)', paddingTop: 32 }}>
              {[['10+', 'Years Experience'], ['1000+', 'Happy Customers']].map(([num, label], i) => (
                <div key={i}>
                  <span style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{num}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="animate-fadeInUp delay-200 hero-image-wrapper" style={{ position: 'relative' }}>
            {/* Soft decorative shadow/blob */}
            <div className="animate-float" style={{ position: 'absolute', top: '10%', right: '10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(41,128,185,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
            
            <img src="/hero_banner.png" alt="Peyek Listinawati" style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', borderRadius: 'var(--radius)', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))' }} />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
          .hero-grid > div:first-child { margin: 0 auto; display: flex; flexDirection: column; alignItems: center; }
          .hero-image-wrapper { order: -1; } /* Image on top for mobile */
        }
      `}</style>
    </section>
  );
};

export default Hero;
