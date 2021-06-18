const fs = require('fs')
const axios = require('axios')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: './config.env' })
let api_url = 'https://api.themoviedb.org/3'

async function fetchMovieId(movie) {
  const rootUrl = `${api_url}/search/movie?api_key=${process.env.MOVIEDB_API}&page=1&include_adult=false&query=${movie['title']}`
  try {
    const resp = await axios.get(rootUrl)
    const data = await resp['data']['results'][0]["id"]
    return data
  } catch (error) {
    console.log(movie['title'])
    return
  }
}

async function fetchMovieData(movieId) {
  try {
    const rootUrl = `${api_url}/movie/${movieId}?api_key=${process.env.MOVIEDB_API}`
    const resp = await axios.get(rootUrl)
    const data = await resp['data']
    return data
  } catch (error) {
    return
  }
}

async function setMovieData(movie) {
  const photoUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

  const movieId = await fetchMovieId(movie)
  const movieData = await fetchMovieData(movieId) || {}
  movieData["backdrop_path"] = photoUrl + movieData["backdrop_path"]
  movieData["poster_path"] = photoUrl + movieData["poster_path"]

  const newMovie = { ...movie, movieData }
  return newMovie
}

async function updateMovieData() {
  let newMovieArr = []
  let movies
  try {
    const data = fs.readFileSync('../_python/spacy/movies_300.json', 'utf8')
    movies = JSON.parse(data)
  } catch (err) {
    console.log(err)
  }
  for (let i = 0; i < movies.length; i++) {
    let movie = await setMovieData(movies[i])
    newMovieArr.push(movie)
  }

  fs.writeFileSync('movie_data_300.json', JSON.stringify(newMovieArr, null, 2), 'utf8')
}

updateMovieData()