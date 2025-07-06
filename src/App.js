import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage.component";

const HatPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hats" element={<HatPage />} />
    </Routes>
  );
}

export default App;
