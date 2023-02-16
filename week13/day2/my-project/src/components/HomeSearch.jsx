import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../reducer/movieSlice";
import { useState } from "react";

import { Link } from "react-router-dom";

const HomeSearch = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  console.log(movies);

  const [movieToSearch, setMovieToSearch] = useState("");

  const APIcall = async () => {
    let url =
      "http://www.omdbapi.com/?apikey=" +
      import.meta.env.VITE_KEY +
      "&s=" +
      movieToSearch;
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    dispatch(searchMovie(readableData.Search));
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-zinc-200 ml-2">Movies</h2>
      <input
        type="text"
        onChange={(e) => setMovieToSearch(e.target.value)}
        className="border-solid border-2 border-zinc-400 ml-2 bg-transparent text-zinc-200"
      />

      <button onClick={() => APIcall()} className="text-zinc-200 ml-2">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      {movies?.map((movie) => {
        return (
          <div className="">
            <div className="grid grid-row-4 p-14  gap-4">
              <Link to={"movie/" + movie?.imdbID}>
                <img src={movie?.Poster} />
              </Link>
              <p className="text-zinc-200"> {movie?.Title} </p>
              <p className="text-zinc-200"> {movie?.Year} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeSearch;
