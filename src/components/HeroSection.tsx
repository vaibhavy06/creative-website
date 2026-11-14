import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Crown, Sparkles, Heart, Gift, MessageCircle } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface HeroSectionProps {
  onSecretFound: (id: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSecretFound }) => {
  const [princessModal, setPrincessModal] = useState(false);
  const [loveLevel, setLoveLevel] = useState(100);

  const handlePrincessClick = () => {
    soundFX.playFanfare();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF9EBC', '#FFD6E7', '#FDE047', '#E8DDFE']
    });
    setPrincessModal(true);
  };

  const handleLoveMeterClick = () => {
    soundFX.playPop();
    setLoveLevel(prev => prev * 10 + 99);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 px-4 overflow-hidden text-center">
      
      {/* Decorative floating stickers and illustrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-6 left-6 text-3xl sm:text-4xl animate-bounce-gentle">🎈</div>
        <div className="absolute top-12 right-10 text-3xl sm:text-4xl animate-float-slow">🎈</div>
        <div className="absolute bottom-10 left-12 text-3xl animate-float-reverse">🍭</div>
        <div className="absolute bottom-16 right-14 text-3xl animate-bounce-gentle">🌸</div>
        <div className="absolute top-1/2 left-2 text-2xl animate-spin" style={{ animationDuration: '10s' }}>⭐</div>
        <div className="absolute top-1/3 right-4 text-2xl animate-pulse">✨</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Animated Teddy & Kittens Center Stage */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
          <div className="text-5xl sm:text-7xl animate-float-slow drop-shadow-md">
            🧸
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-[#FFD6E7] to-white p-2 shadow-lg border-3 border-[#FF9EBC] flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
            <span className="text-5xl sm:text-6xl animate-bounce-gentle">🐱</span>
          </div>
          <div className="text-5xl sm:text-7xl animate-float-reverse drop-shadow-md">
            🎀
          </div>
        </div>

        {/* Officially Cutest Princess Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 dark:bg-[#2b1e38]/90 border-2 border-[#FF9EBC] shadow-md mb-6 hover:scale-105 transition-transform">
          <Crown className="w-5 h-5 text-amber-500 fill-amber-400 animate-wiggle" />
          <span className="font-poppins font-bold text-xs sm:text-sm text-[#FF6B8B] tracking-wide">
            Officially the cutest princess in the universe
          </span>

          {/* Hidden Secret Easter Egg #3: Clickable Teddy near badge */}
          <button
            onClick={() => onSecretFound(3)}
            title="A curious little teddy..."
            className="text-base cursor-pointer hover:scale-125 transition-transform ml-1 select-none opacity-80 hover:opacity-100"
          >
            🧸
          </button>
        </div>

        {/* Main Hero Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-6 leading-tight max-w-3xl">
          HAPPY CHILDREN'S DAY, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] bg-clip-text text-transparent underline decoration-[#FFD6E7] decoration-wavy">
            MY LITTLE BABYYYY!!
          </span> 🧸
        </h1>

        {/* Supporting Message */}
        <p className="text-base sm:text-xl text-gray-700 dark:text-pink-200/90 font-quicksand font-medium leading-relaxed max-w-2xl mb-8 px-2">
          "To the little girl who deserves unlimited chocolates, endless cuddles, the softest hugs, and all the happiness in this universe."
        </p>

        {/* Interactive Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          
          {/* YES I'M THE PRINCESS button */}
          <button
            onClick={handlePrincessClick}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Crown className="w-5 h-5 fill-white" />
            <span>YES, I'M THE PRINCESS 👑</span>
          </button>

          {/* How Much Do You Love Me Button */}
          <button
            onClick={handleLoveMeterClick}
            className="px-6 py-3.5 rounded-full bg-white dark:bg-[#2b1e38] text-[#FF6B8B] border-2 border-[#FF9EBC] font-poppins font-semibold text-sm sm:text-base shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-[#FF6B8B]" />
            <span>How much do you love me?</span>
            <span className="text-xs bg-pink-100 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-bold">
              {loveLevel}% ❤️
            </span>
          </button>
        </div>

        {/* Concept Quote Banner */}
        <div className="glass-pink dark:glass-night px-6 py-3 rounded-2xl max-w-xl mx-auto border border-[#FF9EBC]/40 shadow-sm">
          <p className="font-dancing text-xl sm:text-2xl text-[#FF6B8B] font-bold">
            "She's growing up, but she'll always be my little princess."
          </p>
        </div>
      </div>

      {/* Princess Confirmation Modal */}
      {princessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#FF9EBC] text-center transform animate-scale-up">
            <div className="text-6xl mb-3 animate-wiggle">👑</div>
            <h3 className="text-2xl font-bold font-playfair text-[#FF6B8B] mb-3">
              CONFIRMED BY ROYAL DECREE!
            </h3>
            <p className="text-gray-800 dark:text-pink-100 font-quicksand font-bold text-lg sm:text-xl mb-6">
              "Obviouslyyyyy! Who else could it be? 😭💗"
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-pink-300 font-poppins mb-6">
              You are hereby entitled to: unlimited forehead kisses, zero bedtime rules, all chocolate desserts, and constant pampering.
            </p>
            <button
              onClick={() => setPrincessModal(false)}
              className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-bold font-poppins text-base shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              As it should be! 💅🎀
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

