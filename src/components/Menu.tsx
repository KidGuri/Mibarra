"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface MenuItem {
  name: { es: string; en: string };
  desc?: { es: string; en: string };
}

interface MenuCategory {
  title: { es: string; en: string };
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: { es: "Tapas y Aperitivos", en: "Tapas & Appetisers" },
    items: [
      { name: { es: "Pan a la Brasa con Tomate", en: "Grilled Bread with Tomato" }, desc: { es: "Con aove y tomate natural", en: "With EVOO and fresh tomato" } },
      { name: { es: "Croquetas", en: "Croquettes" }, desc: { es: "De jamón \"Joselito\" o de \"boletus\"", en: "Joselito ham or boletus mushroom" } },
      { name: { es: "Ensaladilla Clásica", en: "Classic Russian Salad" }, desc: { es: "Con mini bastón gourmet y sus virutas de bonito", en: "With gourmet breadstick and bonito shavings" } },
      { name: { es: "Ensaladilla de Merluza y Huevas de Tobiko", en: "Hake Salad with Tobiko Roe" } },
      { name: { es: "Salmorejo Cordobés", en: "Cordoban Salmorejo" } },
      { name: { es: "Lomo de Sardina Ahumada, \"Arregladita\"", en: "Smoked Sardine Loin" } },
      { name: { es: "Cocas de Verdurita Asada y Pesto", en: "Roasted Vegetable Flatbread with Pesto" } },
      { name: { es: "Patatas Bravas o All i Oli", en: "Patatas Bravas or Aioli" }, desc: { es: "Hechas en nuestras brasas", en: "Charcoal grilled" } },
      { name: { es: "Mousse de Berenjena a la Parrilla", en: "Grilled Aubergine Mousse" }, desc: { es: "Tan sencillo como natural", en: "As simple as it is natural" } },
      { name: { es: "Nachos a la Brasa", en: "Grilled Nachos" }, desc: { es: "Con carne picada y queso parmesano", en: "With minced meat and parmesan" } },
      { name: { es: "Fundido de Provolone", en: "Melted Provolone" }, desc: { es: "Tomate seco, piñones y picada de jamón", en: "Sun-dried tomato, pine nuts and chopped ham" } },
      { name: { es: "Pulpo a la Brasa con Milhoja de Patata Confitada", en: "Grilled Octopus with Potato Millefeuille" } },
      { name: { es: "Jamón Ibérico \"Joselito\"", en: "Iberian Ham \"Joselito\"" } },
      { name: { es: "Jamón de Cebo", en: "Cebo Ham" }, desc: { es: "Con pimentón de la vera, dulce o picante. 150grs", en: "With La Vera paprika, sweet or spicy. 150g" } },
      { name: { es: "Surtido de Ibéricos", en: "Iberian Cold Cuts Platter" }, desc: { es: "Jamón de cebo, lomo, salchichón y chorizo ibéricos", en: "Cebo ham, loin, salami and chorizo" } },
      { name: { es: "Surtido de Queso", en: "Cheese Platter" }, desc: { es: "Crema de queso, brie, manchego mezcla, rulo de cabra", en: "Cream cheese, brie, manchego blend, goat cheese roll" } },
      { name: { es: "Foie de Pato", en: "Duck Foie Gras" }, desc: { es: "Hecho en casa, con confituras artesanas. 100grs", en: "Homemade, with artisan preserves. 100g" } },
      { name: { es: "Almejas al Vino", en: "Clams in Wine" }, desc: { es: "Al estilo de nuestro chef", en: "Chef's style" } },
      { name: { es: "Berberechos con Jamón Ibérico", en: "Cockles with Iberian Ham" }, desc: { es: "Y ralladura de lima 100grs", en: "With lime zest. 100g" } },
    ],
  },
  {
    title: { es: "Para Compartir", en: "To Share" },
    items: [
      { name: { es: "Croquetas de Jamón", en: "Ham Croquettes" } },
      { name: { es: "Croquetas de Gamba Blanca", en: "White Prawn Croquettes" } },
      { name: { es: "Croquetas de Bacalao", en: "Cod Croquettes" } },
      { name: { es: "Zamburiñas", en: "Baby Scallops" } },
      { name: { es: "Gilda", en: "Gilda Pintxo" } },
      { name: { es: "Boquerones en Vinagre + Chips", en: "Anchovies in Vinegar + Chips" } },
      { name: { es: "Ensaladilla Rusa", en: "Russian Salad" } },
      { name: { es: "Ensaladilla de Merluza", en: "Hake Salad" } },
      { name: { es: "Ensaladilla de Pulpo", en: "Octopus Salad" } },
      { name: { es: "Patatas Bravas o Alioli", en: "Patatas Bravas or Aioli" } },
      { name: { es: "Champiñones en Salsa", en: "Mushrooms in Sauce" } },
      { name: { es: "Almejas en Salsa Verde", en: "Clams in Green Sauce" } },
      { name: { es: "Gamba Blanca Hervida 150 gr", en: "Boiled White Prawn 150g" } },
      { name: { es: "Sepia a la Plancha", en: "Grilled Cuttlefish" } },
      { name: { es: "Calamar a la Plancha", en: "Grilled Squid" } },
      { name: { es: "Calamares a la Andaluza", en: "Andalusian Fried Squid" } },
      { name: { es: "Pulpo a la Plancha", en: "Grilled Octopus" } },
      { name: { es: "Mejillones a la Brasa", en: "Chargrilled Mussels" } },
      { name: { es: "Pescadito Frito de Bahía", en: "Bay Fried Fish" } },
      { name: { es: "Pastel de Cabracho", en: "Scorpionfish Terrine" } },
    ],
  },
  {
    title: { es: "Ensaladas", en: "Salads" },
    items: [
      { name: { es: "Ensalada Mibarra", en: "Mibarra Salad" }, desc: { es: "Lechuga, canónigos, rúcula, tomate, aceitunas, cebolla tierna, huevo duro y atún", en: "Lettuce, lamb's lettuce, rocket, tomato, olives, spring onion, boiled egg and tuna" } },
      { name: { es: "Ensalada Burrata", en: "Burrata Salad" }, desc: { es: "Queso burrata, tomate seco y cherry, canónigos, frutos secos y salsa de mango", en: "Burrata cheese, sun-dried and cherry tomato, lamb's lettuce, nuts and mango sauce" } },
      { name: { es: "Ensalada de Palmito, Tomate Seco y Anchoas", en: "Heart of Palm, Sun-dried Tomato & Anchovy Salad" }, desc: { es: "Palmito, tomate seco, anchoas, tomate, lechuga, canónigos y rúcula", en: "Heart of palm, sun-dried tomato, anchovies, tomato, lettuce, lamb's lettuce and rocket" } },
      { name: { es: "Pura César", en: "Classic Caesar" }, desc: { es: "Hojas de lechuga frescas, pollo braseado, virutas de queso parmesano y nuestra deliciosa salsa casera", en: "Fresh lettuce, braised chicken, parmesan shavings and our delicious homemade dressing" } },
      { name: { es: "Tomate Trinchado de Temporada", en: "Seasonal Sliced Tomato" }, desc: { es: "Con bonito del norte y olivas negras", en: "With northern bonito and black olives" } },
      { name: { es: "Ensalada Templada", en: "Warm Salad" }, desc: { es: "Pulpo y langostinos salteados con ajito y pimiento rojo braseado, hojas de lechuga \"gourmet\" y tomate cherry", en: "Sautéed octopus and king prawns with garlic and braised red pepper, gourmet lettuce and cherry tomato" } },
      { name: { es: "Ensalada de Queso de Cabra", en: "Goat Cheese Salad" }, desc: { es: "Fresitas y vinagreta de mango", en: "Strawberries and mango vinaigrette" } },
    ],
  },
  {
    title: { es: "Fritos Pero No Aceitosos...", en: "Fried But Not Greasy..." },
    items: [
      { name: { es: "Buñuelos de Bacalao", en: "Cod Fritters" } },
      { name: { es: "Cartucho de Calamares Andaluza", en: "Andalusian Squid Cone" } },
      { name: { es: "Cartucho de Pescadito de la Bahía", en: "Bay Fish Cone" } },
      { name: { es: "Bocaditos de Merluza Crujiente y Salsa Tártara", en: "Crispy Hake Bites with Tartare Sauce" } },
      { name: { es: "Cartucho de Alitas de Pollo a la Brasa", en: "Grilled Chicken Wings Cone" } },
      { name: { es: "Pan con Tomate y Embutido", en: "Bread with Tomato and Cold Cuts" } },
    ],
  },
  {
    title: { es: "Con Un Par!! De Huevos Fritos...", en: "Fried Eggs!!" },
    items: [
      { name: { es: "Huevos \"Rebolicaos\"", en: "Scrambled Eggs" }, desc: { es: "Con cebolla y bacalao", en: "With onion and cod" } },
      { name: { es: "Huevos en la Parisien", en: "Parisian-style Eggs" }, desc: { es: "Con jamón ibérico, pimientos de padrón y patatas", en: "With Iberian ham, padrón peppers and potatoes" } },
      { name: { es: "Huevos Rotos con Foie", en: "Broken Eggs with Foie Gras" } },
    ],
  },
  {
    title: { es: "El Rincón del Vegetariano", en: "Vegetarian Corner" },
    items: [
      { name: { es: "Espárragos a la Brasa", en: "Grilled Asparagus" }, desc: { es: "Con virutas de parmesano", en: "With parmesan shavings" } },
      { name: { es: "Brocheta de Verduras a la Brasa", en: "Grilled Vegetable Skewer" }, desc: { es: "Champiñón, cherry, berenjena, calabacín y padrón", en: "Mushroom, cherry tomato, aubergine, courgette and padrón" } },
    ],
  },
  {
    title: { es: "Pescados", en: "Fish" },
    items: [
      { name: { es: "Lubina a la Brasa", en: "Grilled Sea Bass" }, desc: { es: "Con gajos de patata, cebolla caramelizada y pimiento asado", en: "With potato wedges, caramelised onion and roasted pepper" } },
      { name: { es: "Bacalao a la Vizcaína", en: "Biscayan Cod" }, desc: { es: "Al estilo tradicional vasco", en: "Traditional Basque style" } },
      { name: { es: "Merluza Asada", en: "Roasted Hake" }, desc: { es: "Sobre cama pelayo, su tinta negra y aceite perejil", en: "On a bed of pelayo, black ink and parsley oil" } },
      { name: { es: "Salmón a la Brasa", en: "Grilled Salmon" }, desc: { es: "Parrilla, teriyaki y cous cous", en: "Grilled, teriyaki and couscous" } },
      { name: { es: "Parpatana de Atún Rojo", en: "Red Tuna Parpatana" }, desc: { es: "Con su mosaico de encurtidos", en: "With a mosaic of pickles" } },
      { name: { es: "Tataky de Atún Rojo", en: "Red Tuna Tataki" } },
    ],
  },
  {
    title: { es: "Carnes", en: "Meats" },
    items: [
      { name: { es: "Pollo Deshuesado a la Brasa", en: "Boneless Grilled Chicken" }, desc: { es: "Con sus patatas fritas y pimientos de padrón", en: "With chips and padrón peppers" } },
      { name: { es: "Chuletón de Vaca Vieja", en: "Aged Beef T-Bone" }, desc: { es: "1kg (mínimo 2 pax)", en: "1kg (minimum 2 guests)" } },
      { name: { es: "Entrecot de Vaca Vieja", en: "Aged Beef Entrecôte" }, desc: { es: "350 grs", en: "350g" } },
      { name: { es: "Costillar de Ternera a Baja Temperatura", en: "Slow-Cooked Veal Ribs" }, desc: { es: "2 pax", en: "2 guests" } },
    ],
  },
  {
    title: { es: "Hamburguesas a la Brasa", en: "Grilled Burgers" },
    items: [
      { name: { es: "Steak Tartar de \"Wagyega\" a la Brasa", en: "Grilled \"Wagyega\" Steak Tartare" }, desc: { es: "Vaca japonesa de Kobe", en: "Japanese Kobe beef" } },
      { name: { es: "Hamburguesa de Ternera Black Angus", en: "Black Angus Beef Burger" }, desc: { es: "Ternera EEUU", en: "US beef" } },
      { name: { es: "Burguer de Cordero", en: "Lamb Burger" } },
    ],
  },
  {
    title: { es: "Arroces (Mínimo 2 pax)", en: "Rice Dishes (Min. 2 guests)" },
    items: [
      { name: { es: "Arroz del Señoret", en: "Señoret Rice" }, desc: { es: "Con taquitos de atún y gamba pelada", en: "With tuna cubes and peeled prawns" } },
      { name: { es: "Arroz a Banda", en: "Arroz a Banda" }, desc: { es: "El sabor de fumet de bahía", en: "Bay fish stock flavour" } },
      { name: { es: "Arroz de Verduras", en: "Vegetable Rice" }, desc: { es: "Verduritas de temporada seleccionadas", en: "Selected seasonal vegetables" } },
      { name: { es: "Fideuá Marinera", en: "Seafood Fideuá" }, desc: { es: "Sabor mediterráneo tradicional", en: "Traditional Mediterranean flavour" } },
      { name: { es: "Gazpacho de Mero", en: "Grouper Gazpacho" }, desc: { es: "Tortas cenceñas y taquitos de mero", en: "Flat bread and grouper cubes" } },
      { name: { es: "Arroz con Bogavante", en: "Lobster Rice" }, desc: { es: "Meloso con su ración generosa de bogavante", en: "Creamy with a generous portion of lobster" } },
      { name: { es: "Auténtico Caldero Santapolero", en: "Authentic Santa Pola Caldero" }, desc: { es: "Tradición mediterránea (por encargo)", en: "Mediterranean tradition (by request)" } },
      { name: { es: "Arroz con Rape y Gambas", en: "Monkfish and Prawn Rice" } },
      { name: { es: "\"Negret\" de Calamar", en: "Squid Ink Rice" } },
    ],
  },
  {
    title: { es: "Postres", en: "Desserts" },
    items: [
      { name: { es: "Brownie de Chocolate con Fresas Confitadas", en: "Chocolate Brownie with Candied Strawberries" }, desc: { es: "Y su guarnición", en: "With garnish" } },
      { name: { es: "\"Buah\" de Pera", en: "Pear \"Buah\"" }, desc: { es: "Con su crumble de sablé bretón, helado de vainilla de tahití y toffee", en: "With Breton sablé crumble, Tahitian vanilla ice cream and toffee" } },
      { name: { es: "Tarta de Queso", en: "Cheesecake" }, desc: { es: "Con su guarnición", en: "With garnish" } },
      { name: { es: "Brocheta de Fruta", en: "Fruit Skewer" }, desc: { es: "De temporada", en: "Seasonal" } },
      { name: { es: "Torrija", en: "Torrija" }, desc: { es: "Caramelizada y sopa de turrón de Jijona", en: "Caramelised with Jijona nougat soup" } },
      { name: { es: "Tarta de la Abuela", en: "Grandmother's Cake" }, desc: { es: "Con su guarnición", en: "With garnish" } },
      { name: { es: "Tarta de Manzana", en: "Apple Tart" }, desc: { es: "Con helado de vainilla de Tahití (10 min.)", en: "With Tahitian vanilla ice cream (10 min.)" } },
    ],
  },
];

const tabs = [
  { key: "tapas", indices: [0, 1], label: { es: "Tapas", en: "Tapas" } },
  { key: "salads", indices: [2], label: { es: "Ensaladas", en: "Salads" } },
  { key: "fried", indices: [3, 4], label: { es: "Fritos y Huevos", en: "Fried & Eggs" } },
  { key: "veg", indices: [5], label: { es: "Vegetariano", en: "Vegetarian" } },
  { key: "fish", indices: [6], label: { es: "Pescados", en: "Fish" } },
  { key: "meat", indices: [7, 8], label: { es: "Carnes", en: "Meats" } },
  { key: "rice", indices: [9], label: { es: "Arroces", en: "Rice" } },
  { key: "dessert", indices: [10], label: { es: "Postres", en: "Desserts" } },
];

export default function Menu() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("tapas");

  const activeCategories = tabs.find((tab) => tab.key === activeTab)?.indices ?? [0];

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {t("Nuestra carta", "Our menu")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight">
            {t("La Carta", "The Menu")}
          </h2>
        </div>

        <div className="reveal reveal-delay-1 flex flex-wrap justify-center gap-2 md:gap-4 mb-12 border-b border-card-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab.key
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {lang === "es" ? tab.label.es : tab.label.en}
            </button>
          ))}
        </div>

        <div className="reveal reveal-delay-2">
          {activeCategories.map((catIndex) => {
            const cat = menuData[catIndex];
            return (
              <div key={catIndex} className="mb-12">
                <h3 className="text-xl md:text-2xl font-extralight text-accent mb-8 tracking-wider">
                  {lang === "es" ? cat.title.es : cat.title.en}
                </h3>
                <div className="grid gap-4 md:gap-6">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-start border-b border-card-border/50 pb-4 group"
                    >
                      <div>
                        <p className="text-foreground font-light tracking-wide group-hover:text-accent transition-colors duration-300">
                          {lang === "es" ? item.name.es : item.name.en}
                        </p>
                        {item.desc && (
                          <p className="text-muted text-sm mt-1">
                            {lang === "es" ? item.desc.es : item.desc.en}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
