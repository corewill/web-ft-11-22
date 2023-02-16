import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeSearch from "./components/HomeSearch";
import Navbar from "./components/Navbar";
import MoviesPage from "./components/MoviesPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSearch />} />
        <Route path="movie/:id" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
