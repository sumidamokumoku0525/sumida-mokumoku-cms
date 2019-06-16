import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';
import * as contentful from 'contentful'
import { config } from '../config'

// contentful のクライアント
const client = contentful.createClient(config)

class Map extends Component {
  constructor(props) {
    super(props);
     this.state = {
      viewport: {
        width: '100vw',
          height: '100vh',
          latitude: 35.710332,
          longitude: 139.8132971,
          zoom: 15
      }
    };
  }

  async componentDidMount() {
    const map =  await this.reactMap.getMap();
    const entries = await client.getEntries({
      order: '-sys.createdAt',
      content_type: 'map',
      limit: 1,
    })
    const data = await entries.items[0].fields.data;
    await console.log(data);
    await map.on('load', () => {
      //add the GeoJSON layer here
      map.addLayer({
        id: "locations",
        type: "symbol",
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: "geojson",
          data: JSON.parse(data)
        },
        layout: {
          // ここでアイコンの見た目を決めている模様
          "icon-image": "star-15",
          "icon-allow-overlap": true
        }
      })
    })
  }

  componentWillUnmount() {
    this.reactMap.remove()
  }

  render() {
    const { viewport } = this.state;
    return (
        <ReactMapGL
          ref={(reactMap) => this.reactMap = reactMap} 
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
          {...this.state.viewport}
        />
    );
  }
}

export default Map;
