import React from 'react';
import { CardData } from '../../types';
import { Camera, User, Users, Palette, CheckCircle2, Sparkles } from 'lucide-react';

interface BuildStepperProps {
  cardData: CardData;
  onStepClick?: (stepIndex: number) => void;
}

export const BuildStepper: React.FC<BuildStepperProps> = ({ cardData }) => {
  // Check completion status for each step
  const step1Complete = Boolean(cardData.photoUrl);
  const step2Complete = Boolean(cardData.name.trim());
  const step3Complete = Boolean(cardData.team.trim() || cardData.role.trim());
  const step4Complete = Boolean(cardData.quote.trim() && cardData.cardTheme);

  const steps = [
    { id: 1, label: 'Photo Upload', isComplete: step1Complete, icon: Camera },
    { id: 2, label: 'Personal Info', isComplete: step2Complete, icon: User },
    { id: 3, label: 'Team & Stack', isComplete: step3Complete, icon: Users },
    { id: 4, label: 'Quote & Theme', isComplete: step4Complete, icon: Palette },
  ];

  const completedCount = steps.filter((s) => s.isComplete).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  // Get current guidance prompt
  const getNextStepPrompt = () => {
    if (!step2Complete) return "Step 2: Please enter your name or alias";
    if (!step1Complete) return "Step 1: Upload a profile picture or select a sample avatar";
    if (!step3Complete) return "Step 3: Add your team or tech stack";
    if (!step4Complete) return "Step 4: Pick a quote and card color theme";
    return "All set! Click 'PREVIEW & FLIP CARD' below";
  };

  return (
    <div className="bg-[#111827] text-white p-3 rounded-xl border-2 border-[#FFE600] shadow-sm mb-4 space-y-2">
      {/* Header & Percentage */}
      <div className="flex items-center justify-between text-xs font-poster font-extrabold uppercase">
        <div className="flex items-center gap-1.5 text-[#FFE600]">
          <Sparkles className="w-3.5 h-3.5 text-[#FF007A]" />
          <span>PROGRESS STEPPER</span>
        </div>
        <span className="bg-[#FF007A] text-white text-[10px] px-2 py-0.5 rounded font-mono">
          {completedCount} / 4 COMPLETED ({progressPercent}%)
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#1F2937] h-2 rounded-full overflow-hidden p-0.5 border border-[#FFE600]/30">
        <div
          className="bg-gradient-to-r from-[#FF007A] via-[#FFE600] to-[#00E5FF] h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Stepper Buttons / Chips */}
      <div className="grid grid-cols-4 gap-1 pt-1">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`flex flex-col items-center justify-center p-1.5 rounded-lg border text-center transition-all ${
                step.isComplete
                  ? 'bg-[#085438] border-[#FFE600] text-white'
                  : 'bg-[#1F2937] border-gray-700 text-gray-400'
              }`}
            >
              <div className="flex items-center gap-1">
                {step.isComplete ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE600]" />
                ) : (
                  <Icon className="w-3.5 h-3.5 text-gray-400" />
                )}
                <span className="font-poster font-black text-[10px] leading-none">
                  #{step.id}
                </span>
              </div>
              <span className="text-[9px] font-bold truncate max-w-full mt-0.5 leading-none">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Guidance Banner */}
      <div className="text-[10px] font-bold text-center text-[#FFE600] bg-[#06402A] py-1 px-2 rounded border border-[#FFE600]/40 font-mono truncate">
        ⚡ {getNextStepPrompt()}
      </div>
    </div>
  );
};
