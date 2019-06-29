import Map from './Map';

class pointMap extends Map {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const map =  await this.reactMap.getMap();
    await map.on('load', () => {
      //add the GeoJSON layer here
      map.addLayer({
        id: "locations",
        type: "symbol",
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: "geojson",
          data: JSON.parse(this.props.data)
        },
        layout: {
          // ここでアイコンの見た目を決めている模様
          "icon-image": "star-15",
          "icon-allow-overlap": true
        }
      })
    })
  }
}

export default pointMap;
