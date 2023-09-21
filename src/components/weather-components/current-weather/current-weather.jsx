import "./current-weather.css";
import Search from "../search/search.jsx";
import NationalWeatherAlert from "../NationalWeatherAlert";
import {useState, useEffect} from 'react';
import { weatherObj } from "../../../api/objectStructure";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(weatherObj);
  const [toggleAlert, setToggleAlert] = useState(false);

  function handleToggleAlert(){
    setToggleAlert(!toggleAlert);
  }

  return (
    <>
      <div className="weather">
        <h1 className="heading">Your Local Weather</h1>
        <br />
        <div className="row">
          <div className="col-4 p-3">
            <div className="top">
              <Search onSearch={setWeather}/>
            </div>
            <div className="bottom">
              <p className="city">{weather["location"]["name"]}</p>
              <br />
              <p className="weather-description">{weather["current"]["condition"]["text"]}</p>
              <p className="temperature">{weather["current"]["temp_f"]} F°</p>
              <p className="feels_like">Feels like {weather["current"]["feelslike_f"]} F°</p>
            </div>
          </div>
          <div className="col-8">
            <img
              alt="weather"
              className="weather-icon"
              src={`https:${weather["current"]["condition"]["icon"]}`}
            />
          </div>
        </div>
        <div className="row">
          <button className="toggle_alert" onClick={() => handleToggleAlert()}>Alert</button>
            {toggleAlert ?
              (<NationalWeatherAlert />) : null
            }
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
