import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

const AdminPanel = () => {
  const { isAdminAuth, login, isAdminPanelOpen, setIsAdminPanelOpen, liveProducts, updateProduct } = useAdmin();
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(password)) {
      setErrorMsg('');
    } else {
      setErrorMsg('Password salah!');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const success = await updateProduct(editingProduct);
    if (success) {
      setEditingProduct(null);
    }
  };

  if (!isAdminPanelOpen) return null;

  return (
    <>
      <div onClick={() => setIsAdminPanelOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000 }} />
      
      <div style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '90%', maxWidth: 600, background: 'white', zIndex: 2001, borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column',
        maxHeight: '85vh', overflow: 'hidden'
      }}>
        
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--primary)', fontFamily: "'Outfit', sans-serif" }}>Admin Panel</h2>
          <button onClick={() => setIsAdminPanelOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {!isAdminAuth ? (
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 300, margin: '40px auto' }}>
              <p style={{ textAlign: 'center', marginBottom: '8px' }}>Masukkan password untuk mengakses halaman Admin.</p>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }} />
              {errorMsg && <p style={{ color: 'red', fontSize: '0.85rem', margin: 0 }}>{errorMsg}</p>}
              <button type="submit" className="btn btn-primary" style={{ padding: '12px' }}>Masuk</button>
            </form>
          ) : editingProduct ? (
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ marginBottom: 0 }}>Edit Produk: {editingProduct.name}</h3>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: 4, fontWeight: 'bold' }}>Nama Produk</label>
                <input type="text" value={editingProduct.name} onChange={e => setEditingProduct({...editingProduct, name: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border)' }} required />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: 4, fontWeight: 'bold' }}>Harga (Format: Rp 15.000)</label>
                <input type="text" value={editingProduct.price} onChange={e => setEditingProduct({...editingProduct, price: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border)' }} required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: 4, fontWeight: 'bold' }}>Deskripsi Singkat</label>
                <textarea value={editingProduct.description} onChange={e => setEditingProduct({...editingProduct, description: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border)', minHeight: 80 }} required />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: 12 }}>
                <button type="button" onClick={() => setEditingProduct(null)} className="btn btn-outline" style={{ flex: 1, padding: '12px' }}>Batal</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '12px' }}>Simpan Perubahan</button>
              </div>
            </form>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ marginBottom: '8px' }}>Pilih produk yang ingin diubah:</p>
              {liveProducts.map(product => (
                <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem' }}>{product.name}</h4>
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{product.price}</span>
                  </div>
                  <button onClick={() => setEditingProduct(product)} className="btn btn-outline" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>Edit</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
