import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { ArrowUpRight } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#171719] text-white p-8 sm:p-14 text-center shadow-xs border border-white/10 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F1EB]/70 mb-4">
              Atendimento Institucional
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance">
              Vamos organizar o próximo passo da sua empresa?
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Conte um pouco sobre sua operação e descubra como a EWS Gestor pode ajudar a estruturar
              processos, sistemas e rotinas de gestão com previsibilidade e clareza.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.finalCta)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bordo px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-xs"
              >
                <span>Conversar com a EWS Gestor</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-white/60 mt-6">
              Atendimento direto no WhatsApp · Resposta ágil e sem promessas vazias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
