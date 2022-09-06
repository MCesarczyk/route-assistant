import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingMachineLayer = (props: any) => {
  // @ts-ignore
  const routeControl = L.Routing.control({
    waypoints: [
      L.latLng(props.origin.lat, props.origin.lng),
      L.latLng(props.destination.lat, props.destination.lng)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    collapsible: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: () => null
  });

  routeControl.on('routesfound', (e: any) => {
    const routes = e.routes;

    props.setRouteData({
      name: routes[0].name,
      summary: routes[0].summary,
      instructions: routes[0].instructions
    })
  });

  return routeControl;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
