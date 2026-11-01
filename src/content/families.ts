/* ============================================================
   Klanten met meerdere projecten (branding, website, portaal,
   content, video …). Elk deel houdt een eigen kaart in het
   overzicht (met de eigen diensten, dus in de juiste categorie),
   maar alle delen staan samen op één detailpagina: de hele
   storyline van de klant. Het eerste deel is de "host": de pagina
   staat op diens url en het sterkste werk staat bovenaan; de andere
   delen volgen als hoofdstuk (url van de host + #slug).
   De lijst staat in case-families.json, zodat next.config.js er de
   redirects (oude losse url's → host#deel) uit kan maken.
   ============================================================ */

import families from "./case-families.json";

export const CASE_FAMILIES: readonly (readonly string[])[] = families;

/** De delen van de klant van deze case (in paginavolgorde), of undefined als de case alleen staat. */
export const familyOf = (slug: string): readonly string[] | undefined => CASE_FAMILIES.find((f) => f.includes(slug));

/** De case op wiens url de storyline staat (de case zelf als die geen familie heeft). */
export const hostOf = (slug: string): string => familyOf(slug)?.[0] ?? slug;

/** Staat deze case op een eigen pagina (geen hoofdstuk op de pagina van een ander deel)? */
export const isHost = (slug: string): boolean => hostOf(slug) === slug;
