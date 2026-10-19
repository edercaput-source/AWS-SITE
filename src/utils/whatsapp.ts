// WhatsApp configuration and contextual messages for EWS Gestor
// Note: Per brief requirements, the phone number is preserved and never displayed as plain text on the page.

const WA_BASE_URL = 'https://wa.me/5518991469679';

export const WHATSAPP_MESSAGES = {
  general: 'Olá! Conheci a EWS Gestor pelo site e gostaria de entender qual solução faz mais sentido para a minha empresa.',
  hero: 'Olá! Conheci a EWS Gestor pelo site e gostaria de conversar com a equipe sobre os sistemas e serviços de gestão.',
  erp: 'Olá! Tenho interesse no ERP da EWS Gestor (a partir de R$ 179/mês) e gostaria de solicitar uma demonstração dos recursos.',
  gestaoAssistida: 'Olá! Tenho interesse na Gestão Assistida da EWS Gestor (R$ 697/mês) e gostaria de entender como funciona a orientação e o acompanhamento.',
  gestaoCompleta: 'Olá! Tenho interesse na Gestão Completa (BPO - a partir de R$ 1.497/mês) da EWS Gestor e gostaria de solicitar uma proposta comercial.',
  // Fallbacks for compatibility
  erpGestao: 'Olá! Tenho interesse na Gestão Assistida da EWS Gestor (R$ 697/mês) e gostaria de entender como funciona para o meu negócio.',
  gestao: 'Olá! Tenho interesse na Gestão Assistida da EWS Gestor (R$ 697/mês) e gostaria de entender como funciona para o meu negócio.',
  gestaoErp: 'Olá! Tenho interesse na Gestão Assistida da EWS Gestor (R$ 697/mês) e gostaria de entender como funciona para o meu negócio.',
  combinations: 'Olá! Gostaria de conversar com a EWS Gestor para entender qual plano se adequa melhor à realidade da minha empresa.',
  diagnostic: 'Olá! Realizei o diagnóstico no site da EWS Gestor e gostaria de conversar sobre a solução indicada para o meu negócio.',
  finalCta: 'Olá! Gostaria de conversar com a equipe da EWS Gestor sobre a organização e gestão da minha empresa.',
  header: 'Olá! Conheci a EWS Gestor pelo site e gostaria de entender qual solução faz mais sentido para a minha empresa.',
  crm: 'Olá! Conheci a EWS Gestor pelo site e gostaria de falar sobre as soluções de sistemas e gestão para minha empresa.',
};

export function getWhatsAppUrl(message: string): string {
  return `${WA_BASE_URL}?text=${encodeURIComponent(message)}`;
}
