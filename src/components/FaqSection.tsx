import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O que é a EWS Gestor?',
      a: 'A EWS Gestor é uma empresa que oferece sistemas de gestão e serviços de orientação e acompanhamento empresarial. Seu propósito é ajudar negócios a organizar suas informações, compreender melhor sua operação e aprimorar a forma como são administrados.',
    },
    {
      q: 'Quais segmentos a EWS Gestor atende?',
      a: 'Atendemos empresas de diferentes setores — como comércio varejista e atacadista, prestadores de serviços, alimentação, clínicas e pequenas indústrias. A estrutura e os módulos são alinhados conforme os processos e as necessidades reais de cada operação.',
    },
    {
      q: 'O que é o ERP e quanto custa?',
      a: 'O ERP é um sistema que ajuda a reunir e organizar informações importantes da empresa em um ambiente de gestão. Conforme os módulos contratados e os recursos disponibilizados pelo sistema, pode apoiar o controle de atividades, registros, movimentações e informações necessárias à rotina empresarial. Valor a partir de R$ 179/mês.',
    },
    {
      q: 'O que é a Gestão Assistida?',
      a: 'Por R$ 697/mês, a Gestão Assistida combina o uso do sistema ERP com orientação e acompanhamento empresarial. A EWS Gestor atua junto ao negócio para ajudar na organização de rotinas, na análise de informações gerenciais e na melhoria contínua dos processos administrativos e financeiros.',
    },
    {
      q: 'O que é a Gestão Completa (BPO)?',
      a: 'Com valores a partir de R$ 1.497/mês (conforme escopo acordado), é a solução mais abrangente da EWS Gestor. Une a tecnologia do sistema à terceirização de rotinas administrativas e financeiras (BPO), permitindo que a empresa conte com apoio direto na execução de tarefas operacionais.',
    },
    {
      q: 'Como escolher a solução mais adequada para a minha empresa?',
      a: 'Se a sua empresa precisa de uma ferramenta para organizar e centralizar as rotinas diárias com autonomia da equipe, o ERP é o ponto de partida. Se você deseja somar ao software o acompanhamento de indicadores e orientação gerencial, a Gestão Assistida é a mais indicada. Se precisa de apoio operacional direto e terceirização de rotinas, a Gestão Completa (BPO) é a solução ideal.',
    },
    {
      q: 'Como funciona o primeiro contato e contratação?',
      a: 'Basta clicar nos botões de WhatsApp do site para conversar diretamente com a equipe da EWS Gestor. Realizamos um alinhamento inicial para entender suas demandas operacionais e apresentar uma proposta comercial clara e sem surpresas.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#171719]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-[#777777] leading-relaxed max-w-xl mx-auto">
            Respostas diretas sobre nosso posicionamento institucional e as três linhas de serviços.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#171719]/10 bg-[#F5F1EB]/40 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#171719] hover:text-[#702D3A] transition-colors focus-visible:outline-2 focus-visible:outline-[#702D3A]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#777777] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#702D3A]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#171719]/85 leading-relaxed border-t border-[#171719]/8 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help link */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#777777] mb-3">Tem alguma dúvida específica sobre a sua operação?</p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#702D3A] hover:text-[#59232E] uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
          >
            <span>Falar com a equipe no WhatsApp</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
