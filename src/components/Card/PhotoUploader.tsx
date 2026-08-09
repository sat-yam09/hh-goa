import React, { useRef, useState } from 'react';
import { Camera, Upload, RefreshCw, ZoomIn, UserCheck, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SAMPLE_AVATARS } from '../../constants/builderData';

interface PhotoUploaderProps {
  photoUrl: string | null;
  photoZoom: number;
  photoOffsetX: number;
  photoOffsetY: number;
  onPhotoChange: (url: string | null) => void;
  onZoomChange: (zoom: number) => void;
  onOffsetChange: (x: number, y: number) => void;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  photoUrl,
  photoZoom,
  photoOffsetX,
  photoOffsetY,
  onPhotoChange,
  onZoomChange,
  onOffsetChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showAdjustments, setShowAdjustments] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file (JPG, PNG, WEBP).");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onPhotoChange(event.target.result as string);
        onZoomChange(1);
        onOffsetChange(0, 0);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />

      {photoUrl ? (
        <div className="relative group bg-[#06402A]/10 border-2 border-dashed border-[#085438] rounded-xl p-3 flex flex-col items-center">
          {/* Preview Container */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 border-[#111827] shadow-inner bg-[#111827]/10 flex items-center justify-center">
            <img
              src={photoUrl}
              alt="PFP Preview"
              className="w-full h-full object-cover transition-transform duration-75"
              style={{
                transform: `scale(${photoZoom}) translate(${photoOffsetX}%, ${photoOffsetY}%)`,
              }}
            />
            
            {/* Quick Action Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#FFE600] text-black p-2 rounded-full hover:scale-110 transition-transform shadow-md"
                title="Change Photo"
              >
                <Camera className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowAdjustments(!showAdjustments)}
                className="bg-[#FF007A] text-white p-2 rounded-full hover:scale-110 transition-transform shadow-md"
                title="Adjust Framing"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-2 mt-2 w-full justify-between text-xs">
            <button
              type="button"
              onClick={() => setShowAdjustments(!showAdjustments)}
              className="text-[#085438] hover:text-[#FF007A] font-bold underline flex items-center gap-1"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              {showAdjustments ? "Hide Framing Controls" : "Adjust Framing"}
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-bold text-[#FF007A] hover:underline"
            >
              Change Photo
            </button>
          </div>

          {/* Zoom & Reposition Sliders */}
          {showAdjustments && (
            <div className="mt-3 p-3 bg-white border border-[#111827]/20 rounded-lg w-full text-xs space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-700">Zoom Level: {photoZoom.toFixed(1)}x</span>
                <button
                  type="button"
                  onClick={() => {
                    onZoomChange(1);
                    onOffsetChange(0, 0);
                  }}
                  className="text-[10px] text-gray-500 hover:text-black underline flex items-center gap-1"
                >
                  <RefreshCw className="w-2.5 h-2.5" /> Reset
                </button>
              </div>
              <input
                type="range"
                min="1"
                max="2.5"
                step="0.05"
                value={photoZoom}
                onChange={(e) => onZoomChange(parseFloat(e.target.value))}
                className="w-full accent-[#FF007A] cursor-pointer"
              />

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <span className="text-[10px] text-gray-500 block">Move Horizontal</span>
                  <input
                    type="range"
                    min="-40"
                    max="40"
                    value={photoOffsetX}
                    onChange={(e) => onOffsetChange(parseInt(e.target.value), photoOffsetY)}
                    className="w-full accent-[#085438] cursor-pointer"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block">Move Vertical</span>
                  <input
                    type="range"
                    min="-40"
                    max="40"
                    value={photoOffsetY}
                    onChange={(e) => onOffsetChange(photoOffsetX, parseInt(e.target.value))}
                    className="w-full accent-[#085438] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Upload Placeholder Area */
        <div className="space-y-3">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-3 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
              isDragging
                ? 'border-[#FF007A] bg-[#FF007A]/10 scale-[1.01]'
                : 'border-[#085438] bg-[#FFF9E6] hover:bg-[#FFE600]/20 hover:border-[#FF007A]'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-[#FFE600] border-2 border-[#111827] flex items-center justify-center text-[#111827] shadow-sm">
              <Upload className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div>
              <span className="font-poster font-bold text-sm text-[#085438] block uppercase tracking-wider">
                ADD YOUR PFP
              </span>
              <span className="text-[11px] text-gray-600 block mt-0.5">
                Drop your photo here or click to browse
              </span>
            </div>

            <span className="inline-block text-[10px] font-bold bg-[#FF007A] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              JPG • PNG • WEBP
            </span>
          </div>

          {/* Quick Demo Avatars */}
          <div className="bg-[#085438]/5 p-2.5 rounded-lg border border-[#085438]/20">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#085438] mb-2">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#FF007A]" /> Or test with sample avatars:
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {SAMPLE_AVATARS.map((avatar) => (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => {
                    onPhotoChange(avatar.url);
                    onZoomChange(1);
                    onOffsetChange(0, 0);
                  }}
                  className="group relative rounded-lg overflow-hidden border border-[#111827] aspect-square hover:ring-2 hover:ring-[#FF007A] transition-all"
                  title={`${avatar.name} (${avatar.role})`}
                >
                  <img
                    src={avatar.url}
                    alt={avatar.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
