import { SEARCH_RESULTS_NUMBER } from "../common/variables";
import { buildGeocodeUrl } from "./buildGeocodeUrl";

export const getGeocode = async (query: string) => {
  const geocodeBaseUrl = "https://geocode.search.hereapi.com/v1/geocode";
  const apiKey = process.env.REACT_APP_API_KEY;
  const number = SEARCH_RESULTS_NUMBER;
  const url = buildGeocodeUrl(geocodeBaseUrl, number, query, apiKey);

  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    return await data?.items;
  } catch (error) {
    console.error("Error", error);
  }
};
