const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

app.get('/scrape', (req, res) => {
  const url = 'https://martinique.123-click.com/store/frais'; // Change this to the URL you want to scrape

  axios.get(url)
    .then(response => {
      const $ = cheerio.load(response.data);
      const title = $('title').text();
      const description = $('meta[name="description"]').attr('content');

      res.send({ title, description });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.listen(3001, () => console.log('Server running on port 3001'));
