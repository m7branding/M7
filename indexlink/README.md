# IndexLink

**Visibility · Conversion · Action** — a collaborative AI platform that turns company
knowledge into discoverability, qualified demand, and approved outreach. Each customer
gets a branded SEO/GEO hub on `company.indexlink.io`, upgradeable to a whitelabel
subdomain like `insights.company.com` via a guided DNS wizard.

## Prototype

```bash
npm install
npm run dev        # http://localhost:3100
```

| Route | What it shows |
|---|---|
| `/` | Landing page — stencil canvas, three studios, domain story |
| `/onboarding` | 5-step wizard with live hub preview + readiness score |
| `/app` | Command Center (approval inbox, next actions) |
| `/app/brain` | Company Brain — sources & facts with provenance |
| `/app/visibility` | Opportunity cards + editorial state |
| `/app/visibility/workshop` | **The signature interaction**: dynamic Q&A that visibly fills the content blueprint |
| `/app/conversion` | Funnel library, 3D mockup, AI matching |
| `/app/action` | Explainable segments + campaign proposals |
| `/app/analytics` | Hub metrics, weekly charts, top content |

Brand: ink `#091225` · white · signal `#49A6F7` · mist `#F5F5F5`. Official logo
vectors live in `public/brand/`; the emblem powers the preloader and page
transitions (each woven segment animates independently).

See `ARCHITECTURE.md` for the production design (Netlify + Supabase + Resend + GitHub).
