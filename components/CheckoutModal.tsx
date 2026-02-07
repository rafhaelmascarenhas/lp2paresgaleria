import React from 'react';
import { X, CheckCircle2, ShoppingCart, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { COMBO_PRICE, CHECKOUT_URL } from '../constants';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Product[];
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, selectedProducts }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-darker/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-brand-dark border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-brand-accent/10 p-6 flex items-center justify-between border-b border-white/5">
          <h2 className="text-xl font-display font-bold uppercase text-white flex items-center gap-2">
            <CheckCircle2 className="text-green-500" />
            Resumo do Pedido
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-slate-400 text-sm mb-4">Confirme sua seleção abaixo para finalizar:</p>
          
          <div className="space-y-3 mb-6">
            {selectedProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="w-16 h-16 rounded overflow-hidden bg-slate-900 flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm truncate">{product.name}</p>
                  <p className="text-xs text-brand-accent uppercase font-bold mt-1">
                    Tamanho: {product.selectedSize}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 line-through">R$ {product.oldPrice.toFixed(0)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between py-4 border-t border-dashed border-slate-700 mb-6">
            <span className="text-slate-300">Total do Combo</span>
            <span className="text-2xl font-display font-bold text-white">
              R$ {COMBO_PRICE.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <a 
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-xl rounded-xl font-display font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:-translate-y-1 group border border-green-400/20"
          >
            <ShoppingCart size={24} fill="currentColor" />
            <span>Finalizar Compra</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-center text-xs text-slate-500 mt-4">
            Ambiente Seguro. Atendimento humano imediato.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;