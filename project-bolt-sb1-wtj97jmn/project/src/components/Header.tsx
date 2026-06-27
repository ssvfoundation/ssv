import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onQuote: () => void;
}

export default function Header({ currentPage, onNavigate, onQuote }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'concrete', label: 'Concrete & Transport' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/97 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="h-10 lg:h-12 flex items-center">
              <img
                src="/WhatsApp_Image_2026-06-27_at_12.12.01_PM_(1).jpeg"
                alt="SSV Foundation Logo"
                className="h-full w-auto object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-200"
              />
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-base lg:text-lg font-extrabold text-green-700 leading-tight tracking-wide">
                SSV FOUNDATION
              </span>
              <span className="block text-xs text-gray-500 font-medium tracking-wider uppercase">
                Ready Mix Concrete
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  currentPage === link.id
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onQuote}
              className="ml-3 px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentPage === link.id
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onQuote(); setMenuOpen(false); }}
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors mt-2"
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}
