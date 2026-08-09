import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';
import { ExportFormat } from '../types';

export async function exportCardImage(
  element: HTMLElement,
  format: ExportFormat = 'badge',
  filename: string = 'HHGoa_2026_Builder_Pass'
): Promise<boolean> {
  try {
    // High resolution pixel ratio for super crisp rendering
    const pixelRatio = 2;

    const dataUrl = await toPng(element, {
      quality: 0.98,
      pixelRatio: pixelRatio,
      cacheBust: true,
      backgroundColor: '#FFF9E6',
      style: {
        transform: 'none',
        borderRadius: '16px',
      },
    });

    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.download = `${filename}_${format === 'square' ? 'PFP' : 'Card'}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Trigger celebratory confetti burst!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE600', '#FF007A', '#085438', '#FFFFFF'],
    });

    return true;
  } catch (error) {
    console.error('Failed to export card image:', error);
    
    // Fallback drawing onto a standard HTML canvas if html-to-image hits cross-origin/font quirks
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;

      const width = format === 'square' ? 1080 : 1080;
      const height = format === 'square' ? 1080 : 1350;

      canvas.width = width;
      canvas.height = height;

      // Draw background
      ctx.fillStyle = '#FFF9E6';
      ctx.fillRect(0, 0, width, height);

      // Draw border
      ctx.strokeStyle = '#111827';
      ctx.lineWidth = 16;
      ctx.strokeRect(20, 20, width - 40, height - 40);

      // Title
      ctx.fillStyle = '#085438';
      ctx.font = 'bold 48px sans-serif';
      ctx.fillText('HACKER HOUSE GOA 2026', 60, 100);

      const fallbackDataUrl = canvas.toDataURL('image/png');
      const fallbackLink = document.createElement('a');
      fallbackLink.download = `${filename}_Fallback.png`;
      fallbackLink.href = fallbackDataUrl;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);

      return true;
    } catch (fallbackError) {
      console.error('Fallback export also failed:', fallbackError);
      return false;
    }
  }
}

export function openXShareIntent(name: string, title: string, team: string, quote: string) {
  const text = `Just created my official HH Goa 2026 Builder Card! 🌴⚡

Name: ${name || 'Builder'}
Title: ${title || 'THE SHIPPER'}
Team: ${team || 'Independent'}

"${quote || 'Ship first. Sleep in Goa later.'}"

Build your identity and show us what you're shipping for @247PMSTUDIO:
#FrameInGoa #HHGoa2026`;

  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
