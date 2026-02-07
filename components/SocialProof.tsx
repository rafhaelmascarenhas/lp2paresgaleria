import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    { id: 1, name: "Lucas M.", text: "Chegou em 2 dias. A qualidade é absurda, muito melhor que na foto.", model: "Nike ZoomX" },
    { id: 2, name: "André S.", text: "O combo vale muito a pena. Peguei um Fila e um Olympikus.", model: "Fila Air" },
    { id: 3, name: "Felipe J.", text: "Atendimento top no WhatsApp. Resolveram minha dúvida na hora.", model: "Puma" },
  ];

  return (
    <section className="py-20 bg-brand-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
            Aprovado por quem <span className="text-brand-accent">entende do assunto</span>
          </h2>
          <div className="flex justify-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <p className="text-slate-400 mt-2">+5.000 Boleiros Satisfeitos</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-2xl relative">
              {/* WhatsApp bubble style decorative */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                 <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              
              <p className="text-slate-300 italic mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-400">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-brand-accent">{t.model}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center border border-slate-700 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Truck className="text-brand-accent" size={32} />
            </div>
            <h3 className="text-white font-display font-bold uppercase mb-1">Entrega Garantida</h3>
            <p className="text-sm text-slate-400">Rastreio em tempo real para todo Brasil</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center border border-slate-700 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <ShieldCheck className="text-brand-accent" size={32} />
            </div>
            <h3 className="text-white font-display font-bold uppercase mb-1">Compra 100% Segura</h3>
            <p className="text-sm text-slate-400">Pagamento processado com criptografia</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center border border-slate-700 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <RotateCcw className="text-brand-accent" size={32} />
            </div>
            <h3 className="text-white font-display font-bold uppercase mb-1">Troca Facilitada</h3>
            <p className="text-sm text-slate-400">1ª troca grátis caso não sirva</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
