import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Smile } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface HugStationProps {
  onSecretFound: (id: number) => void;
}

export const HugStation: React.FC<HugStationProps> = ({ onSecretFound }) => {
  const [teddyState, setTeddyState] = useState<'idle' | 'hug' | 'kiss' | 'pat'>('idle');
  const [teddyMessage, setTeddyMessage] = useState<string>("Hello little princess Dhruvi! How can your Teddy pamper you right now?");

  const handleAction = (action: 'hug' | 'kiss' | 'pat') => {
    setTeddyState(action);

    if (action === 'hug') {
      soundFX.playHeartThump();
      setTeddyMessage("Wrapping you in the warmest hug ever! Squeezing all your worries away.");
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF9EBC', '#FFD6E7', '#FFE1CF']
      });
    } else if (action === 'kiss') {
      soundFX.playKiss();
      setTeddyMessage("Mwahhhh! A thousand kisses for my baby! Forehead kisses, nose boops, cheek kisses!");
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B8B', '#FF9EBC', '#F43F5E']
      });
    } else {
      soundFX.playSparkle();
      setTeddyMessage("Who's the cutest little princess? YOU ARE! Gently patting your soft hair.");
    }
  };

  return (
    <section id="hugstation" className="py-16 px-4 max-w-5xl mx-auto text-center">
      
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <span>🧸</span>
          <span>ROYAL CUDDLE HEADQUARTERS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          The Teddy Bear Hug Station 🧸
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-xl mx-auto">
          Whenever you need physical affection across the screen, Teddy is standing by on 24/7 duty.
        </p>

        {/* Hidden Secret Easter Egg #6: Tiny paw print trail */}
        <div className="mt-2">
          <button
            onClick={() => onSecretFound(6)}
            title="A tiny paw trail leading around the teddy..."
            className="text-xs text-pink-400 hover:text-pink-600 transition-transform hover:scale-110 cursor-pointer opacity-70 hover:opacity-100"
          >
            🐾🐾🐾 <span className="font-dancing text-xs">secret paw trail...</span>
          </button>
        </div>
      </div>

      {/* Main Teddy Stage */}
      <div className="bg-white/80 dark:bg-[#2b1e38]/80 rounded-3xl p-8 sm:p-12 shadow-xl border-4 border-pink-200 max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Animated Teddy Graphic */}
        <div className="relative mb-6">
          <div className={`text-8xl sm:text-9xl transition-transform duration-300 select-none ${
            teddyState === 'hug' ? 'animate-wiggle scale-110' :
            teddyState === 'kiss' ? 'animate-bounce scale-110' :
            teddyState === 'pat' ? 'animate-pulse scale-105' : 'animate-bounce-gentle'
          }`}>
            🧸
          </div>

          {/* Floating emote indicator */}
          <div className="absolute -top-3 -right-3 text-4xl animate-bounce">
            {teddyState === 'hug' && '🫂💖'}
            {teddyState === 'kiss' && '💋✨'}
            {teddyState === 'pat' && '🌸👑'}
            {teddyState === 'idle' && '🎀'}
          </div>
        </div>

        {/* Dynamic Teddy Speech Bubble */}
        <div className="bg-pink-50 dark:bg-pink-950/40 border-2 border-pink-200 rounded-2xl p-5 mb-8 w-full shadow-sm">
          <p className="font-handwriting text-2xl sm:text-3xl text-gray-800 dark:text-pink-100 font-bold leading-relaxed">
            "{teddyMessage}"
          </p>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleAction('hug')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Give me a hug 🤗</span>
          </button>

          <button
            onClick={() => handleAction('kiss')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Give me a kiss 💋</span>
          </button>

          <button
            onClick={() => handleAction('pat')}
            className="px-6 py-3 rounded-full bg-white dark:bg-[#1c1427] text-[#FF6B8B] border-2 border-[#FF9EBC] font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Pat my head 👑</span>
          </button>
        </div>
      </div>
    </section>
  );
};

