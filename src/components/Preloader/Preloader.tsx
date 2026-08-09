import React, { useEffect, useState } from 'react';
import { GoaPalmsSVG, SunHorizonSVG } from '../illustrations/GoaVectors';
import { Sparkles, ArrowRight, RefreshCw } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, isReplay = false }) => {
  const [progress, setProgress] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setProgress(0);
    setIsReady(false);

    // Progress bar loader count
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [animationKey]);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#06402A] text-[#FFF9E6] flex flex-col items-center justify-between p-6 select-none overflow-hidden">
      {/* Background Tropical Palms and Sun Overlay */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-25 pointer-events-none animate-pulse-subtle">
        <SunHorizonSVG className="w-96 h-48" />
      </div>

      <div className="absolute -left-12 -bottom-10 opacity-20 pointer-events-none">
        <GoaPalmsSVG className="w-64 h-64" color="#FFE600" />
      </div>
      <div className="absolute -right-12 -bottom-10 opacity-20 pointer-events-none transform scale-x-[-1]">
        <GoaPalmsSVG className="w-64 h-64" color="#FF007A" />
      </div>

      {/* TOP STATUS BAR */}
      <div className="w-full max-w-4xl flex items-center justify-between border-b-2 border-[#FFE600]/30 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF007A] animate-ping"></span>
          <span className="font-poster font-black text-xs md:text-sm text-[#FFE600] uppercase tracking-widest">
            2:47 PM STUDIO • HH GOA 2026
          </span>
        </div>
        <div className="bg-[#FFE600] text-black font-poster font-extrabold text-[10px] md:text-xs px-3 py-1 rounded border border-[#111827] shadow-xs uppercase">
          OCTOBER 28 - 31, 2026
        </div>
      </div>

      {/* CENTER ANIMATION HERO */}
      <div key={animationKey} className="my-auto flex flex-col items-center justify-center relative z-10 space-y-6 max-w-2xl text-center">

        {/* JUMPY ANIMATED LOGO CONTAINER */}
        <div className="flex flex-col items-center justify-center gap-2 relative py-4">

          {/* "HACKER" comes from UPWARD with jumpy curve */}
          <div className="animate-jump-down font-poster font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#FFF9E6] drop-shadow-[4px_4px_0px_#111827]">
            HACKER
          </div>

          {/* "गोवा" in HINDI PINK COLOR comes from CENTER POPUP animation with jumpy curve */}
          <div className="animate-jump-pop my-1 z-20">
            <span className="inline-block bg-[#FF007A] text-[#FFE600] font-serif-display font-black text-4xl sm:text-5xl md:text-6xl px-6 py-2 rounded-2xl border-4 border-[#111827] shadow-[6px_6px_0px_0px_#FFE600] transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              गोवा
            </span>
          </div>

          {/* "HOUSE" comes from DOWNWARD with jumpy curve */}
          <div className="animate-jump-up font-poster font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#FFE600] drop-shadow-[4px_4px_0px_#111827]">
            HOUSE
          </div>

        </div>

        {/* Subtitle Tagline */}
        <p className="text-xs sm:text-sm font-bold text-[#FFF9E6]/90 font-sans-body max-w-md mx-auto tracking-wide">
          BUILDER IDENTITY PASS GENERATOR • 4 DAYS OF INTENTIONAL SHIPPING
        </p>

        {/* PROGRESS BAR & PERCENTAGE */}
        <div className="w-full max-w-md space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-[#FFE600]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF007A]" /> INITIALIZING GOAN VIBES...
            </span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-[#111827] h-3.5 rounded-full p-0.5 border-2 border-[#FFE600] shadow-sm overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#FF007A] via-[#FFE600] to-[#00E5FF] h-full rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="w-full max-w-md relative z-10 flex flex-col items-center gap-2 pt-4">
        <button
          type="button"
          onClick={onComplete}
          className={`w-full font-poster font-black text-sm md:text-base uppercase py-3.5 px-6 rounded-xl border-3 border-[#111827] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0px_0px_#111827] active:translate-y-1 ${
            isReady
              ? 'bg-[#FFE600] hover:bg-[#ffd000] text-black animate-bounce'
              : 'bg-[#FF007A] hover:bg-[#E60067] text-white'
          }`}
        >
          <span>{isReady ? 'ENTER BUILDER HOUSE' : 'SKIP INTRO & BUILD'}</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>

        <button
          type="button"
          onClick={handleReplay}
          className="text-xs font-bold text-[#FFE600]/80 hover:text-[#FFE600] underline flex items-center gap-1 cursor-pointer transition-colors pt-1"
        >
          <RefreshCw className="w-3 h-3" /> Replay Intro Animation
        </button>
      </div>
    </div>
  );
};
