const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const UA='Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';
const OUT=process.argv[2];
async function shot(b,u,ctxo,file,full){const c=await b.newContext(ctxo);const p=await c.newPage();
 try{await p.goto(u,{waitUntil:'networkidle',timeout:45000});}catch(e){}
 await p.waitForTimeout(2500);
 await p.addStyleTag({content:'html::-webkit-scrollbar,body::-webkit-scrollbar{display:none!important}'});
 await p.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=300){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}window.scrollTo(0,0);});
 await p.waitForTimeout(1200);
 await p.screenshot({path:OUT+'/'+file,fullPage:!!full}); await c.close();}
(async()=>{const b=await chromium.launch();
 const mob={viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true,userAgent:UA};
 await shot(b,'https://tools.steddion.com/',mob,'hero-mobile.png',false);
 await shot(b,'https://tools.steddion.com/emsvergelijker',{...mob,deviceScaleFactor:2},'full-mobile.png',true);
 await shot(b,'https://tools.steddion.com/',{viewport:{width:1440,height:900},deviceScaleFactor:1},'full-desktop.png',true);
 await b.close();})();
