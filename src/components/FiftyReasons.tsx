import React, { useState } from 'react';
import { Sparkles, Heart, Eye, CheckCircle2 } from 'lucide-react';
import { FIFTY_REASONS } from '../data/wonderlandData';
import { soundFX } from '../utils/audio';

interface FiftyReasonsProps {
  onSecretFound: (id: number) => void;
  onReasonRevealed: (id: number) => void;
}

export const FiftyReasons: React.FC<FiftyReasonsProps> = ({ onSecretFound, onReasonRevealed }) => {
  const [revealedIds, setRevealedIds] = useState<number[]>([1, 2, 3]); // first 3 peeked

  const handleToggleCard = (id: number) => {
    soundFX.playPop();
    if (!revealedIds.includes(id)) {
      setRevealedIds(prev => [...prev, id]);
      onReasonRevealed(id);
    }
  };

  const handleRevealAll = () => {
    soundFX.playSparkle();
    const allIds = FIFTY_REASONS.map(r => r.id);
    setRevealedIds(allIds);
  };

  return (
    <section id="reasons" className="py-16 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <Heart className="w-3.5 h-3.5 fill-[#FF6B8B]" />
          <span>A LOVE CATALOGUE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          50 Tiny Reasons Why I Adore You 💖
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-xl mx-auto mb-6">
          Every little reason, every silly habit, and every single moment that makes you my favourite person in the entire universe.
        </p>

        {/* Progress Tracker & Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#2b1e38] border border-pink-200 shadow-sm text-sm font-bold text-[#FF6B8B]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Discovered: {revealedIds.length} / 50</span>
          </div>

          <button
            onClick={handleRevealAll}
            className="px-5 py-2 rounded-full bg-pink-100 dark:bg-purple-900/50 hover:bg-pink-200 text-[#FF6B8B] text-xs font-bold font-poppins transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Surprise Me & Reveal All ✨</span>
          </button>
        </div>
      </div>

      {/* Reasons Grid (50 Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {FIFTY_REASONS.map((item) => {
          const isRevealed = revealedIds.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => handleToggleCard(item.id)}
              className={`relative rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border flex flex-col justify-between min-h-[140px] sm:min-h-[160px] select-none ${
                isRevealed
                  ? 'bg-white dark:bg-[#2b1e38] border-pink-200 dark:border-pink-800/40 text-gray-800 dark:text-pink-100'
                  : 'bg-gradient-to-br from-pink-100 to-rose-100 dark:from-purple-950/70 dark:to-pink-950/70 border-pink-200/80 text-center items-center justify-center'
              }`}
            >
              {/* Card Number Badge */}
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-[11px] font-bold font-poppins text-[#FF6B8B]">
                  #{item.id}
                </span>
                <span className="text-xl select-none">{item.emoji}</span>
              </div>

              {isRevealed ? (
                <div className="my-auto py-1">
                  <p className="font-handwriting text-lg sm:text-xl font-bold text-gray-800 dark:text-pink-100 leading-snug">
                    {item.reason}
                  </p>
                </div>
              ) : (
                <div className="my-auto text-center flex flex-col items-center py-2">
                  <Sparkles className="w-5 h-5 text-[#FF6B8B] animate-spin mb-1" style={{ animationDuration: '6s' }} />
                  <span className="text-xs font-bold text-[#FF6B8B] font-poppins">
                    Click to reveal 💕
                  </span>
                </div>
              )}

              {/* Hidden Secret Easter Egg #5: tucked near reason #25 */}
              {item.id === 25 && (
                <div className="absolute -bottom-1 -right-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSecretFound(5);
                    }}
                    title="A tiny mystery envelope tucked between reasons..."
                    className="text-xs hover:scale-125 transition-transform cursor-pointer opacity-70 hover:opacity-100"
                  >
                    💌
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

