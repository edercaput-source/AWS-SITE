import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { Check, ArrowUpRight, Database, Compass, Briefcase } from 'lucide-react';

export const CompareSection: React.FC = () => {
  return (
    <section id="comparativo" className="py-20 md:py-28 relative bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Comparativo de Serviços
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Entenda a diferença prática entre as três soluções.
          </h2>
          <p className="text-base text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Diferenciamos com total clareza o acesso à tecnologia de software, a orientação
            empresarial contínua e a terceirização de rotinas operacionais (BPO).
          </p>
        </div>

        {/* 3-Column Comparison Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Coluna 1: ERP */}
          <div className="p-7 rounded-2xl bg-white border border-[#171719]/15 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#171719]/5 flex items-center justify-center text-[#171719]">
                  <Database className="w-5 h-5 text-[#702D3A]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171719]">ERP</h3>
                  <div className="text-xs text-[#702D3A] font-semibold">Sistema de Gestão</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F1EB] border border-[#171719]/10 mb-6">
                <div className="text-2xl font-extrabold text-[#171719] font-mono">
                  A partir de R$ 179<span className="text-xs font-sans font-normal text-[#777777]">/mês</span>
                </div>
                <div className="text-[11px] text-[#777777] mt-1">
                  Conforme módulos contratados.
                </div>
              </div>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#171719]/85">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Acesso à ferramenta e plataforma em nuvem</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Cadastro de produtos, pedidos e estoque</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Emissão fiscal e controles financeiros</span>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-[#171719]/10 font-medium text-[#171719]">
                  <span className="text-[#702D3A]">→</span>
                  <span>Sua equipe opera o software com total autonomia</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase inline-flex items-center justify-center gap-2"
            >
              <span>Optar pelo ERP</span>
              <ArrowUpRight className="w-4 h-4 text-[#702D3A]" />
            </a>
          </div>

          {/* Coluna 2: GESTÃO ASSISTIDA */}
          <div className="p-7 rounded-2xl bg-white border-2 border-[#702D3A] shadow-sm flex flex-col justify-between relative">
            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#702D3A] text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
              Tecnologia + Método
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 mt-1">
                <div className="w-10 h-10 rounded-xl bg-[#702D3A]/10 flex items-center justify-center text-[#702D3A]">
                  <Compass className="w-5 h-5 text-[#702D3A]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171719]">Gestão Assistida</h3>
                  <div className="text-xs text-[#702D3A] font-semibold">Sistema + Acompanhamento</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F1EB] border border-[#171719]/10 mb-6">
                <div className="text-2xl font-extrabold text-[#171719] font-mono">
                  R$ 697<span className="text-xs font-sans font-normal text-[#777777]">/mês</span>
                </div>
                <div className="text-[11px] text-[#702D3A] mt-1 font-semibold">
                  ERP e orientação empresarial inclusos.
                </div>
              </div>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#171719]/85">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Sistema ERP parametrizado para o seu negócio</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Organização e padronização de processos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Acompanhamento e leitura de indicadores</span>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-[#171719]/10 font-medium text-[#171719]">
                  <span className="text-[#702D3A]">→</span>
                  <span>A EWS Gestor acompanha e orienta seus processos</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.gestaoAssistida)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bordo w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Optar por Gestão Assistida</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Coluna 3: GESTÃO COMPLETA (BPO) */}
          <div className="p-7 rounded-2xl card-dark text-white shadow-sm flex flex-col justify-between relative">
            <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
              Solução Mais Abrangente
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 mt-1">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Gestão Completa</h3>
                  <div className="text-xs text-white/70 font-semibold">Tecnologia + Apoio BPO</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/10 mb-6">
                <div className="text-2xl font-extrabold text-white font-mono">
                  A partir de R$ 1.497<span className="text-xs font-sans font-normal text-white/70">/mês</span>
                </div>
                <div className="text-[11px] text-white/80 mt-1">
                  Conforme escopo de terceirização acordado.
                </div>
              </div>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-white/90">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Sistema ERP integrado às rotinas da empresa</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Terceirização de rotinas financeiras acordadas</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Acompanhamento operacional contínuo</span>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-white/15 font-medium text-white">
                  <span className="text-white/70">→</span>
                  <span>Estrutura completa para liberar a rotina interna</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.gestaoCompleta)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#171719] hover:bg-[#F5F1EB] transition-colors w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wide uppercase inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Solicitar proposta BPO</span>
              <ArrowUpRight className="w-4 h-4 text-[#702D3A]" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-[#777777] mt-10 max-w-xl mx-auto">
          Nota: Os módulos do ERP e o escopo de BPO/acompanhamento são alinhados previamente na proposta
          comercial de acordo com as necessidades e a estrutura de cada empresa.
        </p>
      </div>
    </section>
  );
};

export default CompareSection;
