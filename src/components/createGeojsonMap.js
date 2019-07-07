import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import MAP_ATTRIBUTE from '../constants/map'

class CreateGeojsonMap extends Component {
  constructor(props) {
    super(props);
     this.state = {
      viewport: MAP_ATTRIBUTE.viewport,
      points: [],
    };
  }

  onClick = (event) => {
    const { lng, lat } = event.lngLat
    var { points } = this.state;
    points = [...points, event.lngLat];
    this.setState({
      points: points
    });
  }

  render() {
    return (
      <div>
        <form id="points" method="POST" action="/map/create">
          {this.state.points.map( (point, i) => {
            return <input type="hidden" value={point} name="point" />
          })}
          <input type="submit" value="送信" />
        </form>
        <ul id="plotPoints">
          {this.state.points.map( (point, i) => {
            return <li>{`軽度: ${point[0]} 緯度: ${point[1]}`}</li>
          })}
        </ul>
        <ReactMapGL
          ref={(reactMap) => this.reactMap = reactMap}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
          onClick={this.onClick}
          {...this.state.viewport}
        >
          {this.state.points.map((point, i) => {
            console.log(point)
            return (
              <Marker latitude={point[1]} longitude={point[0]} offsetLeft={-20} offsetTop={-10}>
                <p>Point</p>
              </Marker>
            )
          })}
        </ReactMapGL>
      </div>
    );
  }
}

export default CreateGeojsonMap;
