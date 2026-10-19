import React, { useState } from 'react';
import { X, Copy, Check, Share2, Globe, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ewsgestor.com.br';
  const shareTitle = 'EWS Gestor — Sistemas e Gestão Empresarial';
  const shareText =
    'Conheça a EWS Gestor: sistemas e soluções de gestão para organizar processos, controles e decisões da sua empresa.';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleWhatsAppShare = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(`${shareTitle}\n${shareText}\n${shareUrl}`)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-xl border border-[#171719]/10 relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#777777] hover:text-[#171719] hover:bg-black/5 transition-colors"
          aria-label="Fechar prévia de compartilhamento"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#702D3A] mb-1">
          <Share2 className="w-4 h-4 text-[#702D3A]" />
          <span>Identidade Visual &amp; Compartilhamento</span>
        </div>

        <h3 id="share-modal-title" className="text-xl font-bold text-[#171719] mb-2">
          Prévia ao Compartilhar o Site
        </h3>
        <p className="text-xs text-[#777777] mb-6 leading-relaxed">
          Veja exatamente como a marca EWS Gestor, o logotipo oficial e as informações institucionais
          aparecem quando o link é compartilhado no WhatsApp e nas redes sociais.
        </p>

        <div className="space-y-6">
          {/* Section 1: Browser Tab Preview */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171719] block mb-2">
              1. Na aba do navegador (Favicon + Título)
            </span>
            <div className="p-3 bg-[#F5F1EB] rounded-xl border border-[#171719]/10 flex items-center gap-2">
              <div className="w-5 h-5 rounded-md overflow-hidden bg-white p-0.5 border border-[#171719]/15 shrink-0 flex items-center justify-center">
                <img
                  src="/favicon.svg"
                  alt="Favicon EWS Gestor"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-medium text-[#171719] truncate">
                EWS Gestor — Sistemas e Gestão Empresarial
              </span>
            </div>
          </div>

          {/* Section 2: WhatsApp Link Preview Bubble with LOGO ON THE LEFT */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171719] block mb-2">
              2. Como aparece no WhatsApp (Logo à esquerda + Textos à direita)
            </span>

            {/* Mock of WhatsApp horizontal chat card */}
            <div className="bg-[#EFEAE2] p-4 rounded-xl border border-black/5">
              <div className="bg-white rounded-xl overflow-hidden shadow-xs border border-black/8 flex flex-row items-stretch">
                {/* Logo oficial da EWS Gestor com nitidez no espaço à esquerda */}
                <div className="w-28 sm:w-32 bg-[#F5F1EB] p-2 flex flex-col items-center justify-center border-r border-[#171719]/10 shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-[#17181A] border border-[#171719]/15 p-1 flex items-center justify-center shadow-2xs">
                    <img
                      src="/ews-logo-icon.svg"
                      alt="Logo Oficial EWS Gestor"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[9px] font-black tracking-wider uppercase text-[#171719] mt-1.5 leading-none">
                    EWS <span className="text-[#702D3A]">GESTOR</span>
                  </span>
                </div>

                {/* WhatsApp Link Meta Details on the right */}
                <div className="p-3 bg-[#F9F9F8] flex-1 min-w-0 flex flex-col justify-center">
                  <div className="text-[10px] font-semibold text-[#702D3A] uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Globe className="w-3 h-3 text-[#171719]" />
                    <span>ewsgestor.com.br</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#171719] leading-snug line-clamp-1">
                    EWS Gestor — Sistemas e Gestão Empresarial
                  </h4>
                  <p className="text-[11px] text-[#777777] mt-1 line-clamp-2 leading-relaxed">
                    A EWS Gestor reúne tecnologia, orientação e acompanhamento empresarial para ajudar negócios a organizar suas informações e aprimorar a gestão.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Large Social Card Preview (1200 × 630 px) */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171719] block mb-2">
              3. Cartão Social Oficial (Open Graph / Redes)
            </span>
            <div className="aspect-[1200/630] w-full rounded-xl overflow-hidden border border-[#171719]/15 shadow-xs bg-[#F5F1EB]">
              <img
                src="/og-image.jpg"
                alt="Cartão de compartilhamento oficial EWS Gestor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 pt-5 border-t border-[#171719]/10 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 btn-outline"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#702D3A]" />
                <span>Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#171719]" />
                <span>Copiar Link do Site</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 btn-bordo shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Compartilhar via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
