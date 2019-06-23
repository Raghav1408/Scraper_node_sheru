const request = require('request');
const cheerio = require('cheerio')
var out = []

request('https://en.wikipedia.org/wiki/List_of_Prime_Ministers_of_India_by_longevity', (err, resp, html) => {
  if(!err){
    const $ = cheerio.load(html);
    $('table').first().find('td:nth-child(2)').each((i,elem) => {
      out.push(($(this).find('a').text()))
    })
    console.log(out)
  }
  else {
    console.log(err)
  }
});
