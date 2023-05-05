const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

app.get('/scrape', (req, res) => {
  const url = 'https://martinique.123-click.com/store/frais';
  
  axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);
  
        const articles = []
  
        $('div.productInList', response.data).each(function() {
        const nom = $(this).find('a').attr('title')
        const url = $(this).find('a').attr('href')
        const prix = $(this).find('p.price-full').text()
        const img = $(this).find('img.owl-lazy').attr('data-src')
        const quantite = $(this).find('div.desc-small-text').text()
        const quantite2 = $(this).find('div.poids-suffixe-holder').text()
        const prixunite = $(this).find('div.unity-price').text()
        const nutriscore = $(this).find('div.picto-vignette-holder').find('img').attr('src')
        articles.push({
            nom,
            prix,
            quantite,
            quantite2,
             // prixunite,
             img,
            nutriscore,
            url,
        })
      })
      console.log(articles)
      res.send(articles);
   }).catch(error => {
      console.log(error);
      res.send(error);
    });
  });
  
  app.listen(3001, () => console.log('Server running on port 3001'));