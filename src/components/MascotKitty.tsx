import React, { useState } from 'react';
import { MASCOT_QUOTES } from '../data/wonderlandData';
import { soundFX } from '../utils/audio';

export const MascotKitty: React.FC = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [isHappy, setIsHappy] = useState(false);

  const handleKittyClick = () => {
    soundFX.playPop();
    setIsHappy(true);
    const randomQuote = MASCOT_QUOTES[Math.floor(Math.random() * MASCOT_QUOTES.length)];
    setQuote(randomQuote);

    setTimeout(() => {
      setIsHappy(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-20 right-6 z-30 flex flex-col items-end">
      
      {/* Speech Bubble */}
      {quote && (
        <div className="relative mb-2 max-w-[220px] bg-white dark:bg-[#2b1e38] p-3 rounded-2xl shadow-xl border-2 border-pink-300 text-xs font-poppins text-gray-800 dark:text-pink-100 animate-scale-up">
          <p className="font-semibold">{quote}</p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white dark:bg-[#2b1e38] border-b-2 border-r-2 border-pink-300 rotate-45" />
        </div>
      )}

      {/* Mascot Kitty Button */}
      <button
        onClick={handleKittyClick}
        title="Tap Dhruvi's Kitty Mascot!"
        className={`w-12 h-12 rounded-full bg-white/90 dark:bg-[#2b1e38]/90 border-2 border-[#FF9EBC] shadow-lg flex items-center justify-center text-2xl select-none hover:scale-110 active:scale-95 transition-transform cursor-pointer ${
          isHappy ? 'animate-wiggle' : 'animate-bounce-gentle'
        }`}
      >
        🐱
      </button>
    </div>
  );
};

