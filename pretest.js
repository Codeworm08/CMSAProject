const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(1000000);
    var extractedText2121 = " "; var extractedText21212;
    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");



    await page.goto("https://www.facebook.com/");
    await page.setDefaultTimeout(1000000);

    await page.type('input[name=email]', '8240884229');

    await page.type('input[name=pass]', 'mega5ruby11');

    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    await page.goto('https://mbasic.facebook.com/home.php?ref_component=mbasic_home_header&ref_page=XMenuController');
    await page.waitForTimeout(3000);

    await page.evaluate(() => {
        document.querySelector('#header > nav > a.bh.bf.bg').click();
    }); await page.waitForTimeout(5000);
    const url = await page.url();
    const extractedText1 = await page.$eval('*', (el) => el.innerText);

    fs.writeFile('testo.txt', extractedText1, err => {
        if (err) {
            console.error(err)
            return
        }
    });
    await page.evaluate(() => {
        document.querySelector('#structured_composer_async_container > div:nth-child(6) > a > span').click();
    });
    await page.waitForTimeout(5000);
    const extractedText2 = await page.$eval('*', (el) => el.innerText);

    fs.writeFile('testo.txt', extractedText2, err => {
        if (err) {
            console.error(err)
            return
        }
    });
    await page.evaluate(() => {
        document.querySelector('#m_top_blue_bar_header > nav > a:nth-child(2)').click();
    });
    await page.waitForTimeout(5000);
    await page.click("span[class='_41nk']"); await page.waitForTimeout(5000); await page.evaluate(() => {
        let r = document.querySelectorAll(' a > div');
        r[r.length - 1].click();
    }); await page.waitForTimeout(5000);
    /*await page.evaluate(() => {
      let r=document.querySelectorAll(' a.z');
    r[r.length-1].click();
    });*/
    /*await page.click('img[src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/p_-PTXnrxIv.png"]');
    await page.waitForTimeout(5000);
    console.log("heart");
    const extractedText21 = await page.$eval('*', (el) => el.innerText);
        console.log(extractedText21);*/
    await page.goBack();
    await page.goBack();


    await page.waitForTimeout(5000); let reacts = new Map();

    const elHandleArray = await page.$x('//a[text()="Full Story"]');

    for (var i = 0; i < elHandleArray.length; i++) {
        const elem = elHandleArray[i];
        const href = await page.evaluate(e => e.href, elem);
        const npage = await browser.newPage();
        await npage.goto(href); await npage.waitForTimeout(5000);
        await npage.evaluate(() => {
            let r = document.querySelectorAll(' a > div');
            if (r.length == 1)
                r[0].click();
            else
                r[1].click();
        });


        await npage.waitForTimeout(5000);
        const f = await npage.evaluate(() => {
            let single = document.querySelector('h3.bi > a');
            let dropDown = Array.from(document.querySelectorAll('h3.bj > a'));
            const v = [""];
            if (single) {
                var singler = single.innerText; v.push(singler);


            } else {
                for (var i = 0; i < dropDown.length; i++) {
                    var droper = dropDown[i].innerText; v.push(droper);

                }
            } return v;
        });

        await npage.waitForTimeout(5000);
        for (var k = 0; k < f.length; k++) {

            if (reacts.has(f[k])) {
                var n = reacts.get(f[k]) + 1;
                reacts.set(f[k], n);
            }
            else
                reacts.set(f[k], 1);

        }

        extractedText21212 = " " + extractedText1 + " " + extractedText2;
        fs.writeFile('testo.txt', extractedText21212, err => {
            if (err) {
                console.error(err)
                return
            }
        });
        let loop = (await npage.$('#root > table > tbody > tr > td > div > ul > li:nth-child(11) > table > tbody > tr > td > div > a > span')) || "";

        while (loop != "") {

            await npage.evaluate(() => {
                document.querySelector('#root > table > tbody > tr > td > div > ul > li:nth-child(11) > table > tbody > tr > td > div > a > span').click();

            }); await npage.waitForTimeout(5000);
            const extractedText212 = await npage.$eval('*', (el) => el.innerText);
            console.log(extractedText212);

            loop = (await npage.$('#root > table > tbody > tr > td > div > ul > li:nth-child(11) > table > tbody > tr > td > div > a > span')) || "";

        } await npage.waitForTimeout(5000);
        await npage.close();
    }

    /* await page.evaluate(() => {
         document.querySelector('#m-timeline-cover-section > div.cp.e.fcg > a:nth-child(6)').click();
     }); await page.waitForNavigation();
 
     await page.evaluate(() => {
         document.querySelector('#root > table > tbody > tr > td > div.bj.bk > div > div > div:nth-child(2) > table > tbody > tr > td.u.bw.bx > h3 > a').click();
     }); await page.waitForNavigation();
 
     await page.evaluate(() => {
         document.querySelector('#root > table > tbody > tr > td > article > div > div.bm.bk.bn.bo > section > ul > li:nth-child(8) > a').click();
     }); await page.waitForNavigation();
 
     await page.evaluate(() => {
         document.querySelector('#year_2021 > a').click();
     }); await page.waitForNavigation();
 
     const fr = await page.evaluate(() => {
 
         let dropDown = Array.from(document.querySelectorAll(' h4.cs.br.bb.ct > span'));
         const v = [""];
         for (var i = 0; i < dropDown.length; i++) {
             var droper = dropDown[i].innerText; v.push(droper);
 
         }
         return v;
     });
     for (var g = 0; g < fr.length; g++) { extractedText21212 = extractedText21212 + " " + fr[g] + " "; }
     */
    console.log(extractedText21212);

    const w = ["Siddhant", "Discovery Channel", "Nat Geo Wild", "Love", "desmos", "Swagatam"];
    let wild = new Map();

    let Occupation = new Map();
    Occupation.set("w", 0);
    Occupation.set("others", 0);
    for (var i = 0; i < w.length; i++) {
        wild.set(w[i], 0);
    }

    let x = (extractedText21212.replace(/\n/g, " ")).replace(/\t/g, " ").split(" "); console.log(x);
    for (var i = 0; i < x.length; i++) {

        if (wild.has(x[i].trim())) {
            var n = wild.get(x[i]) + 1;
            wild.set(x[i], n);
            var c = Occupation.get("w") + 1;
            Occupation.set("w", c);
        }
    }
    for (var i = 0; i < w.length; i++) {
        console.log(wild.get(w[i]));
    }
    var maxValue = Math.max(...Occupation.values());
    for (let [key, value] of wild) {

        if (wild[value] == maxValue) {
            console.log(wild[key]);
        }
    }

    var keys = [];
    reacts.forEach((value, key) => {
        keys.push(key);
    }); keys.sort((a, b) => a - b);
    keys.forEach((key) => {

        console.log(key + " " + reacts.get(key));
    });


})();