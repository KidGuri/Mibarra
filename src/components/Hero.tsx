"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/restaurant/exterior-night.png"
        alt="Mibarra restaurant exterior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.4em] text-white animate-fade-in-up">
          mibarra
        </h1>
        <div className="w-16 h-[1px] bg-accent mx-auto mt-8 animate-fade-in-up-delay" />
        <p className="mt-6 text-lg md:text-xl font-light tracking-widest text-white/80 uppercase animate-fade-in-up-delay-2">
          {t(
            "Cocina mediterránea junto al puerto",
            "Mediterranean cuisine by the harbour"
          )}
        </p>
        <p className="mt-3 text-sm tracking-widest text-white/60 animate-fade-in-up-delay-2">
          Santa Pola, Alicante
        </p>
        <a
          href="#about"
          className="inline-block mt-12 px-8 py-3 border border-white/30 text-sm tracking-[0.2em] uppercase text-white/90 hover:bg-white/10 hover:border-accent transition-all duration-500 animate-fade-in-up-delay-2"
        >
          {t("Descubrir", "Discover")}
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
