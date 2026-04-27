import { WHATSAPP_NUMBER } from '../data/config';

const Hero = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo Kak Listinawati! Saya ingin memesan Peyek. Boleh minta info lengkapnya? 😊')}`;

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/hero_banner.png" alt="Peyek Listinawati" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(44,62,80,0.85) 0%, rgba(230,126,34,0.7) 100%)' }} />
        
        {/* Decorative Floating Elements */}
        <div className="animate-float delay-100" style={{ position: 'absolute', top: '15%', left: '5%', width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)' }} />
        <div className="animate-float delay-300" style={{ position: 'absolute', bottom: '25%', right: '10%', width: 100, height: 100, borderRadius: '50%', background: 'rgba(243,156,18,0.15)', backdropFilter: 'blur(8px)' }} />
        <div className="animate-float delay-200" style={{ position: 'absolute', top: '40%', right: '20%', width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)' }} />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 20px 80px' }}>
        <div className="animate-fadeInUp glass" style={{ display: 'inline-block', color: 'white', padding: '8px 20px', borderRadius: 50, fontSize: '0.9rem', fontWeight: 600, marginBottom: 24, letterSpacing: '0.5px' }}>
          ✨ Produk Homemade Pilihan
        </div>

        <h1 className="animate-fadeInUp delay-100" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'white', lineHeight: 1.15, marginBottom: 20, maxWidth: 650, textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
          Gurih Renyah,<br />
          <span style={{ color: '#f39c12', fontStyle: 'italic' }}>Cita Rasa Nusantara</span>
        </h1>

        <p className="animate-fadeInUp delay-200" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: 36, maxWidth: 500, textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          Peyek berkualitas tinggi buatan rumah, dibuat dari bahan-bahan segar pilihan tanpa pengawet. Nikmati kerenyahan di setiap gigitan!
        </p>

        <div className="animate-fadeInUp delay-300" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
            💬 Pesan via WhatsApp
          </a>
          <a href="#produk" className="btn btn-outline" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
            Lihat Produk ↓
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fadeInUp delay-400 glass" style={{ display: 'inline-flex', alignItems: 'center', gap: 20, borderRadius: 16, padding: '20px 28px', flexWrap: 'wrap', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          {[['10+', 'Tahun Pengalaman'], ['1000+', 'Pelanggan Setia'], ['3', 'Varian Produk']].map(([num, label], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {i > 0 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.3)' }} />}
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: '#f39c12', lineHeight: 1, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>{num}</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', marginTop: 6, fontWeight: 500 }}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <div style={{ width: 30, height: 50, border: '2px solid rgba(255,255,255,0.6)', borderRadius: 20, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
           <div className="animate-float" style={{ width: 4, height: 8, borderRadius: 4, background: 'white' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
