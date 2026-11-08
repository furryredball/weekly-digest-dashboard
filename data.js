// Shared data for Weekly Investing Digest
// 2026-07-15a: removed 7 miscategorized tickers from TIER2 (LMT, RTX, TSLA, PANW, CRWD, MU, CRM) per audit + locked framework HBM skip.
// Strict scope: Bucket A = pure picks-and-shovels AGI supplier; defense/cyber/CR...

// Legacy TICKERS IIFE (L25727) builds minimal tickerCard-shape from TIER1+TIER2.
// index.html inline script re-synthesizes TICKERS with full schema (ca, se, ticker, ...).
// Single source of truth = TIER1+TIER2. Do NOT add raw `const TICKERS = [...]` here — both pages load this file and would conflict.

// ============================================================
// NEWS FEED (added 2026-07-15) — injected daily by `news-tier1-daily`
// cron and weekly by `news-tier2-weekly` cron. Each entry shape:
//   {ticker:'VST', tier:1, ts:'2026-07-15T08:30:00Z', source:'Reuters',
//    title:'...', url:'...', sentiment:'bullish'|'bearish'|'neutral'}
// 3-day rolling cap enforced by cron trim logic.
// ============================================================
// DATA_META — auto-managed by dashboard_data_writer.update_data_meta()
var DATA_META = {
  "reporting_period": {
    "start": "2026-11-01",
    "end": "2026-11-08"
  },
  "prices_as_of": "2026-11-08T02:01:00Z",
  "fundamentals_as_of": "2026-11-08T02:01:00Z",
  "news_lookback_days": 3,
  "sources": {
    "price": {
      "name": "yfinance",
      "url": "https://pypi.org/project/yfinance/"
    },
    "fundamentals": {
      "name": "SEC EDGAR XBRL",
      "url": "https://www.sec.gov/edgar"
    },
    "news": {
      "name": "anysearch",
      "url": "https://github.com/furryredball/weekly-digest-dashboard"
    }
  },
  "coverage": {
    "universe": 48,
    "in_tier1": 16,
    "in_tier2": 32,
    "in_tier3": 0,
    "with_price": 48,
    "with_fundamentals": 39,
    "missing_data": 9
  },
  "computed_at": "2026-11-08T02:01:00Z",
  "schema_version": 1
};

const NEWS = [{"ticker":"VST","tier":1,"ts":"2026-11-06T00:00:39.759722Z","source":"anysearch","title":"Texas Could Host 41% of New U.S. Data Center Capacity in 2028, and Its Next Governor Wants a Pause","url":"https://www.fool.com/investing/2026/11/05/texas-could-host-41-of-new-us-data-center-capacity/","sentiment":"neutral"},{"ticker":"VST","tier":1,"ts":"2026-11-06T00:00:39.759753Z","source":"anysearch","title":"Vistra: The Market Is Underpricing Its Shift To Contracted Earnings","url":"https://seekingalpha.com/article/4963003-vistra-the-market-is-underpricing-its-shift-to-contracted-earnings","sentiment":"neutral"},{"ticker":"VST","tier":1,"ts":"2026-11-06T00:00:39.759758Z","source":"anysearch","title":"Vistra Cratered by 25% This Year: One Wall Street Team Says 110% Returns Ahead for Investors","url":"https://247wallst.com/investing/2026/11/05/vistra-cratered-by-25-this-year-one-wall-street-team-says-110-returns-ahead-for-investors/","sentiment":"neutral"},{"ticker":"CEG","tier":1,"ts":"2026-11-06T00:00:41.126845Z","source":"anysearch","title":"Should You Buy, Hold or Sell Constellation Energy Before Q3 Earnings?","url":"https://www.zacks.com/stock/news/3024766/should-you-buy-hold-or-sell-constellation-energy-before-q3-earnings?cid=CS-STOCKNEWSAPI-FT-analyst_blog|most_popular_stocks-3024766","sentiment":"neutral"},{"ticker":"CEG","tier":1,"ts":"2026-11-06T00:00:41.126867Z","source":"anysearch","title":"Mine, Enrich, Build, Operate: Which Link in the Nuclear Supply Chain Is the Best Stock Right Now?","url":"https://www.fool.com/investing/2026/11/04/mine-enrich-build-operate-which-link-in-the-nuclea/","sentiment":"neutral"},{"ticker":"CEG","tier":1,"ts":"2026-11-06T00:00:41.126873Z","source":"anysearch","title":"Constellation Energy Earnings Preview: Why I Remain Bullish Headed Into Q3","url":"https://seekingalpha.com/article/4962233-constellation-energy-earnings-preview-remain-bullish-headed-into-q3","sentiment":"neutral"},{"ticker":"VRT","tier":1,"ts":"2026-11-06T00:00:42.899549Z","source":"anysearch","title":"Some of the Year's Hottest AI ETFs Are in Big Trouble Today","url":"https://www.investopedia.com/some-of-the-year-s-hottest-ai-etfs-are-in-trouble-today-dram-soxx-12238182","sentiment":"neutral"},{"ticker":"VRT","tier":1,"ts":"2026-11-06T00:00:42.899570Z","source":"anysearch","title":"Texas Could Host 41% of New U.S. Data Center Capacity in 2028, and Its Next Governor Wants a Pause","url":"https://www.fool.com/investing/2026/11/05/texas-could-host-41-of-new-us-data-center-capacity/","sentiment":"neutral"},{"ticker":"VRT","tier":1,"ts":"2026-11-06T00:00:42.899574Z","source":"anysearch","title":"Top 5 AI Stocks to Buy After Midterm Elections: This Strategist Calls the Sell-Off a Massive Opportunity","url":"https://www.benzinga.com/markets/equities/26/11/62918286/top-5-ai-stocks-to-buy-after-midterm-elections-this-strategist-calls-the-sell-off-a-massive-opportunity","sentiment":"neutral"},{"ticker":"ETN","tier":1,"ts":"2026-11-06T00:00:44.163271Z","source":"anysearch","title":"Eaton (NYSE: ETN) sales jump 28% in a record quarter, but net income lags","url":"https://www.defenseworld.net/2026/11/05/eaton-nyse-etn-sales-jump-28-in-a-record-quarter-but-net-income-lags.html","sentiment":"neutral"},{"ticker":"ETN","tier":1,"ts":"2026-11-06T00:00:44.163287Z","source":"anysearch","title":"Eaton Q3 Earnings Call Highlights Stronger 2027 Growth Outlook","url":"https://www.zacks.com/stock/news/3023058/eaton-q3-earnings-call-highlights-stronger-2027-growth-outlook?cid=CS-STOCKNEWSAPI-FT-analyst_blog_plus|earnings_call_takeaways-3023058","sentiment":"neutral"},{"ticker":"ETN","tier":1,"ts":"2026-11-06T00:00:44.163290Z","source":"anysearch","title":"Eaton: 3 Key Takeaways for Long-Term Investors","url":"https://www.fool.com/earnings/takeaways/2026/11/04/eaton-3-key-takeaways-for-long-term-investors/","sentiment":"neutral"},{"ticker":"GEV","tier":1,"ts":"2026-11-06T00:00:45.413106Z","source":"anysearch","title":"GE Vernova vs. NextEra Energy: Which Industrials Stock Is a Better Buy for 2027?","url":"https://www.fool.com/coverage/better-buy/2026/11/05/ge-vernova-vs-nextera-energy-which-industrials-stock-is-a-better-buy-for-2027/","sentiment":"neutral"},{"ticker":"GEV","tier":1,"ts":"2026-11-06T00:00:45.413119Z","source":"anysearch","title":"Cat and GE Vernova Got Slashed. Don't Catch This Falling Knife Just Yet.","url":"https://www.barrons.com/articles/caterpiller-ge-vernova-stocks-valuations-ai-20904e44","sentiment":"neutral"},{"ticker":"GEV","tier":1,"ts":"2026-11-06T00:00:45.413121Z","source":"anysearch","title":"GE Vernova Inc. $GEV Stock: Compass Financial Management LLC Lowers Position","url":"https://www.defenseworld.net/2026/11/05/ge-vernova-inc-gev-stock-compass-financial-management-llc-lowers-position.html","sentiment":"neutral"},{"ticker":"BE","tier":1,"ts":"2026-11-06T00:00:46.547888Z","source":"anysearch","title":"Bloom Energy's stock is one of the S&P 500's biggest losers amid fears of data-center delays","url":"https://www.marketwatch.com/story/bloom-energys-stock-is-one-of-the-s-p-500s-biggest-losers-amid-fears-of-data-center-delays-a44c96bb","sentiment":"neutral"},{"ticker":"BE","tier":1,"ts":"2026-11-06T00:00:46.547901Z","source":"anysearch","title":"AI Chip Selloff Sends Nasdaq Into Correction Territory","url":"https://www.schaeffersresearch.com/content/ezines/2026/11/05/ai-chip-selloff-sends-nasdaq-into-correction-territory","sentiment":"neutral"},{"ticker":"BE","tier":1,"ts":"2026-11-06T00:00:46.547904Z","source":"anysearch","title":"FuelCell Energy Plunges 17%, Bloom Energy Sinks 14% Despite NTT Data Deal, Plug Power Drops 7%","url":"https://247wallst.com/investing/2026/11/05/fuelcell-energy-plunges-17-bloom-energy-sinks-14-despite-ntt-data-deal-plug-power-drops-7/","sentiment":"neutral"},{"ticker":"CRWV","tier":1,"ts":"2026-11-06T00:00:47.761347Z","source":"anysearch","title":"CoreWeave vs. Nebius: Which Is the Better AI Neocloud Stock to Own for the Next 3 Years?","url":"https://www.fool.com/investing/2026/11/05/coreweave-vs-nebius-which-is-the-better-ai-neoclou/","sentiment":"neutral"},{"ticker":"CRWV","tier":1,"ts":"2026-11-06T00:00:47.761360Z","source":"anysearch","title":"Musk Says “Data Centers In Space Looking Pretty Appealing Right Now” After Voters Sided Against Data Centers In 40 Of 41 Local Ballot Measures, As SpaceX, CoreWeave And Nebius Are Plunging Today","url":"https://247wallst.com/investing/2026/11/05/musk-says-data-centers-in-space-looking-pretty-appealing-right-now-after-voters-sided-against-data-centers-in-40-of-41-local-ballot-measures-as-spacex-coreweave-and-nebius-are-plunging-today/","sentiment":"neutral"},{"ticker":"CRWV","tier":1,"ts":"2026-11-06T00:00:47.761362Z","source":"anysearch","title":"CoreWeave Is Getting Slammed. Why Its CEO Isn't Afraid of Politics.","url":"https://www.barrons.com/articles/coreweave-stock-price-nebius-ai-data-center-ae7f96de","sentiment":"neutral"},{"ticker":"GDS","tier":1,"ts":"2026-11-06T00:00:49.035764Z","source":"anysearch","title":"Baron Real Estate Income Fund Q3 2026 Portfolio Activity","url":"https://seekingalpha.com/article/4957473-baron-real-estate-income-fund-q3-2026-portfolio-activity","sentiment":"neutral"},{"ticker":"GDS","tier":1,"ts":"2026-11-06T00:00:49.035778Z","source":"anysearch","title":"GDS Holdings Ltd (GDS) Stock Up 5.9% but GF Value Says Overvalued -- GF Score: 65/100","url":"https://www.gurufocus.com/news/9112281/gds-holdings-ltd-gds-stock-up-59-but-gf-value-says-overvalued-gf-score-65100","sentiment":"neutral"},{"ticker":"GDS","tier":1,"ts":"2026-11-06T00:00:49.035781Z","source":"anysearch","title":"GDS (NASDAQ:GDS) and Mogo (NASDAQ:MOGO) Head-To-Head Contrast","url":"https://www.defenseworld.net/2026/09/28/gds-nasdaqgds-and-mogo-nasdaqmogo-head-to-head-contrast.html","sentiment":"neutral"},{"ticker":"NVDA","tier":1,"ts":"2026-11-06T00:00:50.046914Z","source":"anysearch","title":"House G.O.P. Leaders Ask Nvidia's Huang to Speak in Closed-Door Briefing","url":"https://www.nytimes.com/2026/11/05/technology/house-republicans-nvidia-jensen-huang-china.html","sentiment":"neutral"},{"ticker":"NVDA","tier":1,"ts":"2026-11-06T00:00:50.046955Z","source":"anysearch","title":"Cathie Wood Just Sold AMD Stock and Bought This AI Chip Stock Instead","url":"https://www.fool.com/investing/2026/11/05/cathie-wood-just-sold-amd-stock-and-bought-this-ai/","sentiment":"neutral"},{"ticker":"NVDA","tier":1,"ts":"2026-11-06T00:00:50.046962Z","source":"anysearch","title":"Keep Calm, Stocks Are On Sale","url":"https://seekingalpha.com/article/4963531-keep-calm-stocks-are-on-sale","sentiment":"neutral"},{"ticker":"CRDO","tier":1,"ts":"2026-11-06T00:00:51.067559Z","source":"anysearch","title":"Credo and Oracle Drive AI Optical Innovation: Is CRDO Set to Benefit?","url":"https://www.zacks.com/stock/news/3023890/credo-and-oracle-drive-ai-optical-innovation-is-crdo-set-to-benefit?cid=CS-STOCKNEWSAPI-FT-analyst_blog|quick_take-3023890","sentiment":"neutral"},{"ticker":"CRDO","tier":1,"ts":"2026-11-06T00:00:51.067574Z","source":"anysearch","title":"Top 5 AI Stocks to Buy After Midterm Elections: This Strategist Calls the Sell-Off a Massive Opportunity","url":"https://www.benzinga.com/markets/equities/26/11/62918286/top-5-ai-stocks-to-buy-after-midterm-elections-this-strategist-calls-the-sell-off-a-massive-opportunity","sentiment":"neutral"},{"ticker":"CRDO","tier":1,"ts":"2026-11-06T00:00:51.067576Z","source":"anysearch","title":"Credo and Oracle Advance Optical Transceiver Telemetry Standardization with OCP Community","url":"https://www.businesswire.com/news/home/20261104111215/en/Credo-and-Oracle-Advance-Optical-Transceiver-Telemetry-Standardization-with-OCP-Community/","sentiment":"neutral"},{"ticker":"RSG","tier":1,"ts":"2026-11-06T00:00:52.153140Z","source":"anysearch","title":"The Beauty Behind 'Boring' Stocks During Market Volatility","url":"https://www.zacks.com/commentary/3024831/the-beauty-behind-boring-stocks-during-market-volatility?cid=CS-STOCKNEWSAPI-FT-investment_ideas-3024831","sentiment":"neutral"},{"ticker":"RSG","tier":1,"ts":"2026-11-06T00:00:52.153155Z","source":"anysearch","title":"Republic Services Has the Momentum, But Waste Management Has Another Advantage","url":"https://www.marketbeat.com/articles/republic-services-has-the-momentum-but-waste-management-has-another-advantage/","sentiment":"neutral"},{"ticker":"RSG","tier":1,"ts":"2026-11-06T00:00:52.153157Z","source":"anysearch","title":"Republic Services: 3 Key Takeaways for Long-Term Investors","url":"https://www.fool.com/earnings/takeaways/2026/11/02/republic-services-3-key-takeaways-for-long-term-investors/","sentiment":"neutral"},{"ticker":"WM","tier":1,"ts":"2026-11-06T00:00:53.756923Z","source":"anysearch","title":"Prediction: A Stock Market Crash Is Coming. Here Are 3 Safe Stocks to Buy Now That Could Help You Protect and Grow Your Wealth.","url":"https://www.fool.com/investing/2026/11/05/prediction-stock-market-crash-safe-stocks-to-buy/","sentiment":"neutral"},{"ticker":"WM","tier":1,"ts":"2026-11-06T00:00:53.756937Z","source":"anysearch","title":"Associated Banc Corp Makes New $12.06 Million Investment in Waste Management, Inc. $WM","url":"https://www.defenseworld.net/2026/11/04/associated-banc-corp-makes-new-12-06-million-investment-in-waste-management-inc-wm.html","sentiment":"neutral"},{"ticker":"WM","tier":1,"ts":"2026-11-06T00:00:53.756939Z","source":"anysearch","title":"Waste Management: Healthcare Turnaround And Sustainability Investments Support Upside","url":"https://seekingalpha.com/article/4961445-waste-management-healthcare-turnaround-and-sustainability-investments-support-upside","sentiment":"neutral"},{"ticker":"WCN","tier":1,"ts":"2026-11-06T00:00:55.083421Z","source":"anysearch","title":"CLH vs. WCN: Which Stock Should Value Investors Buy Now?","url":"https://www.zacks.com/stock/news/3017443/clh-vs-wcn-which-stock-should-value-investors-buy-now?cid=CS-STOCKNEWSAPI-FT-fundamental_analysis|yseop_template_3-3017443","sentiment":"neutral"},{"ticker":"WCN","tier":1,"ts":"2026-11-06T00:00:55.083435Z","source":"anysearch","title":"Waste Connections Q3 Earnings Call Highlights","url":"https://www.marketbeat.com/instant-alerts/transcript-waste-connections-q3-earnings-call-highlights-2026-10-22/","sentiment":"neutral"},{"ticker":"WCN","tier":1,"ts":"2026-11-06T00:00:55.083437Z","source":"anysearch","title":"Why Waste Connections Stock Is Up Today","url":"https://www.fool.com/investing/2026/10/22/why-waste-connections-stock-is-up-today/","sentiment":"neutral"},{"ticker":"NEE","tier":1,"ts":"2026-11-06T00:00:56.120360Z","source":"anysearch","title":"GE Vernova vs. NextEra Energy: Which Industrials Stock Is a Better Buy for 2027?","url":"https://www.fool.com/coverage/better-buy/2026/11/05/ge-vernova-vs-nextera-energy-which-industrials-stock-is-a-better-buy-for-2027/","sentiment":"neutral"},{"ticker":"NEE","tier":1,"ts":"2026-11-06T00:00:56.120375Z","source":"anysearch","title":"NextEra Energy, Inc. $NEE Stock Position Lessened by International Assets Investment Management LLC","url":"https://www.defenseworld.net/2026/11/04/nextera-energy-inc-nee-stock-position-lessened-by-international-assets-investment-management-llc.html","sentiment":"neutral"},{"ticker":"NEE","tier":1,"ts":"2026-11-06T00:00:56.120377Z","source":"anysearch","title":"NextEra Energy and Dominion Energy strengthen historic Virginia benefits package with additional customer and financial safeguards","url":"https://www.prnewswire.com/news-releases/nextera-energy-and-dominion-energy-strengthen-historic-virginia-benefits-package-with-additional-customer-and-financial-safeguards-302927763.html","sentiment":"neutral"},{"ticker":"SNOW","tier":1,"ts":"2026-11-06T00:00:57.168536Z","source":"anysearch","title":"Snowflake Soars 32% Year to Date: Buy, Sell, or Hold the Stock?","url":"https://www.zacks.com/stock/news/3024754/snowflake-soars-32-year-to-date-buy-sell-or-hold-the-stock?cid=CS-STOCKNEWSAPI-FT-analyst_blog|most_popular_stocks-3024754","sentiment":"neutral"},{"ticker":"SNOW","tier":1,"ts":"2026-11-06T00:00:57.168550Z","source":"anysearch","title":"Dan Ives Rides the Blue Tidal Wave of 2026 Midterm Election by Being Selective: Here's His 10 Stock Picks","url":"https://www.benzinga.com/markets/tech/26/11/62934290/dan-ives-rides-the-blue-tidal-wave-of-2026-midterm-election-by-being-selective-heres-his-10-stock-picks","sentiment":"neutral"},{"ticker":"SNOW","tier":1,"ts":"2026-11-06T00:00:57.168563Z","source":"anysearch","title":"Wall Street Is Underestimating Snowflake's Growth Potential","url":"https://247wallst.com/investing/2026/11/05/wall-street-is-underestimating-snowflakes-growth-potential/","sentiment":"neutral"},{"ticker":"ORCL","tier":1,"ts":"2026-11-06T00:00:58.492152Z","source":"anysearch","title":"Why Oracle Stock Is Sinking Today","url":"https://www.fool.com/investing/2026/11/05/why-oracle-stock-is-sinking-today/","sentiment":"neutral"},{"ticker":"ORCL","tier":1,"ts":"2026-11-06T00:00:58.492166Z","source":"anysearch","title":"Oracle Just Walked Away From a $7 Billion Tencent AI Deal","url":"https://247wallst.com/investing/2026/11/05/oracle-just-walked-away-from-a-7-billion-tencent-ai-deal/","sentiment":"neutral"},{"ticker":"ORCL","tier":1,"ts":"2026-11-06T00:00:58.492169Z","source":"anysearch","title":"Credo and Oracle Drive AI Optical Innovation: Is CRDO Set to Benefit?","url":"https://www.zacks.com/stock/news/3023890/credo-and-oracle-drive-ai-optical-innovation-is-crdo-set-to-benefit?cid=CS-STOCKNEWSAPI-FT-analyst_blog|quick_take-3023890","sentiment":"neutral"}];

// ============================================================
// LINUS'S OVERVIEW (added 2026-07-15) — narrative commentary by
// sector, refreshed every 3 days by `overview-refresh` cron. Shape:
//   {sector:'power'|'compute'|'semis'|'nonagi'|'sentiment',
//    ts:'2026-07-15T09:00:00Z', body:'paragraph text...'}
// Voice: 港式英文混繁中 (matches existing dashboard tone).
// Seed entries below preserve the original hardcoded content.
// ============================================================
const OVERVIEW = [{sector:'power',ts:'2026-11-06T20:00:54.945498Z',body:'<strong>電力 Power bottleneck</strong> — gas turbine backlog, SMR timeline, nuclear PPA tailwinds. VST/CEG keep leading on ERCOT scarcity pricing. 近 3 日重點: hyperscaler power-purchase flows 持續 dominate narrative。Watch TLN nuclear pipeline 及 BE fuel-cell demand.'},{sector:'compute',ts:'2026-11-06T20:00:54.945498Z',body:'<strong>GPU Cloud</strong> — neocloud re-rating, hyperscaler capacity, AI inference demand。CRWV 係核心 bottleneck proxy, GDS data-center REIT 配合。近 3 日焦點: cloud capex 同 GPU rental rate 既 correlation。避開 direct LLM exposure per locked framework。'},{sector:'semis',ts:'2026-11-06T20:00:54.945498Z',body:'<strong>半導體</strong> — TSM/NVDA/CRDO CoWoS spread, fwd P/E compression, insider activity。Skip MU/Hynix per locked framework (DRAM/NAND = commodity Buffett 0/20)。Observe-only TSMC, active NVDA/CRDO。近 3 日 signal: insider sells 同 short-interest divergence。'},{sector:'software',ts:'2026-11-06T20:00:54.945498Z',body:'<strong>Software demand-side</strong> — SNOW/ORCL capture AGI demand, not bottleneck。近 3 日 catalyst: FY26 forward-guidance dispersion, enterprise AI 部署 speed。Bucket C = demand-side beneficiary, framework 容許 direct 持貨。'},{sector:'nonagi',ts:'2026-11-06T20:00:54.945498Z',body:'<strong>Non-AGI defensive</strong> — WM/RSG/WCN/GFL defensive compounder status。Waste sector RNG = byproduct, NOT power gen industry per locked framing rule。Ranking: WM (scale + landfill moat) > RSG (best BS, 32.1% EBITDA margin) > WCN (insider signal + Q2 7/22 catalyst)。Terminal value 不 depend on AGI。'},{sector:'sentiment',ts:'2026-11-06T20:00:54.945498Z',body:'<strong>Sentiment signals</strong> — analyst upside surprises, insider sell/buy imbalance, contrarian picks。INCLUDES: ORCL (+88% upside), GDS (+61%), NVDA (+56%), CEG (+56%)。EXCLUDES: CRDO (insider sells $8.3M), BE (insider sells $2.5M)。Filter >3d 之前 dedupe。'}];

const SECTORS = {power:['VST','CEG','TLN','VRT','ETN','GEV','BE'],compute:['CRWV','GDS'],semis:['NVDA','CRDO'],software:['SNOW','ORCL'],nonagi:['RSG','WM','WCN','NEE']};
const SECTOR_NAMES = {power:'Power',compute:'Compute Infra',semis:'半導體',software:'Software',nonagi:'Non AGI'};
const SECTOR_SUBTITLES = {power:'電力 bottleneck · 7 tickers · Tier 1-3',compute:'GPU Cloud + networking · 2 tickers',semis:'Observe only · 2 tickers',software:'Data + apps · 2 tickers',nonagi:'避險 defensive · 4 tickers (waste + utility)'};

function _esc(s){return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _yahooUrl(ticker){
  // BRK.B → BRK-B; everything else passes through
  var enc = String(ticker).replace(/\./g,'-');
  return 'https://finance.yahoo.com/quote/'+encodeURIComponent(enc)+'/';
}
function _fmtN(v,d){
  if(v==null||v===''||(typeof v==='number'&&isNaN(v)))return '—';
  if(typeof v==='string')v=parseFloat(v);
  if(isNaN(v))return '—';
  return v.toLocaleString('en-US',{minimumFractionDigits:(d==null?2:d),maximumFractionDigits:(d==null?2:d)});
}
function _fmtBig(v){
  // Format big numbers: 1234567890 → "1.23B", 12345678 → "12.3M", 12345 → "12.3K"
  if(v==null||v===''||isNaN(parseFloat(v)))return '—';
  v=parseFloat(v);
  if(Math.abs(v)>=1e12)return (v/1e12).toFixed(2)+'T';
  if(Math.abs(v)>=1e9)return (v/1e9).toFixed(2)+'B';
  if(Math.abs(v)>=1e6)return (v/1e6).toFixed(1)+'M';
  if(Math.abs(v)>=1e3)return (v/1e3).toFixed(1)+'K';
  return v.toFixed(0);
}
function tickerCard(t){
  var tc=t.tier_emoji==='🔋'?'tier-1':t.tier_emoji==='🟠'?'tier-2':t.tier_emoji==='🟡'?'tier-3':'tier-4';
  var tl=(t.tier.match(/Tier\s*\d+/i)||['','TIER 4'])[0].toUpperCase();
  var priceClass=t.trend==='↑'?'ticker-price-up':'ticker-price-down';
  var gradeClass='grade-'+(t.grade==='B+'?'B-plus':String(t.grade).replace('+','-plus'));
  var p=parseFloat(t.price);
  var priceStr=!isNaN(p)?'$'+p.toFixed(p<1?4:2):'—';
  // Build fundamentals row (PE / MCap / Upside) + Yahoo link button
  var pe=t.pe!=null&&t.pe!==''?'<span class="ticker-fund"><span class="ticker-fund-label">PE</span>'+_fmtN(t.pe,1)+'</span>':'';
  var mc=t.mc!=null&&t.mc!==''?'<span class="ticker-fund"><span class="ticker-fund-label">MCap</span>'+_fmtBig(t.mc)+'</span>':'';
  var up=t.upside!=null&&t.upside!==''?'<span class="ticker-fund"><span class="ticker-fund-label">Upside</span><span class="'+(t.upside>=0?'up-pos':'up-neg')+'">'+(t.upside>=0?'+':'')+_fmtN(t.upside,1)+'%</span></span>':'';
  return '<div class="ticker-card" data-ticker="'+_esc(t.ticker)+'">'
    +'<div class="ticker-head"><div class="ticker-symbol"><a href="'+_yahooUrl(t.ticker)+'" target="_blank" rel="noopener">'+_esc(t.ticker)+'</a></div><span class="sector-tier-badge '+tc+'">'+tl+'</span></div>'
    +'<div class="ticker-price-row"><span class="ticker-price '+priceClass+'">'+priceStr+'</span><span class="'+priceClass+'">'+t.trend+' '+_esc(t.pct||'—')+'</span><span class="ticker-score '+gradeClass+'">'+_esc(t.score)+' '+_esc(t.grade||'')+'</span></div>'
    +(pe||mc||up?'<div class="ticker-fund-row">'+pe+mc+up+'</div>':'')
    +'<div class="ticker-name">'+_esc(t.name)+'</div>'
    +(t.desc?'<div class="ticker-desc">'+_esc(t.desc)+'</div>':'')
    +(t.why?'<div class="ticker-why">💡 '+_esc(t.why)+'</div>':'')
    +'<div class="ticker-news-count">'+(t.news&&t.news.length?t.news.length+' news items':'No news')+'</div>'
    +(t.news&&t.news[0]?'<div class="ticker-signal"><div class="ticker-signal-label">Latest</div>'+_esc((t.news[0].title||'').slice(0,100))+'...</div>':'')
    +'<div class="ticker-yahoo"><a href="'+_yahooUrl(t.ticker)+'" target="_blank" rel="noopener">Yahoo Finance ↗</a></div>'
    +'</div>';
}

function renderSectorGrid(id, list, _tickersMap){
  var g=document.getElementById(id);if(!g)return;
  // _tickersMap is the legacy-shape array passed from caller (index.html synthesizes from TIER1+TIER2;
  // sector pages can build a minimal one). Falls back to empty if not provided.
  var src = _tickersMap || (typeof TICKERS !== 'undefined' ? TICKERS : []);
  var ts=src.filter(function(t){return list.indexOf(t.ticker)>=0});
  g.innerHTML=ts.length?ts.map(tickerCard).join(''):'<div style="color:var(--text-muted);padding:40px;text-align:center;">No tracked tickers this week</div>';
}
// ============================================================
// LINUS INVEST — 55-stock two-tier (3-lens Munger/Buffett/Bezos)
// ============================================================
// ⚠️ MIXED MODE (2026-07-05):
// Non-AGI basket (WM/RSG/WCN/AMT) has REAL Munger/Buffett/Bezos scores
// from business-model-quality-gate 2026-07-05 evaluation. AGI bucket still
// uses proxy heuristic until 55-stock dataset arrives.
//
// Sector bias:
//   power:    M=17 B=14 Bz=10  (structural moat, moderate ROE, low growth)
// Resolve sector name from SECTORS map (ticker→sector name)
var _sectorByTicker = {};
Object.keys(SECTORS).forEach(function(k){
  SECTORS[k].forEach(function(t){ _sectorByTicker[t] = SECTOR_NAMES[k] || k; });
});
var TIER1 = [
  { t:"VST", p:124.8, se:"power", ca:"agi", name:"Vistra Energy", desc:"Texas-based integrated utility with the lowest-cost nuclear and gas fleet in the most load-growth-rich region of the US.", why:"Geographic moat in ERCOT/PJM scarcity-priced markets", roe:18.47, roic:3.3, bp:90.9, ev:14.17, ups:42.6, mg:22, bf:20, bz:21 },
  { t:"CEG", p:249.95, se:"power", ca:"agi", name:"Constellation Energy", desc:"Largest US nuclear power operator with 33GW of irreplaceable assets.", why:"Hyperscaler PPA tailwind + Three Mile Island restart validates nuclear pricing power", roe:15.97, roic:4, bp:70, ev:23.13, ups:52.2, mg:21, bf:17, bz:15 },
  { t:"VRT", p:182.86, se:"power", ca:"agi", name:"Vertiv", desc:"Dominant global supplier of thermal management and power distribution for data centers.", why:"Liquid cooling bottleneck as GPU density rises above 100kW per rack", roe:33.82, roic:18.55, bp:94.7, ev:29.73, ups:-15.3, mg:22, bf:18, bz:16 },
  { t:"ETN", p:341.72, se:"power", ca:"agi", name:"Eaton Corp", desc:"Diversified power management for data centers and grid upgrades transformers/switchgear.", why:"2-3 year transformer lead times lock in pricing power through decade", roe:21.05, roic:13.14, bp:64.1, ev:22.56, ups:1.2, mg:22, bf:18, bz:16 },
  { t:"GEV", p:774.11, se:"power", ca:"agi", name:"GE Vernova", desc:"Gas turbine + wind power equipment maker benefiting from US/EU data center grid buildout.", why:"Gas turbine order backlog multi-year direct AI infrastructure beneficiary", roe:43.69, roic:6.3, bp:75, ev:45.89, ups:-16.8, mg:21, bf:17, bz:18 },
  { t:"BE", p:173.24, se:"power", ca:"agi", name:"Bloom Energy", desc:"Solid-oxide fuel cell manufacturer for onsite power without grid interconnection.", why:"Grid interconnection 4-7 year waits make fuel cells a niche but valuable option", roic:1.89, bp:51.6, ev:1068.65, ups:-30, mg:19, bf:15, bz:12 },
  { t:"CRWV", p:46.4, se:"compute", ca:"agi", name:"CoreWeave", desc:"GPU cloud provider built for AI workloads with 20+ data centers running tens of thousands of NVIDIA GPUs.", why:"No proprietary technology pricing pressure when GPU supply normalizes", bp:57.1, ev:23.11, ups:42.9, mg:10, bf:8, bz:16 },
  { t:"GDS", p:22.35, se:"compute", ca:"agi", name:"GDS Holdings", desc:"China carrier-neutral data center operator serving Chinese cloud providers.", why:"China AI buildout leverage but entirely China-risk-laden watchlist speculation", roe:3.54, roic:1.35, bp:90, ev:13.12, ups:61.3, mg:11, bf:8, bz:17 },
  { t:"NVDA", p:186.64, se:"semis", ca:"agi", name:"NVIDIA", desc:"Designer of AI accelerators and CUDA ecosystem that defines AI training and inference.", why:"CUDA moat is years of developer tooling pricing power into next decade", roe:76.33, roic:62.88, bp:75.9, ev:31.43, ups:31.1, mg:15, bf:15, bz:19 },
  { t:"CRDO", p:120.51, se:"semis", ca:"agi", name:"Credo Technology", desc:"High-speed connectivity serdes and retimers for AI networking at 800G/1.6T.", why:"Networking fabric bottleneck as GPU clusters scale to hundreds of thousands of chips", roe:22.89, roic:21.02, bp:86.7, ev:62.25, ups:-13.4, mg:16, bf:16, bz:21 },
  { t:"RSG", p:246.85, se:"nonagi", ca:"nonagi", name:"Republic Services", desc:"Second-largest US waste services with 14M customers across 40+ states.", why:"Contractual price escalators + landfill permits provide inflation-protected compounding", roe:17.87, roic:8.83, bp:54.3, ev:13.07, ups:11.6, mg:22, bf:20, bz:16 },
  { t:"WM", p:236.26, se:"nonagi", ca:"nonagi", name:"Waste Management", desc:"North America's largest waste services with 300 landfills and 25000 collection vehicles.", why:"Best landfill network and route density natural monopoly economics", roe:27.11, roic:8.88, bp:57.1, ev:15.44, ups:9.1, mg:22, bf:22, bz:16 },
  { t:"WCN", p:189.07, se:"nonagi", ca:"nonagi", name:"Waste Connections", desc:"North American waste services focused on secondary and exclusive markets with multi-year contracts.", why:"Higher margins from monopolistic small-market positions", roe:13.13, roic:6.82, bp:78.8, ev:18.01, ups:19.1, mg:18, bf:20, bz:16 },
  { t:"NEE", p:86.95, se:"nonagi", ca:"nonagi", name:"NextEra Energy", desc:"Largest US renewable utility: FPL rate-base (50-60% EV) + NEER merchant renewables (40-50% EV).", why:"Bucket B per primary mix — FPL regulated rate-base > NEER merchant. ⚠ MONITOR: NEER has hyperscaler DC PPA exposure (24/7 clean energy contracts). If NEER >50% EV, reclassify to Bucket A.", roe:12.51, roic:4.23, bp:66.7, ev:16.12, ups:10.4, mg:17, bf:16, bz:15 },
  { t:"SNOW", p:275.88, se:"software", ca:"demand", name:"Snowflake", desc:"Cloud data platform for warehousing/analytics/AI across multi-cloud.", why:"Switching cost moat in enterprise data + multi-cloud architecture", bp:80.8, ups:3.4, mg:13, bf:17, bz:15 },
  { t:"ORCL", p:116.05, se:"software", ca:"demand", name:"Oracle", desc:"Enterprise software + cloud infrastructure OCI with database moat pivoting to AI.", why:"OCI multi-cloud strategy extends database moat to AI workloads", roe:40.2, roic:7.99, bp:65.1, ev:26.11, ups:109.1, mg:16, bf:17, bz:15 }
];
var TIER2 = [
  { t:"TLN", p:338.64, se:"power", ca:"agi", name:"Talen Energy", desc:"Independent power producer owning 1.2GW Susquehanna nuclear plant with 300MW Nautilus AI campus.", why:"Susquehanna site most valuable industrial real estate in PJM", roic:0.16, bp:100, ev:45.31, ups:21.3, mg:19, bf:16, bz:12 },
  { t:"GE", p:323.24, se:"power", ca:"agi", name:"General Electric", desc:"Aerospace power systems and grid equipment benefiting from AI infrastructure capex.", why:"GE Vernova spinoff parent grid equipment exposure with smaller scale than GEV/Eaton", roe:46.6, roic:8.12, bp:68.6, ev:27.92, ups:99.9, mg:18, bf:15, bz:15 },
  { t:"EQIX", p:1012.71, se:"compute", ca:"agi", name:"Equinix", desc:"Global data center REIT with 260+ IBX colocation facilities across 30+ metros.", why:"Colocation scale leader but stock at premium quality but expensive", roe:9.54, roic:4.36, bp:75, ev:23.57, ups:0.7, mg:15, bf:12, bz:15 },
  { t:"DLR", p:174.2, se:"compute", ca:"agi", name:"Digital Realty Trust", desc:"Data center REIT with 300+ facilities across 50+ metros globally.", why:"Diversified DC exposure at slightly lower multiple than EQIX", roe:5.71, roic:1.3, bp:60.4, ev:20.59, ups:21.9, mg:15, bf:12, bz:15 },
  { t:"ANET", p:170.8, se:"compute", ca:"agi", name:"Arista Networks", desc:"Cloud networking platform for hyperscale data centers and AI back-end fabrics.", why:"Dominant in hyperscaler back-end networking alongside Cisco/Broadcom", roe:28.39, roic:22.64, bp:75, ev:37.68, ups:-57.9, mg:18, bf:15, bz:20 },
  { t:"AMD", p:449.04, se:"semis", ca:"agi", name:"Advanced Micro Devices", desc:"CPU and GPU maker competing with Intel and NVIDIA in AI accelerators.", why:"MI300 series traction but margin profile challenged by NVIDIA pricing", roe:6.88, roic:5.4, bp:71.4, ev:47.85, ups:126.9, mg:12, bf:9, bz:21 },
  { t:"AVGO", p:293.69, se:"semis", ca:"agi", name:"Broadcom", desc:"Custom AI silicon ASIC partner for hyperscalers + networking chips + software assets VMware.", why:"Custom ASIC + networking double exposure with VMware cost synergies", roe:28.45, roic:16.36, bp:86.4, ev:50.62, ups:-65.2, mg:18, bf:15, bz:18 },
  { t:"MRVL", p:141.2, se:"semis", ca:"agi", name:"Marvell Technology", desc:"Data center networking and custom silicon for cloud and AI infrastructure.", why:"Custom silicon partner but smaller scale than Broadcom", roe:18.66, roic:5.98, bp:82.2, ev:15.44, ups:153.3, mg:13, bf:10, bz:19 },
  { t:"ARM", p:174.62, se:"semis", ca:"agi", name:"Arm Holdings", desc:"CPU instruction set architecture licensor for mobile/edge/AI inference.", why:"Architectural moat but heavy valuation premium", roe:10.91, roic:7.29, bp:74.1, ev:112.53, ups:90.5, mg:16, bf:12, bz:20 },
  { t:"MSFT", p:530.61, se:"software", ca:"demand", name:"Microsoft", desc:"Software/cloud/AI conglomerate with Azure OpenAI partnership and GitHub Copilot.", why:"Multi-decade compounding with AI optionality through OpenAI partnership", roe:29.65, roic:21.63, bp:80.5, ev:23.6, ups:33.3, mg:18, bf:17, bz:21 },
  { t:"GOOG", p:283.93, se:"software", ca:"demand", name:"Alphabet", desc:"Search/cloud/YouTube conglomerate with internal AI deployment Gemini and TPU infrastructure.", why:"AI optionality through Gemini + TPU + YouTube data moat", roe:31.83, roic:21.82, bp:87.3, ev:21.23, ups:105.1, mg:17, bf:15, bz:22 },
  { t:"PLTR", p:160.38, se:"software", ca:"agi", name:"Palantir Technologies", desc:"Data integration and AI deployment platform for government and enterprise.", why:"Government contracts + AIP but valuation already extreme", roe:22, roic:17.95, bp:46.2, ev:249.48, ups:291.5, mg:14, bf:10, bz:20 },
  { t:"META", p:610.15, se:"software", ca:"demand", name:"Meta Platforms", desc:"Social + advertising + AI infrastructure builder with Llama + Reels + WhatsApp.", why:"AI capex cycle + Reels monetization + WhatsApp Business model", roe:27.83, roic:17.95, bp:80, ev:16.38, ups:44.4, mg:18, bf:15, bz:22 },
  { t:"AMZN", p:259.3, se:"software", ca:"demand", name:"Amazon", desc:"Retail + AWS cloud + advertising + AI infrastructure.", why:"AWS AI infrastructure leader with retail cash flow backstop", roe:18.89, roic:10.7, bp:88.3, ev:15.28, ups:42.7, mg:18, bf:15, bz:22 },
  { t:"HON", p:220.05, se:"power", ca:"agi", name:"Honeywell", desc:"Industrial conglomerate with aerospace building automation and energy transition.", why:"Automation + aerospace diversification with AI data center cooling adjacency", roe:30.63, roic:9.22, bp:64.3, ev:17.88, ups:18.7, mg:17, bf:16, bz:14 },
  { t:"UNH", p:394.15, se:"nonagi", ca:"nonagi", name:"UnitedHealth Group", desc:"Largest US health insurer with Optum healthcare services platform.", why:"Optum + Medicare Advantage scale but regulatory overhang", roe:12.81, roic:8.23, bp:82.7, ev:15.37, ups:-25, mg:16, bf:17, bz:11 },
  { t:"LLY", p:1354, se:"nonagi", ca:"nonagi", name:"Eli Lilly", desc:"Pharmaceutical innovator with GLP-1 leader tirzepatide Mounjaro/Zepbound.", why:"GLP-1 franchise + Alzheimer's pipeline at premium valuation", roe:77.78, roic:30.2, bp:73.3, ev:35.81, ups:51.6, mg:17, bf:15, bz:16 },
  { t:"JNJ", p:276.22, se:"nonagi", ca:"nonagi", name:"Johnson & Johnson", desc:"Healthcare conglomerate with pharma medical devices and consumer health.", why:"Dividend aristocrat + MedTech innovation + pharma pipeline", roe:32.87, roic:13.71, bp:52.5, ev:12.97, ups:45.9, mg:17, bf:18, bz:12 },
  { t:"JPM", p:334.49, se:"nonagi", ca:"nonagi", name:"JPMorgan Chase", desc:"Largest US bank with investment banking asset management and consumer banking.", why:"Scale advantage + trading revenue + capital return", roe:15.74, roic:4.23, bp:52.5, ev:18.39, ups:59.6, mg:16, bf:17, bz:12 },
  { t:"BAC", p:49.42, se:"nonagi", ca:"nonagi", name:"Bank of America", desc:"Second-largest US bank with consumer banking wealth management focus.", why:"Rate-sensitive earnings with credit risk in CRE/unsecured portfolios", roe:10.06, roic:3.39, bp:64.8, ev:13.48, ups:45.7, mg:15, bf:16, bz:11 },
  { t:"XOM", p:165.87, se:"nonagi", ca:"nonagi", name:"ExxonMobil", desc:"Largest US supermajor with upstream refining and chemicals.", why:"Permian + Guyana + LNG dividend aristocrat with E&P scale", roe:11.12, roic:6.34, ev:8.16, ups:31.1, mg:15, bf:17, bz:10 },
  { t:"CVX", p:212.61, se:"nonagi", ca:"nonagi", name:"Chevron", desc:"Second-largest US oil major with Permian and LNG export exposure.", why:"Permian + TCO + LNG capex self-funded", roe:6.6, roic:3.59, bp:62.3, ev:7.78, ups:30.1, mg:15, bf:17, bz:10 },
  { t:"WMT", p:125.52, se:"nonagi", ca:"nonagi", name:"Walmart", desc:"Largest US retailer with grocery dominant market share and Walmart+ subscription.", why:"Scale + automation + e-commerce momentum", roe:21.98, roic:11.87, bp:72.7, ev:21.68, ups:14.7, mg:17, bf:16, bz:13 },
  { t:"COST", p:1053.56, se:"nonagi", ca:"nonagi", name:"Costco", desc:"Membership warehouse club with 130M+ members globally.", why:"Membership stickiness + pricing discipline", mg:17, bf:17, bz:12 },
  { t:"HD", p:343.47, se:"nonagi", ca:"nonagi", name:"Home Depot", desc:"Largest US home improvement retailer with pro-customer focus.", why:"Housing cycle exposure but Pro and contractor segments durable", mg:15, bf:15, bz:12 },
  { t:"NKE", p:38.59, se:"nonagi", ca:"nonagi", name:"Nike", desc:"Global athletic footwear and apparel with brand moat in Jordan/Dunk", why:"Turnaround story with channel inventory normalization", mg:14, bf:12, bz:12 },
  { t:"DIS", p:116.75, se:"nonagi", ca:"nonagi", name:"Walt Disney", desc:"Disney+ streaming parks Experiences consumer products linear networks.", why:"Streaming profitability + parks capex cycle", mg:14, bf:12, bz:13 },
  { t:"NBIS", p:129.49, se:"compute", ca:"agi", name:"Nebius Group", desc:"European GPU cloud provider operating AI infrastructure across Europe and North America.", why:"Highest risk in cohort GPU oversupply + Meta cloud competition pressure", mg:10, bf:8, bz:16 },
  { t:"NET", p:268.75, se:"compute", ca:"agi", name:"Cloudflare", desc:"Edge cloud + AI inference platform with global CDN + Workers + R2 storage.", why:"Edge network moat + AI inference economics at lowest latency", mg:16, bf:13, bz:18 },
  { t:"SMCI", p:28.76, se:"semis", ca:"agi", name:"Super Micro Computer", desc:"AI server manufacturer with rack-scale liquid-cooled solutions for GPU clusters.", why:"Direct beneficiary of GPU cluster buildout but margin profile volatile", mg:12, bf:10, bz:19 },
  { t:"MRK", p:146.71, se:"nonagi", ca:"nonagi", name:"Merck", desc:"Global pharmaceutical company with Keytruda cancer blockbuster + vaccines + animal health.", why:"Patent cliff risk for Keytruda but $30B FCF + deep pipeline", mg:17, bf:18, bz:11 },
  { t:"TMO", p:694.76, se:"nonagi", ca:"nonagi", name:"Thermo Fisher Scientific", desc:"Largest life sciences tools + diagnostics company serving pharma and biotech.", why:"Research/diagnostics duopoly with Danaher — recession-resilient recurring revenue", mg:17, bf:18, bz:12 }
]; // TODO: populate 40-stock watchlist with M/B/Bz scores
// ============================================================

// ============================================================
// 5-DIMENSION SCORING + LEGACY TICKERS BUILDER
// (Moved from power.html on 2026-07-15 — fixes empty-sector bug
//  on nonagi/compute/semis/software sub-pages by making the scoring
//  helpers + TICKERS available to every page that loads data.js)
// ============================================================
// 5-DIMENSION SCORING (Aschenbrenner Situational Awareness)
function _scGradeForScore(s){if(s>=85)return 'A';if(s>=75)return 'B+';if(s>=65)return 'B';if(s>=55)return 'B-';if(s>=45)return 'C+';if(s>=35)return 'C';return 'D/F';}
function _scDimFramework(t){if(t.ca==='nonagi')return 9;if(t.ca==='agi'){if(t.tier===1&&(t.se==='power'||t.se==='semis'))return 19;if(t.tier===1&&t.se==='compute')return 16;return 12;}if(t.ca==='demand')return t.tier===1?14:10;return 8;}
function _scDimFundamental(t){const roe=t.roe,roic=t.roic;if(roe==null&&roic==null)return 9;if(roic!=null&&roic<0)return 5;let base;if(roe==null){if(roic>=20)base=17;else if(roic>=10)base=14;else if(roic>=5)base=11;else base=8;}else{if(roe>=25)base=18;else if(roe>=20)base=16;else if(roe>=15)base=14;else if(roe>=10)base=12;else if(roe>=5)base=9;else base=6;if(roic!=null){if(roic>=15)base+=2;else if(roic<3&&roe>10)base-=2;}}return Math.max(4,Math.min(20,base));}
function _scDimMomentum(t){const u=t.ups;if(u==null)return 9;if(u>=50)return 19;if(u>=30)return 17;if(u>=15)return 14;if(u>=5)return 12;if(u>=0)return 10;if(u>=-10)return 7;if(u>=-25)return 5;return 3;}
function _scDimSentiment(t){const bp=t.bp;if(bp==null)return 9;if(bp>=85)return 19;if(bp>=70)return 16;if(bp>=55)return 13;if(bp>=40)return 10;if(bp>=25)return 8;return 5;}
function _scDimScarcity(t){if(t.ca==='nonagi')return 8;if(t.ca==='agi'){if(t.tier===1&&(t.se==='power'||t.se==='semis'))return 18;if(t.tier===1&&t.se==='compute')return 14;return 11;}if(t.ca==='demand')return 10;return 6;}
function _scScoreStock(t){const d={fw:_scDimFramework(t),fund:_scDimFundamental(t),mom:_scDimMomentum(t),sent:_scDimSentiment(t),scar:_scDimScarcity(t)};return{total:d.fw+d.fund+d.mom+d.sent+d.scar,dims:d};}

// Build minimal legacy-shape TICKERS map for this sector from TIER1+TIER2 (data.js).
// Sector pages need tickerCard() shape (ticker, tier_emoji, tier, price, score, grade, news[]).
function _scTierLabel(se){return ({power:'Tier 1',compute:'Tier 2',semis:'Tier 2',software:'Tier 2',nonagi:'Tier 4'})[se] || 'Tier 2';}
function _scTierEmoji(se){return ({power:'🔋',compute:'🟠',semis:'🟡',software:'🟡',nonagi:'🟢'})[se] || '🟡';}

var TICKERS = (function(){
  var out = [];
  [].concat(TIER1, TIER2).forEach(function(t){
    var isIn1=Array.isArray(TIER1)&&TIER1.indexOf(t)>=0;
    var enriched=Object.assign({},t,{tier:isIn1?1:2});
    var sc=_scScoreStock(enriched);
    var score=sc.total;
    var ups=t.ups;
    var ups = t.ups;
    out.push({
      ticker: t.t, name: t.name || t.t, desc: t.desc || '', why: t.why || '',
      tier: '本週 ' + _scTierLabel(t.se) + ' (' + (SECTOR_NAMES[t.se] || t.se) + ')',
      tier_emoji: _scTierEmoji(t.se),
      price: t.p,
      trend: ups != null ? (ups >= 0 ? '↑' : '↓') : '—',
      pct:  ups != null ? (ups >= 0 ? '+' : '') + ups.toFixed(1) + '%' : '—',
      score: score, dims: sc.dims, grade: _scGradeForScore(score),
      ca: t.ca || '', se: t.se || '',   // bucket routing + sector key (for nav badges, bucket bars)
      pe: t.pe || '', mc: t.mc || '', upside: t.ups || '',
      news: []
    });
  });
  return out;
})();
