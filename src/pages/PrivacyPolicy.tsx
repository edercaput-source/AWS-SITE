import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Política de Privacidade | EWS Gestor';
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
          <Shield className="w-4 h-4 text-[#702D3A]" />
          <span>Conformidade &amp; Proteção de Dados</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171719] mb-3 tracking-tight">
          Política de Privacidade — EWS Gestor
        </h1>

        <p className="text-xs text-[#777777] mb-8 pb-6 border-b border-[#171719]/15">
          <strong>Última atualização:</strong> Outubro de 2026.
        </p>

        <div className="prose prose-sm max-w-none text-[#171719]/85 space-y-6 leading-relaxed">
          <p>
            A EWS Gestor valoriza a privacidade e a proteção dos dados pessoais dos visitantes. Esta
            Política explica como as informações podem ser tratadas durante a navegação no site e quando
            o visitante entra em contato com a empresa.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            1. Quem somos
          </h2>
          <p>
            EWS Gestor é uma marca que oferece soluções de tecnologia, sistemas de gestão empresarial (ERP),
            orientação empresarial e gestão completa (BPO) para negócios.
          </p>
          <p>
            Canal para dúvidas de privacidade:{' '}
            <a
              href="mailto:contato@ewsgestor.com.br"
              className="text-[#702D3A] font-semibold underline"
            >
              contato@ewsgestor.com.br
            </a>
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            2. Informações tratadas
          </h2>
          <p>
            Dependendo dos recursos efetivamente habilitados, podem ser tratados dados técnicos de
            navegação, páginas acessadas, interações com o site, eventos relacionados a publicidade e
            informações voluntariamente compartilhadas pelo visitante ao entrar em contato.
          </p>
          <p>
            O site não exige dados pessoais apenas para permitir a navegação institucional.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            3. Finalidades
          </h2>
          <p>
            As informações poderão ser utilizadas para manter o funcionamento e a segurança do site,
            melhorar a experiência, medir campanhas publicitárias, responder a solicitações e cumprir
            obrigações legais, conforme aplicável.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            4. Cookies e tecnologias semelhantes
          </h2>
          <p>
            O site poderá utilizar cookies necessários e, mediante a base legal aplicável, tecnologias
            não essenciais para análise ou publicidade.
          </p>
          <p>
            Quando o consentimento for necessário, as tecnologias não essenciais devem permanecer
            desativadas até que o visitante conceda autorização válida.
          </p>
          <p>
            Existe opção clara para aceitar, recusar e personalizar os cookies não essenciais, além
            de um meio para alterar ou revogar a escolha posteriormente através do rodapé.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            5. Meta Pixel
          </h2>
          <p>
            O site poderá utilizar o Meta Pixel para medir campanhas e compreender interações com
            anúncios institucionais.
          </p>
          <p>
            Quando ativado com seu consentimento, o Pixel poderá transmitir à Meta informações de navegação
            e eventos definidos na implementação. O tratamento efetivo depende da configuração técnica adotada.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            6. WhatsApp
          </h2>
          <p>
            Os botões do site encaminham o visitante ao WhatsApp oficial da EWS Gestor. Ao sair do site, o
            visitante passa a utilizar um serviço externo, sujeito aos próprios termos e à política de
            privacidade desse serviço.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            7. Direitos dos titulares
          </h2>
          <p>
            Nos termos da LGPD, os titulares podem exercer os direitos aplicáveis, incluindo acesso,
            correção, informações sobre tratamento, eliminação nas hipóteses legais e revogação do
            consentimento quando aplicável.
          </p>

          <h2 className="text-xl font-bold text-[#171719] pt-4 border-t border-[#171719]/15">
            8. Contato
          </h2>
          <p>
            Para qualquer questão referente a esta Política ou ao tratamento de seus dados, envie uma
            mensagem para:{' '}
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

export default PrivacyPolicy;
