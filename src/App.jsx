import React, { useEffect, useState } from "react";
import Newspage from "./componets/Newspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componets/NavBar";
import AboutMe from "./componets/AboutMe";
import NewsSearch from "./componets/NewsSearch";
import MTA from "./components/MTA";
import MTAHeadline from "./components/MTAHeadline";
import CurrentWeather from "./weather-components/current-weather/current-weather";

function App() {
  const NEWS = import.meta.env.VITE_NEWS_KEY;
  // const BUS = import.meta.env.VITE_API_KEY;

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Newspage NEWS={NEWS} />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/bus" element={<MTAHeadline />} />
          <Route path="/weather" element={<CurrentWeather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
