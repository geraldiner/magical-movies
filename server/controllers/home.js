const Movie = require('../models/Movie')

module.exports = {
  getIndex: (req, res) => {
    res.render(path.resolve(__dirname, '../../client/build/index.html'))
  },
  getMovies: async (req, res) => {
    const movies = await Movie.find({}, null, { limit: 100 }).sort({ score: -1 })
    return res.status(200).send(JSON.stringify(movies))
  }
}