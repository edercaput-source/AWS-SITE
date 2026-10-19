import React from 'react';
import {
  FileSpreadsheet,
  CreditCard,
  BarChart3,
  Split,
  Layers3,
  UserX,
  ArrowRight,
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: 'Informações espalhadas',
      description: 'Dados importantes divididos em mensagens de WhatsApp, anotações soltas e múltiplas planilhas.',
    },
    {
      icon: CreditCard,
      title: 'Controle financeiro fragmentado',
      description: 'Dificuldade para acompanhar entradas, saídas, prazos de vencimento e previsibilidade de caixa.',
    },
    {
      icon: BarChart3,
      title: 'Visibilidade de indicadores',
      description: 'Falta de clareza sobre números essenciais da operação e prioridades estratégicas no dia a dia.',
    },
    {
      icon: Split,
      title: 'Processos desorganizados',
      description: 'Rotinas administrativas sem padrão claro, gerando retrabalho e ruídos internos de comunicação.',
    },
    {
      icon: Layers3,
      title: 'Ferramentas desconectadas',
      description: 'Sistemas isolados que resolvem partes pontuais, mas não solucionam os gargalos reais de gestão.',
    },
    {
      icon: UserX,
      title: 'Sobrecarga gerencial',
      description: 'O empresário centraliza tarefas operacionais e acaba sem tempo para liderar o negócio.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#171719]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Diagnóstico Operacional
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Quando a operação não está organizada, a gestão fica mais difícil.
          </h2>
          <p className="text-base text-[#777777] leading-relaxed">
            Muitas empresas encontram desafios naturais de estruturação interna à medida que o volume
            de movimentações e rotinas administrativas aumenta:
          </p>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#F5F1EB]/50 border border-[#171719]/10 hover:border-[#702D3A]/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#171719]/5 flex items-center justify-center text-[#171719] mb-4 group-hover:bg-[#702D3A] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#171719] mb-2">{item.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Resolution Statement */}
        <div className="p-8 rounded-2xl bg-[#171719] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs border border-white/10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F1EB]/70 mb-1">
              O Papel da EWS Gestor
            </div>
            <p className="text-lg md:text-xl font-medium leading-snug">
              A EWS Gestor ajuda sua empresa a transformar ferramentas e processos dispersos em uma
              operação mais organizada e compreensível.
            </p>
          </div>
          <a
            href="#servicos"
            className="btn-bordo px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <span>Conhecer nossos serviços</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
