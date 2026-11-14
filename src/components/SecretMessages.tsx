import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { KeyRound, Sparkles, Trophy, Lock, Unlock, X } from 'lucide-react';
import { HIDDEN_SECRETS } from '../data/wonderlandData';
import { SecretMessageItem } from '../types';
import { soundFX } from '../utils/audio';

interface SecretMessagesProps {
  foundIds: number[];
  activeSecret: SecretMessageItem | null;
  onCloseSecret: () => void;
}

export const SecretMessages: React.FC<SecretMessagesProps> = ({
  foundIds,
  activeSecret,
  onCloseSecret,
}) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [showTrophyModal, setShowTrophyModal] = useState(false);

  useEffect(() => {
    if (foundIds.length === 10) {
      soundFX.playFanfare();
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#FFD700', '#FF6B8B', '#FF9EBC', '#E8DDFE']
      });
      setShowTrophyModal(true);
    }
  }, [foundIds.length]);

  return (
    <>
      {/* Floating Secret Easter Egg Tracker Button in bottom left */}
      <button
        onClick={() => {
          soundFX.playSparkle();
          setIsOpenDrawer(true);
        }}
        className="fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-full bg-white/90 dark:bg-[#2b1e38]/90 text-gray-800 dark:text-pink-100 border-2 border-pink-300 shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-xs font-bold font-poppins cursor-pointer backdrop-blur-md"
      >
        <KeyRound className="w-4 h-4 text-[#FF6B8B]" />
        <span>Secrets:</span>
        <span className="bg-pink-100 dark:bg-pink-900/60 px-2 py-0.5 rounded-full text-[#FF6B8B]">
          {foundIds.length} / 10 🗝️
        </span>
      </button>

      {/* Secret Message Popup when one is newly clicked */}
      {activeSecret && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-[#2b1e38] dark:to-[#1c1427] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#FF9EBC] text-center transform animate-scale-up">
            
            <button
              onClick={onCloseSecret}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-gray-700 dark:text-pink-100 hover:bg-pink-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-6xl mb-3 animate-wiggle">
              {activeSecret.icon}
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-[#FF6B8B]/10 text-[#FF6B8B] text-xs font-bold mb-3 font-poppins">
              SECRET #{activeSecret.id} UNLOCKED ✨
            </div>

            <h3 className="text-xl font-bold font-playfair text-[#3b1d28] dark:text-pink-100 mb-4">
              A Secret Whisper For Dhruvi
            </h3>

            <div className="bg-white/80 dark:bg-[#2b1e38]/80 p-5 rounded-2xl border border-pink-200 mb-6 shadow-sm">
              <p className="font-handwriting text-2xl sm:text-3xl text-[#FF6B8B] font-bold leading-relaxed">
                "{activeSecret.message}"
              </p>
            </div>

            <button
              onClick={onCloseSecret}
              className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all"
            >
              Saved to My Heart 💖
            </button>
          </div>
        </div>
      )}

      {/* Secret Drawer (List of all 10 secrets & hints) */}
      {isOpenDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-6 shadow-2xl border-4 border-[#FF9EBC] max-h-[85vh] flex flex-col transform animate-scale-up">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-pink-200 mb-4">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-[#FF6B8B]" />
                <h3 className="font-playfair text-xl font-bold text-[#3b1d28] dark:text-pink-100">
                  Secret Messages Journal
                </h3>
              </div>
              <button
                onClick={() => setIsOpenDrawer(false)}
                className="p-1.5 rounded-full bg-pink-100 text-gray-700 hover:bg-pink-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="overflow-y-auto space-y-3 pr-1">
              {HIDDEN_SECRETS.map((item) => {
                const isFound = foundIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isFound
                        ? 'bg-pink-50/80 dark:bg-pink-950/40 border-pink-300'
                        : 'bg-gray-50 dark:bg-purple-950/20 border-gray-200 dark:border-purple-900/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#FF6B8B] flex items-center gap-1.5">
                        {isFound ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5 text-gray-400" />}
                        Secret #{item.id}
                      </span>
                      <span className="text-base">{item.icon}</span>
                    </div>

                    {isFound ? (
                      <p className="font-handwriting text-xl text-gray-800 dark:text-pink-100 font-bold">
                        "{item.message}"
                      </p>
                    ) : (
                      <p className="text-xs text-gray-600 dark:text-pink-300 italic font-poppins">
                        Hint: {item.hint}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="pt-4 mt-3 border-t border-pink-100 text-center">
              <p className="text-xs font-poppins text-gray-500 dark:text-pink-300">
                Found {foundIds.length} of 10 secrets scattered across Wonderland 🌸
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grand 10/10 Achievement Trophy Modal */}
      {showTrophyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-md w-full bg-gradient-to-b from-amber-50 to-pink-50 dark:from-[#2b1e38] dark:to-[#1c1427] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-300 text-center transform animate-scale-up">
            <div className="text-7xl mb-3 animate-bounce-gentle">🏆✨</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-playfair text-[#FF6B8B] mb-2 leading-tight">
              CONGRATULATIONS DHRUVI!
            </h3>
            <p className="font-poppins font-bold text-amber-600 text-sm mb-4">
              YOU FOUND ALL 10 SECRET MESSAGES!
            </p>
            <p className="text-gray-700 dark:text-pink-100 font-quicksand font-medium text-base mb-6 leading-relaxed">
              You are the most observant, curious, and infinitely loved little princess in every timeline. You’ve officially mastered your Little Wonderland!
            </p>
            <button
              onClick={() => setShowTrophyModal(false)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-[#FF6B8B] text-white font-poppins font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Claim Royal Title 👑💖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

