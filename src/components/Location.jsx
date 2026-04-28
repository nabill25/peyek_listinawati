import { WHATSAPP_NUMBER, STORE_ADDRESS, STORE_HOURS, MAPS_EMBED_URL } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Location = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak! Saya ingin tanya cara mendapatkan produk Peyek Listinawati. 😊')}`;
  const [headerRef, headerVisible] = useScrollReveal();
  const [mapRef, mapVisible] = useScrollReveal();
  const [infoRef, infoVisible] = useScrollReveal();

  const infoItems = [
    { icon: '📍', title: 'Visit Us', text: STORE_ADDRESS },
    { icon: '🕐', title: 'Hours', text: `${STORE_HOURS.weekday}\n${STORE_HOURS.weekend}` },
    { icon: '💬', title: 'Contact', text: 'WhatsApp: 0819-0895-7181\nFast response under 5 mins!' },
    { icon: '🚚', title: 'Delivery', text: 'Pick up in store\nor order via Gojek/Grab' },
  ];

  return (
    <section className="section" id="lokasi" style={{ background: 'var(--bg)', padding: '100px 20px', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '-1.5px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Find us offline.</h2>
          <p className="section-subtitle" style={{ maxWidth: 600, margin: '0 auto 60px', fontSize: '1.2rem' }}>Visit our store or get it delivered straight to your door.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="location-grid">
          {/* Map */}
          <div ref={mapRef} className={`reveal reveal-left ${mapVisible ? 'is-visible' : ''}`}
            style={{ borderRadius: 'var(--radius)', overflow: 'hidden', height: 480, boxShadow: 'var(--shadow)', border: '1px solid var(--border)', transition: 'transform 0.4s' }}>
            <iframe
              title="Lokasi Toko Peyek Listinawati"
              src={MAPS_EMBED_URL}
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div ref={infoRef} className={`reveal reveal-right ${infoVisible ? 'is-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="info-grid">
              {infoItems.map((item, i) => (
                <div key={i} className={`reveal reveal-up delay-${(i + 1) * 100} ${infoVisible ? 'is-visible' : ''}`}
                  style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', padding: 24, border: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(26, 37, 48, 0.02)' }}>
                  <span style={{ fontSize: '1.5rem', marginBottom: 12, display: 'block' }}>{item.icon}</span>
                  <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: 8, fontSize: '1.1rem', letterSpacing: '-0.3px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-line', fontWeight: 500 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className={`reveal reveal-up delay-400 ${infoVisible ? 'is-visible' : ''}`} style={{ marginTop: 16 }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .location-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 500px) {
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Location;
