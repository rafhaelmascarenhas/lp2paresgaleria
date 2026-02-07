import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-12 overflow-hidden lg:min-h-[90vh] flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block px-3 py-1 mb-6 border border-brand-accent/30 bg-brand-accent/10 rounded-full">
              <span className="text-brand-accent text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <Zap size={14} fill="currentColor" /> Oferta Relâmpago
              </span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 drop-shadow-lg">
              Escolha Rápida. <br />
              <span className="text-white">Estilo Imediato.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 font-light">
              Nike, Puma, Fila e Olympikus. O visual urbano que você procura, com a agilidade que seu dia exige. Leve 2 pares pelo preço de 1.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-4">
              <button 
                onClick={scrollToProducts}
                className="group relative px-8 py-4 bg-brand-accent text-white font-display font-bold text-xl uppercase tracking-wider rounded overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 animate-pulse-glow"
              >
                <div className="relative z-10 flex items-center gap-2">
                  Montar Meu Combo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
              
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Envio Imediato para todo Brasil
              </p>
            </div>
          </div>

          {/* Visual Content (Video) */}
          <div className="flex-1 relative w-full flex justify-center">
            {/* Glow behind video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-accent/30 rounded-full blur-3xl -z-10" />
            
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-float border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10" />
              
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop"
              >
                <source src="/meu-video.mp4" type="video/mp4" />
                <source src="https://videos.pexels.com/video-files/5954937/5954937-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              {/* Overlay Content on Video */}
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-display font-bold text-2xl uppercase">Street Style</p>
                <p className="text-slate-300 text-sm">Coleção Urbana 2026</p>
              </div>
            </div>
            
            {/* Floating Elements/Badges */}
            <div className="absolute top-10 right-10 lg:-right-4 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <p className="text-xs text-slate-300 uppercase">Preço do Combo</p>
              <p className="font-display font-bold text-2xl text-brand-accent">R$ 189,90</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
