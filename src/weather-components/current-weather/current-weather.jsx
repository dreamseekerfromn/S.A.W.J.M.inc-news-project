import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top"></div>
      <div className="bottom">
        <h1 className="heading">Your Local Weather</h1>
        <p className="city">Belgrade</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img
        alt="weather"
        className="weather-icon"
        src="icons/weather-symbol.png"
      />
    </div>
  );
};

export default CurrentWeather;
