import React from 'react';
import { Phone, ArrowRight, ShoppingBag, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:py-24 bg-brand-bg-dark text-white overflow-hidden"
    >
      {/* Background decoration - subtle warm atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(224,120,48,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />

      {/* Decorative vertical guidelines for that professional bistro look */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/5 hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-white/5 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        {/* Centered layout for a pristine, premium presentation of culinary text details */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 animate-fade-in">
          
          {/* Simple elegant tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-brand-orange-light rounded-md text-[11px] font-bold uppercase tracking-[0.2em] mono-font border border-white/10" id="hero-domowe-badge">
            <span>PLAC TADEUSZA KOŚCIUSZKI 11</span>
          </div>

          {/* Clamped Heading with elegant font pairing */}
          <h1 
            className="display-font font-black text-white leading-[1.1] tracking-tight text-balance text-center"
            style={{ fontSize: 'clamp(2.5rem, 5.8vw, 4.8rem)' }}
            id="hero-main-title"
          >
            Domowe Obiady <br />
            <span className="text-brand-orange">jak u Mamy</span>
          </h1>

          {/* Subtext description with custom style */}
          <p className="text-neutral-300 text-base md:text-lg font-sans font-medium leading-relaxed max-w-2xl mx-auto text-balance">
            Wyjątkowa, tradycyjna kuchnia polska w sercu Aleksandrowa Łódzkiego. Codziennie gotujemy od podstaw puszyste schabowe, gołąbki, a także soczyste Burgery wołowe i chrupiące skrzydełka. Na miejscu, na wynos i z dowozem.
          </p>

          {/* Clean, premium horizontal feature highlight - 35zł package */}
          <div className="flex flex-col sm:flex-row items-center gap-4 py-3.5 px-5 rounded-xl bg-neutral-900/80 border border-brand-orange/20 shadow-md w-full max-w-lg mt-2 text-left">
            <div className="w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center shrink-0">
              <span className="text-brand-orange font-bold text-sm">35</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono font-bold">Codzienny zestaw dnia</div>
              <div className="text-sm font-bold text-white">Gorąca Zupa + Sycące Drugie Danie</div>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-2xl font-black text-brand-orange font-mono">35 zł</span>
            </div>
          </div>

          {/* Fast facts */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-mono mt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Na miejscu
            </span>
            <span className="flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-brand-orange" />
              Na wynos & Z dowozem
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              Wt-Nd: od 12:00
            </span>
          </div>

          {/* Call to Actions - aligned, high-contrast, uncluttered */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <button
              onClick={scrollToMenu}
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-deep text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
              id="hero-cta-menu"
            >
              <span>Sprawdź Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+48600707090"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 transition-all duration-200 flex items-center justify-center gap-2"
              id="hero-cta-call"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Zadzwoń: 600 707 090</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
