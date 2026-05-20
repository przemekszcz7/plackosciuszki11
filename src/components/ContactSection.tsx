import React from 'react';
import { OPENING_HOURS } from '../data';
import { Phone, Mail, MapPin, Clock, ExternalLink, Calendar } from 'lucide-react';

export default function ContactSection() {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday ...
  // Map JS day index to Polish list index:
  // JS Index: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  // Our list: 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat, 6=Sun
  const mappedIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <section id="contact" className="py-24 bg-brand-bg-warm/60 border-t border-brand-grey/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,120,48,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="mono-font uppercase tracking-[0.18em] text-brand-orange text-xs font-bold block mb-3">
            · KONTAKT & DOJAZD
          </span>
          <h2 className="display-font font-bold text-3xl md:text-5xl text-brand-text mb-4 section-underline" id="contact-primary-title">
            Odwiedź Nas Osobiście
          </h2>
          <p className="text-brand-text-muted text-sm font-sans mt-3">
            Czekamy na Ciebie w samym centrum Aleksandrowa Łódzkiego. Zadzwoń, zamów z dowozem pod drzwi lub wpadnij na pyszny obiad na miejscu!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Contact details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Quick Contact Info Card */}
            <div className="bistro-card-light p-6 md:p-8 flex flex-col justify-between flex-1" id="contact-details-card">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-brand-grey/5 pb-4">
                  <span className="text-[10px] uppercase font-mono text-brand-orange tracking-widest font-bold">dane kontaktowe</span>
                </div>

                <div className="space-y-5">
                  {/* Address info item */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-subtle text-brand-orange flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-left font-sans">
                      <h4 className="font-bold text-sm text-brand-text">Adres Restauracji</h4>
                      <p className="text-sm text-brand-text-muted mt-1">
                        plac Tadeusza Kościuszki 11<br />
                        95-070 Aleksandrów Łódzki gmina
                      </p>
                    </div>
                  </div>

                  {/* Phone number representation with click-to-call */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-subtle text-brand-orange flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left font-sans">
                      <h4 className="font-bold text-sm text-brand-text">Prywatny Telefon</h4>
                      <p className="text-lg font-bold text-brand-orange tracking-tight mt-1">
                        <a href="tel:+48600707090" className="hover:underline hover:text-brand-orange-deep">
                          600 707 090
                        </a>
                      </p>
                      <span className="text-[10px] text-zinc-500 font-mono">Zamówienia na wynos i dostawy</span>
                    </div>
                  </div>

                  {/* Corporate email address representation */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-subtle text-brand-orange flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left font-sans">
                      <h4 className="font-bold text-sm text-brand-text">Adres E-Mail</h4>
                      <p className="text-sm text-brand-text-muted mt-1">
                        <a href="mailto:bombel7896@gmail.com" className="hover:underline hover:text-brand-orange">
                          bombel7896@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra button */}
              <div className="mt-8 pt-5 border-t border-brand-grey/5 flex justify-end">
                <a
                  href="tel:+48600707090"
                  className="px-5 py-3 w-full sm:w-auto text-center bg-brand-orange hover:bg-brand-orange-deep text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Zadzwoń Teraz</span>
                </a>
              </div>
            </div>

            {/* Block 2: Opening Hours representing Tuesday-Sunday exact times, Monday Closed */}
            <div className="bistro-card-light p-6 md:p-8" id="contact-hours-card">
              <div className="flex items-center gap-2.5 mb-5 border-b border-brand-grey/5 pb-4">
                <Clock className="w-5 h-5 text-brand-orange" />
                <h4 className="display-font font-bold text-lg text-brand-text">Godziny Otwarcia</h4>
              </div>

              <div className="space-y-2.5">
                {OPENING_HOURS.map((hour, idx) => {
                  const isToday = idx === mappedIndex;
                  return (
                    <div
                      key={hour.dayName}
                      className={`flex items-center justify-between py-1 px-2.5 rounded-lg text-sm transition-all duration-200 ${
                        isToday
                          ? 'bg-brand-orange/10 font-bold border-l-4 border-brand-orange'
                          : 'text-brand-text-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="text-[9px] px-1.5 py-0.5 bg-brand-orange text-white rounded uppercase tracking-wider scale-90">dziś</span>}
                        <span className={isToday ? 'text-brand-text' : ''}>{hour.dayName}</span>
                      </div>
                      <span
                        className={`mono-font text-xs ${
                          hour.isClosed
                            ? 'text-red-500 font-bold'
                            : isToday ? 'text-brand-orange font-bold' : 'text-brand-text'
                        }`}
                      >
                        {hour.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column 2: Exact Google Maps Iframe Embed responsive map with link */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bistro-card-light p-4 flex flex-col h-full overflow-hidden" id="google-maps-box">
              
              {/* Outer frame helper */}
              <div className="flex items-center justify-between mb-3 px-1 font-mono text-xs text-brand-text-muted">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-brand-orange shrink-0" /> plac Tadeusza Kościuszki 11</span>
                <a
                  href="https://maps.google.com/?q=Obiady+domowe+Aleksandrów+Łódzki+plac+Kościuszki+11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-brand-orange transition-colors"
                >
                  <span>Nawiguj</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Exact iframe embedded inside responsive wrapper */}
              <div className="relative rounded-xl overflow-hidden flex-1 border border-brand-grey/15 min-h-[350px] shadow-sm transform-gpu bg-neutral-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.201361807401!2d19.298939077088626!3d51.820751987763245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb5c8766819a3%3A0x5d1ace54a4b31a05!2sObiady%20domowe%20Aleksandr%C3%B3w%20%C5%81%C3%B3dzki%20plac%20Ko%C5%9Bciuszki%2011.%20Restauracja!5e0!3m2!1spl!2spl!4v1779270425059!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa dojazdu do Obiady Domowe Aleksandrów Łódzki"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
