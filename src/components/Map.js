import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';

const CENTER_POSITION = {
    lat: 139.8132971,
    lng: 35.710332
};

const BASE_URL = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9';

class Map extends Component {
  state = {
      viewport: {
          width: '100vw',
          height: '100vh',
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 13
      }
  };

  render() {
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
            onViewportChange={(viewport) => this.setState({viewport})}
            {...this.state.viewport}
        />
    );
  }
}

export default Map;


/**
class Map extends Component {
  componentDidMount = async () => {
    const style = await fetch(`${BASE_URL}?access_token=${mapboxgl.accessToken}`).then(res => res.json())

    this.map = new mapboxgl.Map({
      container: this.container,
      style,
      center: [CENTER_POSITION.lng, CENTER_POSITION.lat],
      zoom: 12
    });

    await this.map.on('load', () => {
      this.map.addLayer({
        id: "locations",
        type: "symbol",
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: "geojson",
          data: './test.json'
        },
        layout: {
          "icon-image": "star-15",
          "icon-allow-overlap": true,
          "icon-size": 1.00
        }
      });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className={'map'} ref={e => (this.container = e)}>
      <style jsx>{`
        .map {
          width: '100vw';
          height: '100vh';
        }
      `}</style>
      </div>
    );
  }
}

export default Map
*/