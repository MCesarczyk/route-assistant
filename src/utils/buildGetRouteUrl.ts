import { Position } from "../common/interfaces";

export const buildGetRouteUrl = (
  routerBaseUrl: string,
  origin: Position,
  destination: Position,
  transportMode: string,
  apiKey: string | undefined
) => {
  const baseUrl = routerBaseUrl;
  const originPosition = `origin=${origin.lat},${origin.lng}`;
  const destinationPosition = `destination=${destination.lat},${destination.lng}`;
  const mode = `transportMode=${transportMode}`;
  const token = `apiKey=${apiKey}`;

  const queryStringParams = [originPosition, destinationPosition, mode, token];
  const queryString = queryStringParams.join('&');

  const urlParams = [baseUrl, queryString];
  return urlParams.join('?');
};