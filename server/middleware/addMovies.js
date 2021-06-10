const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const Movie = require('../models/Movie')

const addMovies = () => {
  let movies
  try {
    const data = fs.readFileSync(path.resolve('movie_data', 'movie_data_300.json'), 'utf8')

    movies = JSON.parse(data)
    console.log(movies.length)
  } catch (error) {
    console.log(error)
  }
}

module.exports = addMovies