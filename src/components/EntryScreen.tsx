import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface EntryScreenProps {
  onEnter: () => void;
}

export const EntryScreen: React.FC<EntryScreenProps> = ({ onEnter }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  const handleOpenSurprise = () => {
    setIsOpening(true);
    setIsWaving(true);
    soundFX.playPop();
    soundFX.playSparkle();

    // Trigger sweet heart explosion confetti
    const scalar = 2.5;
    const heart = confetti.shapeFromText({ text: '💖', scalar });
    const kitten = confetti.shapeFromText({ text: '🐱', scalar });
    const sparkle = confetti.shapeFromText({ text: '✨', scalar });

    confetti({
      shapes: [heart, kitten, sparkle],
      particleCount: 75,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FFD6E7', '#FF9EBC', '#E8DDFE', '#FFE1CF']
    });

    setTimeout(() => {
      soundFX.playFanfare();
      onEnter();
    }, 1200);
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${
      isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
    } bg-gradient-to-b from-[#FFD6E7] via-[#FFF8ED] to-[#E8DDFE]`}>
      
      {/* Floating background clouds, stars and hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-8 text-4xl animate-float-slow opacity-75">☁️</div>
        <div className="absolute top-28 right-12 text-5xl animate-float-reverse opacity-75">☁️</div>
        <div className="absolute top-1/4 left-1/5 text-2xl animate-sparkle">✨</div>
        <div className="absolute bottom-24 left-14 text-3xl animate-bounce-gentle">🌸</div>
        <div className="absolute bottom-32 right-16 text-3xl animate-float-slow">🎀</div>
        <div className="absolute top-16 left-1/2 text-2xl animate-pulse-soft">💖</div>
        <div className="absolute bottom-12 left-1/3 text-4xl animate-float-reverse opacity-80">☁️</div>
        <div className="absolute top-2/3 right-1/4 text-2xl animate-sparkle">⭐</div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Animated Cute Kitten Holding Pink Heart */}
        <div className="relative mb-6">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white/70 backdrop-blur-md p-4 shadow-xl border-4 border-[#FF9EBC]/50 flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Soft pink glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD6E7] to-transparent opacity-60 rounded-full" />
            
            {/* Kitten Illustration Container */}
            <div className="relative flex flex-col items-center">
              <span className={`text-7xl sm:text-8xl select-none transition-transform duration-300 ${
                isWaving ? 'animate-wiggle scale-110' : 'animate-bounce-gentle'
              }`}>
                🐱
              </span>
              <div className="absolute -bottom-2 -right-1 text-3xl sm:text-4xl animate-pulse text-[#FF6B8B]">
                💖
              </div>
            </div>
          </div>
          
          {/* Cute ribbon decoration */}
          <div className="absolute -top-3 -right-2 text-3xl animate-bounce-gentle">
            🎀
          </div>
          <div className="absolute -bottom-2 -left-2 text-2xl animate-spin" style={{ animationDuration: '8s' }}>
            ✨
          </div>
        </div>

        {/* Headings */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 border border-[#FF9EBC]/40 shadow-sm mb-3">
          <span className="text-xs sm:text-sm font-semibold text-[#FF6B8B] tracking-wide flex items-center gap-1.5 font-poppins">
            <Sparkles className="w-4 h-4 animate-spin text-[#FF6B8B]" style={{ animationDuration: '4s' }} />
            SPECIAL CHILDREN'S DAY EDITION
            <Sparkles className="w-4 h-4 animate-spin text-[#FF6B8B]" style={{ animationDuration: '4s' }} />
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#3b1d28] font-playfair tracking-tight mb-4 drop-shadow-sm">
          HEYYYY DHURVIIIII!! <span className="inline-block animate-wiggle">🎀</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 font-quicksand font-medium leading-relaxed max-w-md mb-2">
          Guess what, little princess? Someone has prepared an entire magical universe just for you!
        </p>

        <p className="text-sm sm:text-base text-[#FF6B8B] font-dancing font-bold text-xl mb-8">
          Your little world is waiting... ✨
        </p>

        {/* Animated Open Button */}
        <button
          onClick={handleOpenSurprise}
          disabled={isOpening}
          className="group relative px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-lg sm:text-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 border-2 border-white/60 cursor-pointer overflow-hidden"
        >
          {/* Button shine reflection */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
          
          <Heart className="w-6 h-6 fill-white text-white animate-pulse" />
          <span>{isOpening ? 'OPENING WONDERLAND...' : 'OPEN MY SURPRISE 💗'}</span>
          <span className="text-xl group-hover:rotate-12 transition-transform">🐾</span>
        </button>

        {/* Sweet footer note */}
        <p className="text-xs text-gray-500 mt-6 font-poppins flex items-center gap-1">
          Made with infinite love for my baby 🌸
        </p>
      </div>
    </div>
  );
};

