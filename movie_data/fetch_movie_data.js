const fs = require('fs')
const axios = require('axios')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: './config.env' })

async function getMovieData(movie_title) {
  const rootURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API}&page=1&query=${movie_title}`
  const resp = await axios.get(rootURL)
  const data = await resp['data']['results'][0]
  console.log(data)
}

getMovieData('school of rock')
