import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, Award, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/wonderlandData';
import { soundFX } from '../utils/audio';

export const MiniGame: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);
    soundFX.playPop();

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#FF9EBC', '#FFD6E7', '#FDE047']
    });
  };

  const handleNext = () => {
    soundFX.playBoop();
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      soundFX.playFanfare();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FF6B8B', '#FFD6E7', '#FFD700', '#E8DDFE']
      });
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    soundFX.playSparkle();
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  return (
    <section id="game" className="py-16 px-4 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>PLAYFUL PRINCESS TRIVIA</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          How Well Do You Know Your Secret Admirer? 🎮
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-xl mx-auto">
          Take this extremely serious, highly scientific 5-question test to evaluate your royal princess status.
        </p>
      </div>

      {/* Main Quiz Card */}
      <div className="bg-white dark:bg-[#2b1e38] rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-pink-200 dark:border-pink-900/50 relative overflow-hidden">
        
        {!isCompleted ? (
          <div>
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-pink-100 dark:border-pink-900/30">
              <span className="text-xs font-bold font-poppins text-[#FF6B8B]">
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex gap-1.5">
                {QUIZ_QUESTIONS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-6 h-2 rounded-full transition-all ${
                      idx <= currentStep ? 'bg-[#FF6B8B]' : 'bg-pink-100 dark:bg-purple-950'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-[#3b1d28] dark:text-pink-100 mb-6">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    className={`p-4 rounded-2xl border-2 text-left font-poppins font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#FF6B8B] bg-pink-50 dark:bg-pink-950/40 text-[#FF6B8B] scale-[1.02] shadow'
                        : 'border-pink-100 dark:border-pink-900/30 bg-white/60 dark:bg-[#1c1427]/60 text-gray-700 dark:text-pink-100 hover:border-pink-300'
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-[#FF6B8B]" />}
                  </button>
                );
              })}
            </div>

            {/* Reaction Banner */}
            {isAnswered && (
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-purple-950/30 p-4 rounded-2xl border border-pink-200 mb-6 flex items-center justify-between animate-fade-in">
                <p className="font-handwriting text-xl text-[#FF6B8B] font-bold">
                  "{currentQ.reaction}"
                </p>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 rounded-full bg-[#FF6B8B] text-white font-poppins font-bold text-xs shadow hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  {currentStep === QUIZ_QUESTIONS.length - 1 ? 'See Royal Result 👑' : 'Next Question ✨'}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Result Screen */
          <div className="text-center py-6 animate-scale-up">
            <div className="text-7xl mb-4 animate-bounce-gentle">👑✨</div>
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-poppins mb-3">
              TEST SCORE: 100 / 100
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-playfair text-[#FF6B8B] mb-4">
              100/100! You're officially the princess of this little universe.
            </h3>

            <p className="text-gray-700 dark:text-pink-200 font-quicksand font-medium text-lg max-w-md mx-auto mb-8 leading-relaxed">
              Every single answer was already written for you because in every universe, my answer will always be Dhruvi. ❤️
            </p>

            <button
              onClick={handleRestart}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Again for Infinite Compliments</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

