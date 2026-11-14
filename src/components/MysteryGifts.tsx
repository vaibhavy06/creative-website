import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles, X, RefreshCw } from 'lucide-react';
import { MYSTERY_GIFTS, COMPLIMENT_POOL } from '../data/wonderlandData';
import { GiftItem } from '../types';
import { soundFX } from '../utils/audio';

interface MysteryGiftsProps {
  onGiftOpened: (id: number) => void;
}

export const MysteryGifts: React.FC<MysteryGiftsProps> = ({ onGiftOpened }) => {
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);
  const [activeGift, setActiveGift] = useState<GiftItem | null>(null);
  const [currentCompliment, setCurrentCompliment] = useState<string>(COMPLIMENT_POOL[0]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wonderland_opened_gifts');
      if (saved) {
        setOpenedGifts(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenGift = (gift: GiftItem) => {
    soundFX.playPop();
    soundFX.playFanfare();

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF9EBC', '#FFD6E7', '#E8DDFE']
    });

    setActiveGift(gift);

    if (!openedGifts.includes(gift.id)) {
      const next = [...openedGifts, gift.id];
      setOpenedGifts(next);
      try {
        localStorage.setItem('wonderland_opened_gifts', JSON.stringify(next));
      } catch {
        // ignore
      }
      onGiftOpened(gift.id);
    }
  };

  const handleNextCompliment = () => {
    soundFX.playSparkle();
    const nextIdx = Math.floor(Math.random() * COMPLIMENT_POOL.length);
    setCurrentCompliment(COMPLIMENT_POOL[nextIdx]);
  };

  return (
    <section id="gifts" className="py-16 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <Gift className="w-3.5 h-3.5" />
          <span>SURPRISE UNBOXING ROOM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          The Mystery Gift Room 🎁
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-xl mx-auto">
          Six magical presents wrapped with pastel ribbons. Click each one to unwrap what is waiting inside!
        </p>
      </div>

      {/* Gifts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MYSTERY_GIFTS.map((gift) => {
          const isOpened = openedGifts.includes(gift.id);

          return (
            <div
              key={gift.id}
              onClick={() => handleOpenGift(gift)}
              className="group relative rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 bg-white dark:bg-[#2b1e38] border-2 border-pink-100 dark:border-pink-900/50 cursor-pointer flex flex-col items-center justify-center text-center min-h-[260px] overflow-hidden"
            >
              {/* Ribbon cross pattern behind box */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-8 h-full bg-[#FF9EBC]" />
                <div className="h-8 w-full bg-[#FF9EBC] absolute" />
              </div>

              {/* Gift Icon Box */}
              <div className={`relative w-24 h-24 rounded-2xl ${gift.boxColor} border-2 flex items-center justify-center shadow-md mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                <span className="text-5xl animate-bounce-gentle select-none">
                  {gift.icon}
                </span>

                {/* Ribbon Bow on top */}
                <div className="absolute -top-3 text-2xl select-none">
                  🎀
                </div>
              </div>

              {/* Title & Badge */}
              <h3 className="font-poppins font-bold text-lg text-gray-800 dark:text-pink-100 mb-2">
                {gift.title}
              </h3>

              {isOpened ? (
                <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-100 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Unlocked Surprise
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#FF6B8B] animate-pulse flex items-center gap-1">
                  Click to Unwrap 🎁
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Gift Content Modal */}
      {activeGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#FF9EBC] text-center transform animate-scale-up">
            
            {/* Close button */}
            <button
              onClick={() => setActiveGift(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-gray-700 dark:text-pink-100 hover:bg-pink-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Render Specific Gift Type Animation */}
            {activeGift.type === 'hug' && (
              <div className="py-2">
                <div className="text-7xl mb-4 animate-pulse">🧸</div>
                <h3 className="text-2xl font-bold font-playfair text-[#FF6B8B] mb-3">
                  {activeGift.unlockedTitle}
                </h3>
                <p className="text-gray-800 dark:text-pink-100 font-quicksand font-medium text-lg leading-relaxed mb-6">
                  "{activeGift.message}"
                </p>
                <div className="inline-block px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-dancing text-xl font-bold">
                  *wraps Dhruvi in infinite warmth*
                </div>
              </div>
            )}

            {activeGift.type === 'kisses' && (
              <div className="py-2">
                <div className="text-7xl mb-4 animate-bounce-gentle">💋</div>
                <h3 className="text-2xl font-bold font-playfair text-[#FF6B8B] mb-3">
                  {activeGift.unlockedTitle}
                </h3>
                <p className="text-gray-800 dark:text-pink-100 font-quicksand font-bold text-xl leading-relaxed mb-6">
                  {activeGift.message}
                </p>
                <div className="flex justify-center gap-2 text-2xl animate-pulse">
                  <span>😚</span><span>😘</span><span>💖</span><span>😽</span>
                </div>
              </div>
            )}

            {activeGift.type === 'chocolates' && (
              <div className="py-2">
                <div className="flex justify-center gap-3 text-5xl mb-4 animate-wiggle">
                  <span>🍫</span><span>🧁</span><span>🍓</span><span>🍬</span>
                </div>
                <h3 className="text-2xl font-bold font-playfair text-[#FF6B8B] mb-3">
                  {activeGift.unlockedTitle}
                </h3>
                <p className="text-gray-800 dark:text-pink-100 font-quicksand font-medium text-base sm:text-lg leading-relaxed mb-6">
                  {activeGift.message}
                </p>
                <div className="text-xs text-pink-600 font-poppins font-bold">
                  Calories: 0 kcal | Happiness: Infinite %
                </div>
              </div>
            )}

            {activeGift.type === 'compliments' && (
              <div className="py-2">
                <div className="text-6xl mb-4 animate-spin" style={{ animationDuration: '6s' }}>
                  💬✨
                </div>
                <h3 className="text-2xl font-bold font-playfair text-[#FF6B8B] mb-3">
                  {activeGift.unlockedTitle}
                </h3>
                <div className="bg-pink-50 dark:bg-pink-950/40 p-4 rounded-2xl border border-pink-200 mb-6">
                  <p className="font-handwriting text-2xl sm:text-3xl text-gray-800 dark:text-pink-100 font-bold">
                    "{currentCompliment}"
                  </p>
                </div>
                <button
                  onClick={handleNextCompliment}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Give Me Another Compliment! ✨</span>
                </button>
              </div>
            )}

            {activeGift.type === 'mirror' && (
              <div className="py-2">
                <div className="text-7xl mb-4 animate-pulse">🪞✨</div>
                <h3 className="text-2xl font-bold font-playfair text-[#FF6B8B] mb-3">
                  THE MAGIC ENCHANTED MIRROR
                </h3>
                <p className="font-serif italic text-base text-gray-600 dark:text-pink-300 mb-4">
                  "Mirror, mirror on the screen, who's the cutest girl I've ever seen?"
                </p>
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-purple-950/60 dark:to-pink-950/60 p-5 rounded-2xl border-2 border-pink-300 mb-6">
                  <p className="font-bubble text-2xl sm:text-3xl text-[#FF6B8B]">
                    DHruvi. Obviously. No competition. 👑
                  </p>
                </div>
              </div>
            )}

            {activeGift.type === 'secret' && (
              <div className="py-2">
                <div className="text-7xl mb-4 animate-bounce-gentle">🌌💖</div>
                <h3 className="text-2xl font-bold font-playfair text-[#FF6B8B] mb-3">
                  THE MULTIVERSE PROMISE
                </h3>
                <p className="font-handwriting text-2xl sm:text-3xl text-gray-800 dark:text-pink-100 font-bold leading-relaxed mb-6">
                  "{activeGift.message}"
                </p>
                <div className="text-xs text-[#FF6B8B] font-poppins font-bold tracking-widest uppercase">
                  Forever and always, across all timelines.
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-pink-100 dark:border-pink-900/40">
              <button
                onClick={() => setActiveGift(null)}
                className="px-6 py-2 rounded-full bg-gray-100 dark:bg-purple-900/40 text-gray-700 dark:text-pink-200 font-poppins text-xs font-bold hover:bg-gray-200 transition-colors"
              >
                Put back in my heart box 💖
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

