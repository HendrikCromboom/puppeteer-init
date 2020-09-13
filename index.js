const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        defaultViewport: null
    });
    const page = await browser.newPage();
    await page.goto('google.be');
    await page.click('button[name="action"]');
    await page.waitForNavigation();
    await Promise.all([
    await page.screenshot({path: 'example.png'})]);

})();