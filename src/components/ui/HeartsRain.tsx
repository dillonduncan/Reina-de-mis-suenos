import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

export const HeartsRain: React.FC = () => {
  // Generamos una cantidad equilibrada de partículas
  const particles = Array.from({ length: 28 });

  const colors = [
    'text-pink-400', 
    'text-amber-300', 
    'text-rose-400', 
    'text-sky-300', 
    'text-purple-400',
    'text-yellow-200'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((_, i) => {
        // Derive particle properties from the index to keep rendering pure.
        const randomLeft = (i * 37) % 100;
        const randomDelay = ((i * 13) % 20) / 10;
        const randomDuration = 2.5 + ((i * 17) % 26) / 10;
        const randomColor = colors[(i * 7) % colors.length];
        const randomSize = 14 + ((i * 11) % 15); // Tamaño dinámico entre 14px y 28px
        const isHeart = i % 2 === 0; // Alterna entre un corazón y una estrella

        return (
          <motion.div
            key={i}
            initial={{ y: -30, x: `${randomLeft}vw`, opacity: 0, rotate: 0, scale: 0.5 }}
            animate={{ 
              y: ['0vh', '105vh'], 
              opacity: [0, 1, 1, 0], 
              rotate: [0, 180, 360],
              scale: [0.5, 1, 1, 0.8]
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: 'easeInOut',
            }}
            className={`absolute ${randomColor} drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
            style={{ left: 0 }}
          >
            {isHeart ? (
              <Heart className="fill-current" style={{ width: randomSize, height: randomSize }} />
            ) : (
              <Star className="fill-current" style={{ width: randomSize, height: randomSize }} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};