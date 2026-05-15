"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-card-bg border-t border-card-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {t("Encuéntranos", "Find us")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight">
            {t("Contacto", "Contact")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center reveal reveal-delay-1">
            <div className="w-12 h-12 rounded-full border border-card-border flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="text-foreground font-light tracking-wider mb-2">
              {t("Dirección", "Address")}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Avda. de los Baños<br />
              03130 Santa Pola, Alicante
            </p>
          </div>

          <div className="text-center reveal reveal-delay-2">
            <div className="w-12 h-12 rounded-full border border-card-border flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3 className="text-foreground font-light tracking-wider mb-2">
              {t("Teléfono", "Phone")}
            </h3>
            <a href="tel:+34965589582" className="text-muted text-sm hover:text-accent transition-colors">
              +34 965 58 95 82
            </a>
          </div>

          <div className="text-center reveal reveal-delay-3">
            <div className="w-12 h-12 rounded-full border border-card-border flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3 className="text-foreground font-light tracking-wider mb-2">
              {t("Síguenos", "Follow us")}
            </h3>
            <a
              href="https://www.instagram.com/mibarra.santapola/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-sm hover:text-accent transition-colors"
            >
              @mibarra.santapola
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.5!2d-0.5647!3d38.1908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b5a26b7c2e4d%3A0x7b25a17be2d1e6a4!2sMibarra!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mibarra location"
          />
        </div>
      </div>
    </section>
  );
}
