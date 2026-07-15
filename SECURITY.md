# Security Policy

## Scope

This document covers the **weekly-digest-dashboard** static site — a GitHub Pages deployment
of the investing digest dashboard (Tier 1 / Tier 2 / sector views). It is a read-only
public site with no login, no PII collection, and no API keys exposed in the browser.

The sister repo [`furryredball/linus-invest`](https://github.com/furryredball/linus-invest)
shares the same security posture and is documented separately in its own `SECURITY.md`.

## Reporting a vulnerability

This is a personal hobby project, not a commercial product. There is no bug bounty.

If you discover a genuine security issue, please **open a private security advisory** on
GitHub rather than filing a public issue:

> https://github.com/furryredball/weekly-digest-dashboard/security/advisories/new

For everything else (typos, feature requests, framework questions), use the regular
[issue tracker](https://github.com/furryredball/weekly-digest-dashboard/issues).

## Threat model

| Surface | Status | Notes |
|---|---|---|
| **Authentication** | N/A | Site is fully public. No login, no cookies, no tokens in browser. |
| **User data collected** | None | No forms, no analytics, no tracking pixels. The site does not call any third-party API. |
| **Server-side code** | None | Static HTML / CSS / JS only. No backend, no database, no secrets. |
| **External runtime dependencies (CDN)** | **0** (as of 2026-07-15) | All assets — including fonts — are self-hosted. See [§ Self-hosted fonts](#self-hosted-fonts). |
| **Vulnerable dependencies** | N/A | No `package.json`, no build step, no `npm` / `pip` / `gem` / `cargo` manifests. Dependabot version updates are not applicable. |
| **GitHub Actions** | None present | No `.github/workflows/`. No supply-chain risk from CI. |
| **Netlify deploy hook** | Managed by `netlify.toml` | Uses Netlify's standard GitHub OAuth integration; no long-lived deploy token in the repo. |

## Self-hosted fonts

**Change history:**

- **Before 2026-07-15** — fonts were loaded from `fonts.googleapis.com` / `fonts.gstatic.com`
  (Inter 300/400/500/600/700 + JetBrains Mono 400/500/700). SRI integrity hashes are not
  viable on Google's dynamically-generated CSS, so this was the only meaningful supply-chain
  surface the dashboard had.
- **2026-07-15 (commit `9f4b036`)** — all Google Fonts `<link>` references removed from the
  7 HTML pages. Fonts are now self-hosted in `fonts/` as `.woff2` files (8 total, ~813 KB)
  with `inter.css` and `jetbrains.css` defining the `@font-face` rules.

**Licenses:**

- **Inter** — © Rasmus Andersson, [github.com/rsms/inter](https://github.com/rsms/inter) — **SIL Open Font License 1.1**
- **JetBrains Mono** — © JetBrains, [github.com/JetBrains/JetBrainsMono](https://github.com/JetBrains/JetBrainsMono) — **SIL Open Font License 1.1**

Both licenses permit redistribution with attribution; attribution is preserved in the
header comment of each CSS file.

**Why self-host:**

- Eliminates the runtime CDN fetch (a third party can no longer fingerprint visitors, serve
  modified CSS, or be blocked by region / corporate firewalls)
- Eliminates Google's IP-collection of every dashboard visitor
- Makes the site fully functional in Mainland China and other regions that block Google
- Makes the offline / `file://` viewing experience identical to the live one

## What this site intentionally does NOT do

- ❌ No login, signup, or session management
- ❌ No form submission
- ❌ No cookies, localStorage, IndexedDB, or Service Workers
- ❌ No third-party analytics (Google Analytics, Plausible, etc.)
- ❌ No tracking pixels, ad networks, or affiliate links
- ❌ No telemetry back to the dashboard author
- ❌ No API keys, tokens, or secrets in the served HTML
- ❌ No external JavaScript (all `<script>` blocks are inline or point to local files)

If you observe the site doing any of these things, that is a regression — please report it.

## How to verify the no-CDN claim

```bash
# Should return NO matches on the served HTML
curl -sL https://furryredball.github.io/weekly-digest-dashboard/ \
  | grep -E 'https?://[^"]+\.(com|net|io|cdn)' || echo 'no external references'
```

The only external `https://` references that *do* appear are in the HTML
[`<link rel="canonical">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#canonical)
and Open Graph metadata, all of which point to the dashboard's own GitHub Pages URL.

## Update history

| Date | Change | Commit |
|---|---|---|
| 2026-07-15 | Self-host fonts (drop Google Fonts CDN). 0 external runtime dependencies. | `9f4b036` |
| 2026-07-15 | Add `SECURITY.md`. | (this commit) |
