import React, { useState } from 'react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { Compass, RotateCcw, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RecommendationResult } from '../types';

export const DiagnosticSection: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string>('');
  const [q3, setQ3] = useState<string>('');
  const [q4, setQ4] = useState<string>('');
  const [result, setResult] = useState<RecommendationResult | null>(null);

  const q1Options = [
    'Mensagens, anotações e arquivos espalhados.',
    'Planilhas e WhatsApp.',
    'Já uso um sistema, mas ainda sinto desorganização.',
    'Tenho sistemas e quero aprimorar a operação gerencial.',
  ];

  const q2Options = [
    'Organização e controle de rotinas operacionais.',
    'Acompanhamento gerencial e leitura de indicadores.',
    'Falta de braço operacional para tarefas administrativas e financeiras.',
    'Preciso melhorar processos em várias áreas do negócio.',
  ];

  const q3Options = [
    'Apenas o sistema de gestão (ERP).',
    'Gestão Assistida (Sistema ERP + Orientação e Acompanhamento).',
    'Gestão Completa (Tecnologia + Terceirização BPO de rotinas).',
    'Ainda não sei qual formato faz mais sentido.',
  ];

  const q4Options = [
    'Comércio varejista ou atacadista.',
    'Prestador de serviços.',
    'Saúde e clínicas.',
    'Alimentação e restaurantes.',
    'Indústria ou produção.',
    'Imobiliário ou locações.',
    'Profissional autônomo ou pequena empresa.',
    'Outro segmento.',
  ];

  const calculateResult = (selectedQ1: string, selectedQ2: string, selectedQ3: string, selectedQ4: string) => {
    if (selectedQ3 === 'Ainda não sei qual formato faz mais sentido.') {
      setResult({
        title: 'Conversa Diagnóstica Inicial',
        priceTag: 'Atendimento Consultivo',
        reason:
          'Como você ainda está avaliando as prioridades do momento, o melhor caminho é conversar diretamente com nosso especialista para analisar seus fluxos e indicar com precisão a estrutura ideal para a sua empresa.',
        ctaMessage: WHATSAPP_MESSAGES.diagnostic,
      });
      setStep(5);
      return;
    }

    if (
      selectedQ3 === 'Gestão Completa (Tecnologia + Terceirização BPO de rotinas).' ||
      selectedQ2 === 'Falta de braço operacional para tarefas administrativas e financeiras.'
    ) {
      setResult({
        title: 'EWS GESTÃO COMPLETA (BPO)',
        priceTag: 'A partir de R$ 1.497/mês',
        reason:
          'Sua empresa necessita de uma estrutura mais abrangente: tecnologia ERP somada à terceirização (BPO) de rotinas administrativas e financeiras acordadas, liberando tempo da sua equipe para focar na atividade-fim.',
        ctaMessage: WHATSAPP_MESSAGES.gestaoCompleta,
      });
      setStep(5);
      return;
    }

    if (
      selectedQ3 === 'Gestão Assistida (Sistema ERP + Orientação e Acompanhamento).' ||
      selectedQ2 === 'Acompanhamento gerencial e leitura de indicadores.' ||
      selectedQ2 === 'Preciso melhorar processos em várias áreas do negócio.'
    ) {
      setResult({
        title: 'EWS GESTÃO ASSISTIDA',
        priceTag: 'R$ 697/mês',
        reason:
          'A combinação ideal entre tecnologia e método: software ERP para unificar dados operacionais e o serviço de orientação da EWS Gestor para analisar indicadores, organizar rotinas e apoiar decisões mais conscientes.',
        ctaMessage: WHATSAPP_MESSAGES.gestaoAssistida,
      });
      setStep(5);
      return;
    }

    // Default to ERP
    setResult({
      title: 'EWS ERP — Sistema de Gestão',
      priceTag: 'A partir de R$ 179/mês',
      reason:
        'Um sistema de gestão modular é o primeiro passo para organizar informações, rotinas e controles administrativos do seu negócio, reduzindo a dispersão de dados e facilitando o controle diário.',
      ctaMessage: WHATSAPP_MESSAGES.erp,
    });
    setStep(5);
  };

  const handleNext = () => {
    if (step === 1 && q1) setStep(2);
    else if (step === 2 && q2) setStep(3);
    else if (step === 3 && q3) setStep(4);
    else if (step === 4 && q4) {
      calculateResult(q1, q2, q3, q4);
    }
  };

  const handleReset = () => {
    setStep(1);
    setQ1('');
    setQ2('');
    setQ3('');
    setQ4('');
    setResult(null);
  };

  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#171719]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#702D3A] mb-3">
            Orientação Consultiva
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171719] leading-tight mb-4 text-balance">
            Diagnóstico Rápido: Qual solução sua empresa precisa?
          </h2>
          <p className="text-base text-[#777777] leading-relaxed max-w-xl mx-auto">
            Responda 4 perguntas simples sobre sua operação e veja qual formato da EWS Gestor é mais
            adequado para organizar sua realidade empresarial.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex items-center justify-between text-xs font-semibold text-[#777777] mb-2">
            <span>{step <= 4 ? `Etapa ${step} de 4` : 'Diagnóstico Concluído'}</span>
            <span>{step <= 4 ? `${Math.round((step / 4) * 100)}%` : '100%'}</span>
          </div>
          <div className="h-2 w-full bg-[#171719]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#702D3A] transition-all duration-300"
              style={{ width: `${step <= 4 ? (step / 4) * 100 : 100}%` }}
            />
          </div>
        </div>

        {/* Diagnostic Card Container */}
        <div className="card-corporate p-6 sm:p-10 shadow-xs border border-[#171719]/12">
          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#171719] mb-2">
                1. Onde estão organizadas as informações da sua empresa hoje?
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] mb-6">
                Selecione a opção que melhor retrata o cenário atual das suas rotinas.
              </p>

              <div className="space-y-3 mb-8">
                {q1Options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setQ1(opt)}
                    className={`w-full p-4 rounded-xl text-left text-sm font-medium transition-all flex items-center justify-between border ${
                      q1 === opt
                        ? 'border-[#702D3A] bg-[#702D3A]/5 text-[#171719]'
                        : 'border-[#171719]/12 hover:border-[#171719]/30 bg-white text-[#171719]/80'
                    }`}
                  >
                    <span>{opt}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        q1 === opt ? 'border-[#702D3A] bg-[#702D3A]' : 'border-[#171719]/30'
                      }`}
                    >
                      {q1 === opt && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={!q1}
                  onClick={handleNext}
                  className={`btn-bordo px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 ${
                    !q1 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  <span>Avançar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#171719] mb-2">
                2. Qual é a principal dificuldade na administração do negócio?
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] mb-6">
                Entender o ponto crítico ajuda a definir o suporte necessário.
              </p>

              <div className="space-y-3 mb-8">
                {q2Options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setQ2(opt)}
                    className={`w-full p-4 rounded-xl text-left text-sm font-medium transition-all flex items-center justify-between border ${
                      q2 === opt
                        ? 'border-[#702D3A] bg-[#702D3A]/5 text-[#171719]'
                        : 'border-[#171719]/12 hover:border-[#171719]/30 bg-white text-[#171719]/80'
                    }`}
                  >
                    <span>{opt}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        q2 === opt ? 'border-[#702D3A] bg-[#702D3A]' : 'border-[#171719]/30'
                      }`}
                    >
                      {q2 === opt && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#777777] hover:text-[#171719] transition-colors"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  disabled={!q2}
                  onClick={handleNext}
                  className={`btn-bordo px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 ${
                    !q2 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  <span>Avançar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#171719] mb-2">
                3. Que tipo de apoio você está buscando neste momento?
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] mb-6">
                Escolha a alternativa mais alinhada à expectativa da sua empresa.
              </p>

              <div className="space-y-3 mb-8">
                {q3Options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setQ3(opt)}
                    className={`w-full p-4 rounded-xl text-left text-sm font-medium transition-all flex items-center justify-between border ${
                      q3 === opt
                        ? 'border-[#702D3A] bg-[#702D3A]/5 text-[#171719]'
                        : 'border-[#171719]/12 hover:border-[#171719]/30 bg-white text-[#171719]/80'
                    }`}
                  >
                    <span>{opt}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        q3 === opt ? 'border-[#702D3A] bg-[#702D3A]' : 'border-[#171719]/30'
                      }`}
                    >
                      {q3 === opt && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-[#777777] hover:text-[#171719] transition-colors"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  disabled={!q3}
                  onClick={handleNext}
                  className={`btn-bordo px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 ${
                    !q3 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  <span>Avançar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#171719] mb-2">
                4. Qual é o segmento de atuação da sua empresa?
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] mb-6">
                A EWS Gestor atende múltiplos setores com parametrizações específicas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {q4Options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setQ4(opt)}
                    className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      q4 === opt
                        ? 'border-[#702D3A] bg-[#702D3A]/5 text-[#171719]'
                        : 'border-[#171719]/12 hover:border-[#171719]/30 bg-white text-[#171719]/80'
                    }`}
                  >
                    <span>{opt}</span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        q4 === opt ? 'border-[#702D3A] bg-[#702D3A]' : 'border-[#171719]/30'
                      }`}
                    >
                      {q4 === opt && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs font-semibold text-[#777777] hover:text-[#171719] transition-colors"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  disabled={!q4}
                  onClick={handleNext}
                  className={`btn-bordo px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 ${
                    !q4 ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  <span>Ver Recomendação</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5 — RESULT */}
          {step === 5 && result && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#702D3A] mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#702D3A]" />
                <span>Solução Sugerida pela EWS Gestor</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F1EB] border border-[#171719]/12 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-[#171719]">{result.title}</h3>
                  <span className="text-sm font-bold text-[#702D3A] font-mono">
                    {result.priceTag}
                  </span>
                </div>

                <p className="text-sm text-[#171719]/85 leading-relaxed">{result.reason}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#171719]/10 text-xs text-[#777777] mb-8 leading-relaxed">
                <span className="font-semibold text-[#171719]">Resumo informado:</span>{' '}
                {q1} · {q2} · {q4}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#777777] hover:text-[#171719] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer diagnóstico</span>
                </button>

                <a
                  href={getWhatsAppUrl(result.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bordo w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Conversar sobre esta solução</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
