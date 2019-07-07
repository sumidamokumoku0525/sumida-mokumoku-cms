const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/post/:url_slug', (req, res) => {
      const actualPage = '/postitem'
      const queryParams = {url_slug: req.params.url_slug}
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/map', (req, res) => {
      app.render(req, res, '/map')
    })

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.post('/map/create', function(req, res) {
      console.log(req);
      res.send('POST is sended.');
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
