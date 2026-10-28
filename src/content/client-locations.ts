/* ============================================================
   Klantlocaties voor de klantenkaart op /over-m7
   (src/components/about/ClientMap.tsx).

   - Wereld: de plaatsen en landen die M7 zelf heeft opgegeven. Is alleen een land bekend,
     dan staat de stip op de hoofdstad of een grote stad en toont de kaart de landnaam.
   - Nederland: zie de TODO hieronder.
   Aantallen op de pagina (landen, plaatsen, Noord-Brabant) worden uit deze lijsten berekend.
   Een plaats toevoegen of weghalen vraagt GEEN nieuwe run van scripts/dotmap: de component
   projecteert lat/lon zelf. Alles binnen de uitsnede van de close-up (NL_MAP.bounds, ruwweg
   Nederland + Vlaanderen + rond Düsseldorf) verschijnt in de close-up, de rest op de wereldkaart.
   ============================================================ */

import type { T } from "./types";

export type CountryCode = "NL" | "BE" | "DE" | "GB" | "FR" | "ES" | "PT" | "AT" | "PL" | "DK" | "US" | "CA" | "BR" | "AE" | "SA";
export type RegionKey = "europe" | "northAmerica" | "southAmerica" | "middleEast";

export interface ClientPlace {
  id: string;
  /** Naam op de kaart en in de legenda. Bij alleen een land: de landnaam. */
  name: T;
  country: CountryCode;
  lat: number;
  lon: number;
  /** Alleen het land is opgegeven; de stip staat op de hoofdstad/grote stad (zie `near`). */
  countryOnly?: boolean;
  /** Ter info: waar de stip staat bij `countryOnly`. Wordt niet getoond. */
  near?: string;
  /** NL: provincie (voor de telling "waarvan … in Noord-Brabant"). */
  province?: "NB" | "GE" | "UT" | "NH" | "ZH" | "OV" | "GR" | "LI" | "FR" | "DR" | "ZE" | "FL";
}

export const COUNTRIES: Record<CountryCode, { name: T; region: RegionKey }> = {
  NL: { name: { nl: "Nederland", en: "The Netherlands" }, region: "europe" },
  BE: { name: { nl: "België", en: "Belgium" }, region: "europe" },
  DE: { name: { nl: "Duitsland", en: "Germany" }, region: "europe" },
  GB: { name: { nl: "Verenigd Koninkrijk", en: "United Kingdom" }, region: "europe" },
  FR: { name: { nl: "Frankrijk", en: "France" }, region: "europe" },
  ES: { name: { nl: "Spanje", en: "Spain" }, region: "europe" },
  PT: { name: { nl: "Portugal", en: "Portugal" }, region: "europe" },
  AT: { name: { nl: "Oostenrijk", en: "Austria" }, region: "europe" },
  PL: { name: { nl: "Polen", en: "Poland" }, region: "europe" },
  DK: { name: { nl: "Denemarken", en: "Denmark" }, region: "europe" },
  US: { name: { nl: "Verenigde Staten", en: "United States" }, region: "northAmerica" },
  CA: { name: { nl: "Canada", en: "Canada" }, region: "northAmerica" },
  BR: { name: { nl: "Brazilië", en: "Brazil" }, region: "southAmerica" },
  AE: { name: { nl: "Verenigde Arabische Emiraten", en: "United Arab Emirates" }, region: "middleEast" },
  SA: { name: { nl: "Saoedi-Arabië", en: "Saudi Arabia" }, region: "middleEast" },
};

/** Volgorde in de legenda; `continent` telt mee in "… landen op … continenten". */
export const REGIONS: Record<RegionKey, { name: T; continent: string }> = {
  europe: { name: { nl: "Europa", en: "Europe" }, continent: "europe" },
  northAmerica: { name: { nl: "Noord-Amerika", en: "North America" }, continent: "north-america" },
  southAmerica: { name: { nl: "Zuid-Amerika", en: "South America" }, continent: "south-america" },
  middleEast: { name: { nl: "Midden-Oosten", en: "Middle East" }, continent: "asia" },
};

/** Ons kantoor (coördinaten uit site.address.geo). */
export const HQ_ID = "nistelrode";

/** Wereldwijd: opgegeven door M7. */
export const worldPlaces: ClientPlace[] = [
  { id: "new-york", name: { nl: "New York", en: "New York" }, country: "US", lat: 40.7128, lon: -74.006 },
  { id: "new-jersey", name: { nl: "New Jersey", en: "New Jersey" }, country: "US", lat: 40.3573, lon: -74.6672 },
  { id: "miami", name: { nl: "Miami", en: "Miami" }, country: "US", lat: 25.7617, lon: -80.1918 },
  { id: "los-angeles", name: { nl: "Los Angeles", en: "Los Angeles" }, country: "US", lat: 34.0522, lon: -118.2437 },
  { id: "canada", name: { nl: "Canada", en: "Canada" }, country: "CA", lat: 43.6532, lon: -79.3832, countryOnly: true, near: "Toronto" },
  { id: "brazil", name: { nl: "Brazilië", en: "Brazil" }, country: "BR", lat: -23.5505, lon: -46.6333, countryOnly: true, near: "São Paulo" },
  { id: "london", name: { nl: "Londen", en: "London" }, country: "GB", lat: 51.5072, lon: -0.1276 },
  { id: "france", name: { nl: "Frankrijk", en: "France" }, country: "FR", lat: 48.8566, lon: 2.3522, countryOnly: true, near: "Parijs" },
  { id: "spain", name: { nl: "Spanje", en: "Spain" }, country: "ES", lat: 40.4168, lon: -3.7038, countryOnly: true, near: "Madrid" },
  { id: "portugal", name: { nl: "Portugal", en: "Portugal" }, country: "PT", lat: 38.7223, lon: -9.1393, countryOnly: true, near: "Lissabon" },
  { id: "antwerp", name: { nl: "Antwerpen", en: "Antwerp" }, country: "BE", lat: 51.2194, lon: 4.4025 },
  { id: "brussels", name: { nl: "Brussel", en: "Brussels" }, country: "BE", lat: 50.8503, lon: 4.3517 },
  { id: "geel", name: { nl: "Geel", en: "Geel" }, country: "BE", lat: 51.1617, lon: 4.9908 },
  { id: "lommel", name: { nl: "Lommel", en: "Lommel" }, country: "BE", lat: 51.2306, lon: 5.3133 },
  { id: "dusseldorf", name: { nl: "Düsseldorf", en: "Düsseldorf" }, country: "DE", lat: 51.2277, lon: 6.7735 },
  { id: "munich", name: { nl: "München", en: "Munich" }, country: "DE", lat: 48.1351, lon: 11.582 },
  { id: "austria", name: { nl: "Oostenrijk", en: "Austria" }, country: "AT", lat: 48.2082, lon: 16.3738, countryOnly: true, near: "Wenen" },
  { id: "denmark", name: { nl: "Denemarken", en: "Denmark" }, country: "DK", lat: 55.6761, lon: 12.5683, countryOnly: true, near: "Kopenhagen" },
  { id: "poland", name: { nl: "Polen", en: "Poland" }, country: "PL", lat: 52.2297, lon: 21.0122, countryOnly: true, near: "Warschau" },
  { id: "dubai", name: { nl: "Dubai", en: "Dubai" }, country: "AE", lat: 25.2048, lon: 55.2708 },
  { id: "riyadh", name: { nl: "Riyad", en: "Riyadh" }, country: "SA", lat: 24.7136, lon: 46.6753 },
];

// TODO(M7): controleer deze lijst. Plaatsen in Nederland waar we (waarschijnlijk) klanten hebben;
// niet door M7 aangeleverd. Aanvullen of schrappen mag: aantallen op de pagina rekenen mee.
export const nlPlaces: ClientPlace[] = [
  { id: HQ_ID, name: { nl: "Nistelrode", en: "Nistelrode" }, country: "NL", lat: 51.7048, lon: 5.5519, province: "NB" },
  { id: "oss", name: { nl: "Oss", en: "Oss" }, country: "NL", lat: 51.765, lon: 5.5183, province: "NB" },
  { id: "uden", name: { nl: "Uden", en: "Uden" }, country: "NL", lat: 51.66, lon: 5.6194, province: "NB" },
  { id: "heesch", name: { nl: "Heesch", en: "Heesch" }, country: "NL", lat: 51.7339, lon: 5.5258, province: "NB" },
  { id: "vorstenbosch", name: { nl: "Vorstenbosch", en: "Vorstenbosch" }, country: "NL", lat: 51.6467, lon: 5.5878, province: "NB" },
  { id: "veghel", name: { nl: "Veghel", en: "Veghel" }, country: "NL", lat: 51.6167, lon: 5.5486, province: "NB" },
  { id: "schijndel", name: { nl: "Schijndel", en: "Schijndel" }, country: "NL", lat: 51.6225, lon: 5.4328, province: "NB" },
  { id: "den-bosch", name: { nl: "'s-Hertogenbosch", en: "'s-Hertogenbosch" }, country: "NL", lat: 51.6978, lon: 5.3037, province: "NB" },
  { id: "eindhoven", name: { nl: "Eindhoven", en: "Eindhoven" }, country: "NL", lat: 51.4416, lon: 5.4697, province: "NB" },
  { id: "helmond", name: { nl: "Helmond", en: "Helmond" }, country: "NL", lat: 51.4793, lon: 5.657, province: "NB" },
  { id: "tilburg", name: { nl: "Tilburg", en: "Tilburg" }, country: "NL", lat: 51.5555, lon: 5.0913, province: "NB" },
  { id: "breda", name: { nl: "Breda", en: "Breda" }, country: "NL", lat: 51.5719, lon: 4.7683, province: "NB" },
  { id: "nijmegen", name: { nl: "Nijmegen", en: "Nijmegen" }, country: "NL", lat: 51.8126, lon: 5.8372, province: "GE" },
  { id: "arnhem", name: { nl: "Arnhem", en: "Arnhem" }, country: "NL", lat: 51.9851, lon: 5.8987, province: "GE" },
  { id: "utrecht", name: { nl: "Utrecht", en: "Utrecht" }, country: "NL", lat: 52.0907, lon: 5.1214, province: "UT" },
  { id: "amsterdam", name: { nl: "Amsterdam", en: "Amsterdam" }, country: "NL", lat: 52.3676, lon: 4.9041, province: "NH" },
  { id: "rotterdam", name: { nl: "Rotterdam", en: "Rotterdam" }, country: "NL", lat: 51.9244, lon: 4.4777, province: "ZH" },
  { id: "den-haag", name: { nl: "Den Haag", en: "The Hague" }, country: "NL", lat: 52.0705, lon: 4.3007, province: "ZH" },
  { id: "zwolle", name: { nl: "Zwolle", en: "Zwolle" }, country: "NL", lat: 52.5168, lon: 6.083, province: "OV" },
  { id: "groningen", name: { nl: "Groningen", en: "Groningen" }, country: "NL", lat: 53.2194, lon: 6.5665, province: "GR" },
  { id: "maastricht", name: { nl: "Maastricht", en: "Maastricht" }, country: "NL", lat: 50.8514, lon: 5.691, province: "LI" },
  { id: "venlo", name: { nl: "Venlo", en: "Venlo" }, country: "NL", lat: 51.3704, lon: 6.1724, province: "LI" },
];

export const allClientPlaces: ClientPlace[] = [...nlPlaces, ...worldPlaces];
