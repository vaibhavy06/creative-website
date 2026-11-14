import React, { useState, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, Upload, Disc, X } from 'lucide-react';
import { dreamMusic, soundFX } from '../utils/audio';

interface MusicPlayerProps {
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [songName, setSongName] = useState("Dreamy Lofi Piano (Dhruvi's Serenade)");
  const [customAudioSrc, setCustomAudioSrc] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = () => {
    soundFX.playBoop();

    if (customAudioSrc && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      onToggleMusic();
    }
  };

  const handleCustomAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomAudioSrc(url);
      setSongName(file.name.replace(/\.[^/.]+$/, ""));
      // stop synthesized music if playing
      if (isPlayingMusic) {
        onToggleMusic();
      }
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Hidden audio element for custom user song */}
      {customAudioSrc && (
        <audio
          ref={audioRef}
          src={customAudioSrc}
          loop
          onPlay={() => {}}
          onPause={() => {}}
        />
      )}

      {/* Floating Mini Vinyl Disc in bottom right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        
        {/* Floating Mini Player Widget Pill */}
        <div className="flex items-center gap-2 bg-white/90 dark:bg-[#2b1e38]/90 backdrop-blur-md rounded-full px-3.5 py-2 border-2 border-pink-300 shadow-xl">
          
          {/* Animated Vinyl Disc */}
          <div
            onClick={() => setIsOpen(prev => !prev)}
            className={`w-9 h-9 rounded-full bg-gray-900 border-2 border-pink-300 flex items-center justify-center cursor-pointer shadow ${
              isPlayingMusic || (customAudioSrc && audioRef.current && !audioRef.current.paused)
                ? 'animate-spin'
                : ''
            }`}
            style={{ animationDuration: '4s' }}
            title="Open Romantic Music Player"
          >
            <div className="w-3 h-3 rounded-full bg-[#FF6B8B]" />
          </div>

          {/* Quick Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            className="p-1.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow"
          >
            {isPlayingMusic || (customAudioSrc && audioRef.current && !audioRef.current.paused) ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Visualizer bars */}
          <div className="hidden sm:flex items-center gap-0.5 h-4 px-1">
            {[40, 80, 50, 100, 60].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-[#FF6B8B] rounded-full transition-all duration-300"
                style={{
                  height: isPlayingMusic ? `${h}%` : '25%',
                  animation: isPlayingMusic ? `pulseSoft 1s infinite ${i * 0.15}s` : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Music Player Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-sm w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-6 shadow-2xl border-4 border-[#FF9EBC] text-center transform animate-scale-up">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-gray-700 hover:bg-pink-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Vinyl Record */}
            <div className="relative w-36 h-36 mx-auto mb-4">
              <div className={`w-full h-full rounded-full bg-gradient-to-tr from-gray-950 via-gray-800 to-gray-900 border-4 border-pink-200 shadow-lg flex items-center justify-center relative ${
                isPlayingMusic ? 'animate-spin' : ''
              }`} style={{ animationDuration: '4s' }}>
                <div className="w-14 h-14 rounded-full bg-[#FF6B8B] border-2 border-white flex items-center justify-center text-white">
                  <Music className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Song info */}
            <div className="mb-4">
              <span className="text-[10px] font-bold text-[#FF6B8B] uppercase tracking-wider font-poppins">
                NOW PLAYING IN WONDERLAND
              </span>
              <h4 className="font-playfair text-lg font-bold text-[#3b1d28] dark:text-pink-100 truncate mt-1">
                {songName}
              </h4>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => {
                  soundFX.playBoop();
                  setSongName("Sweet Dreams (Dhruvi Edition)");
                }}
                className="p-2 rounded-full bg-pink-50 text-gray-700 hover:bg-pink-100"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={handleTogglePlay}
                className="p-4 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                {isPlayingMusic || (customAudioSrc && audioRef.current && !audioRef.current.paused) ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" />
                )}
              </button>

              <button
                onClick={() => {
                  soundFX.playBoop();
                  setSongName("Infinite Hugs & Chocolates (Lofi)");
                }}
                className="p-2 rounded-full bg-pink-50 text-gray-700 hover:bg-pink-100"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Volume control */}
            <div className="flex items-center gap-2 px-4 mb-6">
              <Volume2 className="w-4 h-4 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  dreamMusic.setVolume(val);
                  if (audioRef.current) audioRef.current.volume = val;
                }}
                className="w-full accent-[#FF6B8B]"
              />
            </div>

            {/* Custom Song Upload */}
            <div className="pt-4 border-t border-pink-100 dark:border-pink-900/40">
              <label className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-dashed border-[#FF9EBC] text-xs font-bold text-[#FF6B8B] cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Our Special Song (MP3)</span>
                <input type="file" accept="audio/*" onChange={handleCustomAudioUpload} className="hidden" />
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

