import React, { useEffect, useState } from "react";
import Newspage from "./componets/Newspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const NEWS = import.meta.env.VITE_NEWS_KEY;
  // const BUS = import.meta.env.VITE_API_KEY;

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/newspage" element={<Newspage NEWS={NEWS} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
