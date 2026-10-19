import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Action Button (bottom-right) */}
      <aside
        aria-label="Atendimento via WhatsApp"
        className="hidden md:block fixed bottom-6 right-6 z-40"
      >
        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#171719] text-white border border-white/15 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Abrir conversa no WhatsApp com a EWS Gestor"
        >
          <div className="w-8 h-8 rounded-full bg-[#702D3A] flex items-center justify-center text-white shrink-0 shadow-xs">
            <MessageSquare className="w-4 h-4 fill-current text-white" />
          </div>
          <span className="text-xs font-bold tracking-wide uppercase pr-1 text-white group-hover:text-[#F5F1EB] transition-colors whitespace-nowrap">
            Falar com a EWS Gestor
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom CTA Bar */}
      <aside
        aria-label="Atendimento móvel via WhatsApp"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#F5F1EB]/95 backdrop-blur-md border-t border-[#171719]/15 shadow-xl safe-bottom"
      >
        <div className="max-w-md mx-auto">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-xl bg-[#702D3A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xs active:scale-[0.99] transition-transform"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
              <MessageSquare className="w-3 h-3 fill-current text-white" />
            </div>
            <span>Conversar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default WhatsAppFloating;
