import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../data/config';

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQty, removeFromCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Halo Kak Listinawati! Saya ingin memesan:\n\n";
    let total = 0;

    cartItems.forEach(item => {
      // Parse price to number for total calculation (assuming format "Rp 15.000")
      const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
      const subtotal = priceNum * item.qty;
      total += subtotal;
      
      message += `- ${item.qty}x ${item.name} (${item.price})\n`;
    });

    message += `\nTotal: Rp ${total.toLocaleString('id-ID')}\n\nApakah tersedia? 😊`;

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
    return acc + (priceNum * item.qty);
  }, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          opacity: isCartOpen ? 1 : 0,
          visibility: isCartOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}
      />

      {/* Cart Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: 400,
        background: 'white',
        zIndex: 1001,
        boxShadow: '-4px 0 24px rgba(0,0,0,0.1)',
        transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontFamily: "'Outfit', sans-serif" }}>Keranjang Belanja</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '50px' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>🛒</span>
              <p>Keranjang masih kosong</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: 70, height: 70, objectFit: 'cover', borderRadius: '8px', background: '#f8fafc' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem' }}>{item.name}</h4>
                    <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>{item.price}</div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', borderRadius: '4px' }}>
                        <button onClick={() => updateQty(item.id, -1)} style={{ padding: '4px 12px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>-</button>
                        <span style={{ padding: '0 8px', fontSize: '0.9rem', fontWeight: 600 }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} style={{ padding: '4px 12px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#e74c3c', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}>Hapus</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div style={{ padding: '24px', borderTop: '1px solid var(--border)', background: '#f8fafc' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>Total ({totalItems} item)</span>
              <span style={{ color: 'var(--primary)' }}>Rp {totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="btn btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 2.00098C6.49004 2.00098 2.00004 6.49098 2.00004 12.001C2.00004 13.911 2.54004 15.681 3.47004 17.181L2.00004 22.001L6.99004 20.571C8.47004 21.491 10.18 22.001 12.01 22.001C17.53 22.001 22.02 17.511 22.02 12.001C22.02 6.49098 17.53 2.00098 12.01 2.00098ZM17.16 16.321C16.92 17.021 15.69 17.601 15.11 17.671C14.62 17.731 13.99 17.841 11.23 16.711C7.91004 15.351 5.77004 11.961 5.61004 11.751C5.46004 11.531 4.31004 10.011 4.31004 8.44098C4.31004 6.87098 5.10004 6.10098 5.41004 5.78098C5.69004 5.49098 6.16004 5.37098 6.57004 5.37098C6.70004 5.37098 6.82004 5.38098 6.93004 5.38098C7.24004 5.40098 7.40004 5.42098 7.60004 5.92098C7.85004 6.54098 8.46004 8.04098 8.53004 8.19098C8.61004 8.34098 8.68004 8.54098 8.58004 8.74098C8.47004 8.93098 8.39004 9.06098 8.24004 9.24098C8.09004 9.42098 7.92004 9.54098 7.78004 9.72098C7.61004 9.89098 7.44004 10.091 7.64004 10.421C7.83004 10.761 8.46004 11.791 9.38004 12.611C10.57 13.681 11.54 14.021 11.91 14.171C12.21 14.291 12.57 14.261 12.78 14.041C13.05 13.751 13.38 13.251 13.73 12.761C14.01 12.381 14.34 12.331 14.68 12.451C15.03 12.581 16.89 13.501 17.26 13.691C17.63 13.881 17.88 13.971 17.97 14.121C18.06 14.271 18.06 15.021 17.16 16.321Z" fill="currentColor"/>
              </svg>
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
