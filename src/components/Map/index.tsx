import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import { Position } from '../../interfaces';
import 'leaflet/dist/leaflet.css'

interface MapProps {
  origin?: Position | undefined,
  destination?: Position | undefined
}

const Map = ({ origin, destination }: MapProps) => (
  <MapContainer
    style={{ width: '90%', height: '400px' }}
    center={origin && [origin.lat, origin.lng]}
    zoom={9}
    scrollWheelZoom={true}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {origin && destination && <Polyline
      pathOptions={{ fillColor: 'red', color: 'blue' }}
      positions={[
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
      ]}
    />}
  </MapContainer>
);

export default Map;
