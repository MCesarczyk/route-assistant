import { useCallback, useEffect, useState } from "react";
import MapComponent from "../../components/Map/MapComponent";
import { RouteProps } from "../../common/interfaces";
import { getRoute } from "../../utils/getRoute";

const RouteMap = ({ origin, destination, setRouteData }: RouteProps) => {
  const [route, setRoute] = useState({});
  useEffect(() => console.log(route), [route]);

  const fetchRoute = useCallback(async () => {
    if (origin && destination) {
      const data: any = await getRoute(origin, destination);
      setRoute(data.routes[0]);
    }
  }, [destination, origin]);

  useEffect(() => {
    fetchRoute();
  }, [fetchRoute]);

  return (
    <>
      <h2>Route map</h2>
      <MapComponent
        origin={origin}
        destination={destination}
        setRouteData={setRouteData}
      />
    </>
  );
};

export default RouteMap;
