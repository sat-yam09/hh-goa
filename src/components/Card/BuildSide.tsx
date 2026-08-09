import React from 'react';
import { CardData, CardTheme } from '../../types';
import { PhotoUploader } from './PhotoUploader';
import { BuildStepper } from './BuildStepper';
import { CARD_THEMES, BUILDER_TITLES, SAMPLE_QUOTES, SUGGESTED_TEAMS, SUGGESTED_ROLES, deriveTitleFromRole } from '../../constants/builderData';
import { Sparkles, ArrowRight, Dices, Layers, ShieldCheck, Tag } from 'lucide-react';

interface BuildSideProps {
  cardData: CardData;
  onChange: (newData: Partial<CardData>) => void;
  onPreviewClick: () => void;
}

export const BuildSide: React.FC<BuildSideProps> = ({ cardData, onChange, onPreviewClick }) => {
  const currentTheme = CARD_THEMES[cardData.cardTheme];

  const handleRoleChange = (role: string) => {
    const autoTitle = deriveTitleFromRole(role);
    onChange({ role, builderTitle: autoTitle });
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * SAMPLE_QUOTES.length);
    onChange({ quote: SAMPLE_QUOTES[randomIndex] });
  };

  return (
    <div
      className="w-full h-full rounded-2xl border-4 border-[#111827] shadow-2xl p-4 md:p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: currentTheme.cardBg }}
    >
      {/* Decorative Corner Stamps & Header */}
      <div className="flex items-center justify-between border-b-2 border-[#111827] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF007A] border border-[#111827]"></span>
          <span className="font-poster font-black text-xs md:text-sm tracking-wider uppercase" style={{ color: currentTheme.textColor }}>
            HH GOA 2026 • BUILDER CARD
          </span>
        </div>
        <div className="bg-[#FFE600] text-black text-[10px] font-bold px-2 py-0.5 rounded border border-[#111827] font-mono">
          STEP 01: BUILD
        </div>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-[72vh] pr-1">
        {/* Visual Progress Stepper Component */}
        <BuildStepper cardData={cardData} />

        {/* PFP Upload Section */}
        <div>
          <PhotoUploader
            photoUrl={cardData.photoUrl}
            photoZoom={cardData.photoZoom}
            photoOffsetX={cardData.photoOffsetX}
            photoOffsetY={cardData.photoOffsetY}
            onPhotoChange={(photoUrl) => onChange({ photoUrl })}
            onZoomChange={(photoZoom) => onChange({ photoZoom })}
            onOffsetChange={(photoOffsetX, photoOffsetY) => onChange({ photoOffsetX, photoOffsetY })}
          />
        </div>

        {/* Input Fields Form */}
        <div className="space-y-3">
          {/* NAME Input */}
          <div>
            <label className="block text-xs font-poster font-extrabold uppercase tracking-wider mb-1" style={{ color: currentTheme.textColor }}>
              YOUR NAME / ALIAS <span className="text-[#FF007A]">*</span>
            </label>
            <input
              type="text"
              value={cardData.name}
              onChange={(e) => onChange({ name: e.target.value })}
              placeholder="e.g. Satyam or @satyam"
              className="w-full bg-white border-2 border-[#111827] rounded-xl px-3.5 py-2 text-sm font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#FF007A] shadow-xs"
              maxLength={24}
              required
            />
          </div>

          {/* TEAM Input */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-poster font-extrabold uppercase tracking-wider" style={{ color: currentTheme.textColor }}>
                TEAM / SQUAD
              </label>
            </div>
            <input
              type="text"
              value={cardData.team}
              onChange={(e) => onChange({ team: e.target.value })}
              placeholder="e.g. Converge, Tech Hawks, Independent"
              className="w-full bg-white border-2 border-[#111827] rounded-xl px-3.5 py-2 text-sm font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#FF007A] shadow-xs"
              maxLength={28}
            />
            {/* Quick Team Chips */}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {SUGGESTED_TEAMS.slice(0, 4).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => onChange({ team: t })}
                  className="text-[10px] font-bold bg-[#111827]/5 hover:bg-[#FFE600] text-[#111827] px-2 py-0.5 rounded border border-[#111827]/30 transition-colors"
                >
                  +{t}
                </button>
              ))}
            </div>
          </div>

          {/* ROLE / STACK Input */}
          <div>
            <label className="block text-xs font-poster font-extrabold uppercase tracking-wider mb-1" style={{ color: currentTheme.textColor }}>
              ROLE / STACK
            </label>
            <input
              type="text"
              value={cardData.role}
              onChange={(e) => handleRoleChange(e.target.value)}
              placeholder="e.g. AI × Web3, Full Stack, Rust, Motion"
              className="w-full bg-white border-2 border-[#111827] rounded-xl px-3.5 py-2 text-sm font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#FF007A] shadow-xs"
              maxLength={32}
            />
            {/* Quick Role Chips */}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {SUGGESTED_ROLES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => handleRoleChange(r)}
                  className="text-[10px] font-bold bg-[#085438]/10 hover:bg-[#085438] hover:text-white text-[#085438] px-2 py-0.5 rounded border border-[#085438]/30 transition-colors"
                >
                  +{r}
                </button>
              ))}
            </div>
          </div>

          {/* BUILDER TITLE Selector */}
          <div>
            <label className="block text-xs font-poster font-extrabold uppercase tracking-wider mb-1" style={{ color: currentTheme.textColor }}>
              BUILDER TITLE
            </label>
            <div className="flex items-center gap-2">
              <select
                value={cardData.builderTitle}
                onChange={(e) => onChange({ builderTitle: e.target.value })}
                className="w-full bg-[#FFE600] border-2 border-[#111827] rounded-xl px-3 py-2 text-xs font-extrabold font-poster uppercase text-black focus:outline-none cursor-pointer"
              >
                {BUILDER_TITLES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* WHAT'D YOU SAY? Input */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-poster font-extrabold uppercase tracking-wider" style={{ color: currentTheme.textColor }}>
                WHAT'D YOU SAY? <span className="text-gray-500 font-normal">(One-liner quote)</span>
              </label>
              <button
                type="button"
                onClick={getRandomQuote}
                className="text-[10px] font-bold text-[#FF007A] hover:underline flex items-center gap-1"
              >
                <Dices className="w-3 h-3" /> Surprise Me
              </button>
            </div>
            <input
              type="text"
              value={cardData.quote}
              onChange={(e) => onChange({ quote: e.target.value })}
              placeholder='e.g. "Ship first. Sleep in Goa later."'
              className="w-full bg-white border-2 border-[#111827] rounded-xl px-3.5 py-2 text-sm font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#FF007A] shadow-xs italic"
              maxLength={55}
            />
          </div>

          {/* CARD THEME SELECTOR */}
          <div className="pt-2 border-t border-[#111827]/10">
            <span className="block text-[11px] font-poster font-extrabold uppercase tracking-wider mb-1.5" style={{ color: currentTheme.textColor }}>
              CARD THEME:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {(Object.keys(CARD_THEMES) as CardTheme[]).map((themeKey) => {
                const themeObj = CARD_THEMES[themeKey];
                const isSelected = cardData.cardTheme === themeKey;
                return (
                  <button
                    key={themeKey}
                    type="button"
                    onClick={() => onChange({ cardTheme: themeKey })}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border-2 text-[11px] font-bold transition-all ${
                      isSelected
                        ? 'border-[#FF007A] bg-[#111827] text-white scale-105 shadow-xs'
                        : 'border-[#111827]/30 bg-white text-gray-800 hover:border-[#111827]'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-black/30" style={{ backgroundColor: themeObj.bg }}></span>
                    <span>{themeObj.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer: PREVIEW & FLIP BUTTON */}
      <div className="mt-4 pt-3 border-t-2 border-[#111827]">
        <button
          type="button"
          onClick={onPreviewClick}
          className="w-full bg-[#FF007A] hover:bg-[#E60067] active:scale-[0.98] text-white font-poster font-extrabold text-base uppercase tracking-wider py-3.5 px-6 rounded-xl border-3 border-[#111827] shadow-[4px_4px_0px_0px_#111827] hover:shadow-[2px_2px_0px_0px_#111827] transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>PREVIEW & FLIP CARD</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform stroke-[3]" />
        </button>
        <span className="block text-[10px] text-center font-bold text-gray-500 mt-1.5 uppercase tracking-widest">
          3D Card Flip Transformation
        </span>
      </div>
    </div>
  );
};
