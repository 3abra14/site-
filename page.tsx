'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroCinematic = dynamic(() => import('@/components/HeroCinematic'), { ssr: false });
const BookingFlow = dynamic(() => import('@/components/Booking/BookingFlow'), { ssr: false });
const BlueprintPattern = dynamic(() => import('@/components/Booking/BlueprintPattern'), { ssr: false });

export default function Home() {
  const expertiseRef = useRef<HTMLElement>(null);
  const bookingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal expertise cards on scroll
    const cards = document.querySelectorAll('.expertise-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.12,
        }
      );
    });

    // Reveal section headers
    document.querySelectorAll('.gsap-reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Booking section entrance
    if (bookingRef.current) {
      gsap.fromTo(bookingRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: bookingRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-bg">
      {/* ═══ HERO ═══ */}
      <HeroCinematic />

      {/* ═══ About Section ═══ */}
      <section
        ref={expertiseRef}
        className="relative z-10 py-28 sm:py-36 px-6 sm:px-12"
        style={{
          background: 'linear-gradient(180deg, #0c0a09 0%, #110e0c 30%, #0c0a09 100%)',
        }}
      >
        <div className="noise-overlay" />

        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="gsap-reveal text-meta block mb-4">About</span>
            <h2 className="gsap-reveal text-editorial text-4xl sm:text-5xl md:text-6xl text-champagne mb-6">
              Dr. Mohammed <span className="italic font-light opacity-80">El.Fahar</span>
            </h2>
            <div className="gsap-reveal hairline max-w-[120px] mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 gsap-reveal relative">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-champagne/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
                <img 
                  src="/prof.jpg" 
                  alt="Prof. Mohammed El Fahar" 
                  className="w-full h-full object-cover transition-all duration-1000 ease-out hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-peach/5 blur-3xl rounded-full" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-10 text-left">
              <div className="gsap-reveal">
                <h3 className="text-xl sm:text-2xl text-champagne/90 font-serif italic mb-4">
                  Professor of Plastic Surgery <br />
                  <span className="text-peach/80 text-lg sm:text-xl font-sans not-italic font-light uppercase tracking-widest mt-2 block">
                    &amp; Consultant Microsurgeon
                  </span>
                </h3>
                <p className="text-champagne/60 text-sm sm:text-base leading-loose font-sans">
                  Prof. Mohammed El Fahar is a member of the American Society of Plastic Surgeons (ASPS) and the European Board of Plastic Surgery. Based in Mansoura, he specializes in high-precision reconstructive surgery and advanced microsurgery.
                </p>
              </div>

              <div className="gsap-reveal">
                <h4 className="text-xs uppercase tracking-[0.2em] text-champagne/40 mb-6 border-b border-champagne/10 pb-4">
                  Core Specializations
                </h4>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-5 group">
                    <span className="text-peach/40 font-mono text-xs mt-1 transition-colors group-hover:text-peach">01</span>
                    <div>
                      <strong className="block text-champagne/90 font-serif tracking-wide mb-1.5 transition-colors group-hover:text-white">Advanced Microsurgery</strong>
                      <span className="text-champagne/50 text-sm leading-relaxed">Expertise in Super Microsurgery and surgical treatments for Lymphoedema.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 group">
                    <span className="text-peach/40 font-mono text-xs mt-1 transition-colors group-hover:text-peach">02</span>
                    <div>
                      <strong className="block text-champagne/90 font-serif tracking-wide mb-1.5 transition-colors group-hover:text-white">Pediatric Reconstruction</strong>
                      <span className="text-champagne/50 text-sm leading-relaxed">Specialized care for Pediatric Microsurgery and complex Hand Reconstruction.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 group">
                    <span className="text-peach/40 font-mono text-xs mt-1 transition-colors group-hover:text-peach">03</span>
                    <div>
                      <strong className="block text-champagne/90 font-serif tracking-wide mb-1.5 transition-colors group-hover:text-white">Breast Reconstruction</strong>
                      <span className="text-champagne/50 text-sm leading-relaxed">Advanced perforator flap techniques, including DIEP, SGAP, IGAP, PAP, and TUG.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-5 group">
                    <span className="text-peach/40 font-mono text-xs mt-1 transition-colors group-hover:text-peach">04</span>
                    <div>
                      <strong className="block text-champagne/90 font-serif tracking-wide mb-1.5 transition-colors group-hover:text-white">Complex Restoration</strong>
                      <span className="text-champagne/50 text-sm leading-relaxed">Includes Intraoral, Head, and Neck reconstruction, Facial Nerve Reanimation, and Vascularized bone grafts.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Transition Divider ═══ */}
      <div className="relative h-32 sm:h-48">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #110e0c 0%, #0c0a09 50%, #0a0806 100%)',
          }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="hairline-v h-20" />
        </div>
      </div>

      {/* ═══ Booking Section ═══ */}
      <section
        ref={bookingRef}
        id="booking"
        className="relative py-24 sm:py-40 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0806 0%, #0c0a09 30%, #0c0a09 100%)',
        }}
      >
        <div className="noise-overlay" />
        <BlueprintPattern />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* Left Column: Typography */}
          <div className="flex flex-col justify-center text-left relative min-h-[300px] lg:min-h-[400px]">
            <h2 className="gsap-reveal flex flex-col gap-4">
              <span className="text-editorial italic text-peach leading-[0.8] -ml-1 sm:-ml-2 tracking-tighter" style={{ fontSize: 'clamp(4rem, 12vw + 1rem, 10rem)' }}>
                Private <br />
                Consultation
              </span>
              <span className="text-editorial not-italic text-champagne/90 leading-[0.9] mt-6 sm:mt-8 tracking-tight" style={{ fontSize: 'clamp(2rem, 6vw + 0.5rem, 6.5rem)' }}>
                Reserve Your <br />
                <span className="italic font-light opacity-50">Architectural</span> <br />
                <span className="italic font-light opacity-80">Session</span>
              </span>
            </h2>
            
            <div className="gsap-reveal flex items-center gap-8 my-16">
              <div className="hairline w-40" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-peach/40 uppercase tracking-[0.3em]">Est. 1998</span>
                <span className="text-[9px] font-mono text-champagne/20 uppercase tracking-[0.2em]">Clinical Excellence Protocol</span>
              </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-10 -left-12 w-64 h-64 border-l border-b border-peach/5 opacity-40 hidden xl:block pointer-events-none" />
          </div>

          {/* Right Column: Booking Flow */}
          <div className="w-full relative">
            <div className="absolute -top-6 -right-6 text-[8px] font-mono text-peach/20 uppercase tracking-[0.5em] rotate-90 origin-bottom-right">
              Digital Interface v2.0
            </div>
            <BookingFlow />
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="relative py-16 px-6 border-t border-champagne/5">
        <div className="noise-overlay" />
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-serif italic text-lg text-champagne/70">Hand &amp; Body Clinic</span>
            <span className="text-champagne/25 text-xs font-sans">Dr. Mohammed El.Fahar</span>
          </div>
          <span className="text-champagne/15 text-xs font-sans tracking-wider">
            &copy; {new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </footer>
    </main>
  );
}
