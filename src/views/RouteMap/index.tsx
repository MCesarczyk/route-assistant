import { useEffect, useState } from "react";
import { Position } from "../../interfaces";
import { getRoute } from "../../utils/getRoute";

interface RouteProps {
  origin: Position | undefined,
  destination: Position | undefined
}

const RouteMap = ({ origin, destination }: RouteProps) => {
  useEffect(() => console.log(origin), [origin]);
  useEffect(() => console.log(destination), [destination]);

  const [route, setRoute] = useState({});
  useEffect(() => console.log(route), [route]);

  const fetchRoute = async () => {
    if (origin && destination) {
      const data: any = await getRoute(origin, destination);
      setRoute(data.routes[0]);
    }
  };

  useEffect(() => {
    fetchRoute();
  }, []);

  return (<h2>Route map</h2>);
};

export default RouteMap;