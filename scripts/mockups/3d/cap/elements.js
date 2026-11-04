// Crisp element captures (DPR 3) of misterglass.nl for floating UI cards.
const { chromium } = require('playwright');
const fs=require('fs'); const OUT=process.argv[2]; fs.mkdirSync(OUT,{recursive:true});
const HIDE=`#CybotCookiebotDialog,.cmplz-cookiebanner,#cookie-notice,iframe[title*="chat" i],.grecaptcha-badge{display:none!important}*:focus{outline:none!important}`;
async function prep(p,url){await p.goto(url,{waitUntil:'domcontentloaded',timeout:60000});await p.waitForTimeout(3500);
  for (const t of ['Alles accepteren','Accepteren','Akkoord']) { const el=await p.$(`text="${t}"`); if(el && await el.isVisible()){await el.click().catch(()=>{}); break;} }
  await p.addStyleTag({content:HIDE});
  await p.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=400){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}window.scrollTo(0,0);});await p.waitForTimeout(800);}
async function shot(p,name,rect,pad=24){ if(!rect){console.log('miss',name);return;}
  const [x,y,w,h]=rect; await p.evaluate((y)=>window.scrollTo(0,Math.max(0,y-200)),y); await p.waitForTimeout(500);
  const sy=await p.evaluate(()=>scrollY);
  await p.screenshot({path:`${OUT}/${name}.png`,clip:{x:x-pad,y:y-sy-pad,width:w+2*pad,height:h+2*pad}}); console.log(name,rect.map(Math.round));}
const R=(p,fn,arg)=>p.evaluate(fn,arg);
(async()=>{
  const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:3});
  const p=await ctx.newPage();
  // svgs
  for (const [n,u,w] of [['logo','https://www.misterglass.nl/wp-content/uploads/2025/01/misterglass-logo.svg',1564],['review','https://www.misterglass.nl/wp-content/uploads/2024/11/Google-review-navbar.svg',764]]){
    await p.setContent(`<html><body style="margin:0;background:transparent"><img id=i src="${u}" style="width:${w/3}px;display:block"></body></html>`); await p.waitForTimeout(1500);
    const r=await p.evaluate(()=>{const e=document.getElementById('i').getBoundingClientRect();return [e.x,e.y,e.width,e.height];});
    await p.screenshot({path:`${OUT}/${n}.png`,clip:{x:r[0],y:r[1],width:r[2],height:r[3]},omitBackground:true}); console.log(n,r);
  }
  const unionOf=(sels)=>{let r=null;for(const s of sels){const e=document.querySelector(s);if(!e)continue;const b=e.getBoundingClientRect();const q=[b.left,b.top+scrollY,b.right,b.bottom+scrollY];r=r?[Math.min(r[0],q[0]),Math.min(r[1],q[1]),Math.max(r[2],q[2]),Math.max(r[3],q[3])]:q;}return r?[r[0],r[1],r[2]-r[0],r[3]-r[1]]:null;};
  // home
  await prep(p,'https://www.misterglass.nl/');
  const homeR=await R(p,()=>{const o={};const find=(re,tags='a,button,h1,h2,div,span,p')=>[...document.querySelectorAll(tags)].filter(e=>re.test(e.innerText||'')&&e.getBoundingClientRect().width>0).sort((a,b)=>(a.innerText.length-b.innerText.length))[0];
    const cta=find(/^Bestel glas op maat/,'a');if(cta){const b=cta.getBoundingClientRect();o.cta=[b.left,b.top+scrollY,b.width,b.height];}
    const h=find(/^Glas op maat\.\s*Online besteld\.\s*Perfect geleverd\.?$/,'h1,h2,div');if(h){const b=h.getBoundingClientRect();o.headline=[b.left,b.top+scrollY,b.width,b.height];}
    const lg=document.querySelector('img[src*="misterglass-logo"]');if(lg){const b=lg.getBoundingClientRect();o.logo=[b.left,b.top+scrollY,b.width,b.height];}
    const nav=find(/Enkel glas[\s\S]*Gereedschap/,'nav,ul,div');if(nav){const b=nav.getBoundingClientRect();o.nav=[b.left,b.top+scrollY,b.width,b.height];}
    return o;});
  await shot(p,'home-cta',homeR.cta,10); await shot(p,'home-headline',homeR.headline,30); await shot(p,'home-logo-header',homeR.logo,20); await shot(p,'home-nav',homeR.nav,8);
  // shop card
  await prep(p,'https://www.misterglass.nl/winkel/');
  const shopR=await R(p,()=>{const items=[...document.querySelectorAll('li.product, .e-loop-item, .product')].filter(e=>e.getBoundingClientRect().width>150);const o={};items.slice(0,3).forEach((e,i)=>{const b=e.getBoundingClientRect();o['card'+i]=[b.left,b.top+scrollY,b.width,b.height];});return o;});
  for (const [k,v] of Object.entries(shopR)) await shot(p,'shop-'+k,v,16);
  // product
  await prep(p,'https://www.misterglass.nl/product/isolatieglas-hr-1-0/');
  await p.selectOption('#spouwbreedte',{index:5}); await p.waitForTimeout(700);
  await p.selectOption('#kader',{index:1}); await p.waitForTimeout(700);
  await p.selectOption('#spouwverdeling',{index:1}); await p.waitForTimeout(1200);
  await p.fill('#pewc_group_302_303','1200'); await p.fill('#pewc_group_302_1788','850'); await p.press('#pewc_group_302_1788','Tab'); await p.waitForTimeout(2000);
  await p.evaluate(()=>document.activeElement&&document.activeElement.blur()); await p.waitForTimeout(400);
  const prodR=await R(p,(src)=>{const unionOf=eval(src);const o={};
    o.variations=unionOf(['table.variations']);
    o.dims=unionOf(['li.pewc_group_302_303','li.pewc_group_302_1788']);
    o.totals=unionOf(['.pewc-total-field-wrapper']);
    o.cart=unionOf(['form.variations_form .quantity','button.single_add_to_cart_button']);
    const h1=document.querySelector('h1'); if(h1){const b=h1.getBoundingClientRect();o.title=[b.left,b.top+scrollY,b.width,b.height];}
    const pm=[...document.querySelectorAll('div,section')].filter(e=>/€\s?63,84 - €\s?134,40[\s\S]*Per m2[\s\S]*Levertijd/.test(e.innerText||'')&&e.innerText.length<140).sort((a,b)=>a.innerText.length-b.innerText.length)[0];
    if(pm){const b=pm.getBoundingClientRect();o.price=[b.left,b.top+scrollY,b.width,b.height];}
    const us=[...document.querySelectorAll('div,section')].filter(e=>/^Bestellen bij MisterGlass[\s\S]*Gratis verzending/.test((e.innerText||'').trim())).sort((a,b)=>a.innerText.length-b.innerText.length)[0];
    if(us){const b=us.getBoundingClientRect();o.usp=[b.left,b.top+scrollY,b.width,b.height];}
    const img=document.querySelector('.woocommerce-product-gallery img, .elementor-widget-theme-post-featured-image img, .product img');if(img){const b=img.getBoundingClientRect();o.photo=[b.left,b.top+scrollY,b.width,b.height];}
    return o;}, unionOf.toString());
  for (const [k,v] of Object.entries(prodR)) await shot(p,'prod-'+k,v,k==='photo'?0:20);
  fs.writeFileSync(`${OUT}/rects.json`,JSON.stringify({homeR,shopR,prodR},null,1));
  await b.close();
})();
