const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = (passport) => {
  // use local authentication
  passport.use(new LocalStrategy({ usernameField: 'email' },
    // check if an account with the email exists
    (email, password, done) => {
      User.findOne({ email: email.toLowerCase() },
        (err, user) => {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: `${email} not found` });
          }
          if (!user.password) {
            return done(null, false, { message: `Your account was registerd using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.` })
          }

          // check if the password is correct with the UserSchema's helper method
          user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err) }
            if (isMatch) {
              return done(null, user)
            }
            return done(null, false, { message: `Invalid email or password.` })
          })
        })
    }
  ))

  passport.serializeUser((user, next) => {
    next(null, user.id)
  })

  passport.deserializeUser((id, next) => {
    User.findById(id, (err, user) => next(err, user))
  })
}