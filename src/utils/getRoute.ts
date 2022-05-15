import { Position } from "../interfaces";

export const getRoute = async (origin: Position, destination: Position) => {
  const routerBaseUrl = "https://router.hereapi.com/v8/routes";
  const apiKey = process.env.REACT_APP_API_KEY;
  const transportMode = "car";
  const url = `${routerBaseUrl}?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&transportMode=${transportMode}&apiKey=${apiKey}`;

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