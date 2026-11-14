import React, { useState, useEffect } from 'react';
import { Mail, Heart, Check, X } from 'lucide-react';
import { LOVE_LETTERS } from '../data/wonderlandData';
import { LoveLetter } from '../types';
import { soundFX } from '../utils/audio';

interface LoveLettersProps {
  onLetterOpened: (id: number) => void;
}

export const LoveLetters: React.FC<LoveLettersProps> = ({ onLetterOpened }) => {
  const [activeLetter, setActiveLetter] = useState<LoveLetter | null>(null);
  const [openedIds, setOpenedIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wonderland_opened_letters');
      if (saved) {
        setOpenedIds(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenLetter = (letter: LoveLetter) => {
    soundFX.playSparkle();
    setActiveLetter(letter);

    if (!openedIds.includes(letter.id)) {
      const next = [...openedIds, letter.id];
      setOpenedIds(next);
      try {
        localStorage.setItem('wonderland_opened_letters', JSON.stringify(next));
      } catch {
        // ignore
      }
      onLetterOpened(letter.id);
    }
  };

  return (
    <section id="letters" className="py-16 px-4 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>VINTAGE ROMANTIC MAILBOX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          Letters I Wrote Just For You 💌
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-xl mx-auto">
          Whenever your heart needs a reminder of how cherished you are, pick the envelope meant for your moment.
        </p>
      </div>

      {/* Envelopes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {LOVE_LETTERS.map((letter) => {
          const isRead = openedIds.includes(letter.id);

          return (
            <div
              key={letter.id}
              onClick={() => handleOpenLetter(letter)}
              className={`group relative rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-white/70 bg-gradient-to-br ${letter.envelopeBg} cursor-pointer flex flex-col justify-between min-h-[220px] overflow-hidden`}
            >
              {/* Envelope Flap graphic styling */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/20 -skew-y-3 origin-top-left transition-transform group-hover:scale-y-110" />

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-2xl">{letter.icon}</span>
                {isRead ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    <Check className="w-3 h-3" /> Opened with Love
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#FF6B8B] bg-white/80 px-2.5 py-0.5 rounded-full animate-pulse">
                    Sealed for Dhruvi ✨
                  </span>
                )}
              </div>

              {/* Envelope Label */}
              <div className="relative z-10 text-center my-auto">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-poppins font-bold mb-1">
                  Envelope #{letter.id}
                </p>
                <h3 className="font-bubble text-xl sm:text-2xl text-[#3b1d28] group-hover:text-[#FF6B8B] transition-colors leading-tight">
                  {letter.title}
                </h3>
              </div>

              {/* Wax Seal at the bottom center */}
              <div className="relative z-10 flex justify-center mt-4">
                <div 
                  className="w-12 h-12 rounded-full shadow-md flex items-center justify-center text-white border-2 border-white/80 group-hover:scale-110 group-hover:rotate-12 transition-transform"
                  style={{ backgroundColor: letter.sealColor }}
                >
                  <Heart className="w-6 h-6 fill-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Unfolded Letter Modal */}
      {activeLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-xl w-full bg-[#FFF8ED] rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-[#FF9EBC] transform animate-scale-up max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveLetter(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-gray-700 hover:bg-pink-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Letterhead */}
            <div className="border-b-2 border-dashed border-[#FF9EBC]/50 pb-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#FF6B8B] uppercase tracking-wider font-poppins">
                  Personal Digital Dispatch
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-playfair text-[#3b1d28]">
                  {activeLetter.title}
                </h3>
              </div>
              <div className="w-12 h-14 border-2 border-[#FF9EBC] rounded-md bg-pink-50 p-1 flex flex-col items-center justify-center text-[10px] text-[#FF6B8B] font-bold rotate-6 shadow-sm">
                <span>🎀</span>
                <span>AIRMAIL</span>
              </div>
            </div>

            {/* Letter Body in Beautiful Handwritten Font */}
            <div className="space-y-4 font-handwriting text-2xl sm:text-3xl text-gray-800 leading-relaxed">
              {activeLetter.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signoff */}
            <div className="mt-8 pt-4 border-t border-[#FF9EBC]/30 text-right">
              <p className="font-dancing text-2xl sm:text-3xl text-[#FF6B8B] font-bold">
                {activeLetter.signoff}
              </p>
            </div>

            {/* Close & Cherish Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  soundFX.playKiss();
                  setActiveLetter(null);
                }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Close & Keep in Heart 💌
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

