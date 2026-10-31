/**
 * De projecten die M7 vooraan wil tonen, in deze volgorde. Dezelfde lijst stuurt het cases-overzicht,
 * de cases-hero en showreel en World of M7, zodat overal hetzelfde topwerk vooraan staat.
 * `focus`: wat M7 bij dat project specifiek wil laten zien (richting voor beeld en verhaal).
 */
export const MASTERPIECES: readonly { slug: string; focus?: string }[] = [
  { slug: "monvy", focus: "de app" },
  { slug: "steddion-tools", focus: "close-ups en functionaliteit van de Energy Property Configurator" },
  { slug: "atl-plus", focus: "de app" },
  { slug: "buitenstate" },
  { slug: "infrai", focus: "de app" },
  { slug: "designers-house", focus: "branding en brandbook" },
  { slug: "expociety-app", focus: "de app" },
  { slug: "eredivisietoppers" },
  { slug: "citex-ai", focus: "de app" },
  { slug: "repairlab", focus: "de pagina's, de modelpagina's en de afspraakflow" },
  { slug: "teamtv" },
  { slug: "bernheze-makelaars-rebranding" },
  { slug: "mindyourpass" },
  { slug: "fairlink" },
  { slug: "calvin-vlaanderen" },
  { slug: "silvr", focus: "de voertuigenslider op home, de aanvraagflow met bevestigingsmail en de Teamleader-koppeling" },
  { slug: "pine-street-school" },
  { slug: "the-digital-clinic" },
  { slug: "the-sandt" },
  { slug: "impeco" },
  { slug: "plenty-planet" },
  { slug: "hela", focus: "de 3D Lottie-scrollanimaties in de producthero's" },
  { slug: "boutique-hotels-gelderland" },
  { slug: "sparta-blue-hydrogen" },
  { slug: "nexis-group", focus: "de draaiende 3D-modellen in de tabs op home en de interactieve scrolleffecten" },
];

export const MASTERPIECE_SLUGS: readonly string[] = MASTERPIECES.map((m) => m.slug);

/** Plek in de lijst (0 = eerst), of Infinity als het project er niet in staat. */
export const masterpieceRank = (slug: string): number => {
  const i = MASTERPIECE_SLUGS.indexOf(slug);
  return i === -1 ? Infinity : i;
};
