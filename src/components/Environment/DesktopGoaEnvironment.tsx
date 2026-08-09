import React from 'react';
import { HHGoaLogo, GoaPalmsSVG, SunHorizonSVG, PortugueseHouseSVG, ScooterSVG, NoticeNoteSVG, StampBadgeSVG } from '../illustrations/GoaVectors';
import { ExternalLink, Sparkles, MapPin, Calendar, Award, Code2, Users } from 'lucide-react';

interface DesktopGoaEnvironmentProps {
  children: React.ReactNode;
  onReplayPreloader?: () => void;
}

export const DesktopGoaEnvironment: React.FC<DesktopGoaEnvironmentProps> = ({ children, onReplayPreloader }) => {
  return (
    <div className="min-h-screen bg-[#06402A] text-[#FFF9E6] relative overflow-hidden flex flex-col justify-between">
      {/* TOP BRAND NAVIGATION BAR */}
      <header className="w-full border-b-2 border-[#111827] bg-[#085438] px-4 md:px-6 py-3 flex items-center justify-between z-20 shadow-md">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-[#FFE600] text-black font-poster font-black text-xs px-2.5 py-1 rounded border-2 border-[#111827] shadow-xs uppercase">
            2:47 PM STUDIO
          </div>
          <span className="hidden sm:inline-block text-xs font-bold text-[#FFE600] uppercase tracking-wider">
            • GOA, INDIA • 28 - 31 OCT 2026
          </span>
        </div>

        <HHGoaLogo className="hidden md:flex" variant="cream" />

        <div className="flex items-center gap-2 sm:gap-3">
          {onReplayPreloader && (
            <button
              type="button"
              onClick={onReplayPreloader}
              className="text-xs font-bold bg-[#FF007A] hover:bg-[#E60067] text-white px-2.5 py-1 rounded-lg border border-[#111827] flex items-center gap-1 transition-transform hover:scale-105 cursor-pointer"
              title="Replay Intro Preloader"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">INTRO</span>
            </button>
          )}

          <a
            href="https://hhgoa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#FFF9E6] hover:text-[#FFE600] underline flex items-center gap-1"
          >
            <span>CHECK HYPE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://hhgoa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFE600] hover:bg-[#ffd000] text-black font-poster font-extrabold text-xs px-3 sm:px-4 py-1.5 rounded-lg border-2 border-[#111827] shadow-[2px_2px_0px_0px_#111827] uppercase tracking-wider transition-transform hover:scale-105"
          >
            APPLY NOW
          </a>
        </div>
      </header>

      {/* SUN & OCEAN HORIZON BACKGROUND WATERMARK */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 opacity-30 pointer-events-none z-0 animate-pulse-subtle">
        <SunHorizonSVG className="w-80 h-36" />
      </div>

      {/* MAIN HERO CONTENT STAGE */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        {/* LEFT COLUMN: NOTICE BOARD & EVENT INTRO (DESKTOP) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 justify-center">
          {/* NOTICE BOARD */}
          <div className="space-y-3">
            <div className="text-center">
              <span className="bg-[#FFE600] text-black text-[10px] font-poster font-black px-2 py-0.5 rounded border border-[#111827] uppercase tracking-widest">
                PICKED UP NOTICE BOARD
              </span>
            </div>

            <NoticeNoteSVG
              title="TASK #1: HH GOA FRAME"
              subtitle="Design your own HH Goa 2026 builder card generator."
              actionText="RUNNING"
              dateText="AUG 8, 4:20 AM"
            />

            <NoticeNoteSVG
              title="HHGOA '26 SELECTION"
              subtitle="How shortlisting works: No fluff, pure shipping."
              actionText="VIEW LOG"
              dateText="AUG 2, 1:20 AM"
            />
          </div>

          {/* LEFT SCENERY: PORTUGUESE HOUSE */}
          <div className="relative pt-4 flex flex-col items-center">
            <PortugueseHouseSVG className="w-44 h-32" color="#FF007A" />
            <div className="text-[10px] font-mono text-[#FFE600] font-bold mt-1 uppercase tracking-wider text-center">
              ANJUNA BUILDER HOUSE • 2:47 PM
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: THE INTERACTIVE BUILDER CARD (HERO FOCAL POINT) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          {/* Tagline Banner above card */}
          <div className="text-center mb-4 space-y-1">
            <h1 className="font-serif-display font-black text-3xl md:text-5xl text-[#FFF9E6] tracking-tight leading-none drop-shadow-sm">
              MAKE YOUR <span className="text-[#FFE600] italic">HH GOA</span> IDENTITY
            </h1>
            <p className="text-xs md:text-sm font-bold text-[#FFF9E6]/80 max-w-md mx-auto">
              Build your official 2026 builder pass, flip in 3D, and share with the #FrameInGoa community.
            </p>
          </div>

          {/* Central Interactive Card */}
          {children}
        </div>

        {/* RIGHT COLUMN: STATS SIGNPOST & EVENT HIGHLIGHTS */}
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 items-center justify-center">
          {/* GOAN MILESTONE SIGNPOST */}
          <div className="bg-[#FFF9E6] text-[#111827] p-4 rounded-xl border-3 border-[#111827] shadow-[5px_5px_0px_0px_#111827] w-full text-center space-y-2 transform rotate-1">
            <div className="font-poster font-extrabold text-xs uppercase text-[#085438] tracking-widest border-b-2 border-[#111827] pb-1">
              HH GOA '26 AT A GLANCE
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="bg-[#FFE600] p-1.5 rounded border border-[#111827] font-poster font-black text-sm">
                6800+ <span className="text-[10px] font-sans">REGISTRATIONS</span>
              </div>
              <div className="bg-[#FF007A] text-white p-1.5 rounded border border-[#111827] font-poster font-black text-sm">
                390+ <span className="text-[10px] font-sans">SELECTED HACKERS</span>
              </div>
              <div className="bg-[#085438] text-white p-1.5 rounded border border-[#111827] font-poster font-black text-sm">
                100 <span className="text-[10px] font-sans">PROJECTS LAUNCHED</span>
              </div>
              <div className="bg-[#111827] text-[#FFE600] p-1.5 rounded border border-[#111827] font-poster font-black text-sm">
                $500K+ <span className="text-[10px] font-sans text-white">BOUNTIES & PRIZES</span>
              </div>
            </div>
          </div>

          {/* SCOOTER & PALMS SCENERY */}
          <div className="relative pt-2 flex flex-col items-center">
            <ScooterSVG className="w-32 h-24" />
            <div className="text-[10px] font-mono text-[#FFE600] font-bold mt-1 uppercase tracking-wider text-center">
              CODE. BEACH. REPEAT.
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER MARQUEE & DETAILS */}
      <footer className="w-full border-t-2 border-[#111827] bg-[#032B1C] py-3 px-6 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-[#FFF9E6]/70 z-20 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-ping"></span>
          <span>4 DAYS • ONE RHYTHM • EVERYTHING INTENTIONAL</span>
        </div>
        <div className="font-mono text-[11px]">
          © 2026 HH-GOA. ALL RIGHTS RESERVED. #FrameInGoa
        </div>
      </footer>
    </div>
  );
};
