import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { COMBO_PRICE } from '../constants';

interface SelectionBarProps {
  selectedProducts: Product[];
  onCheckout: () => void;
}

const SelectionBar: React.FC<SelectionBarProps> = ({ selectedProducts, onCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past the main hero section area
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFull = selectedProducts.length === 2;

  return (
    <div 
      className={`
        fixed top-16 left-0 w-full z-40 bg-brand-darker/90 backdrop-blur-md border-b border-brand-accent/20 shadow-lg transition-all duration-300 transform
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Status Text & Minis */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Seu Combo</span>
            <span className={`text-sm font-bold ${isFull ? 'text-green-500' : 'text-slate-200'}`}>
              {isFull ? 'Pronto para Finalizar' : `${selectedProducts.length}/2 Selecionados`}
            </span>
          </div>
          
          <div className="flex gap-2">
            {[0, 1].map((index) => {
              const product = selectedProducts[index];
              return (
                <div 
                  key={index}
                  className={`
                    relative w-10 h-10 rounded border overflow-hidden flex items-center justify-center bg-slate-800 transition-colors duration-300
                    ${product ? 'border-brand-accent' : 'border-slate-700 border-dashed'}
                  `}
                >
                  {product ? (
                    <>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute -bottom-1 -right-1 bg-brand-accent text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-tl">
                        {product.selectedSize}
                      </div>
                    </>
                  ) : (
                    <span className="text-slate-600 text-xs font-bold">{index + 1}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Price & Action */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
             <p className="text-[10px] text-slate-400 uppercase">Total</p>
             <p className="text-white font-display font-bold text-lg leading-none">
              R$ {COMBO_PRICE.toFixed(2).replace('.', ',')}
            </p>
          </div>
          
          <button 
            onClick={onCheckout}
            disabled={!isFull}
            className={`
              h-10 px-6 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all duration-300
              ${isFull 
                ? 'bg-green-500 text-white hover:bg-green-600 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] animate-pulse-glow cursor-pointer transform hover:scale-105' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }
            `}
          >
            {isFull ? <ArrowRight size={18} /> : <ShoppingBag size={18} />}
            <span className="">{isFull ? 'Finalizar' : 'Selecione 2'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SelectionBar;