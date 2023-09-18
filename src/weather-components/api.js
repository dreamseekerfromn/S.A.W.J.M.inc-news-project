export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e5e2827ed6msh2ce92a384306609p195c0cjsne8c36458888d",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "91bb65a74amsh4240f7343dcda7bp1d0e90jsnddbdcef2c62c",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
