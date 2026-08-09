export type CardTheme = 'emerald' | 'sunset' | 'sunshine' | 'ocean' | 'midnight';

export type CardState = 'build' | 'reveal';

export type ExportFormat = 'badge' | 'square';

export interface CardData {
  name: string;
  team: string;
  role: string;
  quote: string;
  photoUrl: string | null;
  photoZoom: number;
  photoOffsetX: number;
  photoOffsetY: number;
  builderTitle: string;
  cardTheme: CardTheme;
  passId: string;
}

export interface SampleAvatar {
  id: string;
  name: string;
  role: string;
  url: string;
}
