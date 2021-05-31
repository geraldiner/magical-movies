const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: STring,
    minlength: 5
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

const User = mongoose.model('User', UserSchema)