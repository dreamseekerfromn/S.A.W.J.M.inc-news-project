import "./current-weather.css";
import Search from "../search/search.jsx";
import NationalWeatherAlert from "../../NationalWeatherAlert";

const CurrentWeather = () => {
  return (
    <>
      <div className="weather">
        <div className="top">
          <Search />
        </div>
        <div className="bottom">
          <h1 className="heading">Your Local Weather</h1>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src="weather-icons/weather-symbol.png"
        />
      </div>
      <NationalWeatherAlert />
    </>
  );
};

export default CurrentWeather;
