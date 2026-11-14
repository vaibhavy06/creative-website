import React, { useState } from 'react';
import { Heart, Sparkles, UtensilsCrossed } from 'lucide-react';
import { VIRTUAL_DATES } from '../data/wonderlandData';
import { soundFX } from '../utils/audio';

interface VirtualDateProps {
  onSecretFound: (id: number) => void;
}

export const VirtualDate: React.FC<VirtualDateProps> = ({ onSecretFound }) => {
  const [selectedDate, setSelectedDate] = useState(VIRTUAL_DATES[0]);

  const handleSelectDate = (dateItem: typeof VIRTUAL_DATES[0]) => {
    soundFX.playPop();
    soundFX.playSparkle();
    setSelectedDate(dateItem);
  };

  return (
    <section id="date" className="py-16 px-4 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>IMAGINARY GETAWAY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          The Virtual Date Night 🍦🌙
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-xl mx-auto">
          Pick where you want us to escape together tonight. Every single date has been planned with Dhruvi in mind.
        </p>

        {/* Hidden Secret Easter Egg #8: Cupcake sticker */}
        <div className="mt-2">
          <button
            onClick={() => onSecretFound(8)}
            title="A secret cupcake sticker on the date table..."
            className="text-base sm:text-lg hover:scale-125 transition-transform cursor-pointer opacity-70 hover:opacity-100"
          >
            🧁 <span className="font-dancing text-xs text-[#FF6B8B]">a sweet treat...</span>
          </button>
        </div>
      </div>

      {/* Date Choice Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {VIRTUAL_DATES.map((item) => {
          const isSelected = selectedDate.id === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSelectDate(item)}
              className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
                isSelected
                  ? 'border-[#FF6B8B] bg-pink-100/80 dark:bg-pink-950/60 shadow-md scale-105'
                  : 'border-pink-200/60 bg-white/70 dark:bg-[#2b1e38] text-gray-700 dark:text-pink-200 hover:bg-pink-50'
              }`}
            >
              <span className="text-3xl sm:text-4xl mb-2">{item.icon}</span>
              <span className="font-poppins font-bold text-xs sm:text-sm text-[#3b1d28] dark:text-pink-100">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scene Showcase */}
      <div className={`rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-pink-200 bg-gradient-to-br ${selectedDate.bg} transition-all duration-500 relative overflow-hidden`}>
        
        {/* Floating atmospheric icons */}
        <div className="absolute top-4 right-6 text-5xl opacity-40 select-none animate-float-slow">
          {selectedDate.icon}
        </div>

        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 rounded-full bg-white/70 dark:bg-black/40 text-xs font-bold text-[#FF6B8B] dark:text-pink-300 mb-3 font-poppins">
            OUR SPECIAL MOMENT
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-playfair mb-3">
            {selectedDate.title}
          </h3>

          <p className="text-sm sm:text-base font-quicksand font-medium mb-6 leading-relaxed opacity-90">
            {selectedDate.scene}
          </p>

          <div className="bg-white/80 dark:bg-black/50 backdrop-blur-md p-5 rounded-2xl border border-pink-200 shadow-sm">
            <p className="font-handwriting text-2xl sm:text-3xl text-[#FF6B8B] dark:text-pink-300 font-bold leading-relaxed">
              "{selectedDate.dialogue}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

