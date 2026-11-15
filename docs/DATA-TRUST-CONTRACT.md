# Data-Trust Contract — Weekly Digest Dashboard

Locked 2026-11-15. Applies to `data.js`, `index.html`, every sector page, and any script that writes them.

## 1. No fabricated scores

- A scoring dimension with **no verified input returns `null`**. It never returns a "penalty" or
  "neutral" default number.
- A stock receives a **total, grade and rank only when all five dimensions have inputs**. Otherwise
  `score = null`, `grade = null`, and it is listed separately under **Excluded — insufficient data**.
- Valid component scores are preserved and displayed, so partial evidence stays visible instead of
  being collapsed into a fake total.
- Consequence: the six names that previously flattened to exactly **44** (COST, HD, NKE, DIS, MRK,
  TMO) now read *insufficient data*, not "worst in universe".

## 2. Stale data is "review needed", not a verdict

Missing or stale fundamentals say nothing about business quality. They are a data-coverage fact.
Removal from the universe requires an approved proposal (see §4); staleness alone never removes a name.

## 3. Tier badges show conviction, never sector

- The badge reads the `CONVICTION` map in `data.js`, which is populated **only** by an approved
  conviction-tier proposal.
- An unapproved name renders **UNRATED**. Sector is not a conviction proxy — `power → Tier 1` was a
  labelling bug, not a rating.
- Sector cards show the **bucket mix** of their members (`A 7 · B 4`) — a factual count, not a tier.

## 4. Automatic vs approval-only changes

| Automatic (no approval) | Approval-only (proposal required) |
|---|---|
| Prices, fundamentals, news, coverage counters | `mg` / `bf` / `bz` |
| Formula scores from verified inputs | Conviction tier |
| Gate totals and haircut arithmetic once the underlying judgements are approved | Bucket / `ca` |
| | Adding or removing a universe name |
| | Strategy rules, sizing limits, scoring weights |

Every proposal must state: what changed, the supporting facts and sources, the thesis affected,
and the proposed action. **No automatic trading, ever.**

## 5. Counts are guidelines

The 55-name target (15 Tier-1 / 40 Tier-2, Bucket-B 3-6, Bucket-C ≤2) is a shape, not a quota.
Ingest **warns** on divergence and **fails** only on:

- duplicate tickers
- missing / malformed tickers
- missing or out-of-range `mg`/`bf`/`bz`
- a ticker on the permanent exclusion list (BTC miners, IBIT)

## 6. Real score ceiling

The five dimensions cap at 19 / 20 / 19 / 19 / 18 = **95**, not 100. Thresholds are unchanged and
the scale is not normalised. Any rescaling is an approval-only change.
