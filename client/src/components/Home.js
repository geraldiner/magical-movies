import React from 'react'
import { useState, useEffect } from 'react'
import Movies from './Movies'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromDB = await fetchMovies()
      setMovies(moviesFromDB)
      console.log(movies.length)
    }
    getMovies()
  }, [])

  // Fetch movies from MongoDB OR do I use my backend?
  const fetchMovies = async () => {
    const res = await fetch('http://localhost:8888/movies')
    const data = await res.json()
    return data
  }

  return (
    <div className="min-h-screen w-9/12 my-12 mx-auto bg-gray-200 sm:px-6 lg:px-8">
      <Movies movies={movies} />
    </div>
  )
}

export default Home
