import "./current-weather.css";
import Search from "../search/search.jsx";
import NationalWeatherAlert from "../../NationalWeatherAlert";
import {useState, useEffect} from 'react';


const CurrentWeather = () => {
  const [weather, setWeather] = useState({
    "location": {
        "name": "",
        "region": "",
        "country": "",
        "lat": 0,
        "lon": 0,
        "tz_id": "",
        "localtime_epoch": 0,
        "localtime": ""
    },
    "current": {
        "last_updated_epoch": 0,
        "last_updated": "",
        "temp_c": 0,
        "temp_f": 0,
        "is_day": 0,
        "condition": {
            "text": "",
            "icon": "",
            "code": 0
        },
        "wind_mph": 0,
        "wind_kph": 0,
        "wind_degree": 0,
        "wind_dir": "",
        "pressure_mb": 0,
        "pressure_in": 0,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 0,
        "cloud": 0,
        "feelslike_c": 0.0,
        "feelslike_f": 0.0,
        "vis_km": 0.0,
        "vis_miles": 0.0,
        "uv": 0.0,
        "gust_mph": 0.0,
        "gust_kph": 0.0
    }
  });
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div className="weather">
        <div className="top">
          <Search onSearch={setWeather}/>
        </div>
        <div className="bottom">
          <h1 className="heading">Your Local Weather</h1>
          <p className="city">{weather["location"]["name"]}</p>
          <p className="weather-description">{weather["current"]["condition"]["text"]}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`https:${weather["current"]["condition"]["icon"]}`}
        />
      </div>
      <NationalWeatherAlert />
    </>
  );
};

export default CurrentWeather;
