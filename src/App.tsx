import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChalkboardSpecial from './components/ChalkboardSpecial';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen selection:bg-brand-orange selection:text-white antialiased">
      {/* Decorative top accent stripe requested by design palette */}
      <div className="h-1 w-full bg-brand-orange fixed top-0 left-0 z-50" />

      {/* Styled Navigation Bar */}
      <Header />

      {/* Hero Welcome banner */}
      <Hero />

      {/* Restaurant menu card listing */}
      <main>
        {/* Menu Grid section */}
        <MenuSection />

        {/* Chalkboard handwritten specials section */}
        <ChalkboardSpecial />

        {/* Picture gallery with interactive lightbox */}
        <GallerySection />

        {/* Facebook opinions layout */}
        <ReviewsSection />

        {/* Exact Directions & Maps integration & Contact */}
        <ContactSection />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
