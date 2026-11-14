import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

export const CursorTrail: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const emojis = ['✨', '💖', '🌸', '🎀', '⭐'];
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 60) return; // throttle
      lastTime = now;

      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const newSparkle: Sparkle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: randomEmoji,
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setSparkles((prev) => prev.slice(1));
    }, 120);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute select-none animate-ping text-sm transition-opacity duration-500 ease-out"
          style={{
            left: s.x - 8,
            top: s.y - 8,
            animationDuration: '0.8s',
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
};

