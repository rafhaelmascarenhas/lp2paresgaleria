import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5537991258897?text=Olá!%20Vim%20pela%20promoção%20de%202%20pares%20de%20tênis%20da%20Galeria%20e%20gostaria%20de%20finalizar%20meu%20pedido.";

  return (
    <footer className="bg-brand-dark border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-brand-accent to-blue-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-white mb-2">
              Quero comprar no WhatsApp
            </h2>
            <p className="text-blue-100">
              Prefere um atendimento personalizado? Finalize seu pedido diretamente com nosso time.
            </p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-accent px-8 py-3 rounded font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-slate-100 transition-colors shadow-xl"
          >
            <MessageCircle size={20} />
            Chamar no WhatsApp
          </a>
        </div>

        {/* Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-white text-xs font-bold font-display italic">GB</div>
             <span className="uppercase font-bold tracking-widest">Galeria de Boleiro</span>
          </div>
          
          <div className="flex gap-6">
            <span className="cursor-default">Política de Privacidade</span>
            <span className="cursor-default">Termos de Uso</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rastrear Pedido</a>
          </div>

          <div>
            © 2026. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;