import React from "react";
import { useParams } from "react-router-dom";

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
    <div className="min-h-screen px-10 text-white">
      
      <div className="flex flex-cols ">
        <div className="text-center">
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
          <img src={movieDetails.Poster} alt="" className="w-70 h-100" />
          {/* Should make this pic blend into the background later */}
        </div>
      </div>
    </div>
  );
};
export default MoviePage;
