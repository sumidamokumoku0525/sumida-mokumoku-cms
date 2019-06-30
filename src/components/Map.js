import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';
import MAP_ATTRIBUTE from '../constants/map'

class Map extends Component {
  constructor(props) {
    super(props);
     this.state = {
      viewport: MAP_ATTRIBUTE.viewport
    };
  }

  render() {
    return (
      <div>
        <ReactMapGL
          ref={(reactMap) => this.reactMap = reactMap}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
          onClick={this.onClick}
          {...this.state.viewport}
        >
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
