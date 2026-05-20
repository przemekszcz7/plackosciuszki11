import React, { useState, useEffect } from 'react';
import { Phone, Facebook, Clock, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'menu', 'chalkboard', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md py-3 shadow-lg border-b border-brand-orange-light/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2.5 cursor-pointer group"
          id="header-brand-logo"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-orange shadow-md flex items-center justify-center bg-brand-bg-dark transition-transform duration-300 group-hover:scale-110">
            <img 
              referrerPolicy="no-referrer"
              src="https://i.ibb.co/9KxtRT9/529347835-787947203738034-4953491805845226672-n.jpg" 
              alt="Logo Obiady Domowe" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="display-font font-bold text-lg md:text-xl text-brand-bg tracking-tight leading-none text-white group-hover:text-brand-orange transition-colors">
              Obiady Domowe
            </span>
            <span className="text-[10px] text-brand-orange uppercase tracking-widest font-bold font-mono">
              Plac Kościuszki 11
            </span>
          </div>
        </div>

        {/* Dynamic Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
          {[
            { id: 'home', label: 'Start' },
            { id: 'menu', label: 'Karta Dań' },
            { id: 'chalkboard', label: 'Specjalność Dnia' },
            { id: 'gallery', label: 'Galeria Dań' },
            { id: 'reviews', label: 'Opinie Gości' },
            { id: 'contact', label: 'Dojazd & Godziny' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[13px] font-bold uppercase tracking-wider relative py-1 transition-colors ${
                activeSection === item.id 
                  ? 'text-brand-orange' 
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Call, Social, & Mobile Menu Toggles */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://www.facebook.com/profile.php?id=100075682853773"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 md:p-2 rounded-full bg-neutral-800 text-neutral-300 hover:bg-brand-orange hover:text-white transition-all duration-200 shrink-0"
            title="Odwiedź Facebooka"
            id="header-facebook-btn"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="tel:+48600707090"
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-orange hover:bg-brand-orange-deep text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 hover:scale-[1.03] shrink-0"
            id="header-call-btn"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tel: 600 707 090</span>
            <span className="sm:hidden">Zadzwoń</span>
          </a>
          {/* Hamburger toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-brand-orange border border-white/5 lg:hidden hover:bg-neutral-750 transition-colors cursor-pointer shrink-0"
            aria-label="Toggles menu"
            id="header-hamburger-toggle"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel Menu */}
      {isMobileMenuOpen && (
        <div 
          className="absolute top-full left-0 right-0 bg-neutral-900 border-b border-white/10 shadow-2xl py-3 px-6 flex flex-col divide-y divide-white/5 lg:hidden animate-fade-in"
          id="header-mobile-drawer"
        >
          {[
            { id: 'home', label: 'Start' },
            { id: 'menu', label: 'Karta Dań' },
            { id: 'chalkboard', label: 'Specjalność Dnia' },
            { id: 'gallery', label: 'Galeria Dań' },
            { id: 'reviews', label: 'Opinie Gości' },
            { id: 'contact', label: 'Dojazd & Godziny' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left font-bold text-xs uppercase tracking-wider py-3.5 transition-colors flex items-center justify-between ${
                activeSection === item.id 
                  ? 'text-brand-orange' 
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
