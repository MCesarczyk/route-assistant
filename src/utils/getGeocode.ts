export const getGeocode = async (query: string) => {
  const geocodeBaseUrl = "https://geocode.search.hereapi.com/v1/geocode";
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `${geocodeBaseUrl}?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    console.log(data?.items[0]);
  } catch (error) {
    console.log(error);
  }
};