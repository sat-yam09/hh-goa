import React, { useRef } from 'react';
import { CardData, CardState, ExportFormat } from '../../types';
import { BuildSide } from './BuildSide';
import { RevealSide } from './RevealSide';

interface BuilderCardProps {
  cardData: CardData;
  cardState: CardState;
  onChangeData: (newData: Partial<CardData>) => void;
  onPreviewClick: () => void;
  onEditClick: () => void;
  onDownloadClick: (format: ExportFormat) => void;
  onShareClick: () => void;
  exportRef: React.RefObject<HTMLDivElement | null>;
}

export const BuilderCard: React.FC<BuilderCardProps> = ({
  cardData,
  cardState,
  onChangeData,
  onPreviewClick,
  onEditClick,
  onDownloadClick,
  onShareClick,
  exportRef,
}) => {
  const isFlipped = cardState === 'reveal';

  return (
    <div className="w-full max-w-md mx-auto perspective-1000">
      {/* 3D Flipping Card Container */}
      <div
        className={`w-full transition-transform duration-500 preserve-3d relative ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT SIDE: BUILD STATE */}
        <div className={`w-full ${isFlipped ? 'pointer-events-none opacity-0 hidden' : 'block'}`}>
          <BuildSide
            cardData={cardData}
            onChange={onChangeData}
            onPreviewClick={onPreviewClick}
          />
        </div>

        {/* BACK SIDE: REVEAL STATE */}
        <div
          className={`w-full rotate-y-180 ${
            isFlipped ? 'block' : 'pointer-events-none opacity-0 hidden'
          }`}
        >
          <RevealSide
            cardData={cardData}
            onEditClick={onEditClick}
            onDownloadClick={onDownloadClick}
            onShareClick={onShareClick}
            exportRef={exportRef}
          />
        </div>
      </div>
    </div>
  );
};
