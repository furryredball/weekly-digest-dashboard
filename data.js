// Shared data for Weekly Investing Digest

// OLD inline TICKERS array (lines 2-21) removed 2026-07-13. Single source of truth = TIER1 + TIER2.

const SECTORS = {power:['VST','CEG','TLN','VRT','ETN','GEV','BE'],compute:['CRWV','GDS'],semis:['NVDA','CRDO'],software:['SNOW','ORCL'],nonagi:['RSG','WM','WCN']};
const SECTOR_NAMES = {power:'Power',compute:'Compute Infra',semis:'半導體',software:'Software',nonagi:'Non AGI'};
const SECTOR_SUBTITLES = {power:'電力 bottleneck · 7 tickers · Tier 1-3',compute:'GPU Cloud + networking · 2 tickers',semis:'Observe only · 2 tickers',software:'Data + apps · 2 tickers',nonagi:'避險 waste compounder · 3 tickers'};

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
const TIER1 = [
  { t:"VST", p:158.86, se:"power", ca:"agi", name:"Vistra Energy", desc:"Texas-based integrated utility with the lowest-cost nuclear and gas fleet in the most load-growth-rich region of the US.", why:"Geographic moat in ERCOT/PJM scarcity-priced markets", roe:18.47, roic:3.3, bp:90.9, ev:14.17, ups:42.6, mg:22, bf:20, bz:21 },
  { t:"CEG", p:251.38, se:"power", ca:"agi", name:"Constellation Energy", desc:"Largest US nuclear power operator with 33GW of irreplaceable assets.", why:"Hyperscaler PPA tailwind + Three Mile Island restart validates nuclear pricing power", roe:15.97, roic:4, bp:70, ev:23.13, ups:52.2, mg:21, bf:17, bz:15 },
  { t:"VRT", p:318.86, se:"power", ca:"agi", name:"Vertiv", desc:"Dominant global supplier of thermal management and power distribution for data centers.", why:"Liquid cooling bottleneck as GPU density rises above 100kW per rack", roe:33.82, roic:18.55, bp:94.7, ev:29.73, ups:-15.3, mg:22, bf:18, bz:16 },
  { t:"ETN", p:407.28, se:"power", ca:"agi", name:"Eaton Corp", desc:"Diversified power management for data centers and grid upgrades transformers/switchgear.", why:"2-3 year transformer lead times lock in pricing power through decade", roe:21.05, roic:13.14, bp:64.1, ev:22.56, ups:1.2, mg:22, bf:18, bz:16 },
  { t:"GEV", p:1091.57, se:"power", ca:"agi", name:"GE Vernova", desc:"Gas turbine + wind power equipment maker benefiting from US/EU data center grid buildout.", why:"Gas turbine order backlog multi-year direct AI infrastructure beneficiary", roe:43.69, roic:6.3, bp:75, ev:45.89, ups:-16.8, mg:21, bf:17, bz:18 },
  { t:"BE", p:244.61, se:"power", ca:"agi", name:"Bloom Energy", desc:"Solid-oxide fuel cell manufacturer for onsite power without grid interconnection.", why:"Grid interconnection 4-7 year waits make fuel cells a niche but valuable option", roic:1.89, bp:51.6, ev:1068.65, ups:-30, mg:19, bf:15, bz:12 },
  { t:"CRWV", p:88.88, se:"compute", ca:"agi", name:"CoreWeave", desc:"GPU cloud provider built for AI workloads with 20+ data centers running tens of thousands of NVIDIA GPUs.", why:"No proprietary technology pricing pressure when GPU supply normalizes", bp:57.1, ev:23.11, ups:42.9, mg:10, bf:8, bz:16 },
  { t:"GDS", p:32.78, se:"compute", ca:"agi", name:"GDS Holdings", desc:"China carrier-neutral data center operator serving Chinese cloud providers.", why:"China AI buildout leverage but entirely China-risk-laden watchlist speculation", roe:3.54, roic:1.35, bp:90, ev:13.12, ups:61.3, mg:11, bf:8, bz:17 },
  { t:"NVDA", p:210.96, se:"semis", ca:"agi", name:"NVIDIA", desc:"Designer of AI accelerators and CUDA ecosystem that defines AI training and inference.", why:"CUDA moat is years of developer tooling pricing power into next decade", roe:76.33, roic:62.88, bp:75.9, ev:31.43, ups:31.1, mg:15, bf:15, bz:19 },
  { t:"CRDO", p:257.79, se:"semis", ca:"agi", name:"Credo Technology", desc:"High-speed connectivity serdes and retimers for AI networking at 800G/1.6T.", why:"Networking fabric bottleneck as GPU clusters scale to hundreds of thousands of chips", roe:22.89, roic:21.02, bp:86.7, ev:62.25, ups:-13.4, mg:16, bf:16, bz:21 },
  { t:"RSG", p:219.20, se:"nonagi", ca:"nonagi", name:"Republic Services", desc:"Second-largest US waste services with 14M customers across 40+ states.", why:"Contractual price escalators + landfill permits provide inflation-protected compounding", roe:17.87, roic:8.83, bp:54.3, ev:13.07, ups:11.6, mg:22, bf:20, bz:16 },
  { t:"WM", p:233.33, se:"nonagi", ca:"nonagi", name:"Waste Management", desc:"North America's largest waste services with 300 landfills and 25000 collection vehicles.", why:"Best landfill network and route density natural monopoly economics", roe:27.11, roic:8.88, bp:57.1, ev:15.44, ups:9.1, mg:22, bf:22, bz:16 },
  { t:"WCN", p:171.07, se:"nonagi", ca:"nonagi", name:"Waste Connections", desc:"North American waste services focused on secondary and exclusive markets with multi-year contracts.", why:"Higher margins from monopolistic small-market positions", roe:13.13, roic:6.82, bp:78.8, ev:18.01, ups:19.1, mg:18, bf:20, bz:16 },
  { t:"SNOW", p:261.45, se:"software", ca:"demand", name:"Snowflake", desc:"Cloud data platform for warehousing/analytics/AI across multi-cloud.", why:"Switching cost moat in enterprise data + multi-cloud architecture", bp:80.8, ups:3.4, mg:13, bf:17, bz:15 },
  { t:"ORCL", p:140.64, se:"software", ca:"demand", name:"Oracle", desc:"Enterprise software + cloud infrastructure OCI with database moat pivoting to AI.", why:"OCI multi-cloud strategy extends database moat to AI workloads", roe:40.2, roic:7.99, bp:65.1, ev:26.11, ups:109.1, mg:16, bf:17, bz:15 }
];
const TIER2 = [
  { t:"NEE", p:87.96, se:"power", ca:"agi", name:"NextEra Energy", desc:"Largest US renewable utility with wind/solar fleet and Florida regulated utility.", why:"Renewable transition scale leader but regulated rate-base model less leveraged to AI scarcity", roe:12.51, roic:4.23, bp:66.7, ev:16.12, ups:10.4, mg:17, bf:16, bz:15 },
  { t:"TLN", p:385.80, se:"power", ca:"agi", name:"Talen Energy", desc:"Independent power producer owning 1.2GW Susquehanna nuclear plant with 300MW Nautilus AI campus.", why:"Susquehanna site most valuable industrial real estate in PJM", roic:0.16, bp:100, ev:45.31, ups:21.3, mg:19, bf:16, bz:12 },
  { t:"GE", p:193.0, se:"power", ca:"agi", name:"General Electric", desc:"Aerospace power systems and grid equipment benefiting from AI infrastructure capex.", why:"GE Vernova spinoff parent grid equipment exposure with smaller scale than GEV/Eaton", roe:46.6, roic:8.12, bp:68.6, ev:27.92, ups:99.9, mg:18, bf:15, bz:15 },
  { t:"EQIX", p:1051.21, se:"compute", ca:"agi", name:"Equinix", desc:"Global data center REIT with 260+ IBX colocation facilities across 30+ metros.", why:"Colocation scale leader but stock at premium quality but expensive", roe:9.54, roic:4.36, bp:75, ev:23.57, ups:0.7, mg:15, bf:12, bz:15 },
  { t:"DLR", p:165.0, se:"compute", ca:"agi", name:"Digital Realty Trust", desc:"Data center REIT with 300+ facilities across 50+ metros globally.", why:"Diversified DC exposure at slightly lower multiple than EQIX", roe:5.71, roic:1.3, bp:60.4, ev:20.59, ups:21.9, mg:15, bf:12, bz:15 },
  { t:"ANET", p:420.0, se:"compute", ca:"agi", name:"Arista Networks", desc:"Cloud networking platform for hyperscale data centers and AI back-end fabrics.", why:"Dominant in hyperscaler back-end networking alongside Cisco/Broadcom", roe:28.39, roic:22.64, bp:75, ev:37.68, ups:-57.9, mg:18, bf:15, bz:20 },
  { t:"CRWD", p:440.0, se:"compute", ca:"agi", name:"CrowdStrike", desc:"Cloud-delivered endpoint security platform with AI-driven threat detection.", why:"AI threat detection leader but valuation already discounts it", bp:75.8, ev:586.75, ups:-66.5, mg:16, bf:12, bz:18 },
  { t:"PANW", p:170.0, se:"compute", ca:"agi", name:"Palo Alto Networks", desc:"Enterprise cybersecurity platform with network cloud and security operations.", why:"Platform consolidation play for enterprise security", roe:14.49, roic:5.67, bp:73.9, ev:58.26, ups:60.7, mg:16, bf:13, bz:17 },
  { t:"AMD", p:158.0, se:"semis", ca:"agi", name:"Advanced Micro Devices", desc:"CPU and GPU maker competing with Intel and NVIDIA in AI accelerators.", why:"MI300 series traction but margin profile challenged by NVIDIA pricing", roe:6.88, roic:5.4, bp:71.4, ev:47.85, ups:126.9, mg:12, bf:9, bz:21 },
  { t:"AVGO", p:1280.0, se:"semis", ca:"agi", name:"Broadcom", desc:"Custom AI silicon ASIC partner for hyperscalers + networking chips + software assets VMware.", why:"Custom ASIC + networking double exposure with VMware cost synergies", roe:28.45, roic:16.36, bp:86.4, ev:50.62, ups:-65.2, mg:18, bf:15, bz:18 },
  { t:"MRVL", p:68.0, se:"semis", ca:"agi", name:"Marvell Technology", desc:"Data center networking and custom silicon for cloud and AI infrastructure.", why:"Custom silicon partner but smaller scale than Broadcom", roe:18.66, roic:5.98, bp:82.2, ev:15.44, ups:153.3, mg:13, bf:10, bz:19 },
  { t:"ARM", p:135.0, se:"semis", ca:"agi", name:"Arm Holdings", desc:"CPU instruction set architecture licensor for mobile/edge/AI inference.", why:"Architectural moat but heavy valuation premium", roe:10.91, roic:7.29, bp:74.1, ev:112.53, ups:90.5, mg:16, bf:12, bz:20 },
  { t:"MU", p:108.0, se:"semis", ca:"agi", name:"Micron Technology", desc:"Memory and storage semiconductor maker with HBM exposure for AI accelerators.", why:"HBM3/HBM4 demand from NVIDIA/AMD but cyclical memory pricing risk", roe:15.76, roic:12.12, bp:81.4, ev:7.67, ups:585.6, mg:12, bf:10, bz:18 },
  { t:"MSFT", p:440.0, se:"software", ca:"demand", name:"Microsoft", desc:"Software/cloud/AI conglomerate with Azure OpenAI partnership and GitHub Copilot.", why:"Multi-decade compounding with AI optionality through OpenAI partnership", roe:29.65, roic:21.63, bp:80.5, ev:23.6, ups:33.3, mg:18, bf:17, bz:21 },
  { t:"GOOG", p:182.0, se:"software", ca:"demand", name:"Alphabet", desc:"Search/cloud/YouTube conglomerate with internal AI deployment Gemini and TPU infrastructure.", why:"AI optionality through Gemini + TPU + YouTube data moat", roe:31.83, roic:21.82, bp:87.3, ev:21.23, ups:105.1, mg:17, bf:15, bz:22 },
  { t:"CRM", p:275.0, se:"software", ca:"agi", name:"Salesforce", desc:"Enterprise CRM platform with AI Einstein and Slack collaboration.", why:"Agentforce AI rollout at scale but valuation already prices it", roe:12.61, roic:8.76, bp:77.3, ev:16.08, ups:5.7, mg:15, bf:13, bz:17 },
  { t:"PLTR", p:48.0, se:"software", ca:"agi", name:"Palantir Technologies", desc:"Data integration and AI deployment platform for government and enterprise.", why:"Government contracts + AIP but valuation already extreme", roe:22, roic:17.95, bp:46.2, ev:249.48, ups:291.5, mg:14, bf:10, bz:20 },
  { t:"META", p:585.0, se:"software", ca:"demand", name:"Meta Platforms", desc:"Social + advertising + AI infrastructure builder with Llama + Reels + WhatsApp.", why:"AI capex cycle + Reels monetization + WhatsApp Business model", roe:27.83, roic:17.95, bp:80, ev:16.38, ups:44.4, mg:18, bf:15, bz:22 },
  { t:"AMZN", p:210.0, se:"software", ca:"demand", name:"Amazon", desc:"Retail + AWS cloud + advertising + AI infrastructure.", why:"AWS AI infrastructure leader with retail cash flow backstop", roe:18.89, roic:10.7, bp:88.3, ev:15.28, ups:42.7, mg:18, bf:15, bz:22 },
  { t:"TSLA", p:242.0, se:"power", ca:"agi", name:"Tesla", desc:"EV + energy storage + FSD + Optimus + Dojo supercomputer.", why:"Most optionality-embedded stock in market at premium valuation", roe:4.62, roic:2.95, ev:122.6, ups:82.3, mg:14, bf:9, bz:22 },
  { t:"HON", p:210.0, se:"power", ca:"agi", name:"Honeywell", desc:"Industrial conglomerate with aerospace building automation and energy transition.", why:"Automation + aerospace diversification with AI data center cooling adjacency", roe:30.63, roic:9.22, bp:64.3, ev:17.88, ups:18.7, mg:17, bf:16, bz:14 },
  { t:"RTX", p:128.0, se:"power", ca:"agi", name:"Raytheon Technologies", desc:"Aerospace and defense company with missiles and Pratt & Whitney engines.", why:"Defense backlog + GTF recovery not AI-pure but cyclical compounding", roe:10.32, roic:6.49, bp:69.2, ev:18.61, ups:62.4, mg:15, bf:16, bz:12 },
  { t:"LMT", p:545.0, se:"power", ca:"agi", name:"Lockheed Martin", desc:"Defense prime with F-35 JASSM Patriot missile portfolio.", why:"Defense backlog + dividend aristocrat", roe:74.65, roic:17.39, bp:56.8, ev:16.67, ups:8.8, mg:15, bf:17, bz:11 },
  { t:"UNH", p:535.0, se:"nonagi", ca:"nonagi", name:"UnitedHealth Group", desc:"Largest US health insurer with Optum healthcare services platform.", why:"Optum + Medicare Advantage scale but regulatory overhang", roe:12.81, roic:8.23, bp:82.7, ev:15.37, ups:-25, mg:16, bf:17, bz:11 },
  { t:"LLY", p:790.0, se:"nonagi", ca:"nonagi", name:"Eli Lilly", desc:"Pharmaceutical innovator with GLP-1 leader tirzepatide Mounjaro/Zepbound.", why:"GLP-1 franchise + Alzheimer's pipeline at premium valuation", roe:77.78, roic:30.2, bp:73.3, ev:35.81, ups:51.6, mg:17, bf:15, bz:16 },
  { t:"JNJ", p:160.0, se:"nonagi", ca:"nonagi", name:"Johnson & Johnson", desc:"Healthcare conglomerate with pharma medical devices and consumer health.", why:"Dividend aristocrat + MedTech innovation + pharma pipeline", roe:32.87, roic:13.71, bp:52.5, ev:12.97, ups:45.9, mg:17, bf:18, bz:12 },
  { t:"JPM", p:210.0, se:"nonagi", ca:"nonagi", name:"JPMorgan Chase", desc:"Largest US bank with investment banking asset management and consumer banking.", why:"Scale advantage + trading revenue + capital return", roe:15.74, roic:4.23, bp:52.5, ev:18.39, ups:59.6, mg:16, bf:17, bz:12 },
  { t:"BAC", p:42.0, se:"nonagi", ca:"nonagi", name:"Bank of America", desc:"Second-largest US bank with consumer banking wealth management focus.", why:"Rate-sensitive earnings with credit risk in CRE/unsecured portfolios", roe:10.06, roic:3.39, bp:64.8, ev:13.48, ups:45.7, mg:15, bf:16, bz:11 },
  { t:"XOM", p:118.0, se:"nonagi", ca:"nonagi", name:"ExxonMobil", desc:"Largest US supermajor with upstream refining and chemicals.", why:"Permian + Guyana + LNG dividend aristocrat with E&P scale", roe:11.12, roic:6.34, ev:8.16, ups:31.1, mg:15, bf:17, bz:10 },
  { t:"CVX", p:148.0, se:"nonagi", ca:"nonagi", name:"Chevron", desc:"Second-largest US oil major with Permian and LNG export exposure.", why:"Permian + TCO + LNG capex self-funded", roe:6.6, roic:3.59, bp:62.3, ev:7.78, ups:30.1, mg:15, bf:17, bz:10 },
  { t:"WMT", p:113.9, se:"nonagi", ca:"nonagi", name:"Walmart", desc:"Largest US retailer with grocery dominant market share and Walmart+ subscription.", why:"Scale + automation + e-commerce momentum", roe:21.98, roic:11.87, bp:72.7, ev:21.68, ups:14.7, mg:17, bf:16, bz:13 },
  { t:"COST", p:955.0, se:"nonagi", ca:"nonagi", name:"Costco", desc:"Membership warehouse club with 130M+ members globally.", why:"Membership stickiness + pricing discipline", mg:17, bf:17, bz:12 },
  { t:"HD", p:355.0, se:"nonagi", ca:"nonagi", name:"Home Depot", desc:"Largest US home improvement retailer with pro-customer focus.", why:"Housing cycle exposure but Pro and contractor segments durable", mg:15, bf:15, bz:12 },
  { t:"NKE", p:80.0, se:"nonagi", ca:"nonagi", name:"Nike", desc:"Global athletic footwear and apparel with brand moat in Jordan/Dunk", why:"Turnaround story with channel inventory normalization", mg:14, bf:12, bz:12 },
  { t:"DIS", p:98.0, se:"nonagi", ca:"nonagi", name:"Walt Disney", desc:"Disney+ streaming parks Experiences consumer products linear networks.", why:"Streaming profitability + parks capex cycle", mg:14, bf:12, bz:13 },
  { t:"NBIS", p:219.65, se:"compute", ca:"agi", name:"Nebius Group", desc:"European GPU cloud provider operating AI infrastructure across Europe and North America.", why:"Highest risk in cohort GPU oversupply + Meta cloud competition pressure", mg:10, bf:8, bz:16 },
  { t:"NET", p:118.0, se:"compute", ca:"agi", name:"Cloudflare", desc:"Edge cloud + AI inference platform with global CDN + Workers + R2 storage.", why:"Edge network moat + AI inference economics at lowest latency", mg:16, bf:13, bz:18 },
  { t:"SMCI", p:42.0, se:"semis", ca:"agi", name:"Super Micro Computer", desc:"AI server manufacturer with rack-scale liquid-cooled solutions for GPU clusters.", why:"Direct beneficiary of GPU cluster buildout but margin profile volatile", mg:12, bf:10, bz:19 },
  { t:"MRK", p:118.0, se:"nonagi", ca:"nonagi", name:"Merck", desc:"Global pharmaceutical company with Keytruda cancer blockbuster + vaccines + animal health.", why:"Patent cliff risk for Keytruda but $30B FCF + deep pipeline", mg:17, bf:18, bz:11 },
  { t:"TMO", p:512.0, se:"nonagi", ca:"nonagi", name:"Thermo Fisher Scientific", desc:"Largest life sciences tools + diagnostics company serving pharma and biotech.", why:"Research/diagnostics duopoly with Danaher — recession-resilient recurring revenue", mg:17, bf:18, bz:12 }
]; // TODO: populate 40-stock watchlist with M/B/Bz scores
// ============================================================