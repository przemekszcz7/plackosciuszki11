import React from 'react';
import { Calendar, Sparkles, ChefHat, Heart } from 'lucide-react';

export default function ChalkboardSpecial() {
  return (
    <section id="chalkboard" className="py-20 bg-brand-bg-section border-t border-b border-brand-grey/10 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3a3a3a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="mono-font uppercase tracking-[0.18em] text-brand-orange text-xs font-bold block mb-3">
            · NASZ POMYSŁ
          </span>
          <h2 className="display-font font-bold text-3xl md:text-5xl text-brand-text mb-4 section-underline">
            Codzienne Przyrzadzanie
          </h2>
          <p className="text-brand-text-muted text-sm font-sans mt-3">
            U nas nie ma mrożonek ani chemii. Gotujemy rano, sprzedajemy do wyczerpania zapasów. Prawdziwe domowe smaki, na których się wychowaliśmy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bistro Chalkboard Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="chalkboard-card rounded-2xl p-6 md:p-10 shadow-xl flex-1 flex flex-col relative overflow-hidden" id="bistro-chalkboard">
              
              {/* Outer classic frame lines */}
              <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-lg" />

              {/* Decorative Header elements */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 relative">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange animate-bob">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="display-font font-bold text-xl text-white">Nasze Specjały</h3>
                    <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">Menu zmienne · Szefowa Kuchni</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-brand-orange-light font-bold font-mono tracking-widest uppercase">Zawsze Świeże</span>
                </div>
              </div>

              {/* Hand-written styled menu list */}
              <div className="space-y-6 flex-1 text-white relative">
                <div className="grid sm:grid-cols-2 gap-6 font-semibold">
                  <div>
                    <h4 className="chalkboard-font text-brand-orange-light text-2xl mb-2">Tradycja na Talerzu</h4>
                    <ul className="space-y-2.5 text-zinc-300 antialiased font-sans font-medium text-sm">
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Kotlet Schabowy (tradycyjny gigant)</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Puszyste Pulpety w sosie koperkowym</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Domowe Gołąbki w sosie pomidorowym</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Rolada Wołowa z kluskami śląskimi</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="chalkboard-font text-brand-orange-light text-2xl mb-2">Nasze Autorskie Szybkie</h4>
                    <ul className="space-y-2.5 text-zinc-300 antialiased font-sans font-medium text-sm">
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Burgery 100% wołowiny (chrupiąca buła)</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Chrupiące skrzydełka z frytkami</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Polędwiczki chrupkie oraz Nuggetsy</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-brand-orange-light">·</span>
                        <span>Przekąski i sosy robione od podstaw</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5 mt-6">
                  {/* Heartwarming chef note in full Caveat layout */}
                  <div className="p-4 rounded-xl bg-neutral-900/40 border border-white/5">
                    <p className="chalkboard-font text-white text-xl md:text-2xl leading-relaxed text-center italic">
                      "Nie ma nic piękniejszego niż zapach świeżo ugotowanej zupy rosołowej o poranku. Wszystkie nasze potrawy gotujemy na maśle i warzywach z lokalnych rynków Aleksandrowa. Karminy Was tak, jak sami chcielibyśmy jeść!"
                    </p>
                    <p className="chalkboard-font text-brand-orange-light text-right text-lg mt-1 mr-4">
                      — Mama i Córka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Content Info Box - Catering and Pricing layout */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Box 1: Pricing Detail in Bistro Card */}
            <div className="bistro-card-light p-6 md:p-8 flex flex-col justify-between flex-1" id="chalkboard-catering-info">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="display-font font-bold text-xl text-brand-text">Catering Okolicznościowy</h4>
                </div>
                <p className="text-brand-text-muted text-sm leading-relaxed font-sans mb-4">
                  Planujesz komunię, chrzciny, uroczysty obiad rodzinny lub pyszne spotkanie firmowe? Obsługujemy kompleksowo imprezy cateringowe. Dostarczamy gorące, świeże półmiski jedzenia bezpośrednio pod Twoje drzwi.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    <span>Dostosowanie menu pod gusta gości</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    <span>Możliwość dowozu na wyznaczoną godzinę</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    <span>Tradycyjne polskie smaki oraz zimna płyta</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-grey/10 pt-4 mt-6 flex items-center justify-between">
                <span className="text-xs text-brand-text-muted font-bold font-mono uppercase tracking-wider">Planujesz imprezę?</span>
                <a
                  href="tel:+48600707090"
                  className="px-4 py-2 bg-brand-orange hover:bg-brand-orange-deep text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Skontaktuj się
                </a>
              </div>
            </div>

            {/* Box 2: Quality trust points */}
            <div className="p-6 md:p-7 rounded-2xl bg-brand-bg-dark border border-white/5 flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-orange-light shrink-0">
                <Heart className="w-5 h-5 animate-pulse" />
              </div>
              <div className="font-sans">
                <h4 className="font-bold text-sm text-brand-orange-light uppercase tracking-wider">Nasza Gwarancja</h4>
                <p className="text-xs text-neutral-300 mt-1">
                  100% świeżości każdego dnia. Jeśli dane danie się wyprzeda – znika z tablicy. To gwarancja, że zawsze jesz to, co ugotowane dzisiaj.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
