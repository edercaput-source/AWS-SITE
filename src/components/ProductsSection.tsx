import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { Database, Compass, Briefcase, ArrowUpRight, Check } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#171719]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Nossos Serviços
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Três linhas de soluções para organizar a gestão da sua empresa.
          </h2>
          <p className="text-base text-[#777777] leading-relaxed">
            Apresentamos nossas soluções com transparência de escopo e valores para que você escolha
            o formato ideal para organizar processos, informações e rotinas administrativas.
          </p>
        </div>

        {/* The Exact 3 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* SERVIÇO 1: ERP — Sistema de Gestão Empresarial */}
          <div className="rounded-2xl bg-[#F5F1EB]/50 border border-[#171719]/15 p-7 flex flex-col justify-between hover:border-[#702D3A]/40 transition-all duration-200">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#171719]/5 flex items-center justify-center text-[#171719] mb-5">
                <Database className="w-5 h-5 text-[#702D3A]" />
              </div>

              <div className="text-xs font-semibold text-[#702D3A] uppercase tracking-wider mb-1">
                Tecnologia
              </div>
              <h3 className="text-2xl font-bold text-[#171719] mb-2">
                ERP — Sistema de Gestão
              </h3>

              <div className="mb-4 pb-4 border-b border-[#171719]/10">
                <div className="text-3xl font-extrabold text-[#171719] font-mono tracking-tight">
                  A partir de R$ 179<span className="text-sm font-sans font-normal text-[#777777]">/mês</span>
                </div>
                <div className="text-xs text-[#777777] mt-1 font-medium">
                  Conforme módulos contratados e configuração adotada.
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#171719]/80 leading-relaxed mb-6">
                O ERP é um sistema que ajuda a reunir e organizar informações importantes da empresa
                em um ambiente de gestão. Conforme os módulos contratados e os recursos disponibilizados
                pelo sistema, pode apoiar o controle de atividades, registros, movimentações e informações
                necessárias à rotina empresarial.
              </p>

              <div className="text-xs font-semibold text-[#171719] uppercase tracking-wider mb-3">
                Recursos conforme a configuração:
              </div>

              <div className="space-y-2.5 mb-6 text-xs text-[#171719]/85">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Cadastro e organização de produtos e serviços</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Vendas, pedidos e orçamentos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Controle de estoque e movimentações</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Frente de caixa e PDV (quando aplicável)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Gestão financeira (contas a pagar e receber)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Emissão e gestão de documentos fiscais</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Relatórios objetivos para a operação</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#171719]/10">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase inline-flex items-center justify-center gap-2"
              >
                <span>Solicitar demonstração do ERP</span>
                <ArrowUpRight className="w-4 h-4 text-[#702D3A]" />
              </a>
            </div>
          </div>

          {/* SERVIÇO 2: Gestão Assistida — Orientação e Acompanhamento */}
          <div className="rounded-2xl bg-white border-2 border-[#702D3A] p-7 flex flex-col justify-between shadow-sm relative">
            {/* Clean non-pill tag */}
            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#702D3A] text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
              Sistema + Orientação
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-[#702D3A]/10 flex items-center justify-center text-[#702D3A] mb-5 mt-1">
                <Compass className="w-5 h-5 text-[#702D3A]" />
              </div>

              <div className="text-xs font-semibold text-[#702D3A] uppercase tracking-wider mb-1">
                Orientação &amp; Método
              </div>
              <h3 className="text-2xl font-bold text-[#171719] mb-2">
                Gestão Assistida
              </h3>

              <div className="mb-4 pb-4 border-b border-[#171719]/10">
                <div className="text-3xl font-extrabold text-[#171719] font-mono tracking-tight">
                  R$ 697<span className="text-sm font-sans font-normal text-[#777777]">/mês</span>
                </div>
                <div className="text-xs text-[#702D3A] mt-1 font-semibold">
                  Sistema ERP incluso com acompanhamento empresarial.
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#171719]/80 leading-relaxed mb-6">
                A Gestão Assistida combina o uso do sistema com orientação e acompanhamento empresarial.
                A EWS Gestor atua junto ao negócio para ajudar na organização de rotinas, na análise
                de informações gerenciais e na melhoria contínua dos processos administrativos e financeiros.
              </p>

              <div className="text-xs font-semibold text-[#171719] uppercase tracking-wider mb-3">
                O que está incluído nesta solução:
              </div>

              <div className="space-y-2.5 mb-6 text-xs text-[#171719]/85">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Sistema ERP parametrizado e ajustado ao negócio</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Padronização e organização de processos internos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Acompanhamento periódico de rotinas e controles</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Apoio na leitura e análise de indicadores gerenciais</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Canal direto para dúvidas e alinhamento com a equipe</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                  <span>Você mantém o comando, com suporte para decidir melhor</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#171719]/10">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.gestaoAssistida)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bordo w-full py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wide uppercase inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Conversar sobre Gestão Assistida</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* SERVIÇO 3: Gestão Completa — Tecnologia e Apoio Operacional (BPO) */}
          <div className="rounded-2xl card-dark p-7 flex flex-col justify-between shadow-md relative">
            <div className="text-xs font-semibold text-[#F5F1EB]/70 uppercase tracking-wider mb-1">
              Solução Mais Abrangente
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5 mt-1">
                <Briefcase className="w-5 h-5 text-white" />
              </div>

              <div className="text-xs font-semibold text-[#F5F1EB]/70 uppercase tracking-wider mb-1">
                Tecnologia + Terceirização
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Gestão Completa (BPO)
              </h3>

              <div className="mb-4 pb-4 border-b border-white/10">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                  A partir de R$ 1.497<span className="text-sm font-sans font-normal text-white/70">/mês</span>
                </div>
                <div className="text-xs text-white/80 mt-1 font-medium">
                  Conforme o escopo acordado de terceirização.
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
                A Gestão Completa é a solução mais abrangente da EWS Gestor, unindo a tecnologia do sistema
                à terceirização de rotinas administrativas e financeiras (BPO), conforme escopo previamente
                acordado. Permite que a empresa conte com apoio direto na execução de tarefas operacionais,
                liberando tempo da equipe interna.
              </p>

              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Escopo de atendimento integrado:
              </div>

              <div className="space-y-2.5 mb-6 text-xs text-white/90">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Tecnologia ERP totalmente integrada à operação</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Execução de rotinas financeiras acordadas em proposta</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Apoio em contas a pagar, receber e conciliações</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Estruturação de relatórios e fechamentos periódicos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Acompanhamento operacional contínuo</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F5F1EB] shrink-0 mt-0.5" />
                  <span>Mais tempo para você se dedicar à atividade-fim</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-white/10">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.gestaoCompleta)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#171719] hover:bg-[#F5F1EB] transition-colors w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wide uppercase inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Solicitar proposta de BPO</span>
                <ArrowUpRight className="w-4 h-4 text-[#702D3A]" />
              </a>
            </div>
          </div>
        </div>

        {/* Commercial Clarification Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#F5F1EB] border border-[#171719]/10 text-xs text-[#777777] text-center max-w-3xl mx-auto leading-relaxed">
          Nota: Os módulos do ERP e o escopo de BPO/acompanhamento são alinhados previamente na proposta
          comercial de acordo com as necessidades e a estrutura de cada empresa atendida.
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
