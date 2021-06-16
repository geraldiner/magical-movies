import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import _ from "lodash";

const Movies = () => {
  const MOVIES_URI =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8888/movies"
      : "https://wheresthemagic.herokuapp.com/movies";


  const pageSize = 10;

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [foundMovies, setFoundMovies] = useState([movies]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(MOVIES_URI);
      const data = await res.data;
      setMovies(data);
      setFoundMovies(data)
    };
    getMovies();
  }, []);



  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = movies.filter((movie) => {
        return movie.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundMovies(results);
    } else {
      setFoundMovies(movies);
    }
    setMovie(keyword);
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-serif text-center">
        <span className="text-6xl font-passion-one">"</span>What movie is simply
        magical to you, no matter how popular or unpopular it may be?
        <div className="text-2xl">-u/Feelingofsunday</div>
      </h1>
      <div className="my-5 mx-3">
        <div className="search">
          {/* search */}
          <div className="hidden md:block px-2 py-2 relative rounded-md">
            <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
              <button type="submit" className="text-gray-500 sm:text-sm">
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <input
              type="search"
              name="search"
              id="search"
              value={movie}
              onChange={filter}
              className="form-input w-full focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md pl-9"
              placeholder="Search for a movie"
            />
          </div>
        </div>
        <div className="">
          {foundMovies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              index={movies.indexOf(movie)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
