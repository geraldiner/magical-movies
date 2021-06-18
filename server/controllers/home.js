const Movie = require('../models/Movie')
const path = require('path')

module.exports = {
  getIndex: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  },
  getMovies: async (req, res) => {
    const movies = await Movie.find({}, null, { limit: 100 }).sort({ score: -1 })
    return res.status(200).send(JSON.stringify(movies))
  },
  getDefault: (req,res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  }
}