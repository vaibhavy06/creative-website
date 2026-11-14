import React, { useState } from 'react';
import { Heart, Sparkles, Filter, X } from 'lucide-react';
import { KITTEN_GALLERY } from '../data/wonderlandData';
import { KittenPhoto } from '../types';
import { soundFX } from '../utils/audio';

interface KittenGalleryProps {
  onSecretFound: (id: number) => void;
}

export const KittenGallery: React.FC<KittenGalleryProps> = ({ onSecretFound }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedKitten, setSelectedKitten] = useState<KittenPhoto | null>(null);
  const [galleryList, setGalleryList] = useState<KittenPhoto[]>(KITTEN_GALLERY);

  const categories = [
    { key: 'all', label: 'All Kittens 🐾' },
    { key: 'sleepy', label: 'Sleepyhead 💤' },
    { key: 'white', label: 'Tiny White ❄️' },
    { key: 'orange', label: 'Orange Fluff 🍊' },
    { key: 'bows', label: 'Wearing Bows 🎀' },
    { key: 'flowers', label: 'Flowers 🌸' },
    { key: 'teddy', label: 'With Teddy 🧸' },
    { key: 'blanket', label: 'In Blankets 🌯' },
    { key: 'funny', label: 'Funny Faces 😼' },
    { key: 'box', label: 'Boxes 📦' },
    { key: 'portrait', label: 'Camera Ready ✨' },
  ];

  const filteredKittens = selectedCategory === 'all'
    ? galleryList
    : galleryList.filter(k => k.category === selectedCategory);

  const handleKittenClick = (kitten: KittenPhoto) => {
    soundFX.playPop();
    soundFX.playSparkle();
    setSelectedKitten(kitten);
  };

  const handleShuffleMore = () => {
    soundFX.playSparkle();
    setGalleryList(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <section id="kittens" className="py-16 px-4 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <span>🐱</span> PINTEREST SCRAPBOOK PARADISE
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          The Cutest Kitten Paradise 🐾
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-2xl mx-auto">
          Every single kitten here has been carefully selected because they match Dhruvi's exact energy and cuteness level!
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => {
              soundFX.playBoop();
              setSelectedCategory(cat.key);
            }}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold font-poppins transition-all cursor-pointer ${
              selectedCategory === cat.key
                ? 'bg-[#FF6B8B] text-white shadow-md scale-105'
                : 'bg-white/80 dark:bg-[#2b1e38] text-gray-700 dark:text-pink-200 hover:bg-pink-100 border border-pink-200/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Hidden Secret Easter Egg #1 hint area */}
      <div className="flex justify-end mb-2 pr-4">
        <button
          onClick={() => onSecretFound(1)}
          title="A tiny paw tucked behind the gallery..."
          className="text-xs sm:text-sm text-pink-400 hover:text-pink-600 flex items-center gap-1 cursor-pointer transition-transform hover:scale-110 opacity-70 hover:opacity-100"
        >
          <span>🐾</span>
          <span className="font-dancing text-sm">whisper behind the frames...</span>
        </button>
      </div>

      {/* Pinterest Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredKittens.map((kitten, index) => {
          // slight random tilt for scrapbook aesthetic
          const rotation = (index % 5 - 2) * 1.5;

          return (
            <div
              key={kitten.id}
              onClick={() => handleKittenClick(kitten)}
              style={{ transform: `rotate(${rotation}deg)` }}
              className="group relative bg-white dark:bg-[#2b1e38] p-3 pb-5 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-pink-100 dark:border-pink-900/40 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Cute Washi Tape Effect on top */}
              <div className="washi-tape" />

              {/* Kitten Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-pink-50 mb-3">
                <img
                  src={kitten.url}
                  alt={kitten.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category badge overlay */}
                <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-sm text-[10px] font-bold text-[#FF6B8B] shadow">
                  {kitten.categoryLabel}
                </div>

                {/* Floating Heart On Hover */}
                <div className="absolute inset-0 bg-pink-500/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white fill-[#FF6B8B] animate-ping" />
                </div>
              </div>

              {/* Caption */}
              <div className="text-center px-1">
                <p className="font-handwriting text-lg sm:text-xl font-bold text-gray-800 dark:text-pink-100 leading-snug">
                  "{kitten.caption}"
                </p>
                <p className="text-[11px] text-[#FF6B8B] font-poppins mt-1">
                  Click to inspect sweetness ✨
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Cuteness Button */}
      <div className="mt-12 text-center">
        <button
          onClick={handleShuffleMore}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 mx-auto cursor-pointer"
        >
          <span>SHOW ME MORE CUTENESS 🐾</span>
          <Sparkles className="w-4 h-4" />
        </button>
      </div>

      {/* Kitten Modal */}
      {selectedKitten && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-5 sm:p-6 shadow-2xl border-4 border-[#FF9EBC] transform animate-scale-up">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedKitten(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-gray-700 dark:text-pink-100 hover:bg-pink-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-inner">
              <img
                src={selectedKitten.url}
                alt={selectedKitten.caption}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="text-center">
              <span className="text-xs font-bold text-[#FF6B8B] uppercase tracking-wider font-poppins">
                {selectedKitten.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-800 dark:text-pink-100 mt-1 mb-2">
                {selectedKitten.caption}
              </h3>
              <p className="font-handwriting text-2xl text-[#FF6B8B] font-bold mb-5">
                "{selectedKitten.sweetNote}"
              </p>
              
              <button
                onClick={() => {
                  soundFX.playKiss();
                  setSelectedKitten(null);
                }}
                className="px-6 py-2.5 rounded-full bg-[#FF6B8B] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all"
              >
                Send Kisses to this Kitty! 💋
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

