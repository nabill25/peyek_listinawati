import { WHATSAPP_NUMBER, STORE_NAME } from '../data/config';

const Footer = () => {
  const year = new Date().getFullYear();
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak Listinawati! Saya ingin memesan Peyek. 😊')}`;

  return (
    <footer id="kontak" style={{ background: '#2c3e50', color: 'rgba(255,255,255,0.8)' }}>
      {/* Top */}
      <div style={{ padding: '60px 20px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }} className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: '2rem' }}>🥜</span>
                <div>
                  <span style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#f39c12', lineHeight: 1 }}>Peyek</span>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase' }}>Listinawati</span>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>
                Camilan tradisional berkualitas tinggi, dibuat dengan resep warisan dan penuh kasih sayang untuk keluarga Indonesia.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', padding: '10px 20px', borderRadius: 50, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                💬 Chat Sekarang
              </a>
            </div>

            {/* Menu */}
            <div>
              <h4 style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16 }}>Menu</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['#produk:Produk', '#keunggulan:Keunggulan', '#testimoni:Testimoni', '#lokasi:Lokasi'].map(item => {
                  const [href, label] = item.split(':');
                  return <li key={href}><a href={href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f39c12'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>{label}</a></li>;
                })}
              </ul>
            </div>

            {/* Produk */}
            <div>
              <h4 style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16 }}>Produk</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Peyek Kacang', 'Peyek Teri', 'Peyek Udang Rebon', 'Paket Bundling'].map(p => (
                  <li key={p}><a href="#produk" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.88rem' }}>{p}</a></li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h4 style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 16 }}>Kontak</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['📱 0812-3456-7890', '📍 Jakarta Selatan', '🕐 Buka Setiap Hari', '✉️ peyek@listinawati.id'].map(c => (
                  <li key={c} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)' }}>
          <p>© {year} {STORE_NAME}. Semua Hak Dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk Indonesia</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
};

export default Footer;
