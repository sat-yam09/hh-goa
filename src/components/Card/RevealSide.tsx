import React from 'react';
import { CardData, ExportFormat } from '../../types';
import { CARD_THEMES } from '../../constants/builderData';
import { HHGoaLogo, GoaPalmsSVG, StampBadgeSVG } from '../illustrations/GoaVectors';
import { Download, Share2, RotateCcw, Sparkles, CheckCircle2, User, Twitter } from 'lucide-react';

interface RevealSideProps {
  cardData: CardData;
  onEditClick: () => void;
  onDownloadClick: (format: ExportFormat) => void;
  onShareClick: () => void;
  exportRef: React.RefObject<HTMLDivElement | null>;
}

export const RevealSide: React.FC<RevealSideProps> = ({
  cardData,
  onEditClick,
  onDownloadClick,
  onShareClick,
  exportRef,
}) => {
  const currentTheme = CARD_THEMES[cardData.cardTheme];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Target Exportable Card Element */}
      <div
        ref={exportRef}
        className="w-full rounded-2xl border-4 border-[#111827] shadow-2xl p-5 md:p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-300 select-none"
        style={{
          backgroundColor: currentTheme.cardBg,
          minHeight: '520px',
        }}
      >
        {/* Background Decorative Palm Watermark */}
        <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
          <GoaPalmsSVG className="w-48 h-48" color={currentTheme.textColor} />
        </div>

        {/* TOP BAR BRANDING */}
        <div className="border-b-2 border-[#111827] pb-3 mb-3 flex items-center justify-between">
          <HHGoaLogo className="scale-90 md:scale-100 origin-left" variant="green" />
          <div className="text-right">
            <span className="inline-block bg-[#FF007A] text-white text-[9px] font-poster font-extrabold px-2 py-0.5 rounded border border-[#111827] uppercase tracking-wider shadow-xs">
              OFFICIAL PASS
            </span>
            <div className="text-[10px] font-mono font-bold text-gray-700 mt-0.5">
              ID: {cardData.passId}
            </div>
          </div>
        </div>

        {/* HERO SECTION: PFP + NAME + TITLE */}
        <div className="flex flex-col md:flex-row items-center gap-4 my-2">
          {/* Framed PFP Image */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-3 border-[#111827] shadow-[4px_4px_0px_0px_#111827] bg-[#FFE600]/30 relative">
              {cardData.photoUrl ? (
                <img
                  src={cardData.photoUrl}
                  alt={cardData.name}
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(${cardData.photoZoom}) translate(${cardData.photoOffsetX}%, ${cardData.photoOffsetY}%)`,
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#FFE600] text-[#111827]">
                  <User className="w-12 h-12 stroke-[2]" />
                  <span className="text-[10px] font-poster font-bold mt-1 uppercase">HH GOA BUILDER</span>
                </div>
              )}
            </div>

            {/* Verification Ribbon Badge */}
            <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#FFE600] text-black text-[9px] font-poster font-black px-2.5 py-0.5 rounded-full border-2 border-[#111827] shadow-xs flex items-center gap-1 uppercase">
              <CheckCircle2 className="w-3 h-3 text-[#FF007A]" /> BUILDER 2026
            </div>
          </div>

          {/* BUILDER METADATA BLOCK */}
          <div className="flex-1 text-center md:text-left">
            {/* Builder Title Badge */}
            <div className="inline-block bg-[#FF007A] text-white font-poster font-black text-xs uppercase px-2.5 py-0.5 rounded border border-[#111827] shadow-xs mb-1.5">
              ⚡ {cardData.builderTitle || 'THE SHIPPER'}
            </div>

            {/* Builder Name */}
            <h1 className="font-serif-display font-black text-2xl md:text-3xl leading-none text-[#111827] tracking-tight break-words">
              {cardData.name || 'ANONYMOUS BUILDER'}
            </h1>

            {/* Team & Stack details */}
            <div className="mt-2 space-y-1 text-xs font-bold text-gray-800 font-sans-body">
              {cardData.team && (
                <div className="flex items-center justify-center md:justify-start gap-1.5">
                  <span className="text-gray-500 uppercase tracking-wider text-[10px]">TEAM:</span>
                  <span className="bg-[#FFE600] text-black px-2 py-0.5 rounded border border-[#111827] text-xs font-extrabold">
                    {cardData.team}
                  </span>
                </div>
              )}

              {cardData.role && (
                <div className="flex items-center justify-center md:justify-start gap-1.5">
                  <span className="text-gray-500 uppercase tracking-wider text-[10px]">STACK:</span>
                  <span className="bg-[#085438] text-white px-2 py-0.5 rounded border border-[#111827] text-xs font-extrabold">
                    {cardData.role}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* "WHAT'D YOU SAY?" QUOTE SPEECH CARD */}
        <div className="mt-3 bg-white border-2 border-[#111827] rounded-xl p-3 shadow-[3px_3px_0px_0px_#111827] relative">
          <div className="text-[9px] font-poster font-black uppercase text-[#FF007A] tracking-wider mb-0.5 flex items-center justify-between">
            <span>WHAT'D YOU SAY?</span>
            <span className="text-[9px] font-mono text-gray-400">#FrameInGoa</span>
          </div>
          <p className="font-serif-display italic font-extrabold text-sm md:text-base text-[#111827] leading-snug">
            "{cardData.quote || 'Ship first. Sleep in Goa later.'}"
          </p>
        </div>

        {/* BOTTOM PASS FOOTER */}
        <div className="mt-4 pt-2.5 border-t-2 border-dashed border-[#111827]/40 flex items-center justify-between text-[10px] font-mono font-bold text-gray-700">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#085438] animate-ping"></span>
            <span>GOA, INDIA • 28-31 OCT 2026</span>
          </div>
          <div className="bg-[#FFE600] text-black px-2 py-0.5 rounded border border-[#111827] font-poster font-extrabold text-[9px] uppercase tracking-wider">
            #FrameInGoa
          </div>
        </div>
      </div>

      {/* EXTERNAL ACTION BUTTONS BAR */}
      <div className="w-full mt-4 space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          {/* Download Card PNG */}
          <button
            type="button"
            onClick={() => onDownloadClick('badge')}
            className="bg-[#FFE600] hover:bg-[#ffd000] active:scale-[0.98] text-black font-poster font-extrabold text-xs md:text-sm uppercase py-3 px-3 rounded-xl border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] hover:shadow-[1px_1px_0px_0px_#111827] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>CARD (PNG)</span>
          </button>

          {/* Download Square PFP Format */}
          <button
            type="button"
            onClick={() => onDownloadClick('square')}
            className="bg-white hover:bg-gray-100 active:scale-[0.98] text-black font-poster font-extrabold text-xs md:text-sm uppercase py-3 px-3 rounded-xl border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] hover:shadow-[1px_1px_0px_0px_#111827] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>SQUARE PFP</span>
          </button>
        </div>

        {/* Share to X Button */}
        <button
          type="button"
          onClick={onShareClick}
          className="w-full bg-[#1DA1F2] hover:bg-[#0c85d0] active:scale-[0.98] text-white font-poster font-extrabold text-xs md:text-sm uppercase py-3.5 px-4 rounded-xl border-2 border-[#111827] shadow-[3px_3px_0px_0px_#111827] hover:shadow-[1px_1px_0px_0px_#111827] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Twitter className="w-4 h-4 fill-current" />
          <span>SHARE TO X (#FrameInGoa)</span>
        </button>

        {/* Flip Back & Edit Button */}
        <button
          type="button"
          onClick={onEditClick}
          className="w-full bg-transparent hover:bg-black/10 text-[#FFF9E6] font-bold text-xs uppercase py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>FLIP BACK & EDIT CARD</span>
        </button>
      </div>
    </div>
  );
};
