import { useMap } from "react-leaflet";
import L from "leaflet";

const RouteMarkers = (props: any) => {
  const map = useMap();

  const markersData = [
    {
      id: "origin",
      lat: props.origin.lat,
      lng: props.origin.lng,
      text: "Start"
    },
    {
      id: "destination",
      lat: props.destination.lat,
      lng: props.destination.lng,
      text: "Finish"
    }
  ];

  markersData.map(marker =>
    L.marker([marker.lat, marker.lng])
      .addTo(map)
      .bindPopup(marker.text)
  );

  return null;
};

export default RouteMarkers;