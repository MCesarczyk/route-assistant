import { useEffect } from "react";
import { Position } from "../../interfaces";

interface RouteProps {
  origin: Position | undefined,
  destination: Position | undefined
}

const RouteMap = ({ origin, destination }: RouteProps) => {
  useEffect(() => console.log(origin), [origin]);
  useEffect(() => console.log(destination), [destination]);

  return (<h2>Route map</h2>);
};

export default RouteMap;