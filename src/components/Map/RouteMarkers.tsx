import { useMap } from "react-leaflet";
import L from "leaflet";

const RouteMarkers = (props: any) => {
  const map = useMap();

  const markersData = [
    {
      id: "origin",
      lat: props.origin.lat,
      lng: props.origin.lng,
      text: "Start",
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'
    },
    {
      id: "destination",
      lat: props.destination.lat,
      lng: props.destination.lng,
      text: "Finish",
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
    }
  ];

  markersData.map(marker =>
    L.marker([marker.lat, marker.lng], {
      icon: L.icon({
        iconUrl: marker.iconUrl,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    })
      .addTo(map)
      .bindPopup(marker.text)
  );

  return null;
};

export default RouteMarkers;