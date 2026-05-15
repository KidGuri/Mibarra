"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const foodImages = [
  { src: "/images/food/seafood-spread.png", label: { es: "Marisco fresco", en: "Fresh seafood" }, wide: true },
  { src: "/images/food/octopus.png", label: { es: "Pulpo a la gallega", en: "Galician-style octopus" } },
  { src: "/images/food/gazpacho-manchego.png", label: { es: "Gazpacho manchego", en: "Manchego gazpacho" } },
  { src: "/images/food/sardines.png", label: { es: "Sardinas a la brasa", en: "Grilled sardines" } },
  { src: "/images/food/mussels.png", label: { es: "Mejillones al vapor", en: "Steamed mussels" } },
  { src: "/images/food/ensaladilla.png", label: { es: "Ensaladilla rusa", en: "Russian salad" } },
  { src: "/images/food/croquetas.png", label: { es: "Croquetas caseras", en: "Homemade croquettes" } },
  { src: "/images/food/squid.png", label: { es: "Sepia a la plancha", en: "Grilled cuttlefish" }, wide: true },
  { src: "/images/food/dessert.png", label: { es: "Brownie de chocolate", en: "Chocolate brownie" } },
  { src: "/images/food/salad.png", label: { es: "Ensalada Mibarra", en: "Mibarra salad" } },
  { src: "/images/food/octopus2.png", label: { es: "Pulpo a la brasa", en: "Chargrilled octopus" } },
  { src: "/images/food/scallops.png", label: { es: "Zamburiñas a la plancha", en: "Grilled scallops" }, wide: true },
  { src: "/images/food/salad2.png", label: { es: "Ensalada mixta", en: "Mixed salad" } },
  { src: "/images/food/scallops2.png", label: { es: "Zamburiñas", en: "Scallops" } },
];

export default function FoodGallery() {
  const { lang, t } = useLanguage();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {t("Nuestra cocina", "Our cuisine")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight">
            {t("Sabores del Mediterráneo", "Mediterranean flavours")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {foodImages.map((img, i) => (
            <div
              key={img.src}
              className={`reveal reveal-delay-${(i % 4) + 1} relative overflow-hidden group ${
                img.wide ? "col-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.label.en}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 right-4 text-sm text-white font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                {lang === "es" ? img.label.es : img.label.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
