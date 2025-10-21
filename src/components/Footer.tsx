import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { BrandFull } from './Brand';
import { BackgroundBeams } from './ui/beams';
import { useMemo, memo } from 'react';

// Extract constants outside component
const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
] as const;

const QUICK_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#industries', label: 'Industries' },
  { href: '#', label: 'Blog' },
] as const;

const SOLUTIONS = [
  { href: '#', label: 'AI Sales Bot' },
  { href: '#', label: 'Customer Support' },
  { href: '#', label: 'Voice Agents' },
  { href: '#', label: 'HR Assistant' },
  { href: '#', label: 'Healthcare AI' },
] as const;

const CONTACT_INFO = [
  { icon: Mail, text: 'contact@namoosx.ai', type: 'email' },
  { icon: Phone, text: '+1 (555) 123-4567', type: 'phone' },
  { icon: MapPin, text: '123 AI Street, Tech Valley, CA 94025', type: 'address' },
] as const;

const LEGAL_LINKS = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Cookie Policy' },
] as const;

const Footer = memo(() => {
  // Memoize year to prevent recalculation on every render
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative bg-slate-900 text-white py-10 sm:py-12 overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-3 sm:mb-4">
              <BrandFull size={140} variant="light" />
            </div>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Empowering businesses with next-generation conversational and voice AI solutions.
            </p>
            <div className="flex space-x-2.5 sm:space-x-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-sm sm:text-base text-slate-400 hover:text-sky-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Solutions</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {SOLUTIONS.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-sm sm:text-base text-slate-400 hover:text-sky-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, text, type }) => (
                <li key={type} className={`flex ${type === 'address' ? 'items-start' : 'items-center'} space-x-2 text-slate-400`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 text-sky-400 flex-shrink-0 ${type === 'address' ? 'mt-1' : ''}`} />
                  <span className="text-sm sm:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-slate-400 text-xs sm:text-sm">
              © {currentYear} NamoosX. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {LEGAL_LINKS.map(({ href, label }) => (
                <a key={label} href={href} className="text-slate-400 hover:text-sky-400 transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
