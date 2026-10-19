import React from 'react';
import { ShieldCheck, Target, Users, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-24 bg-[#FFFFFF] border-y border-[#171719]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Institutional Narrative */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
              Sobre a EWS Gestor
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-6 text-balance">
              Tecnologia e gestão trabalhando juntas.
            </h2>

            <div className="space-y-4 text-base text-[#171719]/80 leading-relaxed max-w-2xl">
              <p>
                Acreditamos que uma boa gestão depende de informações organizadas, processos
                compreensíveis e decisões mais conscientes. Por isso, a EWS Gestor atua com sistemas
                empresariais e serviços de gestão, respeitando a realidade, as necessidades e o escopo
                de cada empresa atendida.
              </p>
              <p className="text-sm text-[#777777]">
                Nosso compromisso é construir uma relação de clareza e transparência com o empresário,
                oferecendo desde sistemas modulares para controle interno até serviços contínuos de
                orientação e acompanhamento das rotinas administrativas e financeiras.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#171719]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#171719] mb-1">Informações Claras</span>
                <span className="text-xs text-[#777777] leading-relaxed">
                  Centralização de dados para reduzir ruídos e retrabalhos na rotina.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#171719] mb-1">Processos Compreensíveis</span>
                <span className="text-xs text-[#777777] leading-relaxed">
                  Estruturação de rotinas que sua equipe consegue manter com consistência.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#171719] mb-1">Decisões Conscientes</span>
                <span className="text-xs text-[#777777] leading-relaxed">
                  Indicadores confiáveis para apoiar cada passo da gestão empresarial.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Pillars Card */}
          <div className="lg:col-span-5">
            <div className="card-corporate p-8 bg-[#F5F1EB]/50 border border-[#171719]/12">
              <h3 className="text-lg font-bold text-[#171719] mb-4">
                O Propósito da EWS Gestor
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed mb-6">
                Não somos uma agência de marketing ou consultoria de promessas milagrosas. Somos uma empresa
                de tecnologia e gestão que atua no mundo real, com ferramentas sólidas e acompanhamento próximo.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-[#171719]/10">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-[#171719] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#702D3A]" />
                    <span>Transparência no Escopo</span>
                  </div>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    Você sabe exatamente o que está contratando, quais recursos estão inclusos e como cada serviço apoia seu negócio.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#171719]/10">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-[#171719] mb-1">
                    <Target className="w-4 h-4 text-[#702D3A]" />
                    <span>Respeito à Realidade Empresarial</span>
                  </div>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    Cada negócio possui seu estágio e sua capacidade operacional. As soluções são ajustadas sem exigências desnecessárias.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#171719]/10">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-[#171719] mb-1">
                    <Users className="w-4 h-4 text-[#702D3A]" />
                    <span>Apoio Próximo e Contínuo</span>
                  </div>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    Comunicação direta para tirar dúvidas, alinhar processos e garantir que a operação funcione de verdade.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#171719]/10 text-center">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#702D3A] hover:text-[#59232E] uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Conversar com a EWS Gestor</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
