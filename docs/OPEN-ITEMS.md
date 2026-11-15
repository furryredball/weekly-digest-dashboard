# Open items — awaiting Pirry's decision

Nothing in this file has been applied. Each item changes a decision, not a bug.

## 1. Gate arithmetic: weights total 105, not 100

`investment-quality-gate-v2` lists Framework 25 + Sleeve quality 25 + Munger 20 + Bezos 15 +
Buffett 20 = **105**, then says "reweighted to 100%" without ever computing the factors. Two
reports on the same inputs can therefore disagree.

| Option | What it does | Effect on existing scores |
|---|---|---|
| **A (recommended)** | Renormalise to 100: ×0.952 → 23.8 / 23.8 / 19.0 / 14.3 / 19.0 | All historical 105-point totals shrink ~4.8%; verdict thresholds unchanged, so borderline names can drop one band |
| B | Keep 105 as the declared ceiling; rescale tier thresholds (≥95% ⇒ ≥99.75) | Totals unchanged; every threshold moves |
| C | Reweight components so they sum to 100 by construction | Cleanest long-run, but changes the meaning of each component's contribution |

Not applied. Current behaviour: raw 105 total reported next to the verdict, nothing scaled.

## 2. Staleness policy

No written rule exists for "no verified fundamentals for N quarters". Proposed, not applied:

- At 1 quarter stale: flag on the card, keep the last verified score, mark `stale`.
- At 2 quarters: drop the score to *insufficient data* (automatic — it is a data fact).
- Removal from the universe: **never automatic**; requires an approved proposal.

## 3. Sleeve S alerts (pullback / take-profit)

Per the execution brief: do not activate until the reference price, thresholds and reset rules are
explicitly defined. Open — needs a decision on reference price definition (last cycle high? 30-day
VWAP?) before any alert can fire.

## 4. Thesis records + holdings updater (Phase 3)

Schema drafted, not built: bucket, conviction tier, approved sizing limits, theme benefit,
3-5 measurable thesis claims, thesis-breaking conditions, valuation assumptions with sources and
verification dates. Pilot on a small representative set before rolling out.

## 5. Opportunity discovery (Phase 4)

Not started. US / Canadian / Hong Kong listings, free sources, separate discovery watchlist,
candidates compared with incumbents but membership changes proposed for approval.
