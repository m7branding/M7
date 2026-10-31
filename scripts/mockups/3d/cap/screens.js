// Device-accurate captures of misterglass.nl for the r11 3D mockups.
// node screens.js <outdir>
const { chromium } = require('playwright');
const fs=require('fs');
const OUT=process.argv[2]; fs.mkdirSync(OUT,{recursive:true});
const HIDE=`#CybotCookiebotDialog,.cmplz-cookiebanner,#cookie-notice,.cky-consent-container,iframe[title*="chat" i],.grecaptcha-badge,#wpadminbar{display:none!important}
html::-webkit-scrollbar,body::-webkit-scrollbar,*::-webkit-scrollbar{display:none!important;width:0!important}html,body{scrollbar-width:none!important}
*:focus{outline:none!important}`;
const IPHONE_UA='Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';
const IPAD_UA='Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';
const DESK_UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15';
const PROFILES={
  mbp:{viewport:{width:1512,height:893},deviceScaleFactor:2,userAgent:DESK_UA},
  sd:{viewport:{width:1600,height:823},deviceScaleFactor:2,userAgent:DESK_UA},
  web:{viewport:{width:1440,height:900},deviceScaleFactor:2,userAgent:DESK_UA},
  iphone:{viewport:{width:402,height:820},deviceScaleFactor:3,isMobile:true,hasTouch:true,userAgent:IPHONE_UA},
  ipad:{viewport:{width:1376,height:958},deviceScaleFactor:2,isMobile:true,hasTouch:true,userAgent:IPAD_UA},
};
const HOME='https://www.misterglass.nl/', SHOP='https://www.misterglass.nl/winkel/', PROD='https://www.misterglass.nl/product/isolatieglas-hr-1-0/';
async function prep(p,url){
  await p.goto(url,{waitUntil:'domcontentloaded',timeout:60000});
  await p.waitForTimeout(3500);
  for (const t of ['Alles accepteren','Accepteren','Accept all','Akkoord','Alle cookies toestaan','Toestaan']) { const el=await p.$(`text="${t}"`); if(el && await el.isVisible()){await el.click().catch(()=>{}); break;} }
  await p.addStyleTag({content:HIDE});
  // lazy images: scroll through
  await p.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=400){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}window.scrollTo(0,0);});
  await p.waitForTimeout(1200);
}
async function configure(p){
  await p.selectOption('#spouwbreedte',{index:5}).catch(e=>console.log('sel1',e.message)); await p.waitForTimeout(700);
  await p.selectOption('#kader',{index:1}).catch(e=>console.log('sel2',e.message)); await p.waitForTimeout(700);
  await p.selectOption('#spouwverdeling',{index:1}).catch(e=>console.log('sel3',e.message)); await p.waitForTimeout(1200);
  await p.fill('#pewc_group_302_303','1200'); await p.fill('#pewc_group_302_1788','850');
  await p.press('#pewc_group_302_1788','Tab'); await p.waitForTimeout(2000);
  await p.evaluate(()=>document.activeElement&&document.activeElement.blur()); await p.waitForTimeout(400);
}
async function scrollTo(p,sel,offset){
  const y=await p.evaluate(([s,o])=>{const e=document.querySelector(s);return e?e.getBoundingClientRect().top+scrollY-o:0;},[sel,offset]);
  await p.evaluate((y)=>window.scrollTo(0,y),Math.max(0,y)); await p.waitForTimeout(900); return y;
}
async function rects(p,sels){return p.evaluate((sels)=>{const o={};for(const [k,s] of Object.entries(sels)){const e=document.querySelector(s);if(e){const r=e.getBoundingClientRect();o[k]=[r.left,r.top+scrollY,r.width,r.height];}}return o;},sels);}
(async()=>{
  const b=await chromium.launch();
  const meta={};
  for (const [prof,cfg] of Object.entries(PROFILES)){
    const ctx=await b.newContext(cfg); const p=await ctx.newPage();
    // home
    await prep(p,HOME);
    await p.screenshot({path:`${OUT}/${prof}-home.png`});
    if(prof==='web'||prof==='iphone'){ await p.screenshot({path:`${OUT}/${prof}-home-full.png`,fullPage:true}); meta[prof+'-home']=await rects(p,{logo:'header img, .elementor-widget-theme-site-logo img, .site-logo img'}); }
    // shop
    await prep(p,SHOP);
    if(prof==='iphone'){ await scrollTo(p,'ul.products, .products, .elementor-loop-container',70); }
    await p.screenshot({path:`${OUT}/${prof}-shop.png`});
    if(prof==='web'){ await p.screenshot({path:`${OUT}/${prof}-shop-full.png`,fullPage:true}); }
    // product
    await prep(p,PROD);
    await p.screenshot({path:`${OUT}/${prof}-product.png`});
    await configure(p);
    await scrollTo(p,'form.variations_form', prof==='iphone'?40:(prof==='web'?300:260));
    await p.screenshot({path:`${OUT}/${prof}-config.png`});
    if(prof==='web'||prof==='iphone'){
      await p.evaluate(()=>window.scrollTo(0,0)); await p.waitForTimeout(500);
      await p.screenshot({path:`${OUT}/${prof}-product-full.png`,fullPage:true});
      meta[prof+'-product']=await rects(p,{form:'form.variations_form',totals:'.pewc-total-field-wrapper',cart:'button.single_add_to_cart_button',qty:'.quantity',title:'h1',price:'.woocommerce-variation-price, .price'});
    }
    await ctx.close(); console.log('done',prof);
  }
  // logo svg/img url
  {
    const ctx=await b.newContext(PROFILES.web); const p=await ctx.newPage(); await prep(p,HOME);
    meta.logos=await p.evaluate(()=>[...document.querySelectorAll('header img, header svg, img[src*=logo]')].slice(0,8).map(e=>({tag:e.tagName,src:e.currentSrc||e.src||'',w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height,html:e.tagName==='svg'?e.outerHTML.slice(0,3000):''})));
    await ctx.close();
  }
  fs.writeFileSync(`${OUT}/meta.json`,JSON.stringify(meta,null,1));
  await b.close();
})();
