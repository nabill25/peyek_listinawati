import { WHATSAPP_NUMBER, STORE_ADDRESS, STORE_HOURS, MAPS_EMBED_URL } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Location = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak! Saya ingin tanya cara mendapatkan produk Peyek Listinawati. 😊')}`;
  const [headerRef, headerVisible] = useScrollReveal();
  const [mapRef, mapVisible] = useScrollReveal();
  const [infoRef, infoVisible] = useScrollReveal();

  const infoItems = [
    { icon: '🏠', title: 'Alamat Toko', text: STORE_ADDRESS },
    { icon: '🕐', title: 'Jam Operasional', text: `${STORE_HOURS.weekday}\n${STORE_HOURS.weekend}` },
    { icon: '📱', title: 'Hubungi Kami', text: 'WhatsApp: 0819-0895-7181\nRespon cepat dalam 5 menit!' },
    { icon: '🚗', title: 'Cara Mendapatkan', text: 'Ambil langsung di toko\natau pesan antar via ojek online' },
  ];

  return (
    <section className="section" id="lokasi" style={{ background: 'linear-gradient(135deg, #fdf8f3 0%, #ffffff 100%)' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header reveal reveal-up ${headerVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">📍 Temukan Kami</p>
          <h2 className="section-title">Lokasi Toko Kami</h2>
          <div className="divider" />
          <p className="section-subtitle">Kunjungi langsung atau pesan via WhatsApp, kami siap melayani Anda</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }} className="location-grid">
          {/* Map */}
          <div ref={mapRef} className={`reveal reveal-left ${mapVisible ? 'is-visible' : ''}`}
            style={{ borderRadius: 20, overflow: 'hidden', height: 440, boxShadow: '0 8px 32px rgba(230,126,34,0.15)', border: '1px solid #f0e6d3', transition: 'transform 0.4s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
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
          <div ref={infoRef} className={`reveal reveal-right ${infoVisible ? 'is-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {infoItems.map((item, i) => (
              <div key={i} className={`reveal reveal-up delay-${(i + 1) * 100} ${infoVisible ? 'is-visible' : ''}`}
                style={{ display: 'flex', gap: 16, background: 'white', borderRadius: 16, padding: 20, border: '1px solid #f0e6d3', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.borderColor = '#e67e22'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(230,126,34,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = '#f0e6d3'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'; }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0, transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>{item.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: '#2c3e50', marginBottom: 4, fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ color: '#7f8c8d', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.text}</p>
                </div>
              </div>
            ))}

            <a href={waLink} target="_blank" rel="noopener noreferrer" className={`btn btn-wa reveal reveal-up delay-400 ${infoVisible ? 'is-visible' : ''}`}
              style={{ justifyContent: 'center', marginTop: 12, fontSize: '1.05rem', animation: 'pulse-wa 2s infinite', padding: '16px', borderRadius: 16 }}>
              💬 Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .location-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Location;
