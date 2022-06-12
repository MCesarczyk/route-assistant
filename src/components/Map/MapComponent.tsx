import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "./RoutingMachine";

interface mapState {
  lat: number,
  lng: number,
  zoom: number,
  isMapInit: boolean
};

class MapComponent extends React.Component<any, mapState> {
  constructor() {
    //@ts-ignore
    super();
    this.state = {
      lat: 52.25,
      lng: 20.9,
      zoom: 10,
      isMapInit: false
    };
  }

  saveMap = (map: any) => {
    //@ts-ignore
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const { lat, lng, zoom } = this.state;
    const position: [any, any] = [lat, lng];

    return (
      <Map style={{ color: 'black', width: '100%', paddingTop: '50%' }} center={position} zoom={zoom} ref={this.saveMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.isMapInit &&
          <Routing
            origin={this.props.origin}
            destination={this.props.destination}
            /* @ts-ignore */
            map={this.map}
          />
        }
      </Map>
    );
  }
}

export default MapComponent;