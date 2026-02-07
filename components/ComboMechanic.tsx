import React from 'react';
import { Plus, Equal, CheckCircle, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { COMBO_PRICE } from '../constants';

interface ComboMechanicProps {
  selectedProducts: Product[];
  onCheckout: () => void;
}

const ComboMechanic: React.FC<ComboMechanicProps> = ({ selectedProducts, onCheckout }) => {
  const isFull = selectedProducts.length === 2;

  return (
    <section className="py-12 bg-brand-darker border-y border-white/5 relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="font-display text-2xl uppercase tracking-widest text-slate-400 mb-6 text-center">
            Seu Combo
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            
            {/* Slot 1 */}
            <Slot product={selectedProducts[0]} label="1º Par" />

            <div className="text-slate-500">
              <Plus size={32} />
            </div>

            {/* Slot 2 */}
            <Slot product={selectedProducts[1]} label="2º Par" />

            <div className="text-slate-500">
              <Equal size={32} />
            </div>

            {/* Price Result & Action */}
            <div className="flex flex-col items-center justify-center p-4 min-w-[200px]">
               <div className="text-center mb-6">
                 <p className="text-sm text-slate-400 line-through mb-1">De R$ 459,80</p>
                 <div className="bg-brand-accent px-6 py-2 rounded transform -rotate-2 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <p className="font-display font-bold text-3xl sm:text-4xl text-white">
                      R$ {COMBO_PRICE.toFixed(2).replace('.', ',')}
                    </p>
                 </div>
               </div>

               {isFull ? (
                 <button 
                  onClick={onCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-display font-bold py-4 px-8 rounded-xl uppercase text-xl tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:-translate-y-1 animate-pulse flex items-center justify-center gap-3 border border-green-400/30 group"
                 >
                   <span className="drop-shadow-md">Finalizar Compra</span>
                   <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                 </button>
               ) : (
                 <div className="flex flex-col items-center gap-2 animate-pulse">
                   <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                     Selecione +{2 - selectedProducts.length} itens
                   </p>
                   <div className="h-1 w-24 bg-slate-800 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-brand-accent transition-all duration-500" 
                       style={{ width: `${(selectedProducts.length / 2) * 100}%` }}
                     />
                   </div>
                 </div>
               )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Slot: React.FC<{ product?: Product; label: string }> = ({ product, label }) => {
  return (
    <div 
      className={`
        relative w-28 h-28 sm:w-36 sm:h-36 rounded-lg border-2 border-dashed flex items-center justify-center overflow-hidden transition-all duration-300 group
        ${product ? 'border-brand-accent bg-brand-accent/5' : 'border-slate-600 bg-slate-800/30'}
      `}
    >
      {product ? (
        <>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80" />
          <div className="absolute top-2 right-2 bg-brand-accent text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg z-10">
            {product.selectedSize}
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black/60 p-1 text-center">
            <p className="text-[10px] text-white font-bold truncate">{product.name}</p>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center text-slate-500">
          <span className="text-xs uppercase font-bold mb-1">{label}</span>
          <span className="text-[10px] text-slate-600">Vazio</span>
        </div>
      )}
    </div>
  );
};

export default ComboMechanic;