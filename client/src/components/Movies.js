import React from 'react'
import Movie from './Movie'

const Movies = ({ movies }) => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-serif text-center">
        <span className="text-6xl font-passion-one">"</span>What movie is simply magical to you, no matter how popular or unpopular it may be?
        <div className="text-2xl">-u/Feelingofsunday</div>
      </h1>
      <div className="my-5 mx-3">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
