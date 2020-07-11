const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/', (req, res) => {
    res.redirect('/scrape');
});

router.post('/scrape', (req, res) => {
    console.log(req.body);
});

router.get('/scrape', async (req, res) => {


    var arr = [];

    console.log('request received');
    let i = await axios.get('https://www.destructoid.com/')
        .then(html => {

            let $ = cheerio.load(html.data);
            let reviews = $('.lr-item h2 a');

            reviews.each((i, el) => {
                let text = $(el).text();
                let link = $(el).attr('href');
                link = `https://destructoid.com/${link}`;

                let article = {};
                article.text = text;
                article.link = link;
                article.id = i;

                arr.push(article);
            });
        });
    res.render('index', { articles: arr });
});


module.exports = router;

