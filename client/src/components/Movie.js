import React from 'react'

const Movie = ({ movie }) => {
  const moviePath = movie.movie_data.poster_path
  const movieDesc = movie.movie_data.overview
  return (
    <div className="bg-white shadow-md px-5 py-5 my-7">
      <div className="flex justify-around">
        <div className="rankNumber text-5xl font-bold">1</div>
        <div className="poster w-2/12"><img src={moviePath} alt="" /></div>
        <div className="movieInfo w-8/12 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl my-3">{movie.title}</h3>
            <p className="text-base my-3">{movieDesc}</p>
          </div>

          <div className="flex justify-self-end bg-red-50">
            <span className="mr-5">{movie.score}</span>
            <span className="mr-5">Average Score</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
