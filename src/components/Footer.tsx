import React from 'react';
import { Phone, Mail, MapPin, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-bg-darker text-neutral-300 py-16 border-t border-brand-orange/15 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(224,120,48,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Editorial Description */}
          <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-full overflow-hidden border border-brand-orange bg-brand-bg-dark">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://i.ibb.co/9KxtRT9/529347835-787947203738034-4953491805845226672-n.jpg" 
                  alt="Logo Obiady Domowe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="display-font font-bold text-lg text-white leading-none">
                  Obiady Domowe
                </span>
                <span className="text-[10px] text-brand-orange uppercase tracking-wider font-bold font-mono">
                  Aleksandrów Łódzki
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 font-sans leading-relaxed mt-2 max-w-sm">
              Tradycja domowego smaku ugotowana od podstaw w sercu Aleksandrowa. Zestawy obiadowe z zupą, soczyste wołowe burgery, catering okolicznościowy. Na miejscu, na wynos i z dowozem.
            </p>

            {/* Main Facebook social link button */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100075682853773"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-300 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center shadow-sm"
                title="Facebook Profil"
                id="footer-fb-icon"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Fast Anchor Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4 border-b border-white/5 pb-2">
              Sekcje Strony
            </h4>
            <ul className="space-y-2 text-sm font-sans font-medium text-neutral-400">
              {[
                { id: 'home', label: 'Strona Główna' },
                { id: 'menu', label: 'Dzisiejsza Karta Dań' },
                { id: 'chalkboard', label: 'Nasze Specjały' },
                { id: 'gallery', label: 'Galeria Potraw' },
                { id: 'reviews', label: 'Opinie Gości' },
                { id: 'contact', label: 'Kontakt i Lokalizacja' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-brand-orange hover:underline transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Contact overview details */}
          <div className="md:col-span-4 text-left font-sans">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4 border-b border-white/5 pb-2">
              Szybki Kontakt
            </h4>
            <div className="space-y-3.5 text-sm font-medium text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>plac Tadeusza Kościuszki 11, Aleksandrów Łódzki</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+48600707090" className="text-white hover:text-brand-orange font-bold font-mono">
                  600 707 090
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:bombel7896@gmail.com" className="hover:text-brand-orange font-mono text-xs">
                  bombel7896@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-5 p-3 rounded bg-neutral-800/40 border border-white/5 text-xs text-neutral-400">
              <span className="font-bold text-brand-orange-light">Zamówienia i Catering:</span> Zadzwoń pod numer komórkowy lub napisz na skrzynkę pocztową.
            </div>
          </div>

        </div>

        {/* Lower credit & Copyright */}
        <div className="border-t border-white/5 pt-8 mt-12 text-xs text-neutral-500 font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Obiady Domowe Aleksandrów Łódzki. Wszelkie prawa zastrzeżone.</p>
          <p className="flex items-center gap-1">
            <span>Ugotowane z</span>
            <Heart className="w-3 h-3 text-brand-orange fill-brand-orange shrink-0 animate-pulse" />
            <span>dla Waszych Brzuchów</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
