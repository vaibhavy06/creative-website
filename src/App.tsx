import React, { useState, useEffect } from 'react';
import { EntryScreen } from './components/EntryScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KittenGallery } from './components/KittenGallery';
import { LoveLetters } from './components/LoveLetters';
import { MysteryGifts } from './components/MysteryGifts';
import { FiftyReasons } from './components/FiftyReasons';
import { LoveButton } from './components/LoveButton';
import { HugStation } from './components/HugStation';
import { ChildhoodRoom } from './components/ChildhoodRoom';
import { VirtualDate } from './components/VirtualDate';
import { MiniGame } from './components/MiniGame';
import { FinalLetter } from './components/FinalLetter';
import { SecretMessages } from './components/SecretMessages';
import { MascotKitty } from './components/MascotKitty';
import { MusicPlayer } from './components/MusicPlayer';
import { CursorTrail } from './components/CursorTrail';
import { HIDDEN_SECRETS } from './data/wonderlandData';
import { SecretMessageItem } from './types';
import { soundFX, dreamMusic } from './utils/audio';
import { Heart, RotateCcw } from 'lucide-react';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  // Interaction tracking for progress percentage
  const [openedLetters, setOpenedLetters] = useState<number[]>([]);
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);
  const [revealedReasons, setRevealedReasons] = useState<number[]>([]);
  const [loveClicks, setLoveClicks] = useState<number>(0);

  // Hidden secrets tracking
  const [foundSecretIds, setFoundSecretIds] = useState<number[]>([]);
  const [activeSecret, setActiveSecret] = useState<SecretMessageItem | null>(null);

  // Load initial progress from localStorage
  useEffect(() => {
    try {
      const savedLetters = localStorage.getItem('wonderland_opened_letters');
      if (savedLetters) setOpenedLetters(JSON.parse(savedLetters));

      const savedGifts = localStorage.getItem('wonderland_opened_gifts');
      if (savedGifts) setOpenedGifts(JSON.parse(savedGifts));

      const savedSecrets = localStorage.getItem('wonderland_found_secrets');
      if (savedSecrets) setFoundSecretIds(JSON.parse(savedSecrets));

      const savedEntered = localStorage.getItem('wonderland_entered');
      if (savedEntered === 'true') setHasEntered(true);
    } catch {
      // ignore
    }
  }, []);

  // Calculate overall exploration progress %
  const totalLetters = 5;
  const totalGifts = 6;
  const totalSecrets = 10;
  const targetReasons = 10;

  const letterScore = Math.min(1, openedLetters.length / totalLetters) * 25;
  const giftScore = Math.min(1, openedGifts.length / totalGifts) * 25;
  const secretScore = Math.min(1, foundSecretIds.length / totalSecrets) * 35;
  const reasonScore = Math.min(1, revealedReasons.length / targetReasons) * 15;
  const progressPercent = Math.min(100, Math.round(letterScore + giftScore + secretScore + reasonScore));

  const handleEnter = () => {
    setHasEntered(true);
    try {
      localStorage.setItem('wonderland_entered', 'true');
    } catch {
      // ignore
    }
  };

  const handleToggleNightMode = () => {
    setIsNightMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundFX.setMuted(nextMuted);
  };

  const handleToggleMusic = () => {
    const state = dreamMusic.toggle();
    setIsPlayingMusic(state);
  };

  const handleSecretFound = (id: number) => {
    soundFX.playFanfare();
    const secretObj = HIDDEN_SECRETS.find(s => s.id === id) || null;
    setActiveSecret(secretObj);

    if (!foundSecretIds.includes(id)) {
      const updated = [...foundSecretIds, id];
      setFoundSecretIds(updated);
      try {
        localStorage.setItem('wonderland_found_secrets', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  };

  const handleLetterOpened = (id: number) => {
    if (!openedLetters.includes(id)) {
      setOpenedLetters(prev => [...prev, id]);
    }
  };

  const handleGiftOpened = (id: number) => {
    if (!openedGifts.includes(id)) {
      setOpenedGifts(prev => [...prev, id]);
    }
  };

  const handleReasonRevealed = (id: number) => {
    if (!revealedReasons.includes(id)) {
      setRevealedReasons(prev => [...prev, id]);
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("Reset your Wonderland exploration progress for testing?")) {
      try {
        localStorage.removeItem('wonderland_opened_letters');
        localStorage.removeItem('wonderland_opened_gifts');
        localStorage.removeItem('wonderland_found_secrets');
        localStorage.removeItem('wonderland_entered');
      } catch {
        // ignore
      }
      setOpenedLetters([]);
      setOpenedGifts([]);
      setFoundSecretIds([]);
      setRevealedReasons([]);
      setHasEntered(false);
      window.location.reload();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isNightMode ? 'bg-[#1c1427] text-pink-100 dark' : 'bg-[#FFF8ED] text-gray-800'
    }`}>
      
      {/* Interactive Cursor Sparkle Trail on desktop */}
      <CursorTrail />

      {/* Entry Screen Gatekeeper */}
      {!hasEntered && <EntryScreen onEnter={handleEnter} />}

      {/* Main Wonderland Experience */}
      <div className={hasEntered ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}>
        
        {/* Floating Top Navbar */}
        <Navbar
          isNightMode={isNightMode}
          onToggleNightMode={handleToggleNightMode}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          isPlayingMusic={isPlayingMusic}
          onToggleMusic={handleToggleMusic}
          progressPercent={progressPercent}
          onSecretFound={handleSecretFound}
        />

        {/* 1. Hero Section: Children's Day Celebration */}
        <HeroSection onSecretFound={handleSecretFound} />

        {/* 2. The Cutest Kitten Paradise */}
        <KittenGallery onSecretFound={handleSecretFound} />

        {/* 3. A Digital Love Letter Collection */}
        <LoveLetters onLetterOpened={handleLetterOpened} />

        {/* 4. The Mystery Gift Room */}
        <MysteryGifts onGiftOpened={handleGiftOpened} />

        {/* 5. 50 Reasons Why You're My Favourite Human */}
        <FiftyReasons onSecretFound={handleSecretFound} onReasonRevealed={handleReasonRevealed} />

        {/* 6. The Interactive Love Button */}
        <LoveButton
          onSecretFound={handleSecretFound}
          onLoveClicked={() => setLoveClicks(prev => prev + 1)}
        />

        {/* 7. The Teddy Bear Hug Station */}
        <HugStation onSecretFound={handleSecretFound} />

        {/* 8. The Childhood Dream Room */}
        <ChildhoodRoom onSecretFound={handleSecretFound} />

        {/* 9. The Virtual Date Night */}
        <VirtualDate onSecretFound={handleSecretFound} />

        {/* 10. The Mini Love Game */}
        <MiniGame />

        {/* 11. The Final Secret Love Letter & Grand Surprises */}
        <FinalLetter onSecretFound={handleSecretFound} />

        {/* Secret Messages Easter Egg System & Modal */}
        <SecretMessages
          foundIds={foundSecretIds}
          activeSecret={activeSecret}
          onCloseSecret={() => setActiveSecret(null)}
        />

        {/* Floating Mascot Kitty */}
        <MascotKitty />

        {/* Floating Romantic Music Player */}
        <MusicPlayer
          isPlayingMusic={isPlayingMusic}
          onToggleMusic={handleToggleMusic}
        />

        {/* Footer with Hidden Secret #2: Secret Star */}
        <footer className="py-12 px-4 text-center border-t border-pink-200/50 bg-white/40 dark:bg-black/30 backdrop-blur-sm relative">
          <div className="max-w-xl mx-auto flex flex-col items-center">
            
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎀</span>
              <span className="font-bubble text-xl text-[#FF6B8B]">Dhruvi's Little Wonderland</span>
              
              {/* Hidden Secret Easter Egg #2: Secret star in footer */}
              <button
                onClick={() => handleSecretFound(2)}
                title="A mysterious glowing star near the footer..."
                className="text-xl animate-spin hover:scale-125 transition-transform cursor-pointer opacity-70 hover:opacity-100"
                style={{ animationDuration: '10s' }}
              >
                ⭐
              </button>
            </div>

            <p className="font-quicksand text-sm text-gray-600 dark:text-pink-300 mb-2">
              Designed & created with infinite love for Dhruvi. Happy Children's Day, my little princess. ❤️
            </p>

            <p className="font-dancing text-xl text-[#FF6B8B] font-bold mb-6">
              "She's growing up, but she'll always be my baby."
            </p>

            {/* Optional Reset Button for Testing */}
            <button
              onClick={handleResetProgress}
              className="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-pink-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Wonderland Progress (For Testing)</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

