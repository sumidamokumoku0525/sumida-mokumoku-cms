import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';

const TEST_DATA = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.81407165527344,
          35.698013436605756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.80566024780273,
          35.717806751895715
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.82196807861328,
          35.71920046208453
        ]
      }
    }
  ]
}


class Map extends Component {
  constructor(props) {
    super(props);
     this.state = {
      viewport: {
        width: '100vw',
          height: '100vh',
          latitude: 35.710332,
          longitude: 139.8132971,
          zoom: 13
      }
    };
  }

  componentDidMount() {
    console.log(process.env.MAPBOX_ACCESS_TOKEN);
    const map =  this.reactMap.getMap();
    console.log(map);
     map.on('load', () => {
      //add the GeoJSON layer here
      map.addLayer({
        id: "locations",
        type: "symbol",
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: "geojson",
          data: TEST_DATA
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
    this.map.remove()
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
