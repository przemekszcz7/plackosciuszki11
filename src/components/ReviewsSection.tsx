import React from 'react';
import { REVIEWS } from '../data';
import { Star, MessageSquare, Facebook, ArrowUpRight } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-brand-grey/5 hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-brand-grey/5 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 animate-fade-in-up">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="mono-font uppercase tracking-[0.18em] text-brand-orange text-xs font-bold block mb-3">
            · OPINIE GOŚCI
          </span>
          <h2 className="display-font font-bold text-3xl md:text-5xl text-brand-text mb-4 section-underline" id="reviews-primary-title">
            Co o nas piszą na Facebooku
          </h2>
          <p className="text-brand-text-muted text-sm font-sans mt-3">
            Wasi goście mówią sami za siebie! Oto kilka z autentycznych recenzji pozostawionych przez klientów na naszym profilu społecznościowym.
          </p>
        </div>

        {/* Reviews Grid using light card styling rules strictly */}
        <div className="grid md:grid-cols-3 gap-8 mb-14" id="reviews-cards-grid">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bistro-card-light p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating Row */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-orange text-brand-orange"
                    />
                  ))}
                </div>

                {/* Body Quote */}
                <p className="text-brand-text font-sans font-medium text-sm md:text-base leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Source info */}
              <div className="border-t border-brand-grey/5 pt-5 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-orange-pale text-brand-orange-deep font-bold text-sm flex items-center justify-center font-mono shrink-0">
                    {review.avatarLetter}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-xs text-brand-text font-sans">
                      {review.author}
                    </h4>
                    <span className="text-[10px] text-brand-text-muted font-mono block mt-0.5">
                      Klient restauracji
                    </span>
                  </div>
                </div>

                {/* Facebook source microbadge */}
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-[10px] text-blue-600 font-bold font-mono">
                  <Facebook className="w-3 h-3 fill-blue-600" />
                  <span>Facebook</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-actions to Facebook profile reviews page */}
        <div className="p-6 md:p-10 rounded-2xl bg-neutral-900 text-white max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full -mr-12 -mt-12 pointer-events-none" />
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange-light shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="display-font font-bold text-lg md:text-xl text-white">
                Podziel się swoją opinią!
              </h3>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed max-w-md">
                Twoja opinia jest dla nas niezwykle ważna. Pomaga nam trzymać najwyższą jakość domowego jedzenia. Dołącz do naszej lokalnej społeczności!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://www.facebook.com/profile.php?id=100075682853773&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-deep text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
              id="reviews-view-all-fb"
            >
              <span>Zobacz opinie na FB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100075682853773"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
              id="reviews-follow-fb"
            >
              <Facebook className="w-3.5 h-3.5 fill-current text-white" />
              <span>Nasz Profil</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
