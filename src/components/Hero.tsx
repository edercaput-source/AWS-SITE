import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { ArrowUpRight, ArrowDown, Database, Compass, Briefcase, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F5F1EB] overflow-hidden">
      {/* Discreet corporate background grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(23,23,25,0.06) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Presentation & Navigation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#702D3A] mb-4">
              <span>Sistemas e Gestão Empresarial</span>
              <span className="text-[#171719]/30" aria-hidden="true">·</span>
              <span className="text-[#171719]/80">ERP</span>
              <span className="text-[#171719]/30" aria-hidden="true">·</span>
              <span className="text-[#171719]/80">Gestão Assistida</span>
              <span className="text-[#171719]/30" aria-hidden="true">·</span>
              <span className="text-[#171719]/80">Gestão Completa (BPO)</span>
            </div>

            {/* Official Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#171719] leading-[1.16] tracking-tight mb-6 max-w-2xl text-balance">
              Sistemas e gestão para empresas mais organizadas.
            </h1>

            {/* Official Description */}
            <p className="text-base sm:text-lg text-[#171719]/80 leading-relaxed mb-8 max-w-2xl">
              A EWS Gestor reúne tecnologia, orientação e acompanhamento empresarial para ajudar negócios
              a organizar suas informações, compreender sua operação e aprimorar a forma como são administrados.
            </p>

            {/* Two Discreet Navigation Paths */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#servicos"
                onClick={scrollToServices}
                className="btn-bordo px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide uppercase inline-flex items-center justify-center gap-2.5 shadow-xs"
              >
                <span>Conheça nossos serviços</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Entre em contato</span>
                <ArrowUpRight className="w-4 h-4 text-[#702D3A]" />
              </a>
            </div>

            {/* Institutional Foundations */}
            <div className="w-full pt-6 border-t border-[#171719]/10 grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm font-bold text-[#171719]">Tecnologia</div>
                <div className="text-xs text-[#777777]">Sistemas ERP sob medida</div>
              </div>
              <div>
                <div className="text-sm font-bold text-[#171719]">Orientação</div>
                <div className="text-xs text-[#777777]">Processos e rotinas claras</div>
              </div>
              <div>
                <div className="text-sm font-bold text-[#171719]">Acompanhamento</div>
                <div className="text-xs text-[#777777]">Suporte e apoio operacional</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Architectural Graphic Panel */}
          <div className="lg:col-span-5 relative">
            <div className="card-corporate p-6 sm:p-8 shadow-xs border border-[#171719]/12 relative">
              <div className="text-xs font-bold uppercase tracking-wider text-[#702D3A] mb-2">
                Estrutura de Atuação
              </div>
              <h3 className="text-xl font-bold text-[#171719] mb-4">
                Três pilares complementares para o seu negócio
              </h3>
              <p className="text-xs text-[#777777] mb-6 leading-relaxed">
                Integramos sistemas de informação à rotina real da sua empresa, garantindo que os dados
                sejam utilizados de maneira estratégica e consistente.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F5F1EB] border border-[#171719]/8 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#702D3A]/10 text-[#702D3A] flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171719]">1. ERP Empresarial</h4>
                    <p className="text-xs text-[#777777] mt-0.5 leading-relaxed">
                      Centralização de cadastros, vendas, estoque, finanças e emissão fiscal conforme os módulos contratados.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F1EB] border border-[#171719]/8 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#702D3A]/10 text-[#702D3A] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171719]">2. Gestão Assistida</h4>
                    <p className="text-xs text-[#777777] mt-0.5 leading-relaxed">
                      Acompanhamento e orientação empresarial periódica para apoiar a organização das rotinas e tomada de decisão.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F1EB] border border-[#171719]/8 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#702D3A]/10 text-[#702D3A] flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171719]">3. Gestão Completa (BPO)</h4>
                    <p className="text-xs text-[#777777] mt-0.5 leading-relaxed">
                      Tecnologia somada à terceirização de rotinas administrativas e financeiras acordadas na proposta comercial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#171719]/10 flex items-center justify-between text-xs text-[#777777]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#702D3A]" />
                  <span>Configurações ajustadas a cada empresa</span>
                </span>
                <span className="font-semibold text-[#171719]">Sem modelos engessados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
