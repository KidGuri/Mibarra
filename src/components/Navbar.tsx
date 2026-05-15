"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t("Nosotros", "About") },
    { href: "#menu", label: t("Carta", "Menu") },
    { href: "#gallery", label: t("Galería", "Gallery") },
    { href: "#reviews", label: t("Opiniones", "Reviews") },
    { href: "#contact", label: t("Contacto", "Contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Image src="/images/logo-white.png" alt="mibarra" width={140} height={30} className="h-6 md:h-7 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="ml-4 px-3 py-1 border border-card-border rounded text-xs tracking-widest uppercase text-muted hover:text-foreground hover:border-accent transition-all duration-300"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1 border border-card-border rounded text-xs tracking-widest uppercase text-muted"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-card-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
