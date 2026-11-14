import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Sun, Moon, Volume2 } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface ChildhoodRoomProps {
  onSecretFound: (id: number) => void;
}

export const ChildhoodRoom: React.FC<ChildhoodRoomProps> = ({ onSecretFound }) => {
  const [lightsOn, setLightsOn] = useState(true);
  const [candyCount, setCandyCount] = useState(12);
  const [trainMoving, setTrainMoving] = useState(false);
  const [bubbles, setBubbles] = useState<number[]>([]);

  const handleToggleLights = () => {
    soundFX.playBoop();
    setLightsOn(prev => !prev);
  };

  const handleCandyGrab = () => {
    soundFX.playPop();
    setCandyCount(prev => prev + 1);
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.6 },
      colors: ['#FF9EBC', '#FDE047', '#E8DDFE']
    });
  };

  const handleBlowBubbles = () => {
    soundFX.playPop();
    setBubbles(prev => [...prev.slice(-10), Date.now()]);
  };

  const handleWindTrain = () => {
    soundFX.playSparkle();
    setTrainMoving(true);
    setTimeout(() => setTrainMoving(false), 3000);
  };

  return (
    <section id="childhood" className="py-16 px-4 max-w-6xl mx-auto relative">
      
      {/* Hidden Secret Easter Egg #7: Dreamy cloud floating */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => onSecretFound(7)}
          title="A secret little dreamy cloud..."
          className="text-4xl animate-float-slow hover:scale-125 transition-transform cursor-pointer opacity-80 hover:opacity-100"
        >
          ☁️
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <span>🎠</span>
          <span>NOSTALGIA PLAYROOM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          The Childhood Dream Room 🎠
        </h2>
        
        {/* Central Inspiring Quotes */}
        <div className="max-w-2xl mx-auto bg-white/70 dark:bg-[#2b1e38]/70 backdrop-blur-md rounded-2xl p-6 border border-pink-200 shadow-sm mb-8">
          <p className="font-bubble text-2xl sm:text-3xl text-[#FF6B8B] mb-2">
            "Growing up is optional inside this little universe."
          </p>
          <p className="font-quicksand text-base sm:text-lg text-gray-700 dark:text-pink-100 font-medium">
            "Here, you can be as silly, playful, childish and happy as you want."
          </p>
        </div>
      </div>

      {/* Interactive Toys Playground Area */}
      <div className={`rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-pink-200 transition-colors duration-500 relative overflow-hidden ${
        lightsOn ? 'bg-gradient-to-b from-[#FFF8ED] to-[#FFD6E7]/50' : 'bg-[#1c1427] text-pink-100'
      }`}>
        
        {/* Fairy lights string along the top */}
        <div className="flex justify-between items-center px-4 mb-8">
          {['✨', '💛', '🌸', '✨', '💛', '🌸', '✨', '💛', '🌸', '✨'].map((light, i) => (
            <span
              key={i}
              className={`text-xl sm:text-2xl transition-opacity duration-300 ${
                lightsOn ? 'opacity-100 animate-pulse' : 'opacity-20'
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {light}
            </span>
          ))}
        </div>

        {/* 4 Interactive Childhood Stations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Toy 1: Fairy Lights Controller */}
          <div className="bg-white/90 dark:bg-[#2b1e38] p-5 rounded-2xl border border-pink-200 shadow-md text-center flex flex-col items-center justify-between">
            <span className="text-5xl mb-2 select-none">💡</span>
            <h4 className="font-poppins font-bold text-sm text-[#3b1d28] dark:text-pink-100 mb-1">
              Fairy Lights
            </h4>
            <p className="text-xs text-gray-500 dark:text-pink-300 mb-4">
              {lightsOn ? 'Twinkling warmly!' : 'Soft midnight mode'}
            </p>
            <button
              onClick={handleToggleLights}
              className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-[#FF6B8B] text-xs font-bold font-poppins hover:bg-pink-200 transition-all cursor-pointer"
            >
              {lightsOn ? 'Dim Lights 🌙' : 'Turn On Lights ✨'}
            </button>
          </div>

          {/* Toy 2: Unlimited Candy Jar */}
          <div className="bg-white/90 dark:bg-[#2b1e38] p-5 rounded-2xl border border-pink-200 shadow-md text-center flex flex-col items-center justify-between">
            <span className="text-5xl mb-2 select-none">🍭</span>
            <h4 className="font-poppins font-bold text-sm text-[#3b1d28] dark:text-pink-100 mb-1">
              Candy Jar
            </h4>
            <p className="text-xs text-gray-500 dark:text-pink-300 mb-4">
              Jellybeans & lollipops: {candyCount}
            </p>
            <button
              onClick={handleCandyGrab}
              className="px-4 py-2 rounded-full bg-[#FF6B8B] text-white text-xs font-bold font-poppins hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Steal a Sweet! 🍬
            </button>
          </div>

          {/* Toy 3: Soap Bubble Wand */}
          <div className="bg-white/90 dark:bg-[#2b1e38] p-5 rounded-2xl border border-pink-200 shadow-md text-center flex flex-col items-center justify-between">
            <span className="text-5xl mb-2 select-none">🫧</span>
            <h4 className="font-poppins font-bold text-sm text-[#3b1d28] dark:text-pink-100 mb-1">
              Soap Bubble Wand
            </h4>
            <p className="text-xs text-gray-500 dark:text-pink-300 mb-4">
              Iridescent floating spheres
            </p>
            <button
              onClick={handleBlowBubbles}
              className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-[#FF6B8B] text-xs font-bold font-poppins hover:bg-pink-200 transition-all cursor-pointer"
            >
              Blow Bubbles 🫧
            </button>
          </div>

          {/* Toy 4: Wind-up Toy Train */}
          <div className="bg-white/90 dark:bg-[#2b1e38] p-5 rounded-2xl border border-pink-200 shadow-md text-center flex flex-col items-center justify-between">
            <span className={`text-5xl mb-2 select-none transition-transform ${
              trainMoving ? 'animate-bounce translate-x-3' : ''
            }`}>
              🚂
            </span>
            <h4 className="font-poppins font-bold text-sm text-[#3b1d28] dark:text-pink-100 mb-1">
              Choo-Choo Train
            </h4>
            <p className="text-xs text-gray-500 dark:text-pink-300 mb-4">
              {trainMoving ? 'Choo choo!! 🚂💨' : 'Ready to wind up'}
            </p>
            <button
              onClick={handleWindTrain}
              className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-[#FF6B8B] text-xs font-bold font-poppins hover:bg-pink-200 transition-all cursor-pointer"
            >
              Wind Up Key 🗝️
            </button>
          </div>
        </div>

        {/* Floating Bubble Sprites when user clicks wand */}
        {bubbles.map((id) => (
          <div
            key={id}
            className="absolute select-none pointer-events-none text-3xl animate-ping"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDuration: '1.2s'
            }}
          >
            🫧
          </div>
        ))}
      </div>
    </section>
  );
};

