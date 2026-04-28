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
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left Links (Desktop) */}
          <div style={{ flex: 1, display: 'flex', gap: 32 }} className="nav-desktop">
            {links.slice(0, 2).map(l => (
              <a key={l.href} href={l.href} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--primary)'}>{l.label}</a>
            ))}
          </div>

          {/* Logo (Center) */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ fontSize: '1.8rem' }}>🥜</span>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1, letterSpacing: '-0.5px' }}>PEYEK</span>
              <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--primary)', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Listinawati</span>
            </div>
          </a>

          {/* Right Links & Button (Desktop) */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 32 }} className="nav-desktop">
            {links.slice(2).map(l => (
              <a key={l.href} href={l.href} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--primary)'}>{l.label}</a>
            ))}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
              Pesan Sekarang
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4 }}
            className="nav-hamburger" aria-label="Menu">
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--primary)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--primary)', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--primary)', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(232, 240, 248, 0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', opacity: menuOpen ? 1 : 0, visibility: menuOpen ? 'visible' : 'hidden', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '85%', maxWidth: 320, background: 'white', padding: '100px 32px 40px', display: 'flex', flexDirection: 'column', gap: 28, transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)', boxShadow: '-10px 0 30px rgba(0,0,0,0.05)' }}>
          
          {/* Close Button inside Mobile Menu */}
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--primary)', transform: 'rotate(45deg) translate(2px, 2px)' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--primary)', transform: 'rotate(-45deg) translate(0px, -1px)' }} />
          </button>

          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none', paddingBottom: 12, borderBottom: '1px solid var(--border)', opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.05}s` }}>
              {l.label}
            </a>
          ))}
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s' }}>
            Pesan Sekarang
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
