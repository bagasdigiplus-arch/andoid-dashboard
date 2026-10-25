<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Android Smart Choice Guide – Dashboard</title>
<meta name="description" content="Dashboard panduan memilih HP Android berdasarkan kebutuhan customer dan budget.">
<style>
:root{--bg:#f4f6fb;--card:#fff;--tx:#111827;--mu:#6b7280;--bd:#e5e7eb;--ac:#4f46e5;--ac2:#eef2ff;--ok:#059669}
@media (prefers-color-scheme:dark){:root{--bg:#0b1020;--card:#141b30;--tx:#e8ecf8;--mu:#97a0b8;--bd:#263050;--ac:#818cf8;--ac2:#1e2547;--ok:#34d399}}
*{box-sizing:border-box}body{margin:0;font:15px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--tx)}
header{padding:28px 20px 8px;max-width:1200px;margin:auto}h1{margin:0;font-size:26px}header p{margin:4px 0 0;color:var(--mu)}
main{max-width:1200px;margin:auto;padding:12px 20px 48px;display:grid;gap:18px}
.card{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:18px}
h2{margin:0 0 12px;font-size:16px}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px}
.kpi b{display:block;font-size:28px;color:var(--ac)}.kpi span{color:var(--mu);font-size:13px}
.cats{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px}
.cat{text-align:left;border:1.5px solid var(--bd);background:var(--card);color:var(--tx);border-radius:12px;padding:12px;cursor:pointer;font:inherit}
.cat.on{border-color:var(--ac);background:var(--ac2)}.cat b{display:block}.cat small{color:var(--mu)}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{border:1.5px solid var(--bd);background:var(--card);color:var(--tx);border-radius:999px;padding:6px 12px;cursor:pointer;font:inherit;font-size:13px}
.chip.on{background:var(--ac);border-color:var(--ac);color:#fff}
.seg{display:flex;height:34px;border-radius:10px;overflow:hidden;margin-bottom:10px}
.seg div{display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;cursor:pointer;opacity:.55}.seg div.on{opacity:1}
.two{display:grid;grid-template-columns:1fr 1fr;gap:18px}@media(max-width:800px){.two{grid-template-columns:1fr}}
ul{margin:0;padding-left:18px}li{margin:4px 0}
table{width:100%;border-collapse:collapse;font-size:14px}th,td{text-align:left;padding:8px;border-bottom:1px solid var(--bd);vertical-align:top}th{color:var(--mu);font-weight:600}
.wrap{overflow-x:auto}.tag{display:inline-block;background:var(--ac2);color:var(--ac);border-radius:6px;padding:1px 8px;font-size:12px;margin-right:4px}
.mu{color:var(--mu)}input[type=search]{width:100%;padding:9px 12px;border:1.5px solid var(--bd);border-radius:10px;background:var(--card);color:var(--tx);font:inherit;margin-bottom:10px}
button.act{background:var(--ac);color:#fff;border:0;border-radius:10px;padding:8px 14px;font:inherit;cursor:pointer}
</style>
</head>
<body>
<header>
  <h1>📱 Android Smart Choice Guide</h1>
  <p>Pilih kebutuhan customer dan budget — dapatkan prioritas spesifikasi dan rekomendasi.</p>
</header>
<main>
  <section class="kpis" id="kpis"></section>

  <section class="card"><h2>1. Kebutuhan customer <span class="mu">(boleh pilih lebih dari satu)</span></h2><div class="cats" id="cats"></div></section>

  <section class="card"><h2>2. Budget</h2><div class="seg" id="seg"></div><div class="chips" id="budgets"></div></section>

  <section class="two">
    <div class="card"><h2>Prioritas spesifikasi</h2><div id="specs" class="mu">Pilih minimal satu kategori.</div></div>
    <div class="card"><h2>Ekspektasi di budget ini</h2><div id="tier" class="mu">Pilih rentang budget.</div></div>
  </section>

  <section class="card">
    <h2>Rekomendasi HP</h2>
    <div id="recs" class="mu"></div>
    <details style="margin-top:12px"><summary class="mu" style="cursor:pointer">Muat data rekomendasi dari CSV</summary>
      <p class="mu">Upload CSV dari tab matriks: kolom pertama = rentang budget (mis. "2 Jt - 2.5 Jt"), header kolom lainnya = nama kategori (mis. "🎮 Gaming"), isi sel = rekomendasi HP.</p>
      <input type="file" id="csv" accept=".csv">
    </details>
  </section>

  <section class="card"><h2>Semua kategori</h2><input type="search" id="q" placeholder="Cari kategori / kebutuhan…"><div class="wrap"><table id="tbl"></table></div></section>
</main>

<script>
/* ===== DATA (dari spreadsheet "Android Smart Choice Guide") ===== */
const CATEGORIES=[
 {id:'gaming',icon:'🎮',name:'Gaming',need:'Main game, butuh performance, GPU/chipset, cooling, refresh rate',star:0,
  specs:['Chipset kelas atas di segmennya (Snapdragon 7+/8, Dimensity 8000/9000)','RAM 8 GB ke atas, storage UFS','Layar refresh rate 120 Hz+ dan touch sampling tinggi','Sistem pendingin (vapor chamber/grafit)','Baterai besar + fast charging']},
 {id:'daily',icon:'📱',name:'Daily Use',need:'WhatsApp, social media, browsing, komunikasi, penggunaan umum',star:0,
  specs:['RAM 6–8 GB cukup','Storage min. 128 GB','Baterai 5000 mAh','Layar 90 Hz agar terasa halus','Chipset efisien, tidak perlu flagship']},
 {id:'ent',icon:'🎬',name:'Entertainment',need:'Streaming, YouTube, Netflix, musik, konsumsi konten',star:0,
  specs:['Layar AMOLED, brightness tinggi','Sertifikasi Widevine L1 (streaming HD)','Speaker stereo','Baterai besar','Dukungan HDR']},
 {id:'photo',icon:'📸',name:'Photography',need:'Foto, video, selfie, content creation',star:0,
  specs:['Sensor kamera utama besar + OIS','Kamera telephoto/ultrawide yang berguna','Stabilisasi video (4K/60fps)','Kamera depan berkualitas','Storage besar']},
 {id:'work',icon:'💼',name:'Work / Productivity',need:'Meeting, email, Office, multitasking, kerja mobile',star:0,
  specs:['RAM 8 GB+ untuk multitasking','Baterai tahan seharian','Layar besar nyaman untuk dokumen','Konektivitas stabil (Wi‑Fi 6, dual SIM/eSIM)','Fitur keamanan dan update rutin']},
 {id:'long',icon:'🛡️',name:'Long-term Use',need:'Ingin HP awet dipakai beberapa tahun, durability & software support',star:0,
  specs:['Janji update OS dan security panjang','Chipset yang tidak ketinggalan zaman','Sertifikasi IP dan kaca pelindung','Storage UFS dan RAM cukup','Layanan purna jual / service center luas']},
 {id:'batt',icon:'🔋',name:'Battery / Heavy Use',need:'Banyak menggunakan HP seharian, tidak ingin sering charging',star:1,
  specs:['Kapasitas baterai 5500 mAh+','Fast charging 45 W+','Chipset hemat daya','Layar LTPO/adaptive refresh rate','Software optimasi baterai']},
 {id:'style',icon:'✨',name:'Style / Brand / Experience',need:'Mementingkan desain, prestige/brand, ecosystem, atau pengalaman premium',star:1,
  specs:['Material dan desain premium','Brand dan ecosystem (watch, earbuds, tablet)','Layar dan kamera kelas atas','UI/UX yang mulus','Resale value yang baik']}
];
const BUDGETS=['2 Jt - 2.5 Jt','2.5 Jt - 3 Jt','3 Jt - 3.5 Jt','3.5 Jt - 4 Jt','4 Jt - 4.5 Jt','4.5 Jt - 5 Jt','5 Jt - 6 Jt','6 Jt - 7 Jt','7 Jt - 8 Jt','8 Jt - 9 Jt','9 Jt - 10 Jt','10 Jt - 12 Jt','12 Jt - 14 Jt','14 Jt - 16 Jt','16 Jt - 18 Jt','18 Jt - 20 Jt','20 Jt - 25 Jt','> 25 Jt'];
const TIERS=[
 {name:'Entry',color:'#64748b',from:0,to:6,txt:'Fokus kebutuhan dasar. Biasanya ada kompromi di layar, kamera, atau chipset — tentukan satu prioritas utama saja.'},
 {name:'Mid-range',color:'#2563eb',from:6,to:11,txt:'Titik keseimbangan: layar AMOLED/120 Hz dan baterai besar mulai umum. Pilih sesuai kategori yang paling penting.'},
 {name:'Upper-mid',color:'#7c3aed',from:11,to:14,txt:'Chipset kuat, kamera lebih baik, dan build premium mulai tersedia. Cocok untuk gaming dan fotografi serius.'},
 {name:'Flagship',color:'#db2777',from:14,to:18,txt:'Performa, kamera, material, dan dukungan update terbaik. Pilih berdasarkan ecosystem dan pengalaman.'}
];
const CONFIG={SHEET_CSV_URL:''}; // isi dengan link Google Sheets "Publish to web" (format CSV) agar rekomendasi tampil otomatis
let REC={}; // REC[budget][categoryName]=teks

/* ===== STATE ===== */
const sel=new Set(),S={b:null};
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tierOf=i=>TIERS.find(t=>i>=t.from&&i<t.to);

function kpis(){
 $('kpis').innerHTML=[[CATEGORIES.length,'Kategori kebutuhan'],[BUDGETS.length,'Rentang budget'],[CATEGORIES.filter(c=>c.star).length,'Kategori prioritas ⭐'],[TIERS.length,'Segmen harga']]
 .map(k=>`<div class="card kpi"><b>${k[0]}</b><span>${k[1]}</span></div>`).join('');
}
function cats(){
 $('cats').innerHTML=CATEGORIES.map(c=>`<button class="cat ${sel.has(c.id)?'on':''}" data-id="${c.id}"><b>${c.icon} ${c.name}${c.star?' ⭐':''}</b><small>${esc(c.need)}</small></button>`).join('');
 document.querySelectorAll('.cat').forEach(b=>b.onclick=()=>{sel.has(b.dataset.id)?sel.delete(b.dataset.id):sel.add(b.dataset.id);render()});
}
function budgets(){
 $('seg').innerHTML=TIERS.map(t=>`<div style="flex:${t.to-t.from};background:${t.color}" class="${S.b!==null&&tierOf(S.b)===t?'on':''}" data-i="${t.from}">${t.name}</div>`).join('');
 $('seg').querySelectorAll('div').forEach(d=>d.onclick=()=>{S.b=+d.dataset.i;render()});
 $('budgets').innerHTML=BUDGETS.map((b,i)=>`<button class="chip ${S.b===i?'on':''}" data-i="${i}">${b}</button>`).join('');
 $('budgets').querySelectorAll('.chip').forEach(c=>c.onclick=()=>{S.b=+c.dataset.i;render()});
}
function panels(){
 const chosen=CATEGORIES.filter(c=>sel.has(c.id));
 $('specs').innerHTML=chosen.length?chosen.map(c=>`<h3 style="margin:10px 0 4px;font-size:14px">${c.icon} ${c.name}</h3><ul>${c.specs.map(s=>`<li>${s}</li>`).join('')}</ul>`).join(''):'Pilih minimal satu kategori.';
 if(S.b===null){$('tier').textContent='Pilih rentang budget.'}
 else{const t=tierOf(S.b);$('tier').innerHTML=`<p><span class="tag" style="background:${t.color};color:#fff">${t.name}</span> <b>${BUDGETS[S.b]}</b></p><p>${t.txt}</p>`}
 const bud=BUDGETS[S.b],rows=[];
 if(S.b!==null&&REC[bud])chosen.forEach(c=>{const k=Object.keys(REC[bud]).find(x=>x.includes(c.name));if(k&&REC[bud][k])rows.push([c,REC[bud][k]])});
 $('recs').innerHTML=rows.length?`<div class="wrap"><table><tr><th>Kategori</th><th>Rekomendasi (${bud})</th></tr>${rows.map(r=>`<tr><td>${r[0].icon} ${r[0].name}</td><td>${esc(r[1])}</td></tr>`).join('')}</table></div>`
  :(Object.keys(REC).length?'Belum ada rekomendasi untuk kombinasi ini.':'Data rekomendasi HP belum dimuat. Upload CSV matriks di bawah, atau isi <code>CONFIG.SHEET_CSV_URL</code>.');
}
function table(){
 const q=$('q').value.toLowerCase();
 $('tbl').innerHTML='<tr><th>Kategori</th><th>Kebutuhan Customer</th></tr>'+CATEGORIES.filter(c=>(c.name+c.need).toLowerCase().includes(q)).map(c=>`<tr><td>${c.icon} ${c.name}${c.star?' ⭐':''}</td><td>${esc(c.need)}</td></tr>`).join('');
}
function render(){cats();budgets();panels()}

/* ===== CSV ===== */
function parseCSV(t){const r=[];let row=[],f='',q=false;for(let i=0;i<t.length;i++){const c=t[i];
 if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=false}else f+=c}
 else if(c=='"')q=true;else if(c==','){row.push(f);f=''}else if(c=='\n'||c=='\r'){if(c=='\r'&&t[i+1]=='\n')i++;row.push(f);r.push(row);row=[];f=''}else f+=c}
 if(f||row.length){row.push(f);r.push(row)}return r}
function loadMatrix(text){
 const rows=parseCSV(text).filter(r=>r.some(x=>x.trim()));if(rows.length<2)return;
 const head=rows[0].map(h=>h.trim());REC={};
 rows.slice(1).forEach(r=>{const b=BUDGETS.find(x=>x.replace(/\s/g,'')==(r[0]||'').replace(/\s/g,''));if(!b)return;REC[b]={};head.forEach((h,i)=>{if(i&&r[i]&&r[i].trim())REC[b][h]=r[i].trim()})});
 panels();
}
$('csv').onchange=e=>{const f=e.target.files[0];if(f)f.text().then(loadMatrix)};
if(CONFIG.SHEET_CSV_URL)fetch(CONFIG.SHEET_CSV_URL).then(r=>r.text()).then(loadMatrix).catch(()=>{});

$('q').oninput=table;kpis();table();render();
</script>
</body>
</html>
