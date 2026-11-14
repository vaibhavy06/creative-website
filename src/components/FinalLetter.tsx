import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Moon, Star, Gift, X } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface FinalLetterProps {
  onSecretFound?: (id: number) => void;
}

export const FinalLetter: React.FC<FinalLetterProps> = ({ onSecretFound }) => {
  const [isOpenLetter, setIsOpenLetter] = useState(false);
  const [showGrandFinale, setShowGrandFinale] = useState(false);
  const [showSecretBirthdayGift, setShowSecretBirthdayGift] = useState(false);

  const handleOpenLetter = () => {
    soundFX.playFanfare();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FF6B8B', '#FF9EBC', '#E8DDFE']
    });
    setIsOpenLetter(true);
  };

  const handleGrandFinale = () => {
    soundFX.playFanfare();
    soundFX.playSparkle();

    // Spectacular full-screen confetti fireworks
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      confetti({
        particleCount: 40,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#FF6B8B', '#FFD6E7', '#FDE047', '#E8DDFE', '#FFFFFF']
      });
    }, 250);

    setShowGrandFinale(true);
  };

  const handleOpenSecretGift = () => {
    soundFX.playKiss();
    soundFX.playSparkle();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#FF6B8B', '#FF9EBC', '#E8DDFE']
    });
    setShowSecretBirthdayGift(true);
  };

  return (
    <section id="finalletter" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-[#2b1e38]/70 to-[#1c1427] text-pink-100 rounded-t-[3rem]">
      
      {/* Dreamy Night Sky Background with crescent moon and glowing stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-12 text-6xl animate-pulse-soft">🌙</div>
        <div className="absolute top-24 left-10 text-3xl animate-sparkle">✨</div>
        <div className="absolute top-1/3 right-1/4 text-2xl animate-sparkle">⭐</div>
        <div className="absolute bottom-20 left-16 text-4xl animate-float-slow">☁️</div>
        <div className="absolute bottom-32 right-12 text-3xl animate-bounce-gentle">🦋</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Animated Night Mascot Icons */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <span className="text-4xl animate-float-slow">🐱💤</span>
          <span className="text-5xl animate-bounce-gentle">🧸💖</span>
          <span className="text-4xl animate-float-reverse">🦋</span>
          
          {/* Hidden Secret Easter Egg #10: A pastel ribbon bow */}
          {onSecretFound && (
            <button
              onClick={() => onSecretFound(10)}
              title="A pastel ribbon bow floating under the night stars..."
              className="text-3xl hover:scale-125 transition-transform cursor-pointer opacity-70 hover:opacity-100 animate-bounce-gentle ml-2"
            >
              🎀
            </button>
          )}
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-playfair tracking-tight mb-4 text-[#FF9EBC] drop-shadow-md">
          ONE LAST LETTER, MY DHRUVIIIII... 💌
        </h2>

        <p className="font-quicksand font-medium text-base sm:text-xl text-pink-200/90 max-w-xl mx-auto mb-10">
          The stars are glowing softly, the world is quiet, and this is everything my heart has to tell you.
        </p>

        {/* Closed Envelope with Golden Heart Seal */}
        {!isOpenLetter ? (
          <div
            onClick={handleOpenLetter}
            className="group relative w-72 sm:w-80 h-48 bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 rounded-3xl p-6 shadow-2xl border-4 border-amber-300/80 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Golden Wax Seal */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-xl border-2 border-white flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 fill-amber-600 text-amber-600" />
            </div>

            <span className="font-dancing text-2xl font-bold text-gray-800">
              For Dhruvi's Eyes Only 👑
            </span>

            <span className="text-[11px] font-poppins font-bold text-[#FF6B8B] tracking-wider uppercase mt-1 animate-pulse">
              Click to Break Seal ✨
            </span>
          </div>
        ) : (
          /* Unfolded Full Letter Card */
          <div className="w-full bg-[#FFF8ED] text-gray-800 rounded-3xl p-6 sm:p-12 shadow-2xl border-4 border-amber-300 text-left transform animate-scale-up">
            
            <div className="border-b-2 border-dashed border-[#FF9EBC] pb-4 mb-6 flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-[#FF6B8B] font-poppins uppercase tracking-widest">
                  SPECIAL CHILDREN'S DAY DISPATCH
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-[#3b1d28]">
                  To My Little Princess, Dhruvi
                </h3>
              </div>
              <div className="text-3xl">🎀</div>
            </div>

            <div className="space-y-4 font-handwriting text-2xl sm:text-3xl text-gray-800 leading-relaxed">
              <p>My dearest Dhruvi,</p>
              
              <p>Happy Children's Day to my favourite little human.</p>
              
              <p>I know you're growing up, and life keeps bringing new responsibilities, challenges and expectations.</p>
              
              <p>But I hope you never lose the little girl inside you.</p>
              
              <p>The girl who gets excited over tiny things, who can be silly without worrying about what others think, who deserves to laugh loudly, dream endlessly and experience all the beautiful things this world has to offer.</p>
              
              <p>You don't always have to be strong.</p>
              
              <p>You don't always have to have everything figured out.</p>
              
              <p>You can have your little moments, your silly moods, your dramatic expressions and your adorable tantrums.</p>
              
              <p>I hope life always gives you reasons to smile.</p>
              
              <p>And whenever you feel overwhelmed, I hope you remember that you deserve gentleness, patience, affection and happiness.</p>
              
              <p>If I could give you one gift, it would be the ability to see yourself through my eyes, even for a moment.</p>
              
              <p>Maybe then you'd understand just how special you are.</p>
              
              <p>Thank you for being you, Dhruvi.</p>
              
              <p>Stay happy, stay silly, stay adorable.</p>
              
              <p>And never forget that you're someone's favourite little princess.</p>
              
              <p>Happy Children's Day, my baby.</p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FF9EBC]/40 text-right">
              <p className="font-handwriting text-2xl text-gray-700">With all my love,</p>
              <p className="font-dancing text-3xl sm:text-4xl text-[#FF6B8B] font-bold">
                Your favourite human. ❤️
              </p>
            </div>
          </div>
        )}

        {/* Reached End of Wonderland Banner */}
        {isOpenLetter && (
          <div className="mt-12 flex flex-col items-center animate-fade-in">
            <p className="font-poppins font-bold text-xs sm:text-sm tracking-widest uppercase text-pink-300 mb-6">
              YOU HAVE REACHED THE END OF YOUR LITTLE WONDERLAND.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              
              {/* ONE LAST SURPRISE button */}
              <button
                onClick={handleGrandFinale}
                className="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#FF6B8B] via-rose-500 to-[#FF9EBC] text-white font-poppins font-bold text-base sm:text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-2 border-white/60 animate-pulse"
              >
                <span>ONE LAST SURPRISE? 👀</span>
                <Heart className="w-5 h-5 fill-white" />
              </button>

              {/* Secret Birthday-Style Gift Box */}
              <button
                onClick={handleOpenSecretGift}
                className="px-7 py-4 rounded-full bg-amber-400 text-gray-900 font-poppins font-bold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-2 border-white/80"
              >
                <Gift className="w-5 h-5" />
                <span>Secret Gift Box 🎁</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Heart Animation Grand Finale Modal */}
      {showGrandFinale && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-xl w-full text-center px-6 py-10 transform animate-scale-up">
            
            <button
              onClick={() => setShowGrandFinale(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Giant Pulsating Heart */}
            <div className="w-36 h-36 mx-auto mb-8 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF6B8B] rounded-full animate-ping opacity-60" />
              <div className="relative text-8xl animate-bounce-gentle">
                💖
              </div>
            </div>

            <h3 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#FFD6E7] leading-tight mb-6 drop-shadow-lg">
              "NO MATTER HOW MANY SURPRISES I GIVE YOU, YOU'LL ALWAYS BE MY FAVOURITE ONE. ❤️"
            </h3>

            <p className="font-dancing text-3xl text-pink-200 mb-8">
              Forever your favourite human. 😚✨
            </p>

            <button
              onClick={() => setShowGrandFinale(false)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all"
            >
              I love you so much! 💗
            </button>
          </div>
        </div>
      )}

      {/* Secret Birthday-Style Gift Modal */}
      {showSecretBirthdayGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-md w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-300 text-center transform animate-scale-up">
            
            <button
              onClick={() => setShowSecretBirthdayGift(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-gray-700 dark:text-pink-100 hover:bg-pink-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-6xl mb-4 animate-bounce-gentle">🎁🎀</div>

            <h3 className="font-playfair text-2xl sm:text-3xl font-extrabold text-[#FF6B8B] mb-4">
              SURPRISEEEEE, DHURVIIIII!! 🎀
            </h3>

            <div className="bg-pink-50 dark:bg-pink-950/40 p-5 rounded-2xl border border-pink-200 mb-6 text-left">
              <p className="font-quicksand font-medium text-base text-gray-800 dark:text-pink-100 leading-relaxed mb-3">
                "Okay, I know this isn't a physical present, but I wanted to create something that you could open whenever you wanted to feel a little extra loved."
              </p>
              <p className="font-quicksand font-medium text-base text-gray-800 dark:text-pink-100 leading-relaxed mb-3">
                "Every little kitten, every letter, every heart and every surprise here has one purpose: to remind you how precious you are to me."
              </p>
              <p className="font-dancing text-2xl font-bold text-[#FF6B8B]">
                Happy Children's Day, my baby. Mwahhhhh! 😚❤️
              </p>
            </div>

            <button
              onClick={() => setShowSecretBirthdayGift(false)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-[#FF6B8B] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all"
            >
              Cuddle my screen forever! 🧸💖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

