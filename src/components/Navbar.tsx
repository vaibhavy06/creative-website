import React, { useState } from 'react';
import { Volume2, VolumeX, Moon, Sun, Music, Heart, Sparkles, Award } from 'lucide-react';
import { soundFX, dreamMusic } from '../utils/audio';
import { LOVE_BUTTON_MESSAGES } from '../data/wonderlandData';

interface NavbarProps {
  isNightMode: boolean;
  onToggleNightMode: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  progressPercent: number;
  onSecretFound: (id: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isNightMode,
  onToggleNightMode,
  isMuted,
  onToggleMute,
  isPlayingMusic,
  onToggleMusic,
  progressPercent,
  onSecretFound,
}) => {
  const [loveToast, setLoveToast] = useState<string | null>(null);

  const handleNeedLove = () => {
    soundFX.playSparkle();
    const randomMsg = LOVE_BUTTON_MESSAGES[Math.floor(Math.random() * LOVE_BUTTON_MESSAGES.length)];
    setLoveToast(randomMsg);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-3 py-2.5 transition-colors duration-500">
        <div className={`max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-2.5 shadow-md flex items-center justify-between backdrop-blur-md border ${
          isNightMode 
            ? 'bg-[#2b1e38]/85 border-pink-500/20 text-pink-100 shadow-purple-950/40' 
            : 'bg-white/80 border-[#FF9EBC]/30 text-gray-800 shadow-pink-100'
        }`}>
          
          {/* Logo with hidden Easter Egg #4 */}
          <div className="flex items-center gap-2">
            <a href="#hero" className="flex items-center gap-1.5 font-bubble text-lg sm:text-xl text-[#FF6B8B] hover:scale-105 transition-transform">
              <span>🎀</span>
              <span className="hidden xs:inline">Dhruvi's Wonderland</span>
              <span className="xs:hidden">Wonderland</span>
            </a>

            {/* Secret Easter Egg #4: Hidden Daisy in header */}
            <button
              onClick={() => onSecretFound(4)}
              title="A delicate little secret blossom..."
              className="text-base sm:text-lg animate-spin hover:scale-125 transition-transform cursor-pointer ml-1 opacity-75 hover:opacity-100"
              style={{ animationDuration: '12s' }}
            >
              🌸
            </button>
          </div>

          {/* Center: Wonderland Progress pill */}
          <div className="hidden md:flex items-center gap-2 bg-pink-50/80 dark:bg-pink-950/40 px-3 py-1 rounded-full border border-pink-200/60 text-xs font-semibold text-[#FF6B8B]">
            <Award className="w-3.5 h-3.5" />
            <span>Wonderland Explored:</span>
            <div className="w-20 bg-pink-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span>{progressPercent}%</span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Love Pill */}
            <button
              onClick={handleNeedLove}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white text-xs font-bold font-poppins shadow-sm hover:shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">Need a little love? 💗</span>
              <span className="sm:hidden">Love 💗</span>
            </button>

            {/* Background Music Toggle */}
            <button
              onClick={() => {
                soundFX.playBoop();
                onToggleMusic();
              }}
              title={isPlayingMusic ? "Pause background melody" : "Play dreamy background melody"}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isPlayingMusic 
                  ? 'bg-rose-500 text-white shadow-md animate-pulse' 
                  : 'bg-pink-100 dark:bg-purple-900/50 text-[#FF6B8B] hover:bg-pink-200'
              }`}
            >
              <Music className="w-4 h-4" />
            </button>

            {/* Sound FX Mute Toggle */}
            <button
              onClick={() => {
                soundFX.playBoop();
                onToggleMute();
              }}
              title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
              className="p-2 rounded-full bg-pink-100 dark:bg-purple-900/50 text-[#FF6B8B] hover:bg-pink-200 transition-all cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Secret Night Mode Toggle */}
            <button
              onClick={() => {
                soundFX.playSparkle();
                onToggleNightMode();
              }}
              title={isNightMode ? "Switch to Pastel Day" : "Switch to Dreamy Starry Night"}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isNightMode 
                  ? 'bg-amber-300 text-purple-950 shadow-md' 
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {isNightMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Love Toast Modal */}
      {loveToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-sm w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-6 shadow-2xl border-4 border-[#FF9EBC] text-center transform animate-scale-up">
            <div className="text-5xl mb-3 animate-bounce-gentle">🧸</div>
            <h3 className="text-xl font-bold font-playfair text-[#FF6B8B] mb-2">
              For My Little Princess
            </h3>
            <p className="text-gray-700 dark:text-pink-100 font-quicksand font-medium text-base mb-6 leading-relaxed">
              "{loveToast}"
            </p>
            <button
              onClick={() => setLoveToast(null)}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-bold font-poppins text-sm shadow hover:scale-105 active:scale-95 transition-all"
            >
              Thank you, my favourite human! 😚
            </button>
          </div>
        </div>
      )}
    </>
  );
};

