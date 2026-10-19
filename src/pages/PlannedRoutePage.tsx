import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Compass } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface PlannedRoutePageProps {
  path: string;
  onBack: () => void;
}

export const PlannedRoutePage: React.FC<PlannedRoutePageProps> = ({ path, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [path]);

  const routeTitles: Record<string, string> = {
    '/erp': 'EWS ERP — Sistema de Gestão Empresarial',
    '/erp-gestao': 'EWS Gestão Assistida — Tecnologia e Acompanhamento',
    '/gestao-assistida': 'EWS Gestão Assistida — Orientação Empresarial',
    '/gestao-completa': 'EWS Gestão Completa (BPO) — Tecnologia e Terceirização',
    '/gestao': 'EWS Gestão Assistida — Orientação e Acompanhamento',
    '/gestao-erp': 'EWS Gestão Assistida — Solução Integrada',
    '/segmentos': 'Segmentos Atendidos pela EWS Gestor',
    '/clinicas': 'Soluções EWS Gestor para Saúde e Clínicas',
    '/odontologia': 'Soluções EWS Gestor para Odontologia',
    '/veterinaria': 'Soluções EWS Gestor para Clínicas Veterinárias',
    '/restaurantes': 'Soluções EWS Gestor para Restaurantes e Alimentação',
    '/comercio': 'Soluções EWS Gestor para Comércio',
    '/servicos': 'Soluções EWS Gestor para Prestadores de Serviços',
    '/sobre': 'Sobre a EWS Gestor',
    '/blog': 'Conteúdos e Artigos EWS Gestor',
  };

  const currentTitle = routeTitles[path] || 'Soluções EWS Gestor';

  return (
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#171719] hover:text-[#702D3A] bg-white px-4 py-2 rounded-lg border border-[#171719]/15 transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à página inicial</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#171719]/15 shadow-sm text-center">
        <div className="w-12 h-12 rounded-2xl bg-[#171719]/5 text-[#702D3A] flex items-center justify-center mx-auto mb-4">
          <Compass className="w-6 h-6 text-[#702D3A]" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171719] mb-3">{currentTitle}</h1>

        <p className="text-sm text-[#777777] max-w-xl mx-auto mb-8 leading-relaxed">
          Esta área específica reúne informações detalhadas sobre nossas soluções para o seu negócio.
          Nossa equipe já atende plenamente as demandas operacionais desta área. Fale com um especialista
          para conhecer os detalhes para a sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bordo px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-xs"
          >
            <span>Falar com especialista</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default PlannedRoutePage;
