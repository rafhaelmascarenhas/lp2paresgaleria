import React, { useState } from 'react';
import { Product } from '../types';
import { Plus, Check, X } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggle: (product: Product, size?: number) => void;
  disabled: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected, onToggle, disabled }) => {
  const [showSizeSelect, setShowSizeSelect] = useState(false);
  
  // Sizes range from 34 to 44
  const sizes = Array.from({ length: 11 }, (_, i) => 34 + i);

  const handleAction = () => {
    if (isSelected) {
      // If already selected, remove immediately
      onToggle(product);
      setShowSizeSelect(false);
    } else {
      // If adding, show size selector
      setShowSizeSelect(true);
    }
  };

  const handleSizeSelect = (size: number) => {
    onToggle(product, size);
    setShowSizeSelect(false);
  };

  return (
    <div className="group relative flex flex-col bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-20 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">
          {product.badge}
        </div>
      )}

      {/* Image Area */}
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isSelected ? 'opacity-100 grayscale-0' : 'opacity-90'}`}
        />
        
        {/* Selected Overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-brand-accent/20 flex items-center justify-center z-10 backdrop-blur-[1px]">
            <div className="bg-brand-accent text-white p-2 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]">
              <Check size={32} strokeWidth={3} />
            </div>
            {product.selectedSize && (
              <div className="absolute bottom-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                Tamanho {product.selectedSize}
              </div>
            )}
          </div>
        )}

        {/* Size Selector Overlay */}
        {showSizeSelect && (
          <div className="absolute inset-0 bg-brand-dark/95 z-30 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-white font-bold uppercase text-sm">Escolha o Tamanho</span>
              <button 
                onClick={() => setShowSizeSelect(false)}
                className="text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-2 w-full">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className="aspect-square flex items-center justify-center bg-slate-800 border border-slate-600 rounded text-slate-300 hover:bg-brand-accent hover:border-brand-accent hover:text-white hover:scale-105 transition-all text-sm font-bold"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Info Area */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-slate-400 uppercase font-bold mb-1">{product.brand}</p>
        <h3 className="font-display text-lg font-medium text-white leading-tight mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mb-3 line-clamp-2 h-8">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xs text-slate-500 line-through">R$ {product.oldPrice.toFixed(2).replace('.', ',')}</span>
            <span className="text-brand-accent font-bold">R$ {product.price.toFixed(2).replace('.', ',')}</span>
          </div>

          <button
            onClick={handleAction}
            disabled={disabled && !isSelected && !showSizeSelect}
            className={`
              w-full py-3 px-4 rounded font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-200
              ${isSelected 
                ? 'bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500/20' 
                : disabled && !showSizeSelect
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-white text-brand-dark hover:bg-brand-accent hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]'
              }
            `}
          >
            {isSelected ? (
              <>Remover</>
            ) : disabled && !showSizeSelect ? (
              <>Combo Cheio</>
            ) : (
              <>
                <Plus size={16} /> Adicionar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
