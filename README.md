# Weekly Digest Dashboard

**Live site:** https://furryredball.github.io/weekly-digest-dashboard/

## Roles

| Agent | Role |
|-------|------|
| **Charlie Brown** | Orchestrator — coordinates updates, final QA before push |
| **Linus** | Content — updates weekly stock picks, news, KPI, Linus 一週觀察 |
| **Spike** | Dev — code fixes, bug hunting, feature improvements, mobile QA |

## Update Workflow

```bash
cd ~/weekly-digest-deploy/
git pull

# --- Make changes ---
# Linus: update TICKERS news, SECTORS, KPI, Linus commentary text
# Spike: fix JS/CSS bugs, add features, improve mobile

git add -A
git commit -m "update: <description>"
git push
# GitHub Pages auto-deploys in ~1 min
```

## File Structure

```
index.html     ← Self-contained dashboard (HTML + CSS + JS)
netlify.toml   ← Netlify config (SPA redirect rules)
```

## Architecture

- Single-page app with panel views (dashboard → sector → ticker detail)
- All data hardcoded in JS (news, tickers, KPI)
- CSS variables for light/dark mode
- Mobile-first responsive (breakpoint @768px)
- SPA routing via switchView() + data-view delegation

## Key Data Arrays

- `const TICKERS = [...]` — all tracked stocks with news
- `const SECTORS = {power, compute, semis, software, anti_agi}` — sector grouping
- `const INCLUDE = [...]` — picks passing filter
- `const EXCLUDE = [...]` — overheating signals
- `const sectorData = [...]` — dashboard sector cards