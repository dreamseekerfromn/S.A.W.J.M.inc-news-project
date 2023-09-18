
import { useEffect, useState } from "react";
import Newspage from "./components/Newspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe";
import NewsSearch from "./components/NewsSearch";
import MTA from './components/MTA'
import MTAHeadline from './components/MTAHeadline'
import CurrentWeather from "./components/weather-components/current-weather/current-weather";
function App() {
  const NEWS = import.meta.env.VITE_NEWS_KEY;
  // const BUS = import.meta.env.VITE_API_KEY;

  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Newspage NEWS={NEWS} />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/currentWeather" element={<CurrentWeather />} />
            <Route path="/bus" element={<MTA />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;