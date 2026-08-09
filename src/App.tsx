import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { CardData, CardState, ExportFormat } from './types';
import { BuilderCard } from './components/Card/BuilderCard';
import { DesktopGoaEnvironment } from './components/Environment/DesktopGoaEnvironment';
import { Preloader } from './components/Preloader/Preloader';
import { exportCardImage, openXShareIntent } from './utils/exportImage';
import { deriveTitleFromRole } from './constants/builderData';

export default function App() {
  const exportRef = useRef<HTMLDivElement>(null);
  const [showPreloader, setShowPreloader] = useState(true);

  // Generate unique pass ID
  const [passId] = useState(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `HHG26-0813-${randomNum}`;
  });

  // Initial Card Data - Inputs are empty so placeholders display cleanly
  const [cardData, setCardData] = useState<CardData>({
    name: '',
    team: '',
    role: '',
    quote: '',
    photoUrl: null,
    photoZoom: 1,
    photoOffsetX: 0,
    photoOffsetY: 0,
    builderTitle: 'THE SHIPPER',
    cardTheme: 'emerald',
    passId: passId,
  });

  // Card State ('build' | 'reveal')
  const [cardState, setCardState] = useState<CardState>('build');

  // Handle data updates
  const handleDataChange = (newData: Partial<CardData>) => {
    setCardData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  // Trigger 3D flip to REVEAL state with celebratory confetti burst
  const handlePreviewClick = () => {
    if (!cardData.name.trim()) {
      alert("Please enter your name or alias to build your HH Goa pass!");
      return;
    }

    // Ensure builder title exists
    if (!cardData.builderTitle) {
      const derived = deriveTitleFromRole(cardData.role);
      handleDataChange({ builderTitle: derived });
    }

    setCardState('reveal');

    // Trigger celebratory confetti animation when flipping to reveal state!
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#FFE600', '#FF007A', '#085438', '#FFF9E6', '#00E5FF'],
    });
  };

  // Trigger flip back to BUILD state
  const handleEditClick = () => {
    setCardState('build');
  };

  // Handle Download PNG
  const handleDownloadClick = async (format: ExportFormat) => {
    if (exportRef.current) {
      const safeName = cardData.name.replace(/[^a-zA-Z0-9]/g, '_') || 'Builder';
      await exportCardImage(exportRef.current, format, `HHGoa_2026_${safeName}`);
    }
  };

  // Handle Share to X
  const handleShareClick = () => {
    openXShareIntent(cardData.name, cardData.builderTitle, cardData.team, cardData.quote);
  };

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      <DesktopGoaEnvironment onReplayPreloader={() => setShowPreloader(true)}>
        <BuilderCard
          cardData={cardData}
          cardState={cardState}
          onChangeData={handleDataChange}
          onPreviewClick={handlePreviewClick}
          onEditClick={handleEditClick}
          onDownloadClick={handleDownloadClick}
          onShareClick={handleShareClick}
          exportRef={exportRef}
        />
      </DesktopGoaEnvironment>
    </>
  );
}
