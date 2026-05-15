"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden">
              <Image
                src="/images/paella-hero.png"
                alt="Paella at Mibarra"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              {t("Nuestra esencia", "Our essence")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight leading-relaxed mb-8">
              {t(
                "Donde la brisa del puerto se funde con el aroma de la brasa",
                "Where the harbour breeze meets the aroma of the grill"
              )}
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              {t(
                "En Mibarra, cada plato nace de la tradición mediterránea y la pasión por los productos frescos del mar. Ubicados en la avenida marítima de Santa Pola, frente al puerto pesquero, ofrecemos una experiencia gastronómica donde el sabor auténtico y el ambiente relajado se encuentran.",
                "At Mibarra, every dish is born from Mediterranean tradition and a passion for fresh seafood. Located on Santa Pola's maritime avenue, facing the fishing port, we offer a gastronomic experience where authentic flavour and a relaxed atmosphere meet."
              )}
            </p>
            <p className="text-muted leading-relaxed mb-8">
              {t(
                "Nuestra terraza ventilada con vistas al muelle, los arroces tradicionales, el marisco fresco y las carnes a la brasa hacen de cada visita un momento para compartir con los tuyos.",
                "Our breezy terrace with views of the dock, traditional rice dishes, fresh seafood and chargrilled meats make every visit a moment to share with your loved ones."
              )}
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-extralight text-accent">+10</p>
                <p className="text-xs tracking-widest uppercase text-muted mt-1">
                  {t("Años de experiencia", "Years of experience")}
                </p>
              </div>
              <div>
                <p className="text-3xl font-extralight text-accent">613</p>
                <p className="text-xs tracking-widest uppercase text-muted mt-1">
                  {t("Opiniones en Google", "Google reviews")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
