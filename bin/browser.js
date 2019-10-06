const puppeteer = require('puppeteer');

let browser;
let pages = [];

const lunchBrowser = async (openBrowser) => {
    browser = await puppeteer.launch({ headless: !openBrowser });
};

const openPage = async () => {
    const newPage = await browser.newPage();
    await newPage.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36');
    pages.push(newPage);

    return newPage;
};

const closeBrowser = async () => {
    for (let page of pages) {
        await page.close();
    }

    await browser.close();
};

module.exports = {
    lunchBrowser,
    closeBrowser,
    openPage
};