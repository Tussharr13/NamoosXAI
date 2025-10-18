import { useEffect, useState, memo, useMemo } from 'react';
import { isLowEndDevice, prefersReducedMotion } from '../utils/deviceDetection';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingParticles = memo(() => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lowEndMode = isLowEndDevice();
  const reducedMotion = prefersReducedMotion();

  // Memoize particle count
  const particleCount = useMemo(() => 
    reducedMotion ? 0 : (lowEndMode ? 5 : 12),
    [reducedMotion, lowEndMode]
  );

  useEffect(() => {
    // Further reduced particle count for better performance
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // Smaller particles
      duration: Math.random() * 8 + 12, // Slower, smoother animation
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-sky-400/15 will-change-transform ${lowEndMode ? '' : 'blur-[2px]'}`}
          style={{
            transform: `translate(${particle.x}vw, ${particle.y}vh)`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = 'FloatingParticles';

export default FloatingParticles;
