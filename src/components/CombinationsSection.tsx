import React from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { ArrowUpRight, Blocks } from 'lucide-react';

export const CombinationsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#F5F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#171719] text-white shadow-xs border border-white/10 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#F5F1EB]/70 mb-4">
              <Blocks className="w-4 h-4 text-[#702D3A]" />
              <span>Flexibilidade Sob Medida</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance">
              Estruturas que se adaptam ao momento da sua empresa.
            </h2>

            <p className="text-base text-white/80 leading-relaxed mb-8">
              Na EWS Gestor, você conta com soluções graduais para cada estágio empresarial: desde a
              implantação do sistema ERP para controle interno até o acompanhamento gerencial contínuo
              e a terceirização de rotinas administrativas e financeiras (BPO).
            </p>

            {/* Modular Blocks Visualization */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-[#F5F1EB]/70 font-semibold uppercase mb-1">Linha 1</div>
                <div className="text-base font-bold text-white mb-1">ERP Empresarial</div>
                <div className="text-xs text-white/75 leading-relaxed">
                  Sistema modular para centralizar dados e rotinas operacionais (a partir de R$ 179/mês).
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-[#F5F1EB]/70 font-semibold uppercase mb-1">Linha 2</div>
                <div className="text-base font-bold text-white mb-1">Gestão Assistida</div>
                <div className="text-xs text-white/75 leading-relaxed">
                  Sistema somado a acompanhamento e orientação empresarial (R$ 697/mês).
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-[#F5F1EB]/70 font-semibold uppercase mb-1">Linha 3</div>
                <div className="text-base font-bold text-white mb-1">Gestão Completa (BPO)</div>
                <div className="text-xs text-white/75 leading-relaxed">
                  Tecnologia e terceirização de rotinas operacionais acordadas (a partir de R$ 1.497/mês).
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.combinations)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bordo px-7 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-xs"
              >
                <span>Conversar com a EWS Gestor</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-white/60">
                Alinhamento personalizado sem custo inicial de consultoria
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinationsSection;
