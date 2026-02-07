import React from 'react';
import { ShoppingBag, PackageSearch } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const WHATSAPP_LINK = "https://wa.me/5537991258897?text=Olá!%20Vim%20pela%20promoção%20de%202%20pares%20de%20tênis%20da%20Galeria%20e%20gostaria%20de%20finalizar%20meu%20pedido.";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.6)]">
            <span className="font-display font-bold text-white text-lg italic">GB</span>
          </div>
          <span className="font-display font-bold text-xl uppercase tracking-wider text-white hidden sm:block">
            Galeria de Boleiro
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 border border-brand-accent/50 text-brand-accent rounded-full text-sm font-medium hover:bg-brand-accent/10 transition-colors"
          >
            <PackageSearch size={16} />
            Rastrear Pedido
          </a>

          <div className="relative p-2 text-white hover:text-brand-accent transition-colors cursor-pointer">
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-brand-accent text-white text-xs font-bold flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
