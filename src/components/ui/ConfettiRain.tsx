import React from 'react';
import { motion } from 'framer-motion';

export const ConfettiRain: React.FC = () => {
  // Generamos una cantidad fija de partículas de confeti (ej. 30 partículas)
  const particles = Array.from({ length: 30 });

  const colors = [
    'bg-amber-300', 
    'bg-pink-400', 
    'bg-sky-400', 
    'bg-purple-400', 
    'bg-rose-300', 
    'bg-yellow-200'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((_, i) => {
        // Valores pseudoaleatorios deterministas para mantener el render puro.
        const getParticleValue = (seed: number) => {
          const value = Math.sin(seed * 127.1) * 43758.5453;
          return value - Math.floor(value);
        };
        // Posición horizontal aleatoria
        const randomLeft = getParticleValue(i * 4 + 1) * 100;
        // Retraso aleatorio para que no caigan todos al mismo tiempo
        const randomDelay = getParticleValue(i * 4 + 2) * 2;
        // Duración de caída aleatoria (entre 2 y 4 segundos)
        const randomDuration = 2 + getParticleValue(i * 4 + 3) * 2;
        // Color aleatorio
        const randomColor = colors[Math.floor(getParticleValue(i * 4 + 4) * colors.length)];
        // Tamaño aleatorio para dar profundidad
        const randomSize = getParticleValue(i * 4 + 5) > 0.5 ? 'w-2 h-3' : 'w-3 h-3 rounded-full';

        return (
          <motion.div
            key={i}
            initial={{ y: -20, x: `${randomLeft}vw`, opacity: 0, rotate: 0 }}
            animate={{ 
              y: ['0vh', '100vh'], 
              opacity: [0, 1, 1, 0], 
              rotate: [0, 360, 720] 
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: 'linear',
            }}
            className={`absolute ${randomSize} ${randomColor} shadow-md`}
            style={{ left: 0 }}
          />
        );
      })}
    </div>
  );
};