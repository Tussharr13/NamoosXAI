import { cn } from "../../utils/cn.ts";
import { ReactNode, useRef, useState, memo, useCallback } from "react";

export const GlareCard = memo(({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Throttle mouse move for better performance
  const throttleRef = useRef<number>(0);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - throttleRef.current < 16) return; // ~60fps
    throttleRef.current = now;
    
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGlarePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-3xl will-change-transform",
        className
      )}
    >
      {children}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 animate-in fade-in will-change-transform"
          style={{
            background: `radial-gradient(circle 200px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.2), transparent)`,
          }}
        />
      )}
    </div>
  );
});

GlareCard.displayName = 'GlareCard';
