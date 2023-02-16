import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const MoviePage = () => {
  const { id } = useParams();

  const [movieDetails, setmovieDetails] = useState({});

  const APIcallDetails = async () => {
    let url =
      "http://www.omdbapi.com/?apikey=" +
      import.meta.env.VITE_KEY +
      "&i=" +
      id;
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    setmovieDetails(readableData);
  };



  useEffect(() => {
    APIcallDetails();
  }, []);

  return (
    <div className="bg-[#0a0022] min-h-screen px-10 text-white">
      <Navbar />
      <div id="sizer" className="grid grid-cols-[1fr,2fr] min-h-screen">
        <div id="info" className="text-center">
          <h3 className="text-5xl font-bold">{movieDetails?.Title} </h3>
          <p>
            {movieDetails?.Rated} • {movieDetails?.Year} •{" "}
            {movieDetails?.Runtime}
          </p>
          <p>{movieDetails?.Genre}</p>
          <p>IMDB Rating: {movieDetails?.imdbRating}/10</p>
          <p className="p-6 text-lg">{movieDetails?.Plot}</p>
        </div>
        <div id="backgroundPic" className="flex justify-center">
          <img src={movieDetails.Poster} alt="" />
          {/* Should make this pic blend into the background later */}
        </div>
      </div>
    </div>
  );
};
export default MoviePage;
