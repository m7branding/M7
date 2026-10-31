/* ============================================================
   Juridische pagina's (route /[lang]/[doc]).
   - Algemene voorwaarden en Hosting & Webplans: overgenomen van de
     huidige M7-site (m7branding.com/terms en /hosting-webplans).
     De Nederlandse tekst is leidend; de Engelse is een vertaling.
   - Privacybeleid: overgenomen van m7branding.com/privacy (2020),
     met actuele bedrijfsgegevens, een verwijzing naar het cookiebeleid
     en een blok over je rechten onder de AVG.
   - Cookiebeleid: beschrijft wat deze website echt opslaat
     (zie CookieConsent, Analytics, Preloader, intake/support-drafts).

   Opmaak van `body` (zie LegalText):
     ## Kop            → kop (komt ook in de inhoudsopgave)
     ### Subkop
     1. tekst          → genummerde lijst (opeenvolgende regels)
     - tekst           → opsomming;  "  - tekst" = opsomming binnen het vorige punt
     **vet**, [tekst](/pad of https://…); "nl:/pad" linkt altijd naar de Nederlandse pagina
     {{company}} {{street}} {{postal}} {{city}} {{email}} {{support}}
   ============================================================ */

import type { T } from "./types";

export interface LegalDoc {
  title: T;
  /** Zoals getoond onder de titel. */
  updated: T;
  /** Meta description. */
  description: T;
  body: T;
}

const TERMS_NL = `## Artikel 1 – Definities
1. **M7:** opdrachtnemer, actief op het gebied van branding, strategische branding, rebranding, grafisch ontwerp, illustratie, video- en beeldgeneratie, AI-oplossingen, consultancy, automatisering, ontwikkeling van websites, applicaties, portals, apps, hosting, onderhoud, beheer en overige digitale en creatieve dienstverlening.
1. **Klant:** iedere natuurlijke of rechtspersoon die met M7 een overeenkomst aangaat.
1. **Diensten:** alle door M7 aangeboden en verrichte werkzaamheden.
1. **Meerwerk:** werkzaamheden buiten de overeengekomen scope of offerte.
1. **Digitale omgevingen:** websites, applicaties, portals, apps, servers, cloudomgevingen, automatiseringen, integraties en aanverwante infrastructuur.

## Artikel 2 – Toepasselijkheid en Rangorde
1. Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en werkzaamheden van M7.
1. Voor hosting, domeinregistratie, serverbeheer en onderhoudsabonnementen (M7 Webhosting en M7 Webplans) gelden aanvullende specifieke voorwaarden zoals gepubliceerd op de [afzonderlijke pagina](/hosting-webplans).
1. Deze specifieke voorwaarden maken integraal onderdeel uit van de overeenkomst voor die diensten.
1. In geval van tegenstrijdigheid prevaleren de specifieke Hosting & Webplans voorwaarden boven deze algemene voorwaarden.
1. Door het aangaan van een overeenkomst verklaart de Klant kennis te hebben genomen van alle toepasselijke voorwaarden.

## Artikel 3 – Totstandkoming van de Overeenkomst
1. M7 werkt zowel op offertebasis als op basis van nacalculatie.
1. Een overeenkomst komt tot stand door:
  - Schriftelijke of digitale acceptatie van een offerte;
  - Mondelinge overeenstemming;
  - Of een verzoek tot uitvoering van werkzaamheden, gedaan schriftelijk, digitaal, telefonisch of in persoon.
1. Ieder verzoek om actie, aanpassing, onderzoek of uitvoering van werkzaamheden geldt als bindende opdracht.
1. Ook zonder ondertekende offerte kan een overeenkomst ontstaan indien M7 werkzaamheden uitvoert op verzoek van de Klant.

## Artikel 4 – Offertes en Scope
1. Offertes zijn vrijblijvend en 30 dagen geldig tenzij anders vermeld.
1. De offerte beschrijft de overeengekomen scope van werkzaamheden.
1. Wijzigingen, aanvullingen of uitbreidingen gelden als meerwerk.
1. Indien tijdens uitvoering blijkt dat aanvullende werkzaamheden noodzakelijk zijn, worden deze als meerwerk uitgevoerd en gefactureerd.
1. Voortzetting van werkzaamheden zonder bezwaar geldt als acceptatie van meerwerk.

## Artikel 5 – Meerwerk en Werkzaamheden zonder Offerte
1. Werkzaamheden kunnen ook zonder voorafgaande offerte worden uitgevoerd.
1. Het ontbreken van een voorafgaande prijsopgave laat de betalingsverplichting onverlet.
1. Verzoeken gedaan schriftelijk, digitaal, telefonisch of in persoon gelden als bindende opdracht.
1. M7 registreert gewerkte uren via interne urenlogs en projectadministratie.
1. Deze urenregistratie geldt als deugdelijke en rechtsgeldige onderbouwing van verrichte werkzaamheden, behoudens aantoonbaar tegenbewijs.

## Artikel 6 – Uitvoering en Inspanningsverplichting
1. M7 heeft een inspanningsverplichting tenzij schriftelijk uitdrukkelijk anders overeengekomen.
1. Digitale systemen, automatiseringen, AI-oplossingen en externe integraties zijn onderhoudsgevoelig en afhankelijk van derden.
1. Storingen of niet-werkende functionaliteiten impliceren niet automatisch een tekortkoming.
1. Onderzoeks-, analyse- en testwerkzaamheden zijn zelfstandige en factureerbare prestaties.

## Artikel 7 – Technische Ondersteuning en Storingen
1. Technische ondersteuning omvat alle werkzaamheden naar aanleiding van storingen, foutmeldingen, niet-werkende functionaliteiten, updates, beveiligingsincidenten en wijzigingsverzoeken.
1. Alle inspanningen in dit kader, inclusief diagnose, analyse en communicatie met derden, zijn factureerbaar.
1. Indien directe actie noodzakelijk is voor veiligheid, continuïteit of beschikbaarheid, mag M7 zonder voorafgaande toestemming handelen en achteraf factureren.
1. Spoed of urgentie geeft geen recht op kosteloze inzet.

## Artikel 8 – Intellectueel Eigendom
1. Alle ontwerpen, strategieën, concepten, code, automatiseringen, AI-prompts en overige creaties blijven eigendom van M7 tot volledige betaling.
1. Na volledige betaling verkrijgt de Klant uitsluitend het overeengekomen gebruiksrecht.
1. Overdracht van auteursrechten vindt uitsluitend plaats indien schriftelijk overeengekomen.
1. Bronbestanden en broncode worden niet verstrekt tenzij expliciet overeengekomen.
1. M7 behoudt het recht om werk te gebruiken voor portfolio- en promotiedoeleinden.

## Artikel 9 – AI, Automatisering en Data
1. AI-gegenereerde output kan onnauwkeurigheden bevatten.
1. M7 garandeert geen exclusiviteit of foutloosheid van AI-output.
1. De Klant blijft verantwoordelijk voor juridische toetsing en correct gebruik.
1. M7 is niet aansprakelijk voor claims voortvloeiend uit AI-gebruik.
1. De Klant staat in voor rechtmatige verwerking van aangeleverde data.

## Artikel 10 – Projectplanning en Vertraging
1. Indien de Klant niet tijdig input of goedkeuring verstrekt, mag M7 planning aanpassen.
1. Vertraging aan Klantzijde geeft geen recht op kosteloze verlenging.
1. Bij stagnatie langer dan 30 dagen mag M7 tussentijds factureren.

## Artikel 11 – Betaling en Zekerheden
1. Facturen dienen te worden voldaan binnen de vermelde betalingstermijn.
1. Bij overschrijding is wettelijke handelsrente verschuldigd.
1. Incassokosten komen volledig voor rekening van de Klant.
1. M7 mag vooruitbetaling of aanvullende zekerheid verlangen.
1. Bij betalingsachterstand mag M7 werkzaamheden opschorten of digitale omgevingen tijdelijk buiten gebruik stellen.

## Artikel 12 – Late Facturatie
1. Het niet onmiddellijk factureren van werkzaamheden laat de verschuldigdheid daarvan onverlet.
1. Administratieve vertraging in facturatie leidt niet tot verval van rechten of afstand van recht door M7.
1. M7 is gerechtigd verrichte werkzaamheden alsnog te factureren binnen de wettelijke verjaringstermijn.
1. De Klant kan zich niet beroepen op het enkele tijdsverloop tussen uitvoering en facturatie als grond voor niet-betaling.

## Artikel 13 – Aansprakelijkheid
1. Aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht.
1. Indirecte schade, gevolgschade, winstderving en reputatieschade zijn uitgesloten.
1. M7 is niet aansprakelijk voor schade veroorzaakt door derden, platformwijzigingen, hacks of externe storingen.
1. De Klant vrijwaart M7 tegen aanspraken van derden.

## Artikel 14 – Overmacht
1. Onder overmacht wordt verstaan iedere omstandigheid buiten de invloed van M7, waaronder storingen bij hostingpartijen, leveranciers, internetproviders, cyberaanvallen of overheidsmaatregelen.
1. In geval van overmacht worden verplichtingen opgeschort zonder schadeplichtigheid.

## Artikel 15 – Beëindiging en Exit
1. Reeds verrichte werkzaamheden blijven verschuldigd.
1. Overdracht van systemen, accounts of data vindt uitsluitend plaats na volledige betaling.
1. Exit-werkzaamheden worden gefactureerd tegen het geldende uurtarief.
1. M7 is niet verplicht interne ontwikkelomgevingen of tools over te dragen.

## Artikel 16 – Geheimhouding
Partijen verplichten zich tot geheimhouding van vertrouwelijke informatie, ook na beëindiging van de overeenkomst.

## Artikel 17 – Toepasselijk Recht en Geschillen
1. Op alle overeenkomsten is Nederlands recht van toepassing.
1. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar M7 is gevestigd.`;

const TERMS_EN = `This is an English translation of our general terms and conditions. In case of any difference in interpretation, the [Dutch version](nl:/algemene-voorwaarden) prevails.

## Article 1 – Definitions
1. **M7:** the contractor, active in branding, strategic branding, rebranding, graphic design, illustration, video and image generation, AI solutions, consultancy, automation, development of websites, applications, portals and apps, hosting, maintenance, management and other digital and creative services.
1. **Client:** any natural or legal person who enters into an agreement with M7.
1. **Services:** all work offered and performed by M7.
1. **Additional work:** work outside the agreed scope or quote.
1. **Digital environments:** websites, applications, portals, apps, servers, cloud environments, automations, integrations and related infrastructure.

## Article 2 – Applicability and Order of Precedence
1. These general terms and conditions apply to all quotes, agreements and work of M7.
1. For hosting, domain registration, server management and maintenance subscriptions (M7 Webhosting and M7 Webplans), additional specific terms apply as published on the [separate page](/hosting-webplans).
1. These specific terms form an integral part of the agreement for those services.
1. In case of conflict, the specific Hosting & Webplans terms prevail over these general terms and conditions.
1. By entering into an agreement, the Client declares to have taken note of all applicable terms.

## Article 3 – Formation of the Agreement
1. M7 works both on the basis of a quote and on the basis of time spent (subsequent calculation).
1. An agreement is formed by:
  - Written or digital acceptance of a quote;
  - Verbal agreement;
  - Or a request to carry out work, made in writing, digitally, by telephone or in person.
1. Every request for action, adjustment, investigation or execution of work counts as a binding assignment.
1. An agreement can also be formed without a signed quote if M7 carries out work at the Client's request.

## Article 4 – Quotes and Scope
1. Quotes are without obligation and valid for 30 days unless stated otherwise.
1. The quote describes the agreed scope of work.
1. Changes, additions or extensions count as additional work.
1. If it becomes clear during execution that additional work is necessary, it will be carried out and invoiced as additional work.
1. Continuation of work without objection counts as acceptance of additional work.

## Article 5 – Additional Work and Work without a Quote
1. Work can also be carried out without a prior quote.
1. The absence of a prior price estimate does not affect the obligation to pay.
1. Requests made in writing, digitally, by telephone or in person count as a binding assignment.
1. M7 records hours worked through internal time logs and project administration.
1. This time registration counts as sound and legally valid substantiation of the work performed, subject to demonstrable evidence to the contrary.

## Article 6 – Execution and Best-Efforts Obligation
1. M7 has a best-efforts obligation unless expressly agreed otherwise in writing.
1. Digital systems, automations, AI solutions and external integrations require maintenance and depend on third parties.
1. Outages or non-working functionality do not automatically imply a shortcoming.
1. Investigation, analysis and testing are independent and billable services.

## Article 7 – Technical Support and Outages
1. Technical support covers all work in response to outages, error messages, non-working functionality, updates, security incidents and change requests.
1. All efforts in this context, including diagnosis, analysis and communication with third parties, are billable.
1. If immediate action is necessary for security, continuity or availability, M7 may act without prior permission and invoice afterwards.
1. Urgency does not entitle the Client to work free of charge.

## Article 8 – Intellectual Property
1. All designs, strategies, concepts, code, automations, AI prompts and other creations remain the property of M7 until paid in full.
1. After full payment, the Client only obtains the agreed right of use.
1. Copyright is only transferred if agreed in writing.
1. Source files and source code are not provided unless explicitly agreed.
1. M7 retains the right to use work for portfolio and promotional purposes.

## Article 9 – AI, Automation and Data
1. AI-generated output may contain inaccuracies.
1. M7 does not guarantee exclusivity or error-free AI output.
1. The Client remains responsible for legal review and correct use.
1. M7 is not liable for claims arising from the use of AI.
1. The Client guarantees the lawful processing of data it supplies.

## Article 10 – Project Planning and Delays
1. If the Client does not provide input or approval in time, M7 may adjust the planning.
1. Delays on the Client's side do not entitle the Client to an extension free of charge.
1. If a project stalls for more than 30 days, M7 may invoice in the interim.

## Article 11 – Payment and Securities
1. Invoices must be paid within the stated payment term.
1. If the term is exceeded, statutory commercial interest is due.
1. Collection costs are entirely for the Client's account.
1. M7 may require advance payment or additional security.
1. In case of payment arrears, M7 may suspend work or temporarily take digital environments out of service.

## Article 12 – Late Invoicing
1. Not invoicing work immediately does not affect the obligation to pay for it.
1. Administrative delay in invoicing does not lead to the lapse or waiver of any rights of M7.
1. M7 is entitled to invoice work performed at a later date within the statutory limitation period.
1. The Client cannot invoke the mere passage of time between execution and invoicing as grounds for non-payment.

## Article 13 – Liability
1. Liability is limited to the invoice amount of the assignment concerned.
1. Indirect damage, consequential damage, loss of profit and reputational damage are excluded.
1. M7 is not liable for damage caused by third parties, platform changes, hacks or external outages.
1. The Client indemnifies M7 against claims by third parties.

## Article 14 – Force Majeure
1. Force majeure means any circumstance beyond M7's control, including outages at hosting parties, suppliers or internet providers, cyber attacks or government measures.
1. In case of force majeure, obligations are suspended without liability for damages.

## Article 15 – Termination and Exit
1. Work already performed remains payable.
1. Systems, accounts or data are only transferred after full payment.
1. Exit work is invoiced at the applicable hourly rate.
1. M7 is not obliged to transfer internal development environments or tools.

## Article 16 – Confidentiality
The parties undertake to keep confidential information confidential, also after termination of the agreement.

## Article 17 – Applicable Law and Disputes
1. Dutch law applies to all agreements.
1. Disputes are submitted to the competent court in the district where M7 is established.`;

const HOSTING_NL = `## Artikel 1: Definities
1. **M7 Webhosting en M7 Webplans:** Alle internet-gerelateerde diensten inclusief, maar niet beperkt tot, webhosting, e-mail hosting, domeinregistratie, onderhoud van domeinen, en specifiek voor de M7 Webplans, onderhoudsuren voor website of applicatie van de Klant, die door ons aan de Klant worden geleverd.

## Artikel 2: Overeenkomst en Verlenging
1. De overeenkomst wordt aangegaan voor de periode van één jaar, tenzij anders overeengekomen in een schriftelijke overeenkomst.
1. Tenzij ten minste één volledige maand voor de vervaldatum door de Klant schriftelijk is opgezegd, wordt de overeenkomst automatisch verlengd voor dezelfde periode.
1. Bij niet tijdige opzegging is de Klant verplicht de kosten voor de volledige verlengingsperiode te betalen.

## Artikel 3: Eigendom Domeinnaam en M7 Webplans
1. Domeinnamen worden door ons geregistreerd op onze naam en zijn intellectueel eigendom van ons, tenzij uitdrukkelijk anders overeengekomen in een schriftelijke overeenkomst met de Klant.
1. De M7 Webplans bevatten een vooraf overeengekomen aantal uren voor onderhoud aan de website of applicatie van de Klant. Deze uren zullen proactief door ons team worden besteed aan onderhoudswerkzaamheden zoals het updaten en bijwerken van gebruikte technologieën en interfaces.
1. Indien blijkt dat het aantal uren in het gekozen pakket niet toereikend is voor het benodigde onderhoud, onderbouwd door onze urenlogs, behouden wij ons het recht voor om de Klant automatisch over te zetten naar een ander passend pakket, waarvan de tarieven vooraf bekend zijn gemaakt.
1. Eventuele uren die aan het einde van een periode onbesteed blijven, kunnen niet worden gecrediteerd maar kunnen, in overleg met de Klant, worden besteed aan andere werkzaamheden.

## Artikel 4: Aansprakelijkheid en Verplichtingen
1. Wij hebben een inspanningsverplichting met betrekking tot het leveren van de M7 Webhosting en M7 Webplans.
1. Wij zijn niet aansprakelijk voor enige schade die de Klant lijdt door het gebruik van de geleverde diensten, tenzij er sprake is van opzet of grove nalatigheid aan onze zijde.
1. Wij zijn niet verantwoordelijk voor schade of verlies van gegevens van de Klant.

## Artikel 5: Recht om Diensten te Onderbreken
1. Wij behouden ons het recht voor om de website of applicatie van de Klant offline te halen indien deze zich niet houdt aan gemaakte afspraken of indien betaling van openstaande facturen of geschillen uitblijft.

## Artikel 6: Opzegging en Administratieve Kosten
1. Opzegging van een M7 Webhosting gerelateerde dienst dient schriftelijk te gebeuren.
1. Bij opzegging van de dienst kunnen administratieve kosten in rekening worden gebracht, variërend tussen €195 exclusief BTW en €495 exclusief BTW. Deze kosten zijn te vinden op onze website.

## Artikel 7: Tarieven en Betaling
1. Voor werkzaamheden die niet onder de standaard M7 Webhosting en M7 Webplans vallen, wordt een uurtarief van €90 exclusief BTW gehanteerd.
1. Alle facturen dienen door de Klant betaald te worden binnen de betaaltermijn die op de factuur wordt vermeld.
1. Wij behouden ons het recht voor om onze tarieven te wijzigen en te indexeren zonder voorafgaande aankondiging.

## Artikel 8: Wijzigingen Voorwaarden
1. Wij behouden ons het recht voor deze voorwaarden te wijzigen. Wijzigingen worden minimaal 30 dagen voor inwerkingtreding aan de Klant gecommuniceerd.

## Artikel 9: Recht op Opname en Geschillen
1. Op deze algemene voorwaarden is Nederlands recht van toepassing.
1. Alle geschillen die voortvloeien uit of in verband staan met overeenkomsten tussen de Klant en ons worden voorgelegd aan de bevoegde rechter in het arrondissement waar wij gevestigd zijn in Nistelrode, Noord Brabant.

## Artikel 10: Technische Ondersteuning, Storingen en Klantverzoeken
Onder technische ondersteuning wordt verstaan: alle werkzaamheden die door ons worden verricht naar aanleiding van vragen, storingsmeldingen, foutmeldingen, niet-werkende functionaliteiten, wijzigingsverzoeken of andere verzoeken van de Klant, waaronder – maar niet beperkt tot – analyse, onderzoek, diagnose, herstelwerkzaamheden, aanpassingen aan functionaliteiten, onderhoudswerkzaamheden, ondersteuning bij koppelingen met externe systemen, communicatie met derde partijen en advieswerkzaamheden.

De M7 Webplans omvatten uitsluitend het proactief uitvoeren van regulier onderhoud zoals overeengekomen, waaronder updates van gebruikte software, frameworks, thema's, plug-ins, modules, integraties en onderliggende systemen, alsmede eventueel schriftelijk overeengekomen onderhoud aan maatwerk functionaliteiten of koppelingen. Hieronder valt niet het structureel monitoren, herstellen of garanderen van foutloze werking van alle aanwezige functionaliteiten, integraties of externe afhankelijkheden.

Websites, applicaties en digitale services zijn afhankelijk van software, servers, browsers, API's, externe platforms en derde partijen. Deze systemen en integraties zijn naar hun aard onderhoudsgevoelig en onderhevig aan wijzigingen buiten onze invloedssfeer. Het optreden van storingen, foutmeldingen of niet-werkende functionaliteiten betekent derhalve niet dat de betreffende werkzaamheden onder het reguliere onderhoud vallen.

Werkzaamheden buiten de overeengekomen scope worden aangemerkt als meerwerk. Hieronder vallen in ieder geval:
- Het onderzoeken en oplossen van storingen, ongeacht de oorzaak;
- Het onderzoeken en herstellen van niet-werkende functionaliteiten;
- Werkzaamheden als gevolg van updates, wijzigingen of beperkingen van externe platforms, softwareleveranciers of hostingpartijen;
- Het herstellen van fouten ontstaan door handelen van de Klant of door door de Klant ingeschakelde derden;
- Functionele uitbreidingen of wijzigingen;
- Onderzoek naar, herstel van en implementatie of aanpassing van koppelingen met externe systemen;
- Spoedverzoeken of werkzaamheden buiten reguliere planning;
- Ondersteuning en/of support naar aanleiding van storingen of technische problemen indien de inbegrepen onderhoudsuren reeds volledig zijn besteed.

Alle door ons verrichte inspanningen in dit kader, waaronder mede begrepen onderzoeksuren, diagnosewerkzaamheden, testwerkzaamheden en communicatie met derden, zijn factureerbaar op basis van nacalculatie tegen het geldende uurtarief zoals vermeld in Artikel 7, tenzij schriftelijk anders overeengekomen.

Een verzoek van de Klant per e-mail, ticketsysteem of andere schriftelijke communicatie wordt aangemerkt als opdracht tot uitvoering van de betreffende werkzaamheden, tenzij uitdrukkelijk vooraf anders overeengekomen.

Indien naar ons redelijk oordeel directe actie noodzakelijk is ter waarborging van continuïteit, veiligheid of werking van de website, applicatie of digitale service, zijn wij gerechtigd werkzaamheden zonder voorafgaande toestemming uit te voeren en deze achteraf te factureren.

Indien mogelijk zullen wij de Klant vooraf informeren over een kostenindicatie. Het uitblijven van een voorafgaande urenopgave of kostenraming laat onverlet dat verrichte werkzaamheden buiten de overeengekomen scope volledig factureerbaar zijn. Spoed of urgentie bij storingen geeft geen recht op kosteloze inzet buiten het overeengekomen pakket.`;

const HOSTING_EN = `This is an English translation of the specific terms for M7 Webhosting and M7 Webplans. In case of any difference in interpretation, the [Dutch version](nl:/hosting-webplans) prevails. These terms supplement our [general terms and conditions](/algemene-voorwaarden).

## Article 1: Definitions
1. **M7 Webhosting and M7 Webplans:** All internet-related services including, but not limited to, web hosting, email hosting, domain registration, domain maintenance and, specifically for the M7 Webplans, maintenance hours for the Client's website or application, supplied by us to the Client.

## Article 2: Agreement and Renewal
1. The agreement is entered into for a period of one year, unless agreed otherwise in a written agreement.
1. Unless the Client has cancelled in writing at least one full month before the expiry date, the agreement is automatically renewed for the same period.
1. If not cancelled in time, the Client is obliged to pay the costs for the full renewal period.

## Article 3: Ownership of Domain Names and M7 Webplans
1. Domain names are registered by us in our name and are our intellectual property, unless expressly agreed otherwise in a written agreement with the Client.
1. The M7 Webplans include a pre-agreed number of hours for maintenance of the Client's website or application. Our team spends these hours proactively on maintenance such as updating the technologies and interfaces used.
1. If the number of hours in the chosen plan proves insufficient for the required maintenance, as substantiated by our time logs, we reserve the right to automatically move the Client to another suitable plan, whose rates have been made known in advance.
1. Hours left unused at the end of a period cannot be credited but can, in consultation with the Client, be spent on other work.

## Article 4: Liability and Obligations
1. We have a best-efforts obligation with regard to providing M7 Webhosting and M7 Webplans.
1. We are not liable for any damage the Client suffers through the use of the services provided, unless there is intent or gross negligence on our part.
1. We are not responsible for damage to or loss of the Client's data.

## Article 5: Right to Interrupt Services
1. We reserve the right to take the Client's website or application offline if the Client does not comply with agreements made or if payment of outstanding invoices or disputes is not forthcoming.

## Article 6: Cancellation and Administrative Costs
1. Cancellation of an M7 Webhosting-related service must be made in writing.
1. On cancellation of the service, administrative costs may be charged, ranging from €195 excluding VAT to €495 excluding VAT. These costs can be found on our website.

## Article 7: Rates and Payment
1. For work not covered by the standard M7 Webhosting and M7 Webplans, an hourly rate of €90 excluding VAT applies.
1. All invoices must be paid by the Client within the payment term stated on the invoice.
1. We reserve the right to change and index our rates without prior notice.

## Article 8: Changes to the Terms
1. We reserve the right to change these terms. Changes are communicated to the Client at least 30 days before they take effect.

## Article 9: Applicable Law and Disputes
1. Dutch law applies to these terms and conditions.
1. All disputes arising from or related to agreements between the Client and us are submitted to the competent court in the district where we are established in Nistelrode, North Brabant.

## Article 10: Technical Support, Outages and Client Requests
Technical support means: all work we carry out in response to questions, outage reports, error messages, non-working functionality, change requests or other requests from the Client, including but not limited to analysis, investigation, diagnosis, repairs, changes to functionality, maintenance, support with integrations with external systems, communication with third parties and advice.

The M7 Webplans only include proactively carrying out regular maintenance as agreed, including updates of the software, frameworks, themes, plug-ins, modules, integrations and underlying systems used, as well as any maintenance of custom functionality or integrations agreed in writing. This does not include structurally monitoring, repairing or guaranteeing the error-free operation of all functionality, integrations or external dependencies present.

Websites, applications and digital services depend on software, servers, browsers, APIs, external platforms and third parties. By their nature, these systems and integrations require maintenance and are subject to changes beyond our control. The occurrence of outages, error messages or non-working functionality therefore does not mean that the work concerned falls under regular maintenance.

Work outside the agreed scope counts as additional work. This includes in any case:
- Investigating and resolving outages, regardless of the cause;
- Investigating and repairing non-working functionality;
- Work resulting from updates, changes or limitations of external platforms, software suppliers or hosting parties;
- Repairing errors caused by actions of the Client or third parties engaged by the Client;
- Functional extensions or changes;
- Investigating, repairing and implementing or adjusting integrations with external systems;
- Urgent requests or work outside the regular planning;
- Support in response to outages or technical problems once the included maintenance hours have been fully used.

All efforts we make in this context, including investigation hours, diagnosis, testing and communication with third parties, are billable on the basis of time spent at the applicable hourly rate as stated in Article 7, unless agreed otherwise in writing.

A request from the Client by email, ticket system or other written communication counts as an assignment to carry out the work concerned, unless expressly agreed otherwise in advance.

If, in our reasonable opinion, immediate action is necessary to safeguard the continuity, security or operation of the website, application or digital service, we are entitled to carry out work without prior permission and invoice it afterwards.

Where possible, we will inform the Client in advance of a cost indication. The absence of a prior estimate of hours or costs does not affect the fact that work performed outside the agreed scope is fully billable. Urgency in the event of outages does not entitle the Client to work free of charge outside the agreed plan.`;

const PRIVACY_NL = `Dit privacybeleid legt uit hoe {{company}} ("wij" en "ons" in dit beleid) persoonsgegevens van je kan verzamelen en gebruiken wanneer je onze website gebruikt. Als bedrijf zetten we ons in om de privacy te respecteren en te beschermen van iedereen met wie we contact hebben. We verwerken je persoonsgegevens altijd in overeenstemming met de geldende privacy- en gegevensbeschermingswetgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG). Dit privacybeleid geeft inzicht in hoe we via deze website informatie verzamelen.

## Informatie die we via deze website verzamelen
We verzamelen informatie over je als je gebruikmaakt van interactieve onderdelen van onze website die om een persoonlijke reactie vragen, of als je ons vraagt te reageren op een vraag. Op deze website gaat het om:
- het contactformulier;
- de korte intake;
- een supportticket;
- de aanmelding voor onze nieuwsbrief.

De informatie die we verzamelen is beperkt tot de gegevens die we nodig hebben om de specifieke dienst te leveren waar je om hebt gevraagd, zoals je naam, bedrijfsnaam, e-mailadres, telefoonnummer en je bericht. We verzamelen geen gevoelige informatie, zoals je politieke of religieuze overtuiging, etnische achtergrond, seksuele voorkeur, gezondheid of andere gevoelige informatie.

## Hoe we je informatie gebruiken
Behalve waar de wet dit vereist, gebruiken we de persoonsgegevens die je ons geeft alleen om de specifieke informatie of dienst te leveren waar je om hebt gevraagd. Als je bijvoorbeeld via deze website reageert op een vacature of carrièremogelijkheid, gebruiken we het e-mailadres dat je opgeeft alleen om op dat verzoek te reageren. Zonder je uitdrukkelijke toestemming gebruiken we je contactgegevens niet voor een ander doel.

## Hoe we met je persoonsgegevens omgaan
We zorgen ervoor dat je persoonsgegevens veilig en vertrouwelijk worden bewaard en niet langer dan nodig. Van tijd tot tijd kunnen we externe dienstverleners vragen ons te helpen met het beheer van onze IT-systemen. Sommige van deze systemen kunnen zich in het buitenland bevinden. We geven je gegevens alleen door aan een externe dienstverlener of naar het buitenland als we ervan overtuigd zijn dat er passende beschermingsmaatregelen zijn om de integriteit en veiligheid van de verwerkte gegevens te waarborgen, en dat de geldende privacy- en gegevensbeschermingswetgeving wordt nageleefd.

## Cookies
Hoe we cookies en vergelijkbare technieken gebruiken, lees je in ons [cookiebeleid](/cookies). Analytische cookies plaatsen we alleen na je toestemming.

## Onze verantwoordelijkheid voor links naar andere websites
Dit privacybeleid geldt alleen voor de persoonsgegevens die we via deze website verzamelen en gebruiken. Op deze website staan links naar andere websites, waaronder sociale media zoals Facebook, LinkedIn en Instagram. Als je die links volgt, gelden de gebruiks- en privacyvoorwaarden van die websites, omdat hun omgang met gegevens buiten dit privacybeleid valt. We hebben geen verantwoordelijkheid voor of zeggenschap over de informatie die websites van derden verzamelen, en we kunnen niet verantwoordelijk zijn voor de bescherming en privacy van informatie die je op zulke websites achterlaat.

## Privacy van kinderen
We proberen niet actief informatie te verzamelen over kinderen van 12 jaar of jonger, en we maken geen doelgroepsegmenten die specifiek bedoeld zijn om kinderen te benaderen. Heb je zorgen over de privacy van je kind in relatie tot onze diensten, of denk je dat je kind persoonsgegevens op onze website heeft ingevuld? Neem dan contact met ons op via {{email}}.

## Delen en verstrekken van informatie
We verkopen of verhuren geen persoonsgegevens over jou aan derden. We kunnen persoonsgegevens verstrekken in het kader van een juridische procedure, bijvoorbeeld op grond van een rechterlijk bevel of een dagvaarding, op verzoek van een opsporingsinstantie, of wanneer we denken dat dit nodig is om illegale activiteiten te onderzoeken, te voorkomen of er actie tegen te ondernemen, en verder wanneer de wet dat vereist. Partijen die in onze opdracht werken, kunnen toegang hebben tot persoonsgegevens om de diensten uit te voeren die ze voor ons verrichten.

## Jouw rechten
Onder de AVG heb je het recht om je persoonsgegevens in te zien, te laten corrigeren of te laten verwijderen. Je kunt ook bezwaar maken tegen het gebruik ervan, de verwerking laten beperken, je gegevens laten overdragen en een eerder gegeven toestemming intrekken. Stuur je verzoek naar {{email}}. Ben je niet tevreden over hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de [Autoriteit Persoonsgegevens](https://autoriteitpersoonsgegevens.nl).

## Wijzigingen
We kunnen dit beleid van tijd tot tijd aanpassen door deze pagina bij te werken. Kijk daarom af en toe op deze pagina, zodat je op de hoogte bent van eventuele wijzigingen. Laat het ons weten als je gegevens of keuzes veranderen. Wil je geen informatie meer van ons ontvangen, veranderen je persoonlijke voorkeuren, of heb je vragen over hoe we je persoonsgegevens gebruiken? Neem dan rechtstreeks contact met ons op.

## Contact
**{{company}}**
{{street}}
{{postal}} {{city}}
Nederland
[{{email}}](mailto:{{email}})`;

const PRIVACY_EN = `This privacy policy explains how {{company}} (referred to as "we" and "us" in this policy) may collect and use personal information from you when you use our website. As a business, we are committed to respecting and protecting the privacy of all individuals with whom we interact. We will process your personal information at all times in accordance with applicable privacy and data protection laws, including the General Data Protection Regulation (GDPR). The purpose of this privacy policy is to provide transparency around how we collect information on this website.

## Information we collect on this website
We collect information about you if you make use of any of the interactive features of our website that rely on a personalised response, or where you ask us to respond to a query you have. On this website, these are:
- the contact form;
- the short intake;
- a support ticket;
- the newsletter sign-up.

The information we collect is limited to the details we need to provide the specific service you have asked for, such as your name, company name, email address, phone number and message. We do not collect sensitive information, such as your political or religious beliefs, ethnic background, sexual preference, health or any other sensitive information.

## How we use your information
Except where required by law, we only use the personal information you provide to us to deliver the specific information or service you have requested. For example, if you submit an enquiry in relation to a job or career opportunity through this website, we will only use the email address you provide to us to respond to that request. Without your express consent, we will not use your contact details for any other purpose.

## How we handle your personal information
We are committed to ensuring your personal information is kept secure and confidential and not kept for longer than is necessary. From time to time we may ask third-party service providers to help us manage our information technology systems. Some of these systems may be located in countries overseas. We will only transfer your information to a third-party service provider or overseas where we are satisfied that adequate levels of protection are in place to protect the integrity and security of any information being processed and compliance with applicable privacy and data protection laws.

## Cookies
How we use cookies and similar technologies is explained in our [cookie policy](/cookies). We only place analytics cookies after you have given consent.

## Our responsibility for website links
This privacy policy is limited to the personal information which we collect and use via this website. We do provide links within this site to other websites, including social media sites such as Facebook, LinkedIn and Instagram. If you follow these links, you should use these sites in conjunction with their applicable user and privacy policies, as their data practices fall outside the scope of this privacy policy. Further, we can have no responsibility for or control over the information collected by any third-party website and we cannot be responsible for the protection and privacy of any information which you may provide on such websites.

## Children's privacy
We do not actively seek to collect information about children aged 12 or under, or create interest segments specifically designed for the purpose of targeting children. If you have any concerns about your child's privacy in relation to our services, or if you believe that your child may have entered personally identifiable information onto our website, please contact us at {{email}}.

## Information sharing and disclosure
We do not sell or rent any personally identifiable information about you to any third party. We may disclose personally identifiable information in response to legal process, for example in response to a court order or a subpoena, or in response to a law enforcement agency's request, or where we believe it is necessary to investigate, prevent or take action regarding illegal activities, and as otherwise required by law. Our agents and contractors may have access to personally identifiable information to help carry out the services they are performing for us.

## Your rights
Under the GDPR you have the right to access, correct or delete your personal data. You can also object to its use, have its processing restricted, have your data transferred and withdraw consent you gave earlier. Send your request to {{email}}. If you are not satisfied with how we handle your data, you can file a complaint with the Dutch Data Protection Authority, the [Autoriteit Persoonsgegevens](https://autoriteitpersoonsgegevens.nl).

## Updates
We may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are aware of any changes. Contact us if your information or choices change. If you would like to stop receiving information from us, or your personal preferences change, or if you have any queries about how we use your personal information, please let us know by contacting us directly.

## Contact
**{{company}}**
{{street}}
{{postal}} {{city}}
The Netherlands
[{{email}}](mailto:{{email}})`;

const COOKIES_NL = `Cookies zijn kleine bestanden die een website via je browser op je apparaat opslaat. Vergelijkbare technieken, zoals local storage en session storage, doen hetzelfde. In dit cookiebeleid lees je welke we op deze website gebruiken, waarvoor, en hoe je je keuze aanpast. Hoe we met persoonsgegevens omgaan, staat in ons [privacybeleid](/privacybeleid).

## Jouw keuze
Bij je eerste bezoek vragen we via een melding onderin beeld of je analytische cookies accepteert. Zolang je niets kiest of weigert, plaatsen we alleen wat nodig is om de website te laten werken. Je kunt je keuze altijd aanpassen met de knop hieronder of door de sitegegevens van m7branding.com in je browser te wissen; de melding verschijnt dan opnieuw.

{{consent-reset}}

## Noodzakelijk en functioneel
Deze gegevens zijn nodig om de website goed te laten werken. Ze blijven op je eigen apparaat, worden niet gebruikt om je te volgen en vragen geen toestemming.
- **m7-consent** (local storage): onthoudt je cookiekeuze, zodat we niet bij elk bezoek opnieuw vragen. Blijft bewaard tot je je sitegegevens wist.
- **m7-intro** (session storage): zorgt dat de laadanimatie maar één keer per bezoek speelt. Verdwijnt als je het tabblad sluit.
- **m7-intake-draft** en **m7-support-draft** (session storage): bewaren tijdelijk wat je in de korte intake of een supportticket invult, zodat je niets kwijtraakt als je de pagina herlaadt. Verdwijnen als je het tabblad sluit.
- **m7-dock-hint** (session storage): onthoudt dat het label bij de zwevende intake-knop al een keer is getoond. Verdwijnt als je het tabblad sluit.

## Analytisch (alleen met toestemming)
Met Google Analytics 4, geladen via Google Tag Manager, zien we hoe bezoekers de website gebruiken, zodat we hem kunnen verbeteren. We gebruiken Google Consent Mode v2: zonder je toestemming plaatst Google Analytics geen cookies. Google kan dan wel signalen zonder cookies ontvangen, zoals dat er een pagina is bekeken, zonder dat je herkend wordt.
- **_ga**: onderscheidt bezoekers. Bewaartermijn: 2 jaar.
- **_ga_<ID>**: onthoudt de status van je bezoek. Bewaartermijn: 2 jaar.

Meer over deze cookies lees je bij [Google](https://support.google.com/analytics/answer/11397207). Je kunt Google Analytics ook voor alle websites blokkeren met de [browser-add-on van Google](https://tools.google.com/dlpage/gaoptout).

## Marketing
Op dit moment plaatsen we geen advertentie- of trackingcookies van andere partijen. Voegen we die later toe, dan gebeurt dat alleen na je toestemming en passen we deze pagina aan.

## Links naar andere websites
Op onze website staan links naar onder meer Instagram, LinkedIn, Facebook, YouTube en Google. Klik je zo'n link aan, dan geldt het cookiebeleid van die partij. Op onze eigen pagina's laden we geen ingesloten berichten of video's van die platforms.

## Vragen
Heb je vragen over dit cookiebeleid? Mail ons via [{{email}}](mailto:{{email}}).`;

const COOKIES_EN = `Cookies are small files a website stores on your device through your browser. Similar technologies, such as local storage and session storage, do the same. This cookie policy explains which ones we use on this website, what for, and how you can change your choice. How we handle personal data is described in our [privacy policy](/privacybeleid).

## Your choice
On your first visit, a notice at the bottom of the screen asks whether you accept analytics cookies. As long as you haven't chosen, or if you decline, we only store what is needed to make the website work. You can change your choice at any time with the button below or by clearing the site data of m7branding.com in your browser; the notice will then appear again.

{{consent-reset}}

## Necessary and functional
This data is needed for the website to work properly. It stays on your own device, is not used to track you and does not require consent.
- **m7-consent** (local storage): remembers your cookie choice, so we don't ask again on every visit. Kept until you clear your site data.
- **m7-intro** (session storage): makes sure the loading animation only plays once per visit. Removed when you close the tab.
- **m7-intake-draft** and **m7-support-draft** (session storage): temporarily keep what you fill in in the short intake or a support ticket, so you don't lose anything if you reload the page. Removed when you close the tab.
- **m7-dock-hint** (session storage): remembers that the label next to the floating intake button has been shown once. Removed when you close the tab.

## Analytics (only with consent)
With Google Analytics 4, loaded through Google Tag Manager, we see how visitors use the website, so we can improve it. We use Google Consent Mode v2: without your consent, Google Analytics does not place any cookies. Google may then still receive signals without cookies, such as that a page was viewed, without recognising you.
- **_ga**: distinguishes visitors. Retention: 2 years.
- **_ga_<ID>**: remembers the state of your visit. Retention: 2 years.

You can read more about these cookies at [Google](https://support.google.com/analytics/answer/11397207). You can also block Google Analytics for all websites with [Google's browser add-on](https://tools.google.com/dlpage/gaoptout).

## Marketing
We currently do not place any advertising or tracking cookies from other parties. If we add them later, this will only happen with your consent and we will update this page.

## Links to other websites
Our website links to Instagram, LinkedIn, Facebook, YouTube and Google, among others. If you click such a link, that party's cookie policy applies. We do not load embedded posts or videos from those platforms on our own pages.

## Questions
Do you have questions about this cookie policy? Email us at [{{email}}](mailto:{{email}}).`;

export const legalDocs: Record<string, LegalDoc> = {
  "algemene-voorwaarden": {
    title: { nl: "Algemene voorwaarden", en: "Terms & conditions" },
    updated: { nl: "Laatste update: januari 2026", en: "Last update: January 2026" },
    description: {
      nl: "De algemene voorwaarden van M7 Branding & Design B.V. voor offertes, opdrachten en werkzaamheden.",
      en: "The general terms and conditions of M7 Branding & Design B.V. for quotes, assignments and work.",
    },
    body: { nl: TERMS_NL, en: TERMS_EN },
  },
  "hosting-webplans": {
    title: { nl: "M7 Webhosting & M7 Webplans", en: "M7 Webhosting & M7 Webplans" },
    updated: { nl: "Laatste update: 5 juli 2023", en: "Last update: 5 July 2023" },
    description: {
      nl: "Specifieke voorwaarden voor M7 Webhosting, domeinregistratie en de onderhoudsabonnementen M7 Webplans.",
      en: "Specific terms for M7 Webhosting, domain registration and the M7 Webplans maintenance subscriptions.",
    },
    body: { nl: HOSTING_NL, en: HOSTING_EN },
  },
  privacybeleid: {
    title: { nl: "Privacybeleid", en: "Privacy policy" },
    updated: { nl: "Laatste update: oktober 2026", en: "Last update: October 2026" },
    description: {
      nl: "Hoe M7 Branding & Design B.V. omgaat met persoonsgegevens die je via deze website deelt, en welke rechten je hebt.",
      en: "How M7 Branding & Design B.V. handles personal data you share through this website, and what your rights are.",
    },
    body: { nl: PRIVACY_NL, en: PRIVACY_EN },
  },
  cookies: {
    title: { nl: "Cookiebeleid", en: "Cookie policy" },
    updated: { nl: "Laatste update: oktober 2026", en: "Last update: October 2026" },
    description: {
      nl: "Welke cookies en vergelijkbare technieken m7branding.com gebruikt, waarvoor, en hoe je je keuze aanpast.",
      en: "Which cookies and similar technologies m7branding.com uses, what for, and how to change your choice.",
    },
    body: { nl: COOKIES_NL, en: COOKIES_EN },
  },
};
