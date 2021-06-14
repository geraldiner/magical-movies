import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import _ from "lodash";

const Movies = () => {
  const MOVIES_URI =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8888/movies"
      : "https://wheresthemagic.herokuapp.com/movies";

  const [movies, setMovies] = useState([]);
  const [paginatedMovies, setpaginatedMovies] = useState([]);
  const [currPage, setCurrPage] = useState(1)


  const regularBtn = 'text-yellow-500 bg-white border-l border-t border-b border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150'
  const activeBtn = 'bg-yellow-500 text-white hover:bg-yellow-700 hover:text-white active:bg-yellow-700 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150'

  const pageSize = 10;
  const pageCount = movies ? Math.ceil(movies.length / pageSize) : 0;
  const pages = _.range(1, pageCount + 1);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(MOVIES_URI);
      const data = await res.data;
      setMovies(data);
      setpaginatedMovies(_(data).slice(0).take(pageSize).value());
    };
    getMovies();
  }, []);

  const paginate = (pageNo) => {
    setCurrPage(pageNo)
    const startIndex = (pageNo - 1)*pageSize
    const paginatedMovie = _(movies).slice(startIndex).take(pageSize).value()
    setpaginatedMovies(paginatedMovie)
  }

  return (
    <div className="py-10">
      <h1 className="text-4xl font-serif text-center">
        <span className="text-6xl font-passion-one">"</span>What movie is simply
        magical to you, no matter how popular or unpopular it may be?
        <div className="text-2xl">-u/Feelingofsunday</div>
      </h1>
      <div className="my-5 mx-3">
        {paginatedMovies.map((movie) => (
          <Movie key={movies.indexOf(movie)} movie={movie} index={movies.indexOf(movie)} />
        ))}
      </div>
      <div className="flex items-center justify-center mb-4">
        <button
          className="text-yellow-500 bg-white border-l border-t border-b border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          First
        </button>
        <button
          className="text-yellow-500 bg-white border-l border-t border-b border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={ page === currPage ? activeBtn : regularBtn}
            type="button" onClick={() => paginate(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="text-yellow-500 bg-white border border-solid border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <span>Next</span>
        </button>
        <button
          className="text-yellow-500 bg-white border-t border-b border-r border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <span>Last</span>
        </button>
      </div>
    </div>
  );
};

export default Movies;
