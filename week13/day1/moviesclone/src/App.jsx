import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeSearch from "./components/HomeSearch";
// import ErrorPage from "./components/ErrorPage";
import MoviesPage from "./components/MoviesPage";

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomeSearch />} />
      <Route path="/Search" element={<HomeSearch />} />
      <Route path="movie/:id" element={<MoviesPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  )
}

export default App
