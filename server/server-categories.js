const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

app.get('/scrape-categories', (req, res) => {
  
  const url = 'https://martinique.123-click.com/store/frais';
  
  axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);
  
        const categories = []
  
        $('div.productInList', response.data).each(function() {
        const nomcat = $(this).find('p.subtitle-item').text()
        // const url = $(this).find('a').attr('href')
        // const prix = $(this).find('p.price-full').text()
        // const prixspecial = $(this).find('p.price-special').text()
        const img = $(this).find('div.category-image').find('img').attr('data-src')
        // const quantite = $(this).find('div.desc-small-text').text()
        // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
        // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
        // const nutriscore = $(this).find('div.picto-vignette-holder').find('img').attr('src')
        categories.push({
            nomcat,
            // prix,
            // prixspecial,
            // quantite,
            // quantite2,
            // prixunite,
            img,
            // nutriscore,
            // url,
        })
      })
      console.log('categories from server:', categories)
      res.header('Access-Control-Allow-Origin', '*');
      res.send(categories);
   }).catch(error => {
      console.log(error);
      res.send(error);
    });
  });
  
  app.listen(3020, () => console.log('Server Categories running on port 3020'));