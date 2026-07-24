#!/usr/bin/env node
/**
 * update-prices.js — Fetches live stock prices from Financial Modeling Prep
 * and updates the TIER1 + TIER2 arrays in data.js.
 *
 * Usage: FMP_API_KEY=xxx node scripts/update-prices.js
 *
 * Notes:
 * - Only updates the `p` (price) field. All other fields (desc, why, scores)
 *   are preserved unchanged.
 * - TIER1 and TIER2 are separate const arrays in data.js — we regex-replace
 *   the price values inside each.
 * - If FMP_API_KEY is missing, exits gracefully (no-op) so the workflow
 *   doesn't fail on first setup.
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data.js');
const API_KEY = process.env.FMP_API_KEY;

if (!API_KEY) {
  console.log('FMP_API_KEY not set — skipping price update.');
  process.exit(0);
}

// Extract ticker symbols from TIER1 and TIER2
function extractTickers(src) {
  const tier1Match = src.match(/const TIER1 = \[([\s\S]*?)\];/);
  const tier2Match = src.match(/const TIER2 = \[([\s\S]*?)\];/);
  const tickers = new Set();
  [tier1Match, tier2Match].forEach(m => {
    if (!m) return;
    const body = m[1];
    const re = /\{ t:"([A-Z]+)"/g;
    let match;
    while ((match = re.exec(body)) !== null) {
      tickers.add(match[1]);
    }
  });
  return Array.from(tickers);
}

// Fetch quotes from FMP stable/profile endpoint (batch: one symbol per call)
// Note: FMP stable/profile returns array with one object per symbol
async function fetchQuotes(tickers) {
  const results = [];
  for (const ticker of tickers) {
    try {
      const url = `https://financialmodelingprep.com/stable/profile?symbol=${ticker}&apikey=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`  ${ticker}: HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      if (Array.isArray(data) && data[0] && data[0].price != null) {
        results.push({
          symbol: data[0].symbol,
          price: data[0].price,
          changesPercentage: data[0].changePercentage || 0,
        });
      }
    } catch (e) {
      console.warn(`  ${ticker}: ${e.message}`);
    }
  }
  return results;
}

// Update price in TIER array body text
function updateTierBody(body, quotes) {
  let updated = body;
  quotes.forEach(q => {
    if (!q.symbol || q.price == null) return;
    // Match: { t:"VST", p:165.3,  →  { t:"VST", p:XXX.XX,
    const re = new RegExp(`(\\{ t:"${q.symbol}", p:)([0-9.]+)([,\\s])`, 'g');
    updated = updated.replace(re, `$1${q.price}$3`);
  });
  return updated;
}

async function main() {
  const src = fs.readFileSync(DATA_FILE, 'utf8');
  const tickers = extractTickers(src);
  console.log(`Found ${tickers.length} tickers: ${tickers.join(', ')}`);

  if (tickers.length === 0) {
    console.log('No tickers found — nothing to do.');
    return;
  }

  const quotes = await fetchQuotes(tickers);
  console.log(`Fetched ${quotes.length} quotes from FMP.`);

  // Split into TIER1 and TIER2 sections, update each, reassemble
  const tier1Match = src.match(/(const TIER1 = \[)([\s\S]*?)(\];)/);
  const tier2Match = src.match(/(const TIER2 = \[)([\s\S]*?)(\];)/);

  let newSrc = src;
  if (tier1Match) {
    const newBody = updateTierBody(tier1Match[2], quotes);
    newSrc = newSrc.replace(tier1Match[0], tier1Match[1] + newBody + tier1Match[3]);
  }
  if (tier2Match) {
    const newBody = updateTierBody(tier2Match[2], quotes);
    newSrc = newSrc.replace(tier2Match[0], tier2Match[1] + newBody + tier2Match[3]);
  }

  if (newSrc !== src) {
    fs.writeFileSync(DATA_FILE, newSrc, 'utf8');
    console.log('data.js updated with new prices.');
  } else {
    console.log('No changes detected.');
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
