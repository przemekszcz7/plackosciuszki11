import React, { useState } from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Sparkles, Soup, Flame, Heart, Info } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'obiady' | 'burgery' | 'inne'>('all');

  const filteredItems = activeTab === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'obiady':
        return <Soup className="w-4 h-4 text-brand-orange" />;
      case 'burgery':
        return <Flame className="w-4 h-4 text-brand-orange animate-pulse" />;
      default:
        return <Sparkles className="w-4 h-4 text-brand-orange" />;
    }
  };

  return (
    <section id="menu" className="py-24 bg-brand-bg relative overflow-hidden">
      
      {/* Decorative vertical border lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-brand-grey/5 hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-brand-grey/5 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading with required styling details */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="mono-font uppercase tracking-[0.18em] text-brand-orange text-xs font-bold block mb-3">
            · NASZA OFERTA
          </span>
          <h2 className="display-font font-bold text-3xl md:text-5xl text-brand-text mb-4 section-underline" id="menu-primary-title">
            Codzienne Menu Obiadowe
          </h2>
          <p className="text-brand-text-muted text-sm font-sans mt-3">
            Tradycyjna polska kuchnia przygotowana z pasją. Nasza specjalność to kultowy zestaw dnia za 35 zł oraz soczyste domowe burgery i chrupiące skrzydełka.
          </p>
        </div>

        {/* Categories Tab Selector with slide and hover effects */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 sm:mb-16">
          {[
            { id: 'all', label: 'Wszystkie Dania' },
            { id: 'obiady', label: 'Obiady Domowe' },
            { id: 'burgery', label: 'Burgery Wołowe' },
            { id: 'inne', label: 'Inne & Catering' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/15 scale-105'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-brand-grey-mid'
              }`}
              id={`menu-tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Promo banner: Obiad w cenie 35zł zestaw z zupą */}
        <div className="mb-14 p-6 md:p-8 rounded-2xl bg-brand-cream border border-brand-orange/20 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full -mr-6 -mt-6 pointer-events-none" />
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
              <Soup className="w-6 h-6" />
            </div>
            <div>
              <span className="mono-font text-[10px] text-brand-orange font-bold uppercase tracking-wider block">Codzienna Okazja</span>
              <h3 className="display-font font-bold text-lg md:text-xl text-brand-text mt-0.5">
                Pełny dwudaniowy zestaw obiadów domowych
              </h3>
              <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                Zawsze świeża, gorąca zupa z naturalnych warzyw oraz sycące drugie danie z dodatkami i zestawem surówek.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right shrink-0">
            <span className="text-[10px] text-brand-text-muted uppercase tracking-wider block font-bold">zupa + drugie danie</span>
            <span className="mono-font text-brand-orange font-bold text-3xl block leading-none mt-1">35 zł</span>
            <span className="text-[9px] px-2 py-0.5 bg-brand-orange/10 text-brand-orange font-mono rounded mt-2 inline-block">Codziennie od 12:00</span>
          </div>
        </div>

        {/* Dynamic Menu Grid utilizing custom light bistro cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10" id="menu-items-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bistro-card-light p-6 md:p-8 flex flex-col justify-between transition-transform"
            >
              <div>
                {/* Header of Item */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {getIconForCategory(item.category)}
                    <h3 className="display-font font-bold text-lg md:text-xl text-brand-text leading-tight group-hover:text-brand-orange">
                      {item.name}
                    </h3>
                  </div>
                  <span className="mono-font text-brand-orange font-bold text-base whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                {/* Badges and short specs */}
                {item.badge && (
                  <div className="mt-2.5">
                    <span className="inline-block text-[10px] font-mono uppercase bg-brand-orange-pale text-brand-orange-deep px-2 py-0.5 rounded font-bold">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Description */}
                {item.description && (
                  <p className="text-brand-text-muted text-sm mt-3.5 leading-relaxed font-sans font-medium">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Special tags based on categories in footer of cards */}
              <div className="border-t border-brand-grey/5 pt-4 mt-6 flex items-center justify-between text-xs text-brand-text-muted font-sans font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>Świeżo przygotowane w lokalu</span>
                </span>
                <span className="italic">Plac Kościuszki 11</span>
              </div>
            </div>
          ))}
        </div>

        {/* Small Disclaimer */}
        <div className="text-center mt-12 text-[11px] text-brand-text-muted font-sans flex items-center justify-center gap-1.5 max-w-md mx-auto">
          <Info className="w-3.5 h-3.5 text-brand-orange shrink-0" />
          <span>Informacje o alergenach oraz opcjach dnia uzyskasz dzwoniąc bezpośrednio pod numer <strong className="text-brand-text">600 707 090</strong>.</span>
        </div>

      </div>
    </section>
  );
}
