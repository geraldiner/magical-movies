const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 5
  },
  role: {
    type: Number,
    default: 0
  }
})

// Hash the password before it's saved
UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) { return next(err) }
      this.password = hash
      next()
    })
  })
  let firstLetter = this.name.slice(0, 1).toUpperCase()
  let restOfName = this.name.slice(1)
  this.name = firstLetter + restOfName
})

// Helper method to validate user's password
UserSchema.methods.comparePassword = function comparePassword(plaintext, callback) {
  bcrypt.compare(plaintext, this.password, (err, isMatch) => {
    callback(err, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)