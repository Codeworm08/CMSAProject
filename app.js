const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');
const fs = require('fs');
const { check, validationResult} = require('express-validator');

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })); // use qs library for parsing
app.use(express.static('public')); // set public as root directory from which to serve static files

//Get Requests
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/more', (req,res) => {
    res.render('webscmore')
});
app.get('/feed', (req, res) => {
    res.render('feedback');
});
app.get('/user', (req, res) => {
    res.render('user');
});
var loginValid = [ //validation array
    check('email','Please enter valid email address').isEmail()//validate email
];
//Post Requests
app.post('/user',loginValid, async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors:errors.array() });
    }
    else
    {
        const found = await detect(req.body.email, req.body.pass);// call scrapping code
        console.log(found);
        let total = 0;
        found.forEach( (x) => {
            total+=x;
        });
    
        var keys = [];
            found.forEach((value, key) => {
                keys.push(key);
            }); keys.sort((a, b) => a - b);// sort keys in descending order
        res.render('result',{sum: total, hits: found, sortkeys: keys});
    }
});

app.use((req, res) =>{
    res.status(404).render('404');//Middleware for invalid URL
});

async function detect(email, password) {
    

        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setDefaultTimeout(1000000);
        var extractedText2121 = " "; var extractedText21212;
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");



        await page.goto("https://www.facebook.com/");
        await page.setDefaultTimeout(1000000);

        await page.type('input[name=email]', email);

        await page.type('input[name=pass]', password);

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
                //console.log(extractedText212);

                loop = (await npage.$('#root > table > tbody > tr > td > div > ul > li:nth-child(11) > table > tbody > tr > td > div > a > span')) || "";

            } await npage.waitForTimeout(5000);
            await npage.close();
        }
    
    
        await browser.close();
    
        const w = ["anal","anus","areole","arian","arrse","arse","arsehole","aryan","asanchez","ass","assbang","assbanged","asses","assfuck","assfucker","assfukka","asshole","assmunch","asswhole","autoerotic","ballsack","bastard","bdsm","beastial","beastiality","bellend","bestial","bestiality","bimbo","bimbos","bitch","bitches","bitchin","bitching","blowjob","blowjobs","blue waffle","bondage","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","booty call","breasts","brown shower","brown showers","buceta","bukake","bukkake","bullshit","busty","butthole","carpet muncher","cawk","chink","cipa","clit","clitoris","clits","cnut","cock","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cokmuncher","coon","cowgirl","cowgirls","crap","crotch","cum","cuming","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlicker","cuntlicking","cunts","damn","deepthroat","dick","dickhead","dildo","dildos","dink","dinks","dlck","dog style","dog-fucker","doggiestyle","doggin","dogging","doggystyle","dong","donkeyribber","doofus","doosh","dopey","douche","douchebag","douchebags","douchey","drunk","duche","dumass","dumbass","dumbasses","dummy","dyke","dykes","eatadick","eathairpie","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","enlargement","erect","erection","erotic","erotism","essohbee","extacy","extasy","facial","fack","fag","fagg","fagged","fagging","faggit","faggitt","faggot","faggs","fagot","fagots","fags","faig","faigt","fanny","fannybandit","fannyflaps","fannyfucker","fanyy","fart","fartknocker","fat","fatass","fcuk","fcuker","fcuking","feck","fecker","felch","felcher","felching","fellate","fellatio","feltch","feltcher","femdom","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fingering","fisted","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","fisting","fisty","flange","flogthelog","floozy","foad","fondle","foobar","fook","fooker","footjob","foreskin","freex","frigg","frigga","fubar","fuck","fucka","fuckass","fuckbitch","fucked","fucker","fuckers","fuckface","fuckhead","fuckheads","fuckhole","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fuckmeat","fucknugget","fucknut","fuckoff","fuckpuppet","fucks","fucktard","fucktoy","fucktrophy","fuckup","fuckwad","fuckwhit","fuckwit","fuckyomama","fudgepacker","fuk","fuker","fukker","fukkin","fukking","fuks","fukwhit","fukwit","futanari","futanary","fux","fuxor","fxck","gae","gai","gangbang","gangbanged","gangbangs","ganja","gassyass","gay","gaylord","gays","gaysex","gey","gfy","ghay","ghey","gigolo","glans","goatse","god","godamn","godamnit","goddam","goddammit","goddamn","goddamned","gokkun","goldenshower","gonad","gonads","gook","gooks","gringo","gspot","gtfo","guido","hamflap","handjob","hardcoresex","hardon","hate","hebe","heeb","hell","hemp","hentai","heroin","herp","herpes","herpy","heshe","hitler","hiv","hoar","hoare","hobag","hoer","homey","homo","homoerotic","homoey","honky","hooch","hookah","hooker","hoor","hootch","hooter","hooters","hore","horniest","horny","hotsex","howtokill","howtomurdep","hump","humped","humping","hussy","hymen","inbred","incest","injun","jackass","jackhole","jackoff","jap","japs","jerk","jerked","jerkoff","jism","jiz","jizm","jizz","jizzed","junkie","junky","kawk","kike","kikes","kill","kinbaku","kinky","kinkyJesus","kkk","klan","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kooch","kooches","kootch","kraut","kum","kummer","kumming","kums","kunilingus","kwif","kyke","l3itch","labia","lech","len","leper","lesbians","lesbo","lesbos","lez","lezbian","lezbians","lezbo","lezbos","lezzie","lezzies","lezzy","lmao","lmfao","loin","loins","lube","lust","lusting","lusty","m-fucking","mafugly","mams","masochist","massa","masterb8","masterbate","masterbating","masterbation","masterbations","masturbate","masturbating","masturbation","maxi","menses","menstruate","menstruation","meth","milf","mofo","molest","moolie","moron","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","motherfuck","motherfucka","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","mtherfucker","mthrfucker","mthrfucking","muff","muffdiver","muffpuff","murder","mutha","muthafecker","muthafuckaz","muthafucker","muthafuckker","muther","mutherfucker","mutherfucking","muthrfucking","nad","nads","naked","napalm","nappy","nazi","nazism","needthedick","negro","nig","nigg","nigga","niggah","niggas","niggaz","nigger","niggers","niggle","niglet","nimrod","ninny","nipple","nipples","nob","nobhead","nobjocky","nobjokey","nooky","nude","nudes","numbnuts","nutbutter","nutsack","nympho","omg","opiate","opium","oral","orally","organ","orgasim","orgasims","orgasm","orgasmic","orgasms","orgies","orgy","ovary","ovum","ovums","paddy","paki","pantie","panties","panty","pastie","pasty","pawn","pcp","pecker","pedo","pedophile","pedophilia","pedophiliac","pee","peepee","penetrate","penetration","penial","penile","penis","penisfucker","perversion","peyote","phalli","phallic","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pillowbiter","pimp","pimpis","pinko","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","playboy","pms","polack","pollock","poon","poontang","poop","porn","porno","pornography","pornos","pot","potty","prick","pricks","prig","pron","prostitute","prude","pube","pubic","pubis","punkass","punky","puss","pusse","pussi","pussies","pussy","pussyfart","pussypalace","pussypounder","pussys","puto","queaf","queef","queer","queero","queers","quicky","quim","racy","rape","raped","raper","raping","rapist","raunch","rectal","rectum","rectus","reefer","reetard","reich","retard","retarded","revue","rimjaw","rimjob","rimming","ritard","rtard","rum","rump","rumprammer","ruski","sadism","sadist","sandbar","sausagequeen","scag","scantily","schizo","schlong","screw","screwed","screwing","scroat","scrog","scrot","scrote","scrotum","scrud","scum","seaman","seamen","seduce","semen","sex","sexual","shag","shagger","shaggin","shagging","shamedame","shemale","shibari","shibary","shit","shitdick","shite","shiteater","shited","shitey","shitface","shitfuck","shitfucker","shitfull","shithead","shithole","shithouse","shiting","shitings","shits","shitt","shitted","shitter","shitters","shitting","shittings","shitty","shiz","shota","sissy","skag","skank","slave","sleaze","sleazy","slope","slut","slutbucket","slutdumper","slutkiss","sluts","smegma","smut","smutty","snatch","sniper","snuff","sob","sodom","son-of-a-bitch","souse","soused","spac","sperm","spic","spick","spik","spiks","spooge","spunk","steamy","stfu","stiffy","stoned","strip","strip club","stripclub","stroke","stupid","suck","sucked","sucking","sumofabiatch","tampon","tard","tawdry","teabagging","teat","teets","teez","terd","teste","testee","testes","testical","testicle","testis","threesome","throating","thrust","thug","tinkle","tit","titfuck","titi","tits","titt","tittiefucker","titties","titty","tittyfuck","tittyfucker","tittywank","titwank","toke","toots","tosser","tramp","transsexual","trashy","tubgirl","turd","tush","twat","twathead","twats","twatty","twunt","twunter","ugly","undies","unwed","urinal","urine","uterus","uzi","vag","vagina","valium","viagra","vigra","virgin","vixen","vodka","vomit","voyeur","vulgar","vulva","wad","wang","wank","wanker","wanky","wazoo","wedgie","weed","weenie","weewee","weiner","weirdo","wench","wetback","whitey","whiz","whoar","whoralicious","whore","whorealicious","whored","whoreface","whorehopper","whorehouse","whores","whoring","wigger","willies","willy","womb","woody","woose","wop","wtf","x-rated2g1c","xx","xxx","yaoi","yury"];
        let hate = new Map();

        
        for (var i = 0; i < w.length; i++) {
            hate.set(w[i], 0);
        }

        let x = (extractedText21212.replace(/\n/g, " ")).replace(/\t/g, " ").split(" "); //console.log(x);
        for (var i = 0; i < x.length; i++) {

            if (hate.has(x[i].trim())) {
                var n = hate.get(x[i]) + 1;
                hate.set(x[i], n);
            }
        }
        for (var i = 0; i < w.length; i++) {
            //console.log(hate.get(w[i]));
        }
       
        var keys = [];
        reacts.forEach((value, key) => {
            keys.push(key);
        }); keys.sort((a, b) => a - b);
        
        return hate;
        

}
