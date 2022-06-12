import { MapContainer, TileLayer } from "react-leaflet";
import { RouteProps } from "../../common/interfaces";
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
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      {origin && destination &&
        <RoutingMachine
          origin={origin}
          destination={destination}
        />
      }
    </MapContainer>
  );
};

export default MapComponent;
