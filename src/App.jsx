
import { useState, useEffect } from "react";

function App() {
  return <></>;

import React, { useEffect, useState } from "react";
import Newspage from "./componets/Newspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componets/NavBar"
import AboutMe from "./componets/AboutMe";

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
        </Routes>
      </div>
    </Router>
  );

}

export default App;
