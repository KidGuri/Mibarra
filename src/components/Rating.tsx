"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Rating() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowH) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * 120);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-[-60px] will-change-transform" style={{ transform: `translateY(${offset}px)` }}>
        <Image
          src="/images/restaurant/sunset-rating.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">
            Google Reviews
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-6xl md:text-7xl font-extralight text-white">
              4.0
            </span>
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5">
                  <defs>
                    <linearGradient id="half">
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" />
                </svg>
              </div>
              <span className="text-white/60 text-sm mt-1">
                613 {t("opiniones", "reviews")}
              </span>
            </div>
          </div>
          <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed mt-4">
            {t(
              "La confianza de nuestros clientes es nuestro mejor reconocimiento. Gracias por elegirnos.",
              "The trust of our guests is our greatest reward. Thank you for choosing us."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
