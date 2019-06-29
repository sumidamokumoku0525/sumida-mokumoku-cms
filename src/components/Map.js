import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';

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

  render() {
    const { viewport } = this.state;
    return (
      <div>
        <pre id='info'></pre>
        <ReactMapGL
          ref={(reactMap) => this.reactMap = reactMap} 
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
          onClick={this._onClick}
          {...this.state.viewport}
        />
      </div>
    );
  }
}

export default Map;
