import { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data/config';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#produk', label: 'Produk' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#testimoni', label: 'Testimoni' },
    { href: '#lokasi', label: 'Lokasi' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        padding: scrolled ? '12px 20px' : '24px 20px',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <span style={{ fontSize: '1.8rem', filter: scrolled ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))', transition: 'all 0.3s' }}>🥜</span>
            <div>
              <span style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 800, color: scrolled ? '#e67e22' : 'white', lineHeight: 1, textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.2)' }}>Peyek</span>
              <span style={{ display: 'block', fontSize: '0.75rem', color: scrolled ? '#7f8c8d' : 'rgba(255,255,255,0.9)', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>Listinawati</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ color: scrolled ? '#2c3e50' : 'white', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s, transform 0.2s', display: 'inline-block', textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.2)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#e67e22'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = scrolled ? '#2c3e50' : 'white'; e.currentTarget.style.transform = 'translateY(0)'; }}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', padding: '10px 24px', borderRadius: 50, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: '0 4px 12px rgba(37,211,102,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,211,102,0.3)'; }}>
                📱 Pesan Sekarang
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4 }}
            className="nav-hamburger" aria-label="Menu">
            <span style={{ display: 'block', width: 24, height: 2, background: scrolled ? '#2c3e50' : 'white', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: scrolled ? '#2c3e50' : 'white', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: scrolled ? '#2c3e50' : 'white', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.5)', opacity: menuOpen ? 1 : 0, visibility: menuOpen ? 'visible' : 'hidden', transition: 'opacity 0.3s, visibility 0.3s' }} onClick={() => setMenuOpen(false)}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 280, background: 'white', padding: '80px 32px 32px', display: 'flex', flexDirection: 'column', gap: 24, transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} onClick={e => e.stopPropagation()}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color: '#2c3e50', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', paddingBottom: 12, borderBottom: '1px solid #f0e6d3' }}>{l.label}</a>
          ))}
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', padding: '14px 20px', borderRadius: 50, fontWeight: 700, textDecoration: 'none', textAlign: 'center', marginTop: 12, boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}>
            💬 Pesan via WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
