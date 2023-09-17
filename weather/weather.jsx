import React from "react";

export default function weather() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const weather = import.meta.env.VITE_weather_api;

    const URL = `https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13`;

    fetch(URL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": weather,
        "X-RapidAPI-Host": `weatherapi-com.p.rapidapi.com`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          // alert('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>weather</div>;
}
