import { useEffect } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  origin?: any,
  destination?: any
}

const Map = ({ origin, destination }: MapProps) => {
  const MapEventHandler = () => {
    const map = useMap();

    useEffect(() => {
      if (origin && destination) {
        map.fitBounds([origin, destination]);
      }
    }, [map]);

    return null;
  }

  return (
    <MapContainer
      style={{ width: '90%', height: '400px' }}
      center={origin && [origin.lat, origin.lng]}
      zoom={9}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {origin && destination && (
        <>
          <Polyline
            pathOptions={{ fillColor: 'red', color: 'blue' }}
            positions={[
              [origin.lat, origin.lng],
              [destination.lat, destination.lng],
            ]}
          />
          <Marker position={[origin.lat, origin.lng]}>
            <Popup>Start</Popup>
          </Marker>
          <Marker position={[destination.lat, destination.lng]}>
            <Popup>
              End
            </Popup>
          </Marker>
        </>
      )}
      <MapEventHandler />
    </MapContainer>
  )
};

export default Map;
