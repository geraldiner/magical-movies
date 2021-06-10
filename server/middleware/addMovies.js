const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const Movie = require('../models/Movie')

const addMovies = () => {
  let movies
  try {
    const data = fs.readFileSync(path.resolve('movie_data', 'movie_data_300.json'), 'utf8')
    movies = JSON.parse(data)
    movies.forEach((movie) => {
      let newMovie = new Movie({
        title: movie["title"],
        comment_text: movie["comment_text"],
        comment_id: movie["comment_id"],
        score: movie["score"],
        movie_data: movie["movieData"]
      })
      newMovie.save((err) => {
        if (err) { console.log(error) }
      })
    })
    console.log(movies.length)
  } catch (error) {
    console.log(error)
  }
}

module.exports = addMovies