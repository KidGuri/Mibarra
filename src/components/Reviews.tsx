"use client";

import { useLanguage } from "@/context/LanguageContext";

interface Review {
  name: string;
  stars: number;
  text: { es: string; en: string };
}

const reviewsRow1: Review[] = [
  { name: "María G.", stars: 5, text: { es: "El arroz con bogavante es espectacular. Terraza increíble con vistas al puerto. Volveremos seguro.", en: "The lobster rice is spectacular. Incredible terrace with harbour views. We'll definitely return." } },
  { name: "Carlos R.", stars: 5, text: { es: "Fuimos por recomendación y no nos defraudó. Las croquetas de jamón son las mejores que he probado en la zona.", en: "We went on a recommendation and were not disappointed. The ham croquettes are the best I've tried in the area." } },
  { name: "Laura M.", stars: 4, text: { es: "Ambiente muy cuidado y moderno. El pulpo a la brasa estaba perfecto. Servicio atento y rápido.", en: "Very polished and modern atmosphere. The grilled octopus was perfect. Attentive and fast service." } },
  { name: "David P.", stars: 5, text: { es: "El mejor sitio para comer pescado fresco en Santa Pola. La fideuá marinera es top. Repetimos cada vez que venimos.", en: "Best place for fresh fish in Santa Pola. The seafood fideuá is top. We come back every time we visit." } },
  { name: "Ana B.", stars: 4, text: { es: "Menú del día a un precio genial y la calidad es siempre constante. La ensalada burrata riquísima.", en: "Daily menu at a great price and consistently high quality. The burrata salad is delicious." } },
  { name: "Roberto S.", stars: 5, text: { es: "Celebramos nuestro aniversario aquí. El steak tartar de Wagyega es una experiencia única. Trato excelente.", en: "We celebrated our anniversary here. The Wagyega steak tartare is a unique experience. Excellent service." } },
  { name: "Sophie L.", stars: 4, text: { es: "Probamos las zamburiñas y el pescadito frito. Todo fresco y bien preparado. La terraza al atardecer es preciosa.", en: "We tried the scallops and the fried fish. Everything fresh and well prepared. The terrace at sunset is beautiful." } },
  { name: "Fernando J.", stars: 5, text: { es: "El caldero santapolero es auténtico. Como el que hacía mi abuela. Gran descubrimiento.", en: "The Santa Pola caldero is authentic. Like my grandmother used to make. A great find." } },
];

const reviewsRow2: Review[] = [
  { name: "Isabel T.", stars: 5, text: { es: "Las vistas al puerto mientras cenas son mágicas. El bacalao a la vizcaína estaba increíble.", en: "The harbour views while dining are magical. The Biscayan cod was incredible." } },
  { name: "Javier N.", stars: 4, text: { es: "Sitio con mucho estilo. La carta es muy variada y todo lo que probamos estaba muy bueno. Los mejillones a la brasa, top.", en: "Very stylish place. The menu is varied and everything we tried was great. Grilled mussels, top." } },
  { name: "Elena C.", stars: 5, text: { es: "Pedimos el chuletón de vaca vieja para dos y estaba en su punto. Acompañado de un Pago de Capellanes, noche perfecta.", en: "We ordered the aged beef T-bone for two and it was cooked to perfection. Paired with a Pago de Capellanes, perfect night." } },
  { name: "Thomas K.", stars: 4, text: { es: "Excelente restaurante junto al mar. Gran selección de vinos. El arroz del señoret nos encantó.", en: "Excellent restaurant by the sea. Great wine selection. We loved the señoret rice." } },
  { name: "Pilar V.", stars: 5, text: { es: "La torrija caramelizada con sopa de turrón es de otro nivel. Un postre que no te puedes perder.", en: "The caramelised torrija with nougat soup is next level. A dessert you can't miss." } },
  { name: "Miguel A.", stars: 4, text: { es: "Venimos cada verano y siempre es un acierto. El pescadito de la bahía frito crujiente y las bravas de brasa, geniales.", en: "We come every summer and it's always a hit. The crispy fried bay fish and the charcoal bravas, brilliant." } },
  { name: "Claudia H.", stars: 5, text: { es: "Reservamos para cenar y la experiencia fue increíble. El foie de pato casero con confituras artesanas es una maravilla.", en: "We booked for dinner and the experience was incredible. The homemade duck foie gras with artisan preserves is wonderful." } },
  { name: "Andrés F.", stars: 5, text: { es: "Restaurante con personalidad. La decoración, la comida, la atención... todo a la altura. Las sardinas a la brasa espectaculares.", en: "A restaurant with personality. The décor, the food, the service... all top-notch. The grilled sardines were spectacular." } },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "#f59e0b" : "#333"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, lang }: { review: Review; lang: "es" | "en" }) {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[420px] bg-card-bg border border-card-border rounded-lg p-6 mx-3">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-medium">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-foreground text-sm font-medium">{review.name}</p>
          <StarRating count={review.stars} />
        </div>
        <svg className="ml-auto opacity-30" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.97 14.95c-.02 0-.04.01-.06.01-.22 0-.39-.09-.53-.17l-.15-.11c-.14-.1-.26-.2-.36-.34-.1-.14-.15-.3-.15-.48 0-.37.3-.67.67-.67.37 0 .67.3.67.67 0 .51-.04.95-.09 1.09zM12 17c-.83 0-1.5-.67-1.5-1.5 0-.36.13-.68.33-.95-.02.18-.08.35-.08.45 0 .55.45 1 1 1s1-.45 1-1V7h2c1.1 0 2 .9 2 2v1.5c0 .42-.12.8-.33 1.13.47-.55.83-1.26.83-2.13V9c0-1.66-1.34-3-3-3h-2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1 .37 0 .67.3.67.67v.33c0 1.66-1.34 3-3 3H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9c.83 0 1.5-.67 1.5-1.5V9c0-1.66 1.34-3 3-3h2c2.21 0 4 1.79 4 4v1.5C19.5 14.54 16.04 17 12 17z" />
        </svg>
      </div>
      <p className="text-muted text-sm leading-relaxed">
        {lang === "es" ? review.text.es : review.text.en}
      </p>
    </div>
  );
}

export default function Reviews() {
  const { lang, t } = useLanguage();

  const row1Doubled = [...reviewsRow1, ...reviewsRow1];
  const row2Doubled = [...reviewsRow2, ...reviewsRow2];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center reveal">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {t("Lo que dicen nuestros clientes", "What our guests say")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight">
            {t("Opiniones", "Reviews")}
          </h2>
        </div>
      </div>

      <div className="reveal reveal-delay-1 mb-6">
        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {row1Doubled.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} lang={lang} />
          ))}
        </div>
      </div>

      <div className="reveal reveal-delay-2">
        <div className="flex animate-scroll-right" style={{ width: "fit-content" }}>
          {row2Doubled.map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
