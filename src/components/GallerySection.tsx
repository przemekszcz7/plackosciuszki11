import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data';
import { Maximize2, X, ChevronRight, ChevronLeft, Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const DISPLAY_PHOTOS = GALLERY_PHOTOS.slice(0, 12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (url: string) => {
    const originalIndex = DISPLAY_PHOTOS.findIndex(photo => photo.url === url);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % DISPLAY_PHOTOS.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + DISPLAY_PHOTOS.length) % DISPLAY_PHOTOS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-bg-warm/40 border-t border-b border-brand-grey/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(224,120,48,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="mono-font uppercase tracking-[0.18em] text-brand-orange text-xs font-bold block mb-3">
            · NASZ TALERZ
          </span>
          <h2 className="display-font font-bold text-3xl md:text-5xl text-brand-text mb-4 section-underline" id="gallery-primary-title">
            Domowa Galeria Smaków
          </h2>
          <p className="text-brand-text-muted text-sm font-sans mt-3 leading-relaxed">
            Prawdziwe, nieupiększane niczym zdjęcia naszych codziennych dań ugotowanych bezpośrednio w kuchni przy placu Kościuszki 11. Tradycja, która broni się sama.
          </p>
        </div>

        {/* Clean, perfectly even aesthetic layout - no filters/categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery-grid">
          {DISPLAY_PHOTOS.map((photo, index) => (
            <div
              key={photo.url}
              onClick={() => openLightbox(photo.url)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-200 border border-brand-grey/10 aspect-[4/3] shadow-sm transition-all duration-350 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:border-brand-orange/40"
            >
              {/* Image element with required referrerPolicy */}
              <img
                src={photo.url}
                alt={photo.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Refined clean hover effect - NO descriptions as requested */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-all duration-300 ease-out">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal representation */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
            id="gallery-lightbox-modal"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-15">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                <ImageIcon className="w-4 h-4 text-brand-orange" />
                <span>ZDJĘCIE {lightboxIndex + 1} z {DISPLAY_PHOTOS.length}</span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                title="Zamknij"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Showcase Content */}
            <div
              className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Image trigger */}
              <button
                onClick={showPrev}
                className="absolute left-1 md:-left-16 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white active:scale-95 transition-all z-10 cursor-pointer"
                title="Poprzednie"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Main Expanded Image */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 max-h-[75vh]">
                <img
                  src={DISPLAY_PHOTOS[lightboxIndex].url}
                  alt="Powiększone danie"
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Next Image trigger */}
              <button
                onClick={showNext}
                className="absolute right-1 md:-right-16 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white active:scale-95 transition-all z-10 cursor-pointer"
                title="Następne"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
