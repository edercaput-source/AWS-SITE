import React from 'react';
import { Sliders, Layers, Cpu, HeartHandshake, FileText, Target } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: Sliders,
      title: 'Soluções ajustadas à sua realidade',
      description:
        'Não impomos modelos engessados. A estrutura é desenhada com base nas rotinas e nos desafios reais da sua operação.',
    },
    {
      icon: Layers,
      title: 'Contratação individual e modular',
      description:
        'Você não é obrigado a contratar um pacote fechado. É possível iniciar com o sistema ERP e expandir para Gestão Assistida quando fizer sentido.',
    },
    {
      icon: Cpu,
      title: 'Tecnologia com visão gerencial',
      description:
        'Ferramentas digitais acompanhadas de método e inteligência de processo para gerar resultados organizacionais práticos.',
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento e suporte próximo',
      description:
        'Comunicação direta e acompanhamento humano para orientar a implementação e o uso contínuo das rotinas.',
    },
    {
      icon: FileText,
      title: 'Transparência no escopo comercial',
      description:
        'Propostas detalhadas com clareza sobre o que está incluído em cada serviço, sem surpresas ou cláusulas obscuras.',
    },
    {
      icon: Target,
      title: 'Foco em processos e acompanhamento',
      description:
        'Nosso compromisso é ajudar a estruturar os fluxos internos para que o empresário ganhe clareza e previsibilidade.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Nossos Princípios
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Mais clareza para organizar. Mais estrutura para administrar.
          </h2>
          <p className="text-base text-[#777777] leading-relaxed">
            Uma abordagem séria e consistente que valoriza o tempo do empresário e constrói
            organização sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-corporate p-7 rounded-2xl flex flex-col justify-between hover:border-[#702D3A]/30 transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#171719]/5 flex items-center justify-center text-[#702D3A] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#171719] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
