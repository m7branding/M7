const { chromium } = require('playwright');
const OUT=process.argv[2];
const HIDE=`#CybotCookiebotDialog,.cmplz-cookiebanner,#cookie-notice,.cky-consent-container,iframe[title*="chat" i],.grecaptcha-badge,#wpadminbar{display:none!important}
html::-webkit-scrollbar,body::-webkit-scrollbar{display:none!important}`;
async function setup(p){
  await p.goto('https://www.misterglass.nl/product/isolatieglas-hr-1-0/',{waitUntil:'domcontentloaded',timeout:60000});
  await p.waitForTimeout(4000);
  for (const t of ['Alles accepteren','Accepteren','Accept all','Akkoord','Alle cookies toestaan','Toestaan']) { const el=await p.$(`text="${t}"`); if(el && await el.isVisible()){await el.click().catch(()=>{}); break;} }
  await p.addStyleTag({content:HIDE});
  await p.waitForTimeout(800);
  await p.selectOption('#spouwbreedte',{index:5}).catch(e=>console.log('sel1',e.message));
  await p.waitForTimeout(800);
  await p.selectOption('#kader',{index:1}).catch(e=>console.log('sel2',e.message));
  await p.waitForTimeout(800);
  await p.selectOption('#spouwverdeling',{index:1}).catch(e=>console.log('sel3',e.message));
  await p.waitForTimeout(1500);
  await p.fill('#pewc_group_302_303','1200'); await p.waitForTimeout(300);
  await p.fill('#pewc_group_302_1788','850'); await p.waitForTimeout(300);
  await p.press('#pewc_group_302_1788','Tab');
  await p.waitForTimeout(2500);
}
(async()=>{
  const b=await chromium.launch();
  // desktop
  {
    const ctx=await b.newContext({viewport:{width:1440,height:900},deviceScaleFactor:2});
    const p=await ctx.newPage(); await setup(p);
    const info=await p.evaluate(()=>{const f=document.querySelector('form.variations_form');const r=f.getBoundingClientRect();
      const tot=[...document.querySelectorAll('.pewc-total-field-wrapper, #pewc-grand-total, .pewc-total-field, .woocommerce-variation-price, .price')].map(e=>[e.className,e.innerText.slice(0,80)]);
      return {top:r.top+scrollY,left:r.left,w:r.width,h:r.height,tot};});
    console.log(JSON.stringify(info));
    await p.evaluate((y)=>window.scrollTo(0,y), Math.max(0,info.top-300)); await p.waitForTimeout(1200);
    await p.screenshot({path:OUT+'/config-desktop-view.png'});
    await p.evaluate((y)=>window.scrollTo(0,y), Math.max(0,info.top-80)); await p.waitForTimeout(1200);
    await p.screenshot({path:OUT+'/config-desktop-view2.png'});
    await p.screenshot({path:OUT+'/config-desktop-full.png',fullPage:true});
    await ctx.close();
  }
  // mobile
  {
    const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true,userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1'});
    const p=await ctx.newPage(); await setup(p);
    const info=await p.evaluate(()=>{const f=document.querySelector('form.variations_form');const r=f.getBoundingClientRect();return {top:r.top+scrollY,h:r.height};});
    console.log(JSON.stringify(info));
    await p.evaluate((y)=>window.scrollTo(0,y), Math.max(0,info.top-40)); await p.waitForTimeout(1200);
    await p.screenshot({path:OUT+'/config-mobile-view.png'});
    await p.evaluate((y)=>window.scrollTo(0,y), Math.max(0,info.top+500)); await p.waitForTimeout(1200);
    await p.screenshot({path:OUT+'/config-mobile-view2.png'});
    await ctx.close();
  }
  await b.close();
})();
