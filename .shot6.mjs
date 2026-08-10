import { chromium } from 'playwright';
const dir = '/tmp/claude-0/-home-user-M7/3bab3adc-3a5b-54b7-b02f-03e50b91b1fe/scratchpad';
const B = 'http://localhost:3121';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
p.on('pageerror', e => console.log('PAGEERROR', e.message));

// deep link
await p.goto(B + '/?stap=hosting', { waitUntil: 'networkidle' });
await p.waitForTimeout(2500);
console.log('deeplink ->', await p.locator('.exp-eyebrow').first().innerText());
await p.screenshot({ path: dir + '/host-a.png' });

// platform toggle: WooCommerce
await p.locator('.exp-seg button, .exp-opt-chip', { hasText: 'WordPress + WooCommerce' }).first().click();
await p.waitForTimeout(900);
await p.evaluate(() => document.querySelector('.exp-group.is-plans')?.scrollIntoView({ block: 'center' }));
await p.waitForTimeout(700);
await p.screenshot({ path: dir + '/host-woo.png' });
console.log('woo plans:', await p.locator('.exp-plan-track .exp-card h3').allInnerTexts());

// App
await p.locator('.exp-seg button, .exp-opt-chip', { hasText: /^App$/ }).first().click();
await p.waitForTimeout(900);
console.log('app plans:', await p.locator('.exp-plan-track .exp-card h3').allInnerTexts());
await p.evaluate(() => document.querySelector('.exp-group.is-plans')?.scrollIntoView({ block: 'center' }));
await p.waitForTimeout(600);
await p.screenshot({ path: dir + '/host-app.png' });

// url na tabwissel
await p.locator('.exp-tabs button, .exp-tab', { hasText: /Tracking/i }).first().click();
await p.waitForTimeout(1400);
console.log('url na tracking-tab:', await p.evaluate(() => location.search));
await p.screenshot({ path: dir + '/trk3.png' });

// tools
await p.goto(B + '/?scherm=tools', { waitUntil: 'networkidle' });
await p.waitForTimeout(2000);
await p.screenshot({ path: dir + '/tools.png' });
await p.locator('.exp-tool-chip').nth(3).click();
await p.waitForTimeout(800);
await p.screenshot({ path: dir + '/tool-modal.png' });
await b.close();
