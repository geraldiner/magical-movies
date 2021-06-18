
const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  comment_text: {
    type: String,
    require: true,
  },
  comment_id: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    default: 0
  },
  movie_data: {
    type: mongoose.Schema.Types.Mixed
  }
})

module.exports = mongoose.model('Movie', MovieSchema)