import { useState, useEffect, useRef, useMemo } from 'react';
import { BrandFull } from './Brand';
import { gsap } from 'gsap';

interface NavbarProps {
  variant?: 'transparent' | 'solid';
  scrollThreshold?: number;
}

// Define navLinks outside component to prevent re-creation
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#industries', label: 'Industries' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Navbar({ variant = 'transparent', scrollThreshold = 80 }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Throttle scroll handler with requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setScrolled(currentScrollY > scrollThreshold);
          
          // Floating behavior: hide when scrolling down, show when scrolling up
          if (currentScrollY < 50) {
            // Always show at the top
            setVisible(true);
          } else {
            // Hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY) {
              setVisible(false);
            } else {
              setVisible(true);
            }
          }
          
          setLastScrollY(currentScrollY);
          
          // Update active section based on scroll position
          const sections = ['about', 'products', 'industries', 'contact'];
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveHref(`#${section}`);
                break;
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold, lastScrollY]);

  // Memoize computed values to prevent unnecessary re-renders
  const isTransparent = useMemo(() => variant === 'transparent' && !scrolled, [variant, scrolled]);
  const ease = 'power2.easeOut';

  // Pill animation setup - only run on mount and resize
  useEffect(() => {
    let layoutTimeoutId: NodeJS.Timeout | null = null;
    
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    // Initial layout with slight delay to ensure DOM is ready
    layoutTimeoutId = setTimeout(layout, 100);

    // Debounced resize handler to prevent excessive layout recalculations
    let resizeTimeoutId: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimeoutId);
      resizeTimeoutId = setTimeout(layout, 150);
    };
    window.addEventListener('resize', onResize);

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, y: 0 });
    }

    const navItems = navItemsRef.current;
    if (navItems) {
      gsap.set(navItems, { width: 0, overflow: 'hidden' });
      gsap.to(navItems, {
        width: 'auto',
        duration: 0.6,
        ease
      });
    }

    return () => {
      window.removeEventListener('resize', onResize);
      if (layoutTimeoutId) clearTimeout(layoutTimeoutId);
      if (resizeTimeoutId) clearTimeout(resizeTimeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }
  };

  // Memoize CSS variables to prevent unnecessary recalculations
  const cssVars = useMemo(() => {
    const baseColor = isTransparent ? 'transparent' : '#ffffff';
    const pillColor = 'transparent';
    const hoveredPillTextColor = isTransparent ? '#38bdf8' : '#0ea5e9';
    const pillTextColor = isTransparent ? '#e2e8f0' : '#334155';

    return {
      ['--base']: baseColor,
      ['--pill-bg']: pillColor,
      ['--hover-text']: hoveredPillTextColor,
      ['--pill-text']: pillTextColor,
      ['--nav-h']: '42px',
      ['--pill-pad-x']: '18px',
      ['--pill-gap']: '3px'
    } as React.CSSProperties;
  }, [isTransparent]);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ease-in-out"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
        <div 
          className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-xl border shadow-lg transition-all duration-300" 
          style={{
            ...cssVars,
            background: isTransparent 
              ? 'rgba(15, 23, 42, 0.7)' 
              : 'rgba(255, 255, 255, 0.8)',
            borderColor: isTransparent 
              ? 'rgba(148, 163, 184, 0.1)' 
              : 'rgba(226, 232, 240, 0.8)',
            boxShadow: isTransparent
              ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              : '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
          }}
        >
        {/* Original Logo */}
        <BrandFull
          size={120}
          variant={isTransparent ? 'light' : 'dark'}
          src={isTransparent ? undefined : '/3-Photoroom.png'}
        />

        {/* Pill Navigation Items */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex ml-auto"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--base, #000)'
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {NAV_LINKS.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle: React.CSSProperties = {
                background: 'var(--pill-bg, #fff)',
                color: 'var(--pill-text, var(--base, #000))',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)'
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: 'var(--base, #000)',
                      willChange: 'transform'
                    }}
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: 'transform' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: 'var(--hover-text, #fff)',
                        willChange: 'transform, opacity'
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: 'var(--base, #000)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    className={basePillClasses}
                    style={pillStyle}
                    aria-label={item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {PillContent}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            background: 'var(--pill-bg, #fff)'
          }}
        >
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center"
            style={{ background: isTransparent ? '#e2e8f0' : '#334155' }}
          />
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center"
            style={{ background: isTransparent ? '#e2e8f0' : '#334155' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[5em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] z-[998] origin-top backdrop-blur-xl border"
        style={{
          ...cssVars,
          background: isTransparent 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(255, 255, 255, 0.85)',
          borderColor: isTransparent 
            ? 'rgba(148, 163, 184, 0.1)' 
            : 'rgba(226, 232, 240, 0.8)'
        }}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          {NAV_LINKS.map(item => {
            const defaultStyle: React.CSSProperties = {
              background: 'var(--pill-bg, #fff)',
              color: 'var(--pill-text, #fff)'
            };
            const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = 'var(--base)';
              e.currentTarget.style.color = 'var(--hover-text, #fff)';
            };
            const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = 'var(--pill-bg, #fff)';
              e.currentTarget.style.color = 'var(--pill-text, #fff)';
            };

            const linkClasses =
              'block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200';

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={linkClasses}
                  style={defaultStyle}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}