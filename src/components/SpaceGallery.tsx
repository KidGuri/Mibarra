"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const images = [
  { src: "/images/restaurant/interior-art.png", alt: "Interior with art" },
  { src: "/images/restaurant/terrace-busy.png", alt: "Busy terrace" },
  { src: "/images/restaurant/terrace-empty.png", alt: "Terrace seating" },
  { src: "/images/restaurant/harbor-view.png", alt: "Harbor view from inside" },
  { src: "/images/restaurant/sunset-port.png", alt: "Sunset at the port" },
  { src: "/images/restaurant/exterior-night.png", alt: "Exterior at night" },
];

export default function SpaceGallery() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {t("Nuestro espacio", "Our space")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight">
            {t(
              "Un rincón junto al mar",
              "A corner by the sea"
            )}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative overflow-hidden group ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
