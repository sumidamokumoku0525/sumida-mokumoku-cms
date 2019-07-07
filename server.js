const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const contentful = require('contentful-management')
const client = contentful.createClient({
  accessToken: process.env.CTF_CONTENT_MANAGEMENT_ACCESS_TOKEN
})
const bodyParser = require('body-parser');

const createGeojson = (points) => {
  let object = {'type': 'FeatureCollection'}
  const pointObjects = points.map(p => {
    const latlng = p.split(',').map(p => parseFloat(p))
    return {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'Point',
        'coordinates': latlng
      }
    };
  })
  object['features'] = pointObjects
  return object;
}

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({extended: true}));
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
      // Create entry
      console.log(req.body)
      const geojsonObject = createGeojson(req.body.point);
      client.getSpace(process.env.CTF_SPACE_ID)
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntry('map', {
          fields: {
            data: {
              'en-US': JSON.stringify(geojsonObject, null, 2)
            },
            type: {
              'en-US': ['symbol']
            },
            id: {
              'en-US': 1
            }
          }
        }))
        .then((entry) => console.log(entry))
        .catch(res.send(console.error))
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
