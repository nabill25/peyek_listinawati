import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/config';

const FloatingWA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak Listinawati! Saya ingin memesan Peyek. 😊')}`;

  if (!isVisible) return null;

  return (
    <>
      <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 999, background: 'var(--card-bg)', borderRadius: '12px 12px 12px 0', padding: '24px', width: 300, boxShadow: '0 10px 40px rgba(26, 37, 48, 0.1)', border: '1px solid var(--border)', animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
        
        <button onClick={() => setIsVisible(false)} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}>
          ×
        </button>

        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '1px', marginBottom: 8, textTransform: 'uppercase' }}>
          FRESH HOMEMADE. ALWAYS.
        </div>
        
        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 8, lineHeight: 1.2 }}>
          Let's keep in touch
        </h4>
        
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 20, lineHeight: 1.5 }}>
          Pesan langsung via WhatsApp untuk pengiriman instan. Cepat, mudah, dan aman.
        </p>
        
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '12px', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Pesan Sekarang</span>
          <span style={{ fontSize: '1.2rem', lineHeight: 0 }}>›</span>
        </a>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          /* On very small screens, maybe make it smaller or hide */
        }
      `}</style>
    </>
  );
};

export default FloatingWA;
