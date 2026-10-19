import React from 'react';
import {
  ShoppingBag,
  Briefcase,
  Stethoscope,
  Smile,
  PawPrint,
  UtensilsCrossed,
  Factory,
  Building2,
  UserCheck,
} from 'lucide-react';

export const SegmentsSection: React.FC = () => {
  const segments = [
    {
      name: 'Comércio',
      icon: ShoppingBag,
      description: 'Controle de estoque, fluxo de caixa, rotinas de vendas e organização de fornecedores.',
    },
    {
      name: 'Serviços',
      icon: Briefcase,
      description: 'Gestão de ordens de serviço, contratos, rotinas administrativas e acompanhamento de entregas.',
    },
    {
      name: 'Alimentação & Restaurantes',
      icon: UtensilsCrossed,
      description: 'Acompanhamento de compras, custos operacionais, rotinas financeiras e processos de atendimento.',
    },
    {
      name: 'Saúde',
      icon: Stethoscope,
      description: 'Organização administrativa, recepção e acompanhamento dos fluxos da clínica ou consultório.',
    },
    {
      name: 'Odontologia',
      icon: Smile,
      description: 'Rotinas de atendimento, organização de consultas e controles gerenciais do consultório.',
    },
    {
      name: 'Veterinária',
      icon: PawPrint,
      description: 'Gestão de serviços, atendimento a clientes, controle financeiro e operação da clínica.',
    },
    {
      name: 'Pequenas Indústrias',
      icon: Factory,
      description: 'Estruturação de insumos, ordens produtivas, controles operacionais e planejamento de custos.',
    },
    {
      name: 'Imobiliárias & Locações',
      icon: Building2,
      description: 'Gestão de contratos, contas a pagar e receber, fluxo financeiro e rotinas administrativas.',
    },
    {
      name: 'Profissionais & Pequenas Empresas',
      icon: UserCheck,
      description: 'Estruturação inicial de processos, controles e clareza para negócios em expansão.',
    },
  ];

  return (
    <section id="segmentos" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#171719]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Atuação Multissetorial
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Soluções para diferentes realidades empresariais.
          </h2>
          <p className="text-base text-[#777777] leading-relaxed">
            A EWS Gestor atende empresas de múltiplos segmentos com foco na organização de
            processos, fluxos e gestão. A configuração adequada varia conforme as necessidades e a
            complexidade de cada negócio.
          </p>
        </div>

        {/* 9 Segments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F5F1EB]/50 border border-[#171719]/10 hover:border-[#702D3A]/40 hover:bg-white transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#171719]/5 flex items-center justify-center text-[#171719] mb-4 group-hover:bg-[#702D3A] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#171719] mb-1.5">{seg.name}</h3>
                <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                  {seg.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
