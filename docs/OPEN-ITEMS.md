# Open items — awaiting Pirry's decision

Nothing in this file has been applied. Each item changes a decision, not a bug.

## 1. Gate arithmetic — RESOLVED 2026-11-15 (Pirry chose option A)

The five weights summed to **105** while the doc called the result "100%". Decision: renormalise to a
true 100-point scale as **24 + 24 + 19 + 14 + 19**, anchor points scaled ×100/105 and rounded to
integers, verdict thresholds left at 80 / 60 / 40. Implemented in `apply_framework.py`; component
maxima now sum to exactly 100.0.

**Comparing to an older report:** multiply the old 105-scale total by **0.95238** first. Names that
sat just above a band edge may now sit below it — that is the decision's intended effect.

**Open defect found while verifying (approval-only, NOT fixed):** a Munger hard fail still scores
~81/100 and returns 🟢 BUY, because the verdict gate ignores `munger_hard_fails`. The locked rule says
a hard fail exits DCF and sizing, so the verdict should be forced to AVOID. Needs your sign-off
because it changes recommendations, not arithmetic.

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
