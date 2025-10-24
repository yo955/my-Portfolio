"use client";
import { useState, useEffect } from 'react';

interface CVPopupProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
  downloadUrl: string;
}
export default function CVPopup({ isOpen, onClose, cvUrl, downloadUrl }: CVPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number | undefined;

    if (isOpen) {
      // schedule the state update on the next animation frame to avoid a synchronous setState inside the effect
      rafId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-primary/20">
          <h2 className="text-2xl font-bold text-foreground">My CV</h2>
          <button
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground text-2xl transition-colors duration-200"
          >
            ×
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="h-[60vh] p-4">
          <iframe
            src={cvUrl}
            className="w-full h-full rounded-lg border border-primary/20"
            title="CV Preview"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4 p-6 border-t border-primary/20 bg-muted/20">
          <a
            href={downloadUrl}
            download
            className="flex-1 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold text-center hover:scale-105 transition-transform duration-300 glow-primary"
          >
            📥 Download CV
          </a>
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 glass-card text-foreground rounded-lg font-semibold border border-primary/30 hover:glow-primary transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}