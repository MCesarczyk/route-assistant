import { Position } from "../common/interfaces";
import { buildGetRouteUrl } from "./buildGetRouteUrl";

export const getRoute = async (origin: Position, destination: Position) => {
  const routerBaseUrl = "https://router.hereapi.com/v8/routes";
  const transportMode = "car";
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = buildGetRouteUrl(routerBaseUrl, origin, destination, transportMode, apiKey);

  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    return await data;
  } catch (error) {
    console.error("Error", error);
  }
};
