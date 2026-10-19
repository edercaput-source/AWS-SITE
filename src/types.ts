export interface ProductCardData {
  id: 'erp' | 'erpGestao' | 'gestaoCompleta' | 'gestao' | 'gestaoBusiness';
  title: string;
  badge?: string;
  priceLabel: string;
  priceNote?: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaMessage: string;
  featured?: boolean;
}

export interface DiagnosticAnswer {
  q1Organize: string;
  q2Difficulty: string;
  q3LookingFor: string;
  q4Segment: string;
}

export interface RecommendationResult {
  title: string;
  priceTag: string;
  reason: string;
  secondaryTitle?: string;
  secondaryPrice?: string;
  ctaMessage: string;
}

export interface CookiePreferences {
  necessary: boolean;
  analyticsAndMarketing: boolean;
  decided: boolean;
  updatedAt?: string;
}
