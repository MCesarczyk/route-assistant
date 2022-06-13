import { MapContainer, TileLayer } from "react-leaflet";
import { RouteProps } from "../../common/interfaces";
import RouteMarkers from "./RouteMarkers";
import RoutingMachine from "./RoutingMachine";

const MapComponent = ({ origin, destination }: RouteProps) => {
  return (
    <MapContainer
      style={{ color: 'black', width: '100%', paddingTop: '50%' }}
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={[33.5024, 36.2988]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {origin && destination &&
        <>
          <RoutingMachine
            origin={origin}
            destination={destination}
          />
          <RouteMarkers
            origin={origin}
            destination={destination}
          />
        </>
      }
    </MapContainer>
  );
};

export default MapComponent;
