const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://bikroy.com/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();