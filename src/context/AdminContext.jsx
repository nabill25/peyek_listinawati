import { createContext, useState, useContext, useEffect } from 'react';
import { products as defaultProducts } from '../data/config';
import { supabase } from '../lib/supabase';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  
  // Product state that starts with config data, then overwritten by DB
  const [liveProducts, setLiveProducts] = useState(defaultProducts);
  const [loading, setLoading] = useState(true);

  const toggleAdminPanel = () => setIsAdminPanelOpen(!isAdminPanelOpen);

  const login = (password) => {
    const envPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    if (password === envPassword) {
      setIsAdminAuth(true);
      return true;
    }
    return false;
  };

  const fetchProducts = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    
    try {
      const { data, error } = await supabase.from('peyek_products').select('*');
      if (error) {
        console.warn('Could not load products from Supabase, using local config:', error.message);
      } else if (data && data.length > 0) {
        setLiveProducts(data);
      }
    } catch (err) {
      console.warn('Error connecting to Supabase:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProduct = async (updatedProduct) => {
    if (!supabase) {
      alert("Supabase belum terhubung. Perubahan ini hanya bersifat sementara (hanya terlihat oleh Anda).");
      setLiveProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
      return true;
    }

    try {
      // Periksa apakah produk ada di tabel
      const { data: existing } = await supabase.from('peyek_products').select('id').eq('id', updatedProduct.id).single();
      
      let error;
      if (existing) {
        const { error: updateError } = await supabase.from('peyek_products').update(updatedProduct).eq('id', updatedProduct.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase.from('peyek_products').insert([updatedProduct]);
        error = insertError;
      }

      if (error) {
        console.error("Error updating product:", error.message);
        alert(`Error: Pastikan tabel 'peyek_products' sudah dibuat di Supabase.\nDetail: ${error.message}`);
        // Tetap update state lokal agar UI terupdate meskipun DB gagal
        setLiveProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
        return false;
      }

      setLiveProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return (
    <AdminContext.Provider value={{
      isAdminAuth,
      login,
      isAdminPanelOpen,
      setIsAdminPanelOpen,
      toggleAdminPanel,
      liveProducts,
      updateProduct,
      loading
    }}>
      {children}
    </AdminContext.Provider>
  );
};
