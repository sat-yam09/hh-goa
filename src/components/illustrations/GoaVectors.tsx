import React from 'react';

export const HHGoaLogo: React.FC<{ className?: string; variant?: 'cream' | 'green' | 'dark' }> = ({
  className = "h-12",
  variant = 'cream',
}) => {
  const textColor = variant === 'green' ? '#085438' : variant === 'dark' ? '#111827' : '#FFF9E6';
  const accentColor = '#FFE600';
  const pinkColor = '#FF007A';

  return (
    <div className={`inline-flex flex-col items-center select-none max-w-full ${className}`}>
      <div className="flex items-center gap-1 sm:gap-1.5 font-poster font-extrabold tracking-tight text-lg sm:text-2xl md:text-3xl leading-none uppercase max-w-full justify-center flex-nowrap" style={{ color: textColor }}>
        <span>HACKER</span>
        <span className="relative inline-block px-1.5 py-0.5 rounded text-black font-serif-display font-black italic transform -rotate-3 text-lg sm:text-2xl md:text-3xl shadow-sm flex-shrink-0" style={{ backgroundColor: accentColor }}>
          गोवा
        </span>
        <span>HOUSE</span>
      </div>
      <div className="flex items-center justify-between w-full mt-1 px-0.5 text-[8px] sm:text-[10px] font-bold tracking-wider uppercase opacity-90 max-w-full overflow-hidden" style={{ color: textColor }}>
        <span>GOA</span>
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: pinkColor }}></span>
        <span>28-31 OCT 2026</span>
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: pinkColor }}></span>
        <span>2:47 PM</span>
      </div>
    </div>
  );
};

export const GoaPalmsSVG: React.FC<{ className?: string; color?: string }> = ({
  className = "w-24 h-24",
  color = "#FFE600",
}) => (
  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Trunk 1 */}
    <path d="M70 230 C 80 160, 95 110, 110 50 C 112 45, 115 42, 118 45 C 100 110, 85 160, 76 230 Z" fill={color} opacity="0.9" />
    <path d="M70 230 C 80 160, 95 110, 110 50" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
    
    {/* Leaves Trunk 1 */}
    <path d="M110 50 C 70 20, 20 40, 10 50 C 40 45, 80 40, 110 50 Z" fill={color} stroke="#111827" strokeWidth="2" />
    <path d="M110 50 C 130 10, 170 10, 190 25 C 160 25, 130 35, 110 50 Z" fill={color} stroke="#111827" strokeWidth="2" />
    <path d="M110 50 C 80 -10, 130 -20, 150 -10 C 140 10, 125 30, 110 50 Z" fill={color} stroke="#111827" strokeWidth="2" />
    <path d="M110 50 C 50 60, 30 90, 20 110 C 40 90, 80 75, 110 50 Z" fill={color} stroke="#111827" strokeWidth="2" />
    <path d="M110 50 C 140 70, 170 85, 185 105 C 160 85, 130 70, 110 50 Z" fill={color} stroke="#111827" strokeWidth="2" />

    {/* Coconuts */}
    <circle cx="106" cy="54" r="6" fill="#FF007A" stroke="#111827" strokeWidth="2" />
    <circle cx="114" cy="56" r="6" fill="#FF007A" stroke="#111827" strokeWidth="2" />

    {/* Trunk 2 (Smaller twin palm) */}
    <path d="M130 230 C 135 180, 145 140, 155 90 C 140 140, 132 180, 124 230 Z" fill={color} opacity="0.8" />
    <path d="M130 230 C 135 180, 145 140, 155 90" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M155 90 C 120 70, 90 80, 80 90 C 105 85, 135 80, 155 90 Z" fill={color} stroke="#111827" strokeWidth="1.5" />
    <path d="M155 90 C 175 60, 200 65, 210 75 C 185 75, 165 80, 155 90 Z" fill={color} stroke="#111827" strokeWidth="1.5" />
  </svg>
);

export const SunHorizonSVG: React.FC<{ className?: string }> = ({ className = "w-32 h-20" }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sun Rays */}
    <g stroke="#FFE600" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
      <line x1="100" y1="10" x2="100" y2="2" />
      <line x1="60" y1="20" x2="52" y2="12" />
      <line x1="140" y1="20" x2="148" y2="12" />
      <line x1="25" y1="50" x2="15" y2="48" />
      <line x1="175" y1="50" x2="185" y2="48" />
    </g>
    {/* Sun Semi-circle */}
    <path d="M40 70 A 60 60 0 0 1 160 70 Z" fill="#FFE600" stroke="#111827" strokeWidth="3" />
    {/* Ocean Horizon Waves */}
    <path d="M0 70 Q 25 65 50 70 T 100 70 T 150 70 T 200 70" stroke="#FF007A" strokeWidth="3" fill="none" />
    <path d="M0 82 Q 25 78 50 82 T 100 82 T 150 82 T 200 82" stroke="#111827" strokeWidth="2" fill="none" />
    <path d="M0 94 Q 25 90 50 94 T 100 94 T 150 94 T 200 94" stroke="#FFF9E6" strokeWidth="2" fill="none" />
  </svg>
);

export const PortugueseHouseSVG: React.FC<{ className?: string; color?: string }> = ({
  className = "w-36 h-28",
  color = "#FF007A",
}) => (
  <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Roof */}
    <path d="M10 50 L80 10 L150 50 Z" fill="#FFE600" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
    <path d="M20 50 L80 16 L140 50" stroke="#FF007A" strokeWidth="2" strokeDasharray="4 4" />
    
    {/* House Body */}
    <rect x="20" y="50" width="120" height="70" fill={color} stroke="#111827" strokeWidth="3" />
    
    {/* Door */}
    <rect x="65" y="80" width="30" height="40" rx="15" fill="#FFF9E6" stroke="#111827" strokeWidth="2.5" />
    <circle cx="72" cy="100" r="2.5" fill="#111827" />

    {/* Shutters / Windows */}
    <rect x="32" y="65" width="20" height="25" fill="#FFE600" stroke="#111827" strokeWidth="2" />
    <line x1="42" y1="65" x2="42" y2="90" stroke="#111827" strokeWidth="1.5" />
    
    <rect x="108" y="65" width="20" height="25" fill="#FFE600" stroke="#111827" strokeWidth="2" />
    <line x1="118" y1="65" x2="118" y2="90" stroke="#111827" strokeWidth="1.5" />

    {/* Balcony Railing Line */}
    <line x1="20" y1="120" x2="140" y2="120" stroke="#111827" strokeWidth="3" />
  </svg>
);

export const ScooterSVG: React.FC<{ className?: string }> = ({ className = "w-28 h-20" }) => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Wheels */}
    <circle cx="35" cy="75" r="16" fill="#111827" />
    <circle cx="35" cy="75" r="8" fill="#FFF9E6" stroke="#111827" strokeWidth="2" />
    <circle cx="105" cy="75" r="16" fill="#111827" />
    <circle cx="105" cy="75" r="8" fill="#FFF9E6" stroke="#111827" strokeWidth="2" />
    
    {/* Body */}
    <path d="M30 65 C 35 45, 55 45, 75 50 C 95 55, 110 50, 115 70 L20 70 Z" fill="#FF007A" stroke="#111827" strokeWidth="3" />
    {/* Seat */}
    <path d="M50 45 C 50 38, 75 38, 85 45 Z" fill="#FFE600" stroke="#111827" strokeWidth="2.5" />
    {/* Handlebar & Headlight */}
    <path d="M100 50 L 110 25 L 100 20" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
    <circle cx="110" cy="23" r="6" fill="#FFE600" stroke="#111827" strokeWidth="2" />
    
    {/* Surfboard / Laptop Bag Attached */}
    <path d="M15 45 Q 60 15 125 40 Q 60 30 15 45 Z" fill="#085438" stroke="#111827" strokeWidth="2" />
  </svg>
);

export const NoticeNoteSVG: React.FC<{
  title: string;
  subtitle: string;
  actionText: string;
  dateText: string;
  className?: string;
}> = ({ title, subtitle, actionText, dateText, className = "" }) => (
  <div className={`relative bg-[#FFF9E6] text-[#111827] p-3.5 rounded-sm shadow-md border-2 border-[#111827] transform -rotate-1 hover:rotate-0 transition-transform ${className}`}>
    {/* Red Push Pin */}
    <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF007A] rounded-full border-2 border-[#111827] shadow-xs flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
    </div>
    
    <div className="text-[10px] font-bold font-poster tracking-wider uppercase text-[#085438] mt-1">
      {title}
    </div>
    <div className="text-xs font-bold leading-tight mt-1 font-sans-body">
      {subtitle}
    </div>
    
    <div className="mt-2.5 flex items-center justify-between border-t border-dashed border-[#111827]/30 pt-2">
      <span className="text-[9px] font-bold bg-[#FF007A] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
        {actionText}
      </span>
      <span className="text-[9px] font-mono text-gray-600">
        {dateText}
      </span>
    </div>
  </div>
);

export const StampBadgeSVG: React.FC<{ text: string; className?: string }> = ({ text, className = "h-8" }) => (
  <div className={`inline-flex items-center gap-1.5 bg-[#FFE600] text-[#111827] border-2 border-[#111827] px-2.5 py-1 rounded-sm font-poster font-extrabold text-xs uppercase tracking-wider shadow-sm transform rotate-1 ${className}`}>
    <span className="w-2 h-2 rounded-full bg-[#FF007A] animate-pulse"></span>
    <span>{text}</span>
  </div>
);
