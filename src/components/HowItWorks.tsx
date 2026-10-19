import React from 'react';
import { Search, Settings2, TrendingUp, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico da Necessidade',
      tagline: 'Entendimento da realidade e prioridades',
      description:
        'Analisamos a realidade operacional da sua empresa, os principais gargalos do dia a dia e mapeamos o escopo ideal de sistemas e gestão.',
      icon: Search,
      items: [
        'Mapeamento dos processos e rotinas atuais',
        'Identificação de gargalos e prioridades',
        'Definição da solução e escopo mais adequado',
      ],
    },
    {
      num: '02',
      title: 'Implantação e Organização',
      tagline: 'Estruturação de sistemas e processos',
      description:
        'Parametrização do ERP e estruturação dos métodos de trabalho, organizando cadastros, rotinas administrativas e controles financeiros.',
      icon: Settings2,
      items: [
        'Parametrização do ERP conforme o negócio',
        'Organização de cadastros e fluxos operacionais',
        'Alinhamento prático com a equipe da empresa',
      ],
    },
    {
      num: '03',
      title: 'Acompanhamento e Evolução',
      tagline: 'Suporte próximo e consistência contínua',
      description:
        'Acompanhamento gerencial contínuo para garantir que a operação funcione com estabilidade, indicadores confiáveis e suporte a decisões seguras.',
      icon: TrendingUp,
      items: [
        'Acompanhamento contínuo da operação',
        'Clareza na leitura de indicadores gerenciais',
        'Suporte técnico e orientação administrativa',
      ],
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 relative bg-[#FFFFFF] border-y border-[#171719]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Como Funciona Nossa Atuação
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Tecnologia, organização e acompanhamento no mesmo ecossistema.
          </h2>
          <p className="text-base text-[#777777] leading-relaxed max-w-2xl mx-auto">
            Acreditamos que softwares sozinhos não mudam uma empresa sem processos organizados. Por
            isso, unimos tecnologia e suporte gerencial em etapas complementares.
          </p>
        </div>

        {/* 3 Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="card-corporate p-8 rounded-2xl flex flex-col justify-between relative group hover:border-[#702D3A]/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-mono text-[#702D3A]">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#171719]/5 flex items-center justify-center text-[#171719] group-hover:bg-[#702D3A] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#171719] mb-1">{step.title}</h3>
                  <div className="text-xs font-medium text-[#702D3A] mb-4">{step.tagline}</div>
                  <p className="text-sm text-[#777777] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#171719]/10 space-y-2.5">
                  {step.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#171719]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#702D3A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-xl bg-[#F5F1EB] border border-[#171719]/10 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#171719]/80 font-medium leading-relaxed">
            Cada empresa possui liberdade para contratar apenas o sistema ERP ou associá-lo à Gestão
            Assistida e Gestão Completa (BPO), conforme a sua necessidade atual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
