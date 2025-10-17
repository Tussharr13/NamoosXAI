import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandFull } from './Brand';
import { isLowEndDevice } from '../utils/deviceDetection';

interface NavbarProps {
  variant?: 'transparent' | 'solid';
  scrollThreshold?: number;
}

export default function Navbar({ variant = 'transparent', scrollThreshold = 80 }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lowEndMode = isLowEndDevice();

  useEffect(() => {
    // Throttle scroll handler with requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > scrollThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside the navbar container
      const navbarContainer = document.querySelector('.navbar-container');
      if (mobileMenuOpen && navbarContainer && !navbarContainer.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      // Use timeout to avoid immediate close on button click
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#industries', label: 'Industries' },
    { href: '#contact', label: 'Contact' },
  ];

  const isTransparent = variant === 'transparent' && !scrolled;

  return (
    <div className="navbar-container fixed top-0 left-0 right-0 z-50">
      <nav
        className={`${
          isTransparent
            ? 'bg-slate-900/95 border-slate-800 text-slate-300'
            : 'bg-white/95 border-slate-200 text-slate-700'
        } px-4 md:px-6 py-3 ${
          lowEndMode ? '' : 'backdrop-blur-sm'
        } border-b transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <BrandFull
            size={120}
            variant={isTransparent ? 'light' : 'dark'}
            src={isTransparent ? undefined : '/3-Photoroom.png'}
          />

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center space-x-8 ${
              isTransparent ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isTransparent ? 'hover:text-sky-400' : 'hover:text-sky-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-b border-slate-200 shadow-lg overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-2 px-4">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-sky-50 hover:text-sky-600 transition-colors duration-200"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}