import React, { useState } from 'react';
import { Product, BrandFilter } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface ProductGridProps {
  selectedProducts: Product[];
  onToggleProduct: (product: Product, size?: number) => void;
}

const filters: BrandFilter[] = ['TODOS', 'Nike', 'Puma', 'Fila', 'Olympikus'];

const ProductGrid: React.FC<ProductGridProps> = ({ selectedProducts, onToggleProduct }) => {
  const [activeFilter, setActiveFilter] = useState<BrandFilter>('TODOS');

  const filteredProducts = PRODUCTS.filter(p => 
    activeFilter === 'TODOS' ? true : p.brand === activeFilter
  );

  const isComboFull = selectedProducts.length >= 2;

  return (
    <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border transition-all duration-300
              ${activeFilter === filter 
                ? 'bg-brand-accent border-brand-accent text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProducts.some(p => p.id === product.id)}
            onToggle={onToggleProduct}
            disabled={isComboFull}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
