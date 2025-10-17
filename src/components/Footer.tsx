import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { BrandFull } from './Brand';
import { BackgroundBeams } from './ui/beams';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white py-16 overflow-hidden min-h-[400px]">
      <BackgroundBeams className="opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <BrandFull size={160} variant="light" />
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Empowering businesses with next-generation conversational and voice AI solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  AI Sales Bot
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Voice Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  HR Assistant
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Healthcare AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-5 h-5 text-sky-400" />
                <span>contact@namoosx.ai</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-5 h-5 text-sky-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-slate-400">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-1" />
                <span>123 AI Street, Tech Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} NamoosX. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
