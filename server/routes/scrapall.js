const express = require("express")
const router = express.Router()

const cheerio = require('cheerio');
const axios = require('axios');

const cors = require("cors");

router.use(cors());
router.options('*', cors())

router.get('/', (req, res) => {

    res.send('All Scraps Overview working')
})

router.get('/scrapecategories', (req, res) => {


  const url = 'https://martinique.123-click.com/store/frais';

  // axios.get(url)
  axios.get(url, {
  headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  },
  })
  .then(response => {
      const $ = cheerio.load(response.data);

      const categories = []

      $('a.category-item', response.data).each(function() {
      const nomcat = $(this).find('div.category-infos').find('p.subtitle-item').text()
      const img = $(this).find('div.category-image').find('img').attr('src')
      categories.push({
        nomcat,
        img,
      })
      })
      console.log('categories from server:', categories)
      // res.header('Access-Control-Allow-Origin', '*');
      res.send(categories);
      // res.send('Hello, world!');
  }).catch(error => {
      console.log(error);
      res.send(error);
  });
  });

router.get('/scrapeboissons', (req, res) => {


    const url = 'https://martinique.123-click.com/store/boissons';

  // axios.get(url)
  axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    },
  })
    .then(response => {
        const $ = cheerio.load(response.data);

        const boissons = []

        $('div.productInList', response.data).each(function() {
        const nom = $(this).find('a').attr('title')
        const url = $(this).find('a').attr('href')
        const prix = $(this).find('p.price-full').text()
        const prixspecial = $(this).find('p.price-special').text()
        const img = $(this).find('img.owl-lazy').attr('data-src')
        const quantite = $(this).find('div.desc-small-text').text()
        // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
        const quantite2 = $(this).find('div.poids-suffixe-holder').text().replace(/\n|\t| /g, '');
        // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
        const prixunite = $(this).find('div.unity-price').text().replace(/\n|\t| /g, '');
        const nutriscore = $(this).find('div.picto-item').find('img').attr('src')
        const web = 'https://martinique.123-click.com'
        const nutrifull = web.concat(nutriscore)
        boissons.push({
            nom,
            prix,
            prixspecial,
            quantite,
            quantite2,
            prixunite,
            img,
            nutrifull,
            nutriscore,
            url,
        })
      })
      console.log('boissons from server:', boissons)
      // res.header('Access-Control-Allow-Origin', '*');
      res.send(boissons);
      // res.send('Hello, world!');
   }).catch(error => {
      console.log(error);
      res.send(error);
    });
  });


router.get('/scrapedairy', (req, res) => {


const url = 'https://martinique.123-click.com/store/frais';

// axios.get(url)
axios.get(url, {
headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
},
})
.then(response => {
    const $ = cheerio.load(response.data);

    const articles = []

    $('div.product-list-affichage-mobile', response.data).each(function() {
    const nom = $(this).find('a').attr('title')
    const url = $(this).find('a').attr('href')
    const prix = $(this).find('p.price-full').text()
    const prixspecial = $(this).find('p.price-special').text()
    const img = $(this).find('img.owl-lazy').attr('data-src')
    const quantite = $(this).find('div.desc-small-text').text()
    // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
    const quantite2 = $(this).find('div.poids-suffixe-holder').text().replace(/\n|\t| /g, '');
    // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
    const prixunite = $(this).find('div.unity-price').text().replace(/\n|\t| /g, '');
    const nutriscore = $(this).find('div.picto-item').find('img').attr('src')
    const web = 'https://martinique.123-click.com'
    const nutrifull = web.concat(nutriscore)
    articles.push({
        nom,
        prix,
        prixspecial,
        quantite,
        quantite2,
        prixunite,
        img,
        nutrifull,
        nutriscore,
        url,
    })


    })
    let uniqueArticles = [...new Set(articles)]
    // let uniqueArticles = [];
    // articles.forEach((element) => {
    //     if (!uniqueArticles.includes(element)) {
    //         uniqueArticles.push(element);
    //     }
    // });

    console.log('articles from server:', uniqueArticles)
    // res.header('Access-Control-Allow-Origin', '*');
    res.send(uniqueArticles);
    // res.send('Hello, world!');
}).catch(error => {
    console.log(error);
    res.send(error);
});
});

router.get('/scrapeentretien', (req, res) => {


  const url = 'https://martinique.123-click.com/store//entretien-nettoyage';

// axios.get(url)
axios.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  },
})
  .then(response => {
      const $ = cheerio.load(response.data);

      const entretien = []

      $('div.product-list-affichage-mobile', response.data).each(function() {
      const nom = $(this).find('a').attr('title')
      const url = $(this).find('a').attr('href')
      const prix = $(this).find('p.price-full').text()
      const prixspecial = $(this).find('p.price-special').text()
      const img = $(this).find('img.owl-lazy').attr('data-src')
      const quantite = $(this).find('div.desc-small-text').text()
      // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
      const quantite2 = $(this).find('div.poids-suffixe-holder').text().replace(/\n|\t| /g, '');
      // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
      const prixunite = $(this).find('div.unity-price').text().replace(/\n|\t| /g, '');
      const nutriscore = $(this).find('div.picto-item').find('img').attr('src')
      const web = 'https://martinique.123-click.com'
      const nutrifull = web.concat(nutriscore)
      entretien.push({
          nom,
          prix,
          prixspecial,
          quantite,
          quantite2,
          prixunite,
          img,
          nutrifull,
          nutriscore,
          url,
      })
    })
    let uniqueEntretien = [...new Set(entretien)]
    console.log('entretien from server:', uniqueEntretien)
    // res.header('Access-Control-Allow-Origin', '*');
    res.send(uniqueEntretien);
    // res.send('Hello, world!');
 }).catch(error => {
    console.log(error);
    res.send(error);
  });
});

router.get('/scrapefruitslegumes', (req, res) => {


  const url = 'https://martinique.123-click.com/store/fruits-legumes';

  // axios.get(url)
  axios.get(url, {
  headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  },
  })
  .then(response => {
      const $ = cheerio.load(response.data);

      const fruitslegumes = []

      $('div.productInList', response.data).each(function() {
      const nom = $(this).find('a').attr('title')
      const url = $(this).find('a').attr('href')
      const prix = $(this).find('p.price-full').text()
      const prixspecial = $(this).find('p.price-special').text()
      const img = $(this).find('img.owl-lazy').attr('data-src')
      const quantite = $(this).find('div.desc-small-text').text()
      // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
      const quantite2 = $(this).find('div.poids-suffixe-holder').text().replace(/\n|\t| /g, '');
      // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
      const prixunite = $(this).find('div.unity-price').text().replace(/\n|\t| /g, '');
      const nutriscore = $(this).find('div.picto-item').find('img').attr('src')
      const web = 'https://martinique.123-click.com'
      const nutrifull = web.concat(nutriscore)
      fruitslegumes.push({
          nom,
          prix,
          prixspecial,
          quantite,
          quantite2,
          prixunite,
          img,
          nutrifull,
          nutriscore,
          url,
      })
      })
      console.log('articles from server:', fruitslegumes)
      // res.header('Access-Control-Allow-Origin', '*');
      res.send(fruitslegumes);
      // res.send('Hello, world!');
  }).catch(error => {
      console.log(error);
      res.send(error);
  });
  });

  router.get('/scrapesurgeles', (req, res) => {


    const url = 'https://martinique.123-click.com/store/surgeles';

    // axios.get(url)
    axios.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    },
    })
    .then(response => {
        const $ = cheerio.load(response.data);

        const surgeles = []

        $('div.productInList', response.data).each(function() {
        const nom = $(this).find('a').attr('title')
        const url = $(this).find('a').attr('href')
        const prix = $(this).find('p.price-full').text()
        const prixspecial = $(this).find('p.price-special').text()
        const img = $(this).find('img.owl-lazy').attr('data-src')
        const quantite = $(this).find('div.desc-small-text').text()
        // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
        const quantite2 = $(this).find('div.poids-suffixe-holder').text().replace(/\n|\t| /g, '');
        // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
        const prixunite = $(this).find('div.unity-price').text().replace(/\n|\t| /g, '');
        const nutriscore = $(this).find('div.picto-item').find('img').attr('src')
        const web = 'https://martinique.123-click.com'
        const nutrifull = web.concat(nutriscore)
        surgeles.push({
            nom,
            prix,
            prixspecial,
            quantite,
            quantite2,
            prixunite,
            img,
            nutrifull,
            nutriscore,
            url,
        })
        })
        console.log('articles from server:', surgeles)
        // res.header('Access-Control-Allow-Origin', '*');
        res.send(surgeles);
        // res.send('Hello, world!');
    }).catch(error => {
        console.log(error);
        res.send(error);
    });
    });

    router.get('/scrapeviandespoissons', (req, res) => {


      const url = 'https://martinique.123-click.com/store/viandes-poissons';

      // axios.get(url)
      axios.get(url, {
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
      })
      .then(response => {
          const $ = cheerio.load(response.data);

          const viandespoissons = []

          $('div.productInList', response.data).each(function() {
          const nom = $(this).find('a').attr('title')
          const url = $(this).find('a').attr('href')
          const prix = $(this).find('p.price-full').text()
          const prixspecial = $(this).find('p.price-special').text()
          const img = $(this).find('img.owl-lazy').attr('data-src')
          const quantite = $(this).find('div.desc-small-text').text()
          // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
          const quantite2 = $(this).find('div.poids-suffixe-holder').text().replace(/\n|\t| /g, '');
          // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
          const prixunite = $(this).find('div.unity-price').text().replace(/\n|\t| /g, '');
          const nutriscore = $(this).find('div.picto-item').find('img').attr('src')
          const web = 'https://martinique.123-click.com'
          const nutrifull = web.concat(nutriscore)
          viandespoissons.push({
              nom,
              prix,
              prixspecial,
              quantite,
              quantite2,
              prixunite,
              img,
              nutrifull,
              nutriscore,
              url,
          })
          })
          console.log('articles from server:', viandespoissons)
          // res.header('Access-Control-Allow-Origin', '*');
          res.send(viandespoissons);
          // res.send('Hello, world!');
      }).catch(error => {
          console.log(error);
          res.send(error);
      });
      });


module.exports = router