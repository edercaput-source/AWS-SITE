import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { MessageSquare, ArrowUp, Share2 } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenCookies?: () => void;
  onOpenShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookies, onOpenShare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      if (window.location.pathname !== '/') {
        if (onNavigate) {
          onNavigate('/');
          setTimeout(() => {
            const el = document.querySelector(path);
            el?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          window.location.href = `/${path}`;
        }
      } else {
        const el = document.querySelector(path);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (onNavigate) {
        onNavigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <footer className="bg-[#171719] text-white pt-16 pb-28 md:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <Logo size="lg" light={true} showSlogan={true} />
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm mb-6">
              A EWS Gestor reúne tecnologia, orientação e acompanhamento empresarial para ajudar negócios
              a organizar suas informações, compreender sua operação e aprimorar a forma como são administrados.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F1EB] hover:text-[#702D3A] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#702D3A]" />
                <span>Falar diretamente no WhatsApp</span>
              </a>

              {onOpenShare && (
                <button
                  type="button"
                  onClick={onOpenShare}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 hover:text-white transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#702D3A]" />
                  <span>Prévia de compartilhamento</span>
                </button>
              )}
            </div>
          </div>

          {/* Section Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB]/70 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleLinkClick(e, '#inicio')}
                  className="hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleLinkClick(e, '#sobre')}
                  className="hover:text-white transition-colors"
                >
                  Sobre a EWS Gestor
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleLinkClick(e, '#servicos')}
                  className="hover:text-white transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#comparativo"
                  onClick={(e) => handleLinkClick(e, '#comparativo')}
                  className="hover:text-white transition-colors"
                >
                  Comparativo de Soluções
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  onClick={(e) => handleLinkClick(e, '#como-funciona')}
                  className="hover:text-white transition-colors"
                >
                  Como Funciona Nossa Atuação
                </a>
              </li>
              <li>
                <a
                  href="#diagnostico"
                  onClick={(e) => handleLinkClick(e, '#diagnostico')}
                  className="hover:text-white transition-colors"
                >
                  Diagnóstico Rápido
                </a>
              </li>
              <li>
                <a
                  href="#segmentos"
                  onClick={(e) => handleLinkClick(e, '#segmentos')}
                  className="hover:text-white transition-colors"
                >
                  Segmentos Atendidos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB]/70 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleLinkClick(e, '#servicos')}
                  className="hover:text-white transition-colors"
                >
                  ERP — Sistema de Gestão
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleLinkClick(e, '#servicos')}
                  className="hover:text-white transition-colors"
                >
                  Gestão Assistida
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleLinkClick(e, '#servicos')}
                  className="hover:text-white transition-colors"
                >
                  Gestão Completa (BPO)
                </a>
              </li>
            </ul>
          </div>

          {/* Institucional & Legal */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB]/70 mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a
                  href="/privacidade"
                  onClick={(e) => handleLinkClick(e, '/privacidade')}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos"
                  onClick={(e) => handleLinkClick(e, '/termos')}
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              {onOpenShare && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenShare}
                    className="hover:text-white transition-colors text-left"
                  >
                    Compartilhar Site &amp; Prévia
                  </button>
                </li>
              )}
              {onOpenCookies && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenCookies}
                    className="hover:text-white transition-colors text-left"
                  >
                    Preferências de Cookies
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} EWS Gestor — Sistemas e Gestão Empresarial. Todos os direitos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#702D3A]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
