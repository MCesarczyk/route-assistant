export const buildGeocodeUrl = (
  geocodeBaseUrl: string,
  number: number,
  query: string,
  apiKey: string | undefined
) => {
  const baseUrl = geocodeBaseUrl;
  const itemsLimit = `limit=${number}`;
  const queryInput = `q=${query}`;
  const token = `apiKey=${apiKey}`;

  const queryStringParams = [itemsLimit, queryInput, token];
  const queryString = queryStringParams.join('&');

  const urlParams = [baseUrl, queryString];
  return urlParams.join('?');
};