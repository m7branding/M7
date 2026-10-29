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
  /** Kleinere plaats: iets kleinere stip zonder ping, zodat een drukke regio rustig blijft. */
  minor?: boolean;
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

// TODO(M7): controleer deze lijst. Plaatsen in Nederland waar we klanten hebben, met de nadruk op
// Nistelrode en Noord-Brabant. Aanvullen of schrappen mag: aantallen op de pagina rekenen mee.
export const nlPlaces: ClientPlace[] = [
  // Kantoor
  { id: "nistelrode", name: { nl: "Nistelrode", en: "Nistelrode" }, country: "NL", lat: 51.7048, lon: 5.5519, province: "NB" },
  // Rond Nistelrode: Bernheze, Maashorst, Oss en Meierijstad
  { id: "loosbroek", name: { nl: "Loosbroek", en: "Loosbroek" }, country: "NL", lat: 51.6633, lon: 5.5131, province: "NB", minor: true },
  { id: "heeswijk-dinther", name: { nl: "Heeswijk-Dinther", en: "Heeswijk-Dinther" }, country: "NL", lat: 51.6514, lon: 5.4794, province: "NB", minor: true },
  { id: "vorstenbosch", name: { nl: "Vorstenbosch", en: "Vorstenbosch" }, country: "NL", lat: 51.6467, lon: 5.5878, province: "NB", minor: true },
  { id: "heesch", name: { nl: "Heesch", en: "Heesch" }, country: "NL", lat: 51.7339, lon: 5.5258, province: "NB", minor: true },
  { id: "vinkel", name: { nl: "Vinkel", en: "Vinkel" }, country: "NL", lat: 51.7064, lon: 5.4314, province: "NB", minor: true },
  { id: "schaijk", name: { nl: "Schaijk", en: "Schaijk" }, country: "NL", lat: 51.745, lon: 5.6317, province: "NB", minor: true },
  { id: "zeeland", name: { nl: "Zeeland", en: "Zeeland" }, country: "NL", lat: 51.6967, lon: 5.6758, province: "NB", minor: true },
  { id: "volkel", name: { nl: "Volkel", en: "Volkel" }, country: "NL", lat: 51.645, lon: 5.6567, province: "NB", minor: true },
  { id: "uden", name: { nl: "Uden", en: "Uden" }, country: "NL", lat: 51.66, lon: 5.6194, province: "NB" },
  { id: "oss", name: { nl: "Oss", en: "Oss" }, country: "NL", lat: 51.765, lon: 5.5183, province: "NB" },
  { id: "berghem", name: { nl: "Berghem", en: "Berghem" }, country: "NL", lat: 51.77, lon: 5.57, province: "NB", minor: true },
  { id: "geffen", name: { nl: "Geffen", en: "Geffen" }, country: "NL", lat: 51.7383, lon: 5.4644, province: "NB", minor: true },
  { id: "nuland", name: { nl: "Nuland", en: "Nuland" }, country: "NL", lat: 51.7253, lon: 5.4389, province: "NB", minor: true },
  { id: "lith", name: { nl: "Lith", en: "Lith" }, country: "NL", lat: 51.8064, lon: 5.4381, province: "NB", minor: true },
  { id: "megen", name: { nl: "Megen", en: "Megen" }, country: "NL", lat: 51.8222, lon: 5.5633, province: "NB", minor: true },
  { id: "ravenstein", name: { nl: "Ravenstein", en: "Ravenstein" }, country: "NL", lat: 51.7967, lon: 5.65, province: "NB", minor: true },
  { id: "veghel", name: { nl: "Veghel", en: "Veghel" }, country: "NL", lat: 51.6167, lon: 5.5486, province: "NB" },
  { id: "erp", name: { nl: "Erp", en: "Erp" }, country: "NL", lat: 51.6, lon: 5.6064, province: "NB", minor: true },
  { id: "boekel", name: { nl: "Boekel", en: "Boekel" }, country: "NL", lat: 51.6031, lon: 5.675, province: "NB", minor: true },
  { id: "schijndel", name: { nl: "Schijndel", en: "Schijndel" }, country: "NL", lat: 51.6225, lon: 5.4328, province: "NB", minor: true },
  { id: "sint-oedenrode", name: { nl: "Sint-Oedenrode", en: "Sint-Oedenrode" }, country: "NL", lat: 51.5675, lon: 5.4597, province: "NB", minor: true },
  // Land van Cuijk en Peel
  { id: "grave", name: { nl: "Grave", en: "Grave" }, country: "NL", lat: 51.7592, lon: 5.7381, province: "NB", minor: true },
  { id: "mill", name: { nl: "Mill", en: "Mill" }, country: "NL", lat: 51.6875, lon: 5.7792, province: "NB", minor: true },
  { id: "cuijk", name: { nl: "Cuijk", en: "Cuijk" }, country: "NL", lat: 51.7283, lon: 5.8792, province: "NB", minor: true },
  { id: "boxmeer", name: { nl: "Boxmeer", en: "Boxmeer" }, country: "NL", lat: 51.6467, lon: 5.9472, province: "NB", minor: true },
  { id: "gemert", name: { nl: "Gemert", en: "Gemert" }, country: "NL", lat: 51.5558, lon: 5.69, province: "NB", minor: true },
  { id: "deurne", name: { nl: "Deurne", en: "Deurne" }, country: "NL", lat: 51.4639, lon: 5.7944, province: "NB", minor: true },
  { id: "asten", name: { nl: "Asten", en: "Asten" }, country: "NL", lat: 51.4033, lon: 5.7472, province: "NB", minor: true },
  // 's-Hertogenbosch en omgeving
  { id: "den-bosch", name: { nl: "'s-Hertogenbosch", en: "'s-Hertogenbosch" }, country: "NL", lat: 51.6978, lon: 5.3037, province: "NB" },
  { id: "rosmalen", name: { nl: "Rosmalen", en: "Rosmalen" }, country: "NL", lat: 51.7164, lon: 5.365, province: "NB", minor: true },
  { id: "berlicum", name: { nl: "Berlicum", en: "Berlicum" }, country: "NL", lat: 51.6775, lon: 5.3986, province: "NB", minor: true },
  { id: "sint-michielsgestel", name: { nl: "Sint-Michielsgestel", en: "Sint-Michielsgestel" }, country: "NL", lat: 51.6417, lon: 5.3528, province: "NB", minor: true },
  { id: "vught", name: { nl: "Vught", en: "Vught" }, country: "NL", lat: 51.6533, lon: 5.2875, province: "NB", minor: true },
  { id: "boxtel", name: { nl: "Boxtel", en: "Boxtel" }, country: "NL", lat: 51.5908, lon: 5.3292, province: "NB", minor: true },
  { id: "heusden", name: { nl: "Heusden", en: "Heusden" }, country: "NL", lat: 51.7317, lon: 5.1386, province: "NB", minor: true },
  { id: "drunen", name: { nl: "Drunen", en: "Drunen" }, country: "NL", lat: 51.6858, lon: 5.1333, province: "NB", minor: true },
  // Eindhoven en omgeving
  { id: "eindhoven", name: { nl: "Eindhoven", en: "Eindhoven" }, country: "NL", lat: 51.4416, lon: 5.4697, province: "NB" },
  { id: "best", name: { nl: "Best", en: "Best" }, country: "NL", lat: 51.5075, lon: 5.3903, province: "NB", minor: true },
  { id: "son-en-breugel", name: { nl: "Son en Breugel", en: "Son en Breugel" }, country: "NL", lat: 51.5133, lon: 5.4914, province: "NB", minor: true },
  { id: "nuenen", name: { nl: "Nuenen", en: "Nuenen" }, country: "NL", lat: 51.47, lon: 5.5528, province: "NB", minor: true },
  { id: "oirschot", name: { nl: "Oirschot", en: "Oirschot" }, country: "NL", lat: 51.505, lon: 5.3125, province: "NB", minor: true },
  { id: "veldhoven", name: { nl: "Veldhoven", en: "Veldhoven" }, country: "NL", lat: 51.4183, lon: 5.4028, province: "NB", minor: true },
  { id: "geldrop", name: { nl: "Geldrop", en: "Geldrop" }, country: "NL", lat: 51.4217, lon: 5.5583, province: "NB", minor: true },
  { id: "valkenswaard", name: { nl: "Valkenswaard", en: "Valkenswaard" }, country: "NL", lat: 51.35, lon: 5.4597, province: "NB", minor: true },
  { id: "helmond", name: { nl: "Helmond", en: "Helmond" }, country: "NL", lat: 51.4793, lon: 5.657, province: "NB" },
  // Midden- en West-Brabant
  { id: "tilburg", name: { nl: "Tilburg", en: "Tilburg" }, country: "NL", lat: 51.5555, lon: 5.0913, province: "NB" },
  { id: "oisterwijk", name: { nl: "Oisterwijk", en: "Oisterwijk" }, country: "NL", lat: 51.5794, lon: 5.1889, province: "NB", minor: true },
  { id: "waalwijk", name: { nl: "Waalwijk", en: "Waalwijk" }, country: "NL", lat: 51.6825, lon: 5.0708, province: "NB", minor: true },
  { id: "kaatsheuvel", name: { nl: "Kaatsheuvel", en: "Kaatsheuvel" }, country: "NL", lat: 51.6567, lon: 5.0408, province: "NB", minor: true },
  { id: "dongen", name: { nl: "Dongen", en: "Dongen" }, country: "NL", lat: 51.6267, lon: 4.9389, province: "NB", minor: true },
  { id: "oosterhout", name: { nl: "Oosterhout", en: "Oosterhout" }, country: "NL", lat: 51.645, lon: 4.8597, province: "NB", minor: true },
  { id: "breda", name: { nl: "Breda", en: "Breda" }, country: "NL", lat: 51.5719, lon: 4.7683, province: "NB" },
  { id: "etten-leur", name: { nl: "Etten-Leur", en: "Etten-Leur" }, country: "NL", lat: 51.5706, lon: 4.6356, province: "NB", minor: true },
  { id: "roosendaal", name: { nl: "Roosendaal", en: "Roosendaal" }, country: "NL", lat: 51.5308, lon: 4.4653, province: "NB", minor: true },
  { id: "bergen-op-zoom", name: { nl: "Bergen op Zoom", en: "Bergen op Zoom" }, country: "NL", lat: 51.495, lon: 4.2917, province: "NB", minor: true },
  // Rest van Nederland
  { id: "nijmegen", name: { nl: "Nijmegen", en: "Nijmegen" }, country: "NL", lat: 51.8126, lon: 5.8372, province: "GE" },
  { id: "wijchen", name: { nl: "Wijchen", en: "Wijchen" }, country: "NL", lat: 51.8092, lon: 5.725, province: "GE", minor: true },
  { id: "tiel", name: { nl: "Tiel", en: "Tiel" }, country: "NL", lat: 51.8867, lon: 5.4292, province: "GE", minor: true },
  { id: "arnhem", name: { nl: "Arnhem", en: "Arnhem" }, country: "NL", lat: 51.9851, lon: 5.8987, province: "GE" },
  { id: "ede", name: { nl: "Ede", en: "Ede" }, country: "NL", lat: 52.0333, lon: 5.6583, province: "GE", minor: true },
  { id: "apeldoorn", name: { nl: "Apeldoorn", en: "Apeldoorn" }, country: "NL", lat: 52.2112, lon: 5.9699, province: "GE" },
  { id: "doetinchem", name: { nl: "Doetinchem", en: "Doetinchem" }, country: "NL", lat: 51.965, lon: 6.2889, province: "GE", minor: true },
  { id: "utrecht", name: { nl: "Utrecht", en: "Utrecht" }, country: "NL", lat: 52.0907, lon: 5.1214, province: "UT" },
  { id: "amersfoort", name: { nl: "Amersfoort", en: "Amersfoort" }, country: "NL", lat: 52.1561, lon: 5.3878, province: "UT" },
  { id: "hilversum", name: { nl: "Hilversum", en: "Hilversum" }, country: "NL", lat: 52.2292, lon: 5.1669, province: "NH", minor: true },
  { id: "amsterdam", name: { nl: "Amsterdam", en: "Amsterdam" }, country: "NL", lat: 52.3676, lon: 4.9041, province: "NH" },
  { id: "haarlem", name: { nl: "Haarlem", en: "Haarlem" }, country: "NL", lat: 52.3874, lon: 4.6462, province: "NH" },
  { id: "almere", name: { nl: "Almere", en: "Almere" }, country: "NL", lat: 52.3508, lon: 5.2647, province: "FL" },
  { id: "rotterdam", name: { nl: "Rotterdam", en: "Rotterdam" }, country: "NL", lat: 51.9244, lon: 4.4777, province: "ZH" },
  { id: "den-haag", name: { nl: "Den Haag", en: "The Hague" }, country: "NL", lat: 52.0705, lon: 4.3007, province: "ZH" },
  { id: "leiden", name: { nl: "Leiden", en: "Leiden" }, country: "NL", lat: 52.1601, lon: 4.497, province: "ZH", minor: true },
  { id: "gouda", name: { nl: "Gouda", en: "Gouda" }, country: "NL", lat: 52.0115, lon: 4.7104, province: "ZH", minor: true },
  { id: "dordrecht", name: { nl: "Dordrecht", en: "Dordrecht" }, country: "NL", lat: 51.8133, lon: 4.6901, province: "ZH" },
  { id: "middelburg", name: { nl: "Middelburg", en: "Middelburg" }, country: "NL", lat: 51.4988, lon: 3.6136, province: "ZE", minor: true },
  { id: "zwolle", name: { nl: "Zwolle", en: "Zwolle" }, country: "NL", lat: 52.5168, lon: 6.083, province: "OV" },
  { id: "enschede", name: { nl: "Enschede", en: "Enschede" }, country: "NL", lat: 52.2215, lon: 6.8937, province: "OV" },
  { id: "groningen", name: { nl: "Groningen", en: "Groningen" }, country: "NL", lat: 53.2194, lon: 6.5665, province: "GR" },
  { id: "leeuwarden", name: { nl: "Leeuwarden", en: "Leeuwarden" }, country: "NL", lat: 53.2012, lon: 5.7999, province: "FR" },
  { id: "assen", name: { nl: "Assen", en: "Assen" }, country: "NL", lat: 52.9925, lon: 6.5649, province: "DR", minor: true },
  { id: "venlo", name: { nl: "Venlo", en: "Venlo" }, country: "NL", lat: 51.3704, lon: 6.1724, province: "LI" },
  { id: "venray", name: { nl: "Venray", en: "Venray" }, country: "NL", lat: 51.5258, lon: 5.975, province: "LI", minor: true },
  { id: "roermond", name: { nl: "Roermond", en: "Roermond" }, country: "NL", lat: 51.1942, lon: 5.987, province: "LI", minor: true },
  { id: "maastricht", name: { nl: "Maastricht", en: "Maastricht" }, country: "NL", lat: 50.8514, lon: 5.691, province: "LI" },
];

export const allClientPlaces: ClientPlace[] = [...nlPlaces, ...worldPlaces];
