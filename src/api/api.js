const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": GEO_API_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://weatherapi-com.p.rapidapi.com/current.json";
