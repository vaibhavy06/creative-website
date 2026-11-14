import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { LOVE_BUTTON_MESSAGES } from '../data/wonderlandData';

interface LoveButtonProps {
  onSecretFound: (id: number) => void;
  onLoveClicked: () => void;
}

export const LoveButton: React.FC<LoveButtonProps> = ({ onSecretFound, onLoveClicked }) => {
  const [clickCount, setClickCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState<string>("Press the heart to send instant love straight to your screen! ✨");
  const [isPressing, setIsPressing] = useState(false);

  const handleHeartPress = () => {
    setIsPressing(true);
    soundFX.playHeartThump();
    soundFX.playPop();

    // Release 30-50 floating hearts via canvas-confetti
    const scalar = 2.2;
    const heartShape = confetti.shapeFromText({ text: '💖', scalar });
    const kissShape = confetti.shapeFromText({ text: '💋', scalar });

    confetti({
      shapes: [heartShape, kissShape],
      particleCount: 40,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#FF6B8B', '#FF9EBC', '#FFD6E7', '#F43F5E']
    });

    const randomMsg = LOVE_BUTTON_MESSAGES[Math.floor(Math.random() * LOVE_BUTTON_MESSAGES.length)];
    setCurrentMessage(randomMsg);
    setClickCount(prev => prev + 1);
    onLoveClicked();

    setTimeout(() => {
      setIsPressing(false);
    }, 250);
  };

  return (
    <section id="lovebutton" className="py-20 px-4 max-w-4xl mx-auto text-center relative">
      
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/30 dark:bg-pink-700/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <Heart className="w-3.5 h-3.5 fill-[#FF6B8B]" />
          <span>INSTANT EMERGENCY LOVE DISPENSER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-3">
          The Interactive Love Button 💗
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-bold text-base sm:text-lg">
          PRESS THIS WHENEVER YOU NEED EXTRA LOVE.
        </p>
      </div>

      {/* Giant Animated Heart Container */}
      <div className="relative z-10 flex flex-col items-center justify-center my-8">
        
        <div className="relative flex items-center justify-center">
          
          {/* Pulsating back ring */}
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-pink-200/50 dark:bg-pink-900/30 animate-ping opacity-60 pointer-events-none" />

          {/* Giant Heart Button */}
          <button
            onClick={handleHeartPress}
            className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#FF6B8B] via-[#FF9EBC] to-[#FFD6E7] p-4 shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-200 cursor-pointer border-4 border-white select-none ${
              isPressing ? 'scale-90' : 'hover:scale-105 active:scale-95 animate-pulse-soft'
            }`}
          >
            <Heart className="w-24 h-24 sm:w-28 sm:h-28 fill-white text-white drop-shadow-md animate-bounce-gentle" />
            <span className="font-poppins font-black text-xs sm:text-sm tracking-wider uppercase mt-1 drop-shadow">
              TAP FOR LOVE
            </span>
          </button>

          {/* Hidden Secret Easter Egg #9: Secret sparkle right next to heart */}
          <button
            onClick={() => onSecretFound(9)}
            title="A secret sparkle shining beside the heart..."
            className="absolute -top-4 -right-4 p-2 text-2xl animate-spin hover:scale-125 transition-transform cursor-pointer opacity-80 hover:opacity-100"
            style={{ animationDuration: '6s' }}
          >
            ✨
          </button>
        </div>

        {/* Real-time Click Counter */}
        <div className="mt-6 flex items-center gap-2 bg-white/90 dark:bg-[#2b1e38] px-5 py-2 rounded-full border border-pink-200 shadow-sm">
          <Heart className="w-4 h-4 fill-[#FF6B8B] text-[#FF6B8B]" />
          <span className="font-poppins font-bold text-sm text-[#3b1d28] dark:text-pink-100">
            Total Love Delivered to Dhruvi:
          </span>
          <span className="font-poppins font-black text-sm text-[#FF6B8B]">
            {clickCount * 100 + (clickCount > 0 ? 520 : 0)} units 💕
          </span>
        </div>

        {/* Dynamic Affectionate Message Card */}
        <div className="mt-6 max-w-lg w-full bg-white/90 dark:bg-[#2b1e38] rounded-2xl p-5 border-2 border-pink-200 shadow-md transform transition-all duration-300">
          <p className="font-handwriting text-2xl sm:text-3xl text-[#FF6B8B] font-bold leading-relaxed">
            "{currentMessage}"
          </p>
        </div>
      </div>
    </section>
  );
};

