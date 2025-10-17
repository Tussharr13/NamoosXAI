import { useEffect, useState } from 'react';
import { isLowEndDevice, prefersReducedMotion } from '../utils/deviceDetection';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lowEndMode = isLowEndDevice();
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    // Reduce particle count on low-end devices or if user prefers reduced motion
    const particleCount = reducedMotion ? 0 : (lowEndMode ? 8 : 20);
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-sky-400/20 ${lowEndMode ? '' : 'blur-sm'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            willChange: 'transform', // GPU acceleration hint
          }}
        />
      ))}
    </div>
  );
}
