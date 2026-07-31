import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { AdminProvider } from './context/AdminContext';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <AdminProvider>
      <CartProvider>
      <Navbar />
      <Cart />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <FloatingWA />
      <AdminPanel />
    </CartProvider>
    </AdminProvider>
  );
}

export default App;
