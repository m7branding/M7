import { site, stats } from "@/content/site";
import { allApplications, allCases, allSectors, allServices, applicationsFor } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { stripRefs } from "@/lib/inline";
import { paths } from "@/lib/paths";

const u = (p: string) => `${site.url}${p === "/" ? "" : p}`;

/** llms.txt: compacte, AI-vriendelijke index van de site (GEO / AEO). */
export function llmsTxt(full = false): string {
  const l = "nl" as const;
  const out: string[] = [];
  out.push(`# ${site.legalName} (M7)`);
  out.push("");
  out.push(
    "> Full-service branding- en designbureau uit Nistelrode (regio Eindhoven, Nederland). Eén team voor branding, websites & webshops, web-apps & apps, marketing automation, SEO/AEO/GEO, content & online ads, foto/video/3D, grafisch ontwerp & print, configurators & lead tools en AI & consultancy. Webflow Professional Partner. 250+ klanten wereldwijd.",
  );
  out.push("");
  out.push(`- Website: ${site.url} (Nederlands) · ${site.url}/en (English)`);
  out.push(`- Contact: ${site.email} · ${site.address.street}, ${site.address.postalCode} ${site.address.city}`);
  out.push(`- Kennisbank / answers: ${site.answers.url}`);
  out.push(`- Configurator met indicatieve prijzen: ${site.letsgo}`);
  out.push(`- Cijfers: ${stats.map((s) => `${s.value}${s.suffix} ${s.label.nl}`).join(", ")}`);
  out.push("");
  out.push("## Diensten");
  for (const s of allServices()) {
    out.push(`- [${tr(s.title, l)}](${u(paths.service(s))}): ${tr(s.intro, l)}`);
    if (full) {
      out.push(`  - Toepassingen: ${applicationsFor(s.slug).map((a) => `[${tr(a.title, l)}](${u(paths.application(a))})`).join(", ")}`);
      out.push(`  - Termen: ${s.terms.join(", ")}`);
    }
  }
  if (full) {
    out.push("");
    out.push("## Toepassingen");
    for (const a of allApplications()) out.push(`- [${tr(a.title, l)}](${u(paths.application(a))}): ${tr(a.summary, l)}`);
  }
  out.push("");
  out.push("## Sectoren");
  for (const s of allSectors()) out.push(`- [${tr(s.title, l)}](${u(paths.sector(s))}): ${tr(s.intro, l)}`);
  out.push("");
  out.push("## Cases");
  for (const c of allCases()) out.push(`- [${c.client}](${u(paths.case(c))}): ${tr(c.summary, l)}`);
  if (full) {
    out.push("");
    out.push("## Uitleg per dienst");
    for (const s of allServices()) {
      out.push("");
      out.push(`### ${tr(s.title, l)}`);
      for (const c of [...(s.chapters ?? []), ...s.seo.sections]) {
        out.push(`**${tr(c.h, l)}**`);
        out.push(stripRefs(tr(c.body, l), l));
        out.push("");
      }
    }
    out.push("");
    out.push(`## Werkproces per dienst (${u(paths.process)})`);
    for (const s of allServices()) {
      out.push("");
      out.push(`### ${tr(s.title, l)}`);
      s.process.forEach((p, i) => out.push(`${i + 1}. **${tr(p.title, l)}**: ${tr(p.text, l)}`));
    }
    out.push("");
    out.push("## Veelgestelde vragen");
    for (const s of allServices()) {
      out.push("");
      out.push(`### ${tr(s.title, l)}`);
      for (const f of s.faqs) {
        out.push(`**${tr(f.q, l)}**`);
        out.push(stripRefs(tr(f.a, l), l));
        out.push("");
      }
    }
  }
  out.push("");
  out.push("## Optioneel");
  out.push(`- [Over M7](${u(paths.about)})`);
  out.push(`- [Werkproces per dienst](${u(paths.process)}): hoe M7 per dienst te werk gaat, stap voor stap`);
  out.push(`- [Contact](${u(paths.contact)})`);
  out.push(`- [Alle toepassingen](${u(paths.applications)})`);
  out.push(`- [Volledige versie](${site.url}/llms-full.txt)`);
  return out.join("\n");
}
