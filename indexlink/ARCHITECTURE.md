# IndexLink — Platform Architecture

Multi-tenant SaaS on the stack you already run: **GitHub → Netlify → Supabase → Resend**,
plus a handful of services the platform specifically needs.

## Stack overview

| Layer | Tool | Role |
|---|---|---|
| Hosting & edge | **Netlify** | App + all tenant hubs, edge functions, wildcard + custom domains, TLS |
| Database & auth | **Supabase** | Postgres (RLS tenant isolation), Auth, Storage (documents), Realtime (collab), pgvector (company brain embeddings) |
| Email | **Resend** | Transactional (tasks/reminders/DNS verification) + campaign sends (Action Studio), webhooks for opens/clicks/bounces |
| CI & code | **GitHub** | Repo, Actions for scheduled jobs (crawls, research refresh, digest mails) |
| AI | **Claude API** (`claude-sonnet-5` default, `claude-haiku-4-5` for extraction/classification) | Dynamic workshop questions, research synthesis, drafting, funnel matching, segment explanations |
| Research data | DataForSEO or Ahrefs API | Search volume, difficulty, related questions (directional, provider shown in UI) |
| Analytics | Plausible (per-tenant) + GA4/GSC/Clarity OAuth connectors | Hub-only vs company-wide views; bot vs human separation |
| Background jobs | Supabase cron + queues (pgmq), Netlify background functions | Crawling, embedding, scoring, campaign delivery |

## Multi-tenant domains (the core mechanic)

**Free tier — `company.indexlink.io`:**
1. Wildcard DNS `*.indexlink.io` → Netlify; wildcard TLS cert.
2. One Next.js app serves every hub: middleware reads the `Host` header, resolves the
   tenant from a `domains` table (cached at the edge), and rewrites to `/_hubs/[tenant]/...`.
3. Tenant content is fetched from Supabase and statically cached per-path (ISR /
   on-demand revalidation on publish).

**Whitelabel — `insights.company.com`:**
1. User picks a label in the DNS wizard (suggestions: `insights`, `resources`, `learn`, `docs`).
2. Wizard shows the exact record: `CNAME insights.company.com → hubs.indexlink.io`,
   polls DNS until verified, then registers the alias with Netlify (domain alias API)
   which provisions TLS automatically.
3. The `domains` table maps both hostnames to the same tenant; the subdomain 301s to
   the custom domain once it's primary — rankings and analytics history carry over.

## Data model (Supabase, RLS on `org_id` everywhere)

```
orgs ─ users ─ memberships(role)
domains(org_id, hostname, kind: platform|custom, status)
sources(org_id, type, config, last_sync)        -- site crawl, linkedin, docs, GA, GSC, clarity, CRM
facts(org_id, text, source_id, confidence, sensitivity, status, embedding vector)
themes(org_id, title, audience, demand_signals, authority_signals, score)
ideas(org_id, theme_id, type, title, opportunity_score, state)
blueprints(idea_id, fields jsonb, qa_log jsonb)  -- the workshop transcript
content(org_id, blueprint_id, slug, blocks jsonb, version, state, slots, schema_type)
funnels(org_id, type, core_fields jsonb, context_fields jsonb, mockup_url)
funnel_matches(content_id, funnel_id, confidence, state)
contacts(org_id, identity jsonb, consent jsonb)  -- separate from public-content data
events(contact_id, kind, context jsonb)
tags(contact_id, tag, reason)                    -- every tag is explainable
segments(org_id, rules jsonb, explanation)
campaigns(org_id, segment_id, messages jsonb, state: proposed|approved|sent, approvals jsonb)
```

## AI orchestration

- **Company brain**: ingestion → chunk → embed (pgvector) → extract facts with
  provenance (source, timestamp, confidence). Conflicts create review tasks, never
  silent blends.
- **Workshop**: each question is generated from (idea, content type, retrieved evidence,
  unresolved blueprint fields). Stop condition: blueprint specific enough to draft.
  Every generated claim cites a fact id or an explicit user answer.
- **Approval gates** (hard, in code, not prompts): publishing, factual claims,
  segmentation, and any outbound send require a human approval row.

## Email (Resend)

- Transactional: task reminders ("2 open workshop questions"), weekly visitor/lead
  reports, DNS verification.
- Campaigns: Action Studio renders drafts → user approves → queued sends via Resend
  batch API with per-org sending domains (also CNAME-verified in the same DNS wizard),
  suppression lists, and webhook-driven engagement events feeding segments.

## Release sequence (matches the brief)

1. **R1 Visibility** — onboarding, ingestion, brain, themes, workshops (resource/FAQ/
   comparison), review + publish to subdomain, analytics baseline. ← *this prototype*
2. **R2 Conversion** — funnel builder, 3D mockups, AI matching, adaptive fields, contacts.
3. **R3 Action** — smart tags, explainable segments, campaign proposals + approvals.

## This prototype

`indexlink/` is a self-contained Next.js 14 app (deployable on Netlify with base
directory `indexlink`, build `npm run build`, publish `.next` via the Next runtime):

- `/` marketing landing — stencil-canvas hero with data points travelling the grid
- `/onboarding` — 5-step wizard, live hub preview, Company Readiness Score
- `/app` — Command Center, Company Brain, Visibility (+ dynamic workshop),
  Conversion (funnels + 3D mockup), Action (segments + proposals), Analytics
- Brand system: ink `#091225`, white, signal `#49A6F7`, mist `#F5F5F5`; official
  emblem vectors in `public/brand/`; emblem-segment preloader + page transitions.
