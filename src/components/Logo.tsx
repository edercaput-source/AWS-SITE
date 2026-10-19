import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  light?: boolean;
  showIcon?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSlogan = false,
  light = false,
  showIcon = false, // Set to false so the logo image is kept as favicon only
}) => {
  const iconSizes = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-10 h-10 md:w-11 md:h-11 rounded-xl',
    lg: 'w-12 h-12 md:w-14 md:h-14 rounded-2xl',
    xl: 'w-16 h-16 md:w-20 md:h-20 rounded-2xl',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon is shown only if explicitly requested, keeping it as favicon for header */}
      {showIcon && (
        <div
          className={`relative ${iconSizes[size]} shrink-0 overflow-hidden shadow-xs border ${
            light ? 'border-white/20' : 'border-[#171719]/15'
          } bg-[#17181A] transition-transform duration-200 group-hover:scale-[1.03]`}
        >
          <img
            src="/favicon.svg"
            alt="Favicon Oficial EWS"
            className="w-full h-full object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      {/* Clean Typographic Wordmark for Header / Brand */}
      <div className="flex flex-col">
        <span
          className={`font-black tracking-tight uppercase leading-none ${titleSizes[size]} ${
            light ? 'text-white' : 'text-[#171719]'
          }`}
          style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
        >
          EWS <span className={light ? 'text-[#F5F1EB]' : 'text-[#702D3A]'}>GESTOR</span>
        </span>
        {showSlogan && (
          <span
            className={`hidden sm:inline-block text-[10px] md:text-xs font-semibold tracking-normal mt-1 leading-tight ${
              light ? 'text-white/70' : 'text-[#777777]'
            }`}
          >
            Sistemas e Gestão Empresarial
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
