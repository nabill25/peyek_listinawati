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

function App() {
  return (
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
    </CartProvider>
  );
}

export default App;
