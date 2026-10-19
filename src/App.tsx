import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ProblemSection } from './components/ProblemSection';
import { CompareSection } from './components/CompareSection';
import { CombinationsSection } from './components/CombinationsSection';
import { HowItWorks } from './components/HowItWorks';
import { DiagnosticSection } from './components/DiagnosticSection';
import { SegmentsSection } from './components/SegmentsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { CookieBanner } from './components/CookieBanner';
import { ShareModal } from './components/ShareModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { PlannedRoutePage } from './pages/PlannedRoutePage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentPath === '/privacidade') {
      return <PrivacyPolicy onBack={() => navigateTo('/')} />;
    }

    if (currentPath === '/termos') {
      return <TermsOfUse onBack={() => navigateTo('/')} />;
    }

    if (currentPath === '/crm') {
      return <PlannedRoutePage path="/erp" onBack={() => navigateTo('/')} />;
    }

    const plannedRoutes = [
      '/erp',
      '/erp-gestao',
      '/gestao-assistida',
      '/gestao-completa',
      '/gestao',
      '/gestao-erp',
      '/segmentos',
      '/clinicas',
      '/odontologia',
      '/veterinaria',
      '/restaurantes',
      '/comercio',
      '/servicos',
      '/sobre',
      '/blog',
    ];

    if (plannedRoutes.includes(currentPath)) {
      return <PlannedRoutePage path={currentPath} onBack={() => navigateTo('/')} />;
    }

    // Default Landing Page (/)
    return (
      <main>
        {/* Seção 1 — Apresentação principal */}
        <Hero />
        {/* Seção 2 — Sobre a EWS Gestor: Tecnologia e gestão trabalhando juntas */}
        <AboutSection />
        {/* Seção 3 — Nossos serviços: ERP, Gestão Assistida, Gestão Completa */}
        <ProductsSection />
        {/* Diagnóstico Operacional: Dores da falta de organização */}
        <ProblemSection />
        {/* Comparativo de Soluções */}
        <CompareSection />
        {/* Flexibilidade Sob Medida */}
        <CombinationsSection />
        {/* Como Funciona Nossa Atuação */}
        <HowItWorks />
        {/* Diagnóstico Interativo */}
        <DiagnosticSection />
        {/* Atuação Multissetorial */}
        <SegmentsSection />
        {/* Princípios Institucionais */}
        <DifferentialsSection />
        {/* Perguntas Frequentes */}
        <FaqSection />
        {/* Contato Final */}
        <FinalCta />
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1EB] text-[#171719] selection:bg-[#702D3A] selection:text-white pb-16 md:pb-0">
      {/* Header */}
      <Header onNavigate={navigateTo} currentPath={currentPath} />

      {/* Main View */}
      <div className="flex-1">{renderContent()}</div>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenCookies={() => setCookieModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
      />

      {/* Floating & Mobile WhatsApp Actions */}
      <WhatsAppFloating />

      {/* Share & Social Identity Preview Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      {/* Cookie Consent Banner & Preferences Modal */}
      <CookieBanner
        forceOpenModal={cookieModalOpen}
        onCloseModal={() => setCookieModalOpen(false)}
      />
    </div>
  );
}

export default App;
