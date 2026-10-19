import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Termos de Uso | EWS Gestor';
    return () => {
      document.title = 'EWS Gestor — Sistemas e Gestão Empresarial';
    };
  }, []);

  return (
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#171719] hover:text-[#702D3A] bg-white px-4 py-2 rounded-lg border border-[#171719]/15 transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à página inicial</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#171719]/15 shadow-sm">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
          <FileText className="w-4 h-4 text-[#702D3A]" />
          <span>Termos Gerais</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171719] mb-3 tracking-tight">
          Termos de Uso — EWS Gestor
        </h1>

        <p className="text-xs text-[#777777] mb-8 pb-6 border-b border-[#171719]/15">
          <strong>Última atualização:</strong> Outubro de 2026.
        </p>

        <div className="prose prose-sm max-w-none text-[#171719]/85 space-y-6 leading-relaxed">
          <p>
            Ao acessar o site da EWS Gestor, o visitante poderá consultar informações institucionais e
            comerciais sobre as soluções de ERP, Gestão Assistida e Gestão Completa (BPO).
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            1. Sobre o site
          </h2>
          <p>
            O site apresenta informações comerciais e institucionais sobre as soluções EWS Gestor. O
            conteúdo não representa, por si só, contratação automática ou garantia de disponibilidade de
            módulos específicos sem alinhamento prévio na proposta comercial.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            2. Três linhas de soluções
          </h2>
          <p>
            O site descreve três ofertas estruturadas:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#171719]/80">
            <li>
              <strong>ERP (a partir de R$ 179/mês):</strong> Acesso ao software de gestão conforme os módulos e configuração contratada.
            </li>
            <li>
              <strong>Gestão Assistida (R$ 697/mês):</strong> Sistema ERP combinado com o acompanhamento e orientação empresarial da EWS Gestor.
            </li>
            <li>
              <strong>Gestão Completa (BPO - a partir de R$ 1.497/mês):</strong> Solução mais abrangente, unindo tecnologia à terceirização de rotinas administrativas e financeiras acordadas.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            3. Condições comerciais e contratação
          </h2>
          <p>
            Valores, módulos e escopo de BPO/acompanhamento são alinhados diretamente na proposta
            comercial entre a EWS Gestor e o cliente. A contratação formal ocorre mediante instrumento
            contratual próprio.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            4. Propriedade Intelectual
          </h2>
          <p>
            A marca EWS Gestor, sua assinatura institucional “Sistemas e Gestão Empresarial”, o símbolo
            e os conteúdos publicados neste site estão sujeitos à legislação aplicável de propriedade intelectual.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            5. Contato
          </h2>
          <p>
            Para esclarecer dúvidas sobre estes Termos de Uso, entre em contato através do e-mail:{' '}
            <a
              href="mailto:contato@ewsgestor.com.br"
              className="text-[#702D3A] font-semibold underline"
            >
              contato@ewsgestor.com.br
            </a>
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-[#171719]/15 flex justify-between items-center">
          <button
            type="button"
            onClick={onBack}
            className="btn-bordo px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wide inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar ao início</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
