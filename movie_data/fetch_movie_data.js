const fs = require('fs')
const axios = require('axios')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: './config.env' })
let api_url = 'https://api.themoviedb.org/3'

async function fetchMovieData(movie) {
  const rootURL = `${api_url}/search/movie?api_key=${process.env.MOVIEDB_API}&page=1&include_adult=false&query=${movie['title']}`

  const resp = await axios.get(rootURL)
  const data = await resp['data']['results'][0]
  return data
}

async function setMovieData(movie) {
  const posterURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

  const movie_data = await fetchMovieData(movie)
  const newMovie = { ...movie }
  newMovie["release_date"] = movie_data["release_date"]
  let genre_ids = movie_data["genre_ids"]
  const rootURL = `${api_url}/genre/movie/list?api_key=${process.env.MOVIEDB_API}`
  const resp = await axios.get(rootURL)
  const data = await resp["data"]["genres"]
  let genre_strs = []
  for (let i = 0; i < genre_ids.length; i++) {
    for (let j = 0; j < data.length; j++) {
      let genreId = genre_ids[i]
      let genreApiId = data[j]["id"]
      if (genreId == genreApiId) {
        genre_strs.push(data[j]["name"])
      }
    }
  }
  console.log(genre_strs)
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
  for (let i = 0; i < 3; i++) {
    let movie = await setMovieData(movies[i])
    newMovieArr.push(movie)
  }

  // fs.writeFileSync('movie_data_300.json', JSON.stringify(movies, null, 2), 'utf8')
  return newMovieArr
}

updateMovieData()