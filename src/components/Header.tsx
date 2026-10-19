import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPath = '/' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Comparativo', href: '#comparativo' },
    { label: 'Como Atuamos', href: '#como-funciona' },
    { label: 'Segmentos', href: '#segmentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (currentPath !== '/') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.location.href = `/${href}`;
      }
      setMobileMenuOpen(false);
      return;
    }

    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate && currentPath !== '/') {
      onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F1EB]/95 backdrop-blur-md border-b border-[#171719]/10 shadow-xs py-3'
          : 'bg-[#F5F1EB]/85 backdrop-blur-xs py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo Oficial EWS Gestor à esquerda */}
          <a
            href="#inicio"
            onClick={handleLogoClick}
            className="group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#702D3A] rounded-lg"
            aria-label="EWS Gestor Início"
          >
            <Logo size="md" showSlogan={true} />
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#171719]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#702D3A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#702D3A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bordo px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase inline-flex items-center gap-2 shadow-xs"
            >
              <span>Entre em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#171719] hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#702D3A]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#171719]/10 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#171719] hover:bg-black/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bordo w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <span>Entre em contato</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
