import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComboMechanic from './components/ComboMechanic';
import ProductGrid from './components/ProductGrid';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SelectionBar from './components/SelectionBar';
import CheckoutModal from './components/CheckoutModal';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const toggleProduct = (product: Product, size?: number) => {
    setSelectedProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      
      if (exists) {
        // If it exists, remove it regardless of size
        return prev.filter(p => p.id !== product.id);
      } else {
        // If it doesn't exist and we have space, add it with the size
        if (prev.length < 2 && size) {
          return [...prev, { ...product, selectedSize: size }];
        }
        return prev;
      }
    });
  };

  const handleCheckout = () => {
    if (selectedProducts.length === 2) {
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 selection:bg-brand-accent selection:text-white">
      <Header cartCount={selectedProducts.length} />
      
      {/* Sticky Selection Bar (Visible on Scroll) */}
      <SelectionBar 
        selectedProducts={selectedProducts} 
        onCheckout={handleCheckout}
      />
      
      <main className="relative">
        <Hero />
        
        {/* Dynamic visual anchor for the deal */}
        <ComboMechanic 
          selectedProducts={selectedProducts} 
          onCheckout={handleCheckout}
        />
        
        <ProductGrid 
          selectedProducts={selectedProducts} 
          onToggleProduct={toggleProduct} 
        />
        
        <SocialProof />
      </main>

      <Footer />
      <FloatingWhatsApp />
      
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        selectedProducts={selectedProducts}
      />
    </div>
  );
};

export default App;
