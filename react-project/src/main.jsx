import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Master from "./pages/master/master.jsx";
import Player from "./pages/player/player.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masters" element={<Master Home Page />} />
        <Route path="/players" element={<Player Home Page/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);