import React, { useState, useEffect } from 'react';
import { CookiePreferences } from '../types';
import { Shield, X, SlidersHorizontal } from 'lucide-react';

const STORAGE_KEY = 'ews_gestor_cookie_preferences_v1';

// Meta Pixel helper strictly obeying user consent and requiring valid configuration
function initMetaPixel(pixelId?: string) {
  if (!pixelId || pixelId.trim() === '' || pixelId.includes('YOUR_PIXEL_ID')) {
    return;
  }

  if (typeof window !== 'undefined' && !(window as any).fbq) {
    const f: any = function () {
      if (f.callMethod) {
        f.callMethod.apply(f, arguments);
      } else {
        f.queue.push(arguments);
      }
    };
    if (!(window as any)._fbq) (window as any)._fbq = f;
    f.push = f;
    f.loaded = true;
    f.version = '2.0';
    f.queue = [];
    const t = document.createElement('script');
    t.async = true;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const s = document.getElementsByTagName('script')[0];
    s?.parentNode?.insertBefore(t, s);
    f('init', pixelId);
    f('track', 'PageView');
  }
}

interface CookieBannerProps {
  forceOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  forceOpenModal = false,
  onCloseModal,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analyticsAndMarketing: false,
    decided: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempMarketing, setTempMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        setPreferences(parsed);
        setTempMarketing(parsed.analyticsAndMarketing);
        setShowBanner(false);

        if (parsed.analyticsAndMarketing) {
          const pixelId = import.meta.env.VITE_META_PIXEL_ID;
          if (pixelId) initMetaPixel(pixelId);
        }
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    if (forceOpenModal) {
      setShowModal(true);
      setTempMarketing(preferences.analyticsAndMarketing);
    }
  }, [forceOpenModal, preferences.analyticsAndMarketing]);

  const savePreferences = (marketingEnabled: boolean) => {
    const newPrefs: CookiePreferences = {
      necessary: true,
      analyticsAndMarketing: marketingEnabled,
      decided: true,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    } catch {
      console.warn('LocalStorage not accessible for cookies');
    }
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowModal(false);
    if (onCloseModal) onCloseModal();

    if (marketingEnabled) {
      const pixelId = import.meta.env.VITE_META_PIXEL_ID;
      if (pixelId) initMetaPixel(pixelId);
    }
  };

  const handleAcceptAll = () => {
    savePreferences(true);
  };

  const handleRejectOptional = () => {
    savePreferences(false);
  };

  const handleSaveCustom = () => {
    savePreferences(tempMarketing);
  };

  return (
    <>
      {/* Primary Cookie Banner */}
      {showBanner && !showModal && (
        <aside
          aria-label="Consentimento de cookies"
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-fadeIn"
        >
          <div className="bg-white border border-[#171719]/15 rounded-2xl p-5 sm:p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[#702D3A]" />
              <h3 className="text-sm font-bold text-[#171719]">Privacidade e Transparência</h3>
            </div>

            <p className="text-xs text-[#777777] leading-relaxed mb-5">
              Utilizamos cookies essenciais para o funcionamento seguro do site. Com sua autorização,
              também poderemos utilizar tecnologias como o Meta Pixel para compreender o alcance de nossas
              comunicações institucionais. Você pode aceitar, recusar ou personalizar a qualquer momento.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleRejectOptional}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#171719] bg-[#F5F1EB] hover:bg-[#171719]/10 border border-[#171719]/15 transition-all"
              >
                Recusar opcionais
              </button>

              <button
                type="button"
                onClick={() => {
                  setTempMarketing(preferences.analyticsAndMarketing);
                  setShowModal(true);
                }}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#702D3A] hover:bg-[#702D3A]/5 border border-[#702D3A]/20 transition-all"
              >
                Personalizar
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn-bordo px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider ml-auto shadow-xs"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#171719]/15 shadow-2xl relative">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                if (onCloseModal) onCloseModal();
              }}
              className="absolute top-5 right-5 p-1 rounded-lg text-[#777777] hover:text-[#171719] hover:bg-black/5 transition-colors"
              aria-label="Fechar configurações de cookies"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <SlidersHorizontal className="w-5 h-5 text-[#702D3A]" />
              <h3 className="text-lg font-bold text-[#171719]">Preferências de Cookies</h3>
            </div>

            <p className="text-xs text-[#777777] mb-6 leading-relaxed">
              Gerencie suas preferências de privacidade na EWS Gestor. Os cookies técnicos garantem
              a navegação estável e segura e não podem ser desativados.
            </p>

            <div className="space-y-4 mb-8">
              {/* Necessary Category */}
              <div className="p-4 rounded-xl bg-[#F5F1EB] border border-[#171719]/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs sm:text-sm font-bold text-[#171719]">
                    Cookies Essenciais &amp; Técnicos
                  </span>
                  <span className="text-[11px] font-semibold text-[#702D3A] uppercase">
                    Sempre Ativos
                  </span>
                </div>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Necessários para carregar os recursos do site, gerenciar sessões e manter a segurança.
                </p>
              </div>

              {/* Marketing & Analytics Category */}
              <div className="p-4 rounded-xl border border-[#171719]/15 hover:border-[#171719]/30 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#171719] block">
                      Tecnologias de Comunicação &amp; Meta Pixel
                    </span>
                    <span className="text-[11px] text-[#777777]">Opcional</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tempMarketing}
                      onChange={(e) => setTempMarketing(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#702D3A]"></div>
                  </label>
                </div>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Permitem mensurar o alcance de nossas comunicações e entender interações com anúncios.
                  Dados do diagnóstico operacional não são compartilhados com terceiros.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#171719]/10">
              <button
                type="button"
                onClick={handleRejectOptional}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-[#171719] hover:bg-[#F5F1EB] border border-[#171719]/15 transition-all"
              >
                Rejeitar opcionais
              </button>

              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto btn-bordo px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-xs"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
