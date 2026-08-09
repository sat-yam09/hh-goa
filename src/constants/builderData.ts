import { CardTheme, SampleAvatar } from '../types';

export const CARD_THEMES: Record<CardTheme, {
  name: string;
  bg: string;
  border: string;
  accent: string;
  badgeBg: string;
  badgeText: string;
  cardBg: string;
  textColor: string;
  subTextColor: string;
}> = {
  emerald: {
    name: 'Goa Emerald',
    bg: '#085438',
    border: '#FFE600',
    accent: '#FF007A',
    badgeBg: '#FFE600',
    badgeText: '#085438',
    cardBg: '#FFF9E6',
    textColor: '#085438',
    subTextColor: '#0A3323',
  },
  sunset: {
    name: 'Sunset Pink',
    bg: '#E60067',
    border: '#FFE600',
    accent: '#085438',
    badgeBg: '#FFF9E6',
    badgeText: '#E60067',
    cardBg: '#FFF3F8',
    textColor: '#80003A',
    subTextColor: '#B30052',
  },
  sunshine: {
    name: 'Sunshine Gold',
    bg: '#FFD600',
    border: '#085438',
    accent: '#FF007A',
    badgeBg: '#085438',
    badgeText: '#FFF9E6',
    cardBg: '#FFFDF0',
    textColor: '#4A3B00',
    subTextColor: '#735C00',
  },
  ocean: {
    name: 'Anjuna Blue',
    bg: '#006699',
    border: '#FFE600',
    accent: '#FF007A',
    badgeBg: '#FFE600',
    badgeText: '#004466',
    cardBg: '#F0F9FF',
    textColor: '#00334E',
    subTextColor: '#004B72',
  },
  midnight: {
    name: '2:47 AM Hacker',
    bg: '#111827',
    border: '#FF007A',
    accent: '#FFE600',
    badgeBg: '#FF007A',
    badgeText: '#FFFFFF',
    cardBg: '#1F2937',
    textColor: '#F9FAFB',
    subTextColor: '#D1D5DB',
  },
};

export const BUILDER_TITLES = [
  'THE SHIPPER',
  'THE PIXEL PUSHER',
  'THE SYSTEM BENDER',
  'THE CODE ALCHEMIST',
  'THE PROTOCOL ARCHITECT',
  'THE FULL STACK WIZARD',
  'THE AI WHISPERER',
  'THE INFRA COMMANDER',
  'THE PRODUCT BUILDER',
  'THE DEBUGGER',
];

export const SAMPLE_QUOTES = [
  "Ship first. Sleep in Goa later.",
  "Building at 2:47 PM. Code on the beach.",
  "Works on my machine & in Goa.",
  "4 days. 1 rhythm. Everything intentional.",
  "Less noise. More signal.",
  "Deploying from the sand.",
  "One more commit before sunset.",
  "Here to build, ship, and launch.",
];

export const SUGGESTED_TEAMS = [
  "Converge",
  "Tech Hawks",
  "IceDrop",
  "Synapse",
  "Techne",
  "Team Gravity",
  "2:47 Squad",
  "Solo Builder",
];

export const SUGGESTED_ROLES = [
  "AI × Web3",
  "Full Stack",
  "Frontend & Motion",
  "Systems & Rust",
  "Product & Design",
  "LLM & Agents",
  "Smart Contracts",
];

export const SAMPLE_AVATARS: SampleAvatar[] = [
  {
    id: 'avatar-1',
    name: 'Aria Tech',
    role: 'AI × Web3',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'avatar-2',
    name: 'Karan Dev',
    role: 'Systems & Rust',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'avatar-3',
    name: 'Maya Design',
    role: 'Product & Motion',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'avatar-4',
    name: 'Leo Hacker',
    role: 'Full Stack Wizard',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
  },
];

export function deriveTitleFromRole(role: string): string {
  const r = role.toLowerCase();
  if (r.includes('ai') || r.includes('llm') || r.includes('agent') || r.includes('model') || r.includes('gemini')) {
    return 'THE AI WHISPERER';
  }
  if (r.includes('design') || r.includes('ui') || r.includes('ux') || r.includes('motion') || r.includes('frontend')) {
    return 'THE PIXEL PUSHER';
  }
  if (r.includes('crypto') || r.includes('web3') || r.includes('solana') || r.includes('contract') || r.includes('chain')) {
    return 'THE PROTOCOL ARCHITECT';
  }
  if (r.includes('rust') || r.includes('sys') || r.includes('backend') || r.includes('infra') || r.includes('cloud')) {
    return 'THE SYSTEM BENDER';
  }
  if (r.includes('full') || r.includes('stack') || r.includes('dev')) {
    return 'THE FULL STACK WIZARD';
  }
  if (r.includes('product') || r.includes('founder') || r.includes('ship')) {
    return 'THE PRODUCT BUILDER';
  }
  return 'THE SHIPPER';
}
