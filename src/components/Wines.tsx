"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface WineItem {
  name: string;
  desc: string;
}

interface WineCategory {
  title: { es: string; en: string };
  items: WineItem[];
}

const wineData: WineCategory[] = [
  {
    title: { es: "Nuestros Tintos", en: "Our Red Wines" },
    items: [
      { name: "Enrique Mendoza", desc: "(Alicante) pinot noir 12 meses" },
      { name: "Enrique Mendoza", desc: "(Alicante) cabernet, monastrell 12 meses" },
      { name: "Nauta", desc: "(Alicante) monastrell 8 meses" },
      { name: "Mauro", desc: "(Castilla y León) tempranillo, shyraz" },
      { name: "Juan Gil Etiqueta Amarilla", desc: "(Jumilla) monastrell 4 meses" },
      { name: "Juan Gil Etiqueta Plata", desc: "(Jumilla) monastrell 12 meses" },
      { name: "La Planta", desc: "(Ribera del Duero) tinto fino" },
      { name: "Finca Resalso E. Moro", desc: "(Ribera del Duero) tinta fina" },
      { name: "Pago de Capellanes Roble", desc: "(Ribera del Duero) tempranillo" },
      { name: "Pago de Capellanes Crianza", desc: "(Ribera del Duero) tempranillo" },
    ],
  },
  {
    title: { es: "Nuestros Blancos", en: "Our White Wines" },
    items: [
      { name: "Sembro", desc: "(Ribera del Duero) tempranillo" },
      { name: "Marina Alta", desc: "(Alicante) moscatel de alejandría" },
      { name: "Azpilicueta", desc: "(Rioja) tempranillo, graciano, mazuelo" },
      { name: "Enrique Mendoza", desc: "(Alicante) chardonnay" },
      { name: "Luis Cañas", desc: "(Rioja) tempranillo" },
      { name: "Fruto Noble", desc: "(Alicante) sauvignon blanc" },
      { name: "Luis Cañas Crianza", desc: "(Rioja) tempranillo, garnacha" },
      { name: "Viña Sol Torres", desc: "(Cataluña) garnacha blanca, parellada" },
      { name: "Muga Crianza", desc: "(Rioja) tempranillo, garnacha, mazuelo, graciano" },
      { name: "Viña Esmeralda", desc: "(Cataluña) gewürztraminer, moscatel" },
      { name: "Ramón Bilbao", desc: "(Rioja) tempranillo" },
      { name: "Viñas de Anna Blanc de Blancs", desc: "(Cataluña) chardonnay, moscato" },
      { name: "Ramón Bilbao Ed. Limitada", desc: "(Rioja) tempranillo" },
      { name: "Txomin Etxaniz", desc: "(Getariako Txakolina) hondarribi zuri y hondarribi beltza" },
      { name: "Mar de Frades", desc: "(Rías Baixas) albariño" },
      { name: "Blanquito", desc: "(Rías Baixas) albariño, treixadura, caiño, loureiro y godello" },
      { name: "Luis Cañas", desc: "(Rioja) malvasía y viura" },
      { name: "Oropéndola", desc: "(Rueda) verdejo" },
      { name: "José Pariente", desc: "(Rueda) verdejo" },
    ],
  },
  {
    title: { es: "Nuestros Rosados", en: "Our Rosé Wines" },
    items: [
      { name: "Agustí Torelló Mata Xic Vermell", desc: "" },
      { name: "Cesilia Rosé", desc: "(Alicante) monastrell, shiraz, merlot" },
      { name: "Gran Feudo", desc: "(Navarra) garnacha" },
      { name: "Ochoa Rosado de Lágrima", desc: "(Navarra) garnacha" },
    ],
  },
  {
    title: { es: "Cavas", en: "Cavas" },
    items: [
      { name: "Agustí Torelló Mata Xic", desc: "(Penedés) xarel.lo" },
      { name: "Anna Codorníu Brut Nature", desc: "(Cava) chardonnay, parellada, xarello, macabeo" },
      { name: "Anna Codorníu Blanc de Blancs", desc: "(Cava) chardonnay, parellada, xarello, macabeo" },
      { name: "Gramona Imperial Gran Reserva", desc: "(Cava) xarel.lo, macabeo, chardonnay" },
    ],
  },
  {
    title: { es: "Champagne", en: "Champagne" },
    items: [
      { name: "Moët Chandon", desc: "Brut imperial, pinot noir" },
      { name: "Moët Chandon Rosé", desc: "Pinot meunier, chardonnay" },
    ],
  },
];

const wineTabs = [
  { key: "tintos", index: 0 },
  { key: "blancos", index: 1 },
  { key: "rosados", index: 2 },
  { key: "cavas", index: 3 },
  { key: "champagne", index: 4 },
];

export default function Wines() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("tintos");

  const activeCat = wineData[wineTabs.find((wt) => wt.key === activeTab)?.index ?? 0];

  return (
    <section className="py-24 md:py-32 bg-card-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {t("Bodega", "Wine cellar")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight">
            {t("Vinos y Cavas", "Wines & Cavas")}
          </h2>
        </div>

        <div className="reveal reveal-delay-1 flex flex-wrap justify-center gap-2 md:gap-4 mb-12 border-b border-card-border pb-4">
          {wineTabs.map((wt) => (
            <button
              key={wt.key}
              onClick={() => setActiveTab(wt.key)}
              className={`px-4 py-2 text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === wt.key
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {lang === "es" ? wineData[wt.index].title.es : wineData[wt.index].title.en}
            </button>
          ))}
        </div>

        <div className="reveal reveal-delay-2">
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {activeCat.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-start border-b border-card-border/50 pb-4 group"
              >
                <div>
                  <p className="text-foreground font-light tracking-wide group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </p>
                  {item.desc && (
                    <p className="text-muted text-sm mt-1">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
