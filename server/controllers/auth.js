const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

module.exports = {
  getLogin: (req, res) => {
    const locals = {
      title: 'Login',
      layout: './layouts/main'
    }
    res.render('login', locals)
  },
  postLogin: (req, res, next) => {
    try {
      const validationErrors = []
      // validation for email
      if (!validator.isEmail(req.body.email)) {
        validationErrors.push({ message: 'Please enter a valid email address.' })
      }
      if (validator.isEmpty(req.body.password)) {
        validationErrors.push({ message: 'Please enter your password' })
      }
      // if there are any validation errors from above, display and redirect to the sign up apge
      if (validationErrors.length) {
        // req.flash('errors', validationErrors)
        // return res.redirect('../login')
        console.log(validationErrors)
        return res.status(500).send(validationErrors)
      }

      passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err) }
        if (!user) {
          // req.flash('errors', info)
          // return res.redirect('/login')
          console.log(info)
          return res.status(500).send(info)
        }
        req.logIn(user, (err) => {
          if (err) { return next(err) }
          // req.flash('success', { message: 'Successful login' })
          // res.redirect(req.session.returnTo || '/snapshots')
          console.log("Successful login")
          console.log(`auth.js Log: ${user}`)
          return res.status(200).send("Successful login")
        })
      })(req, res, next)
    } catch (err) {
      console.error(err)
    }
  },
  getSignup: (req, res) => {
    res.render(path.resolve(__dirname, '../../client/build/index.html'))
  },
  postSignup: (req, res, next) => {
    try {
      const validationErrors = []
      if (!validator.isEmail(req.body.email)) {
        validationErrors.push({ message: 'Please enter a valid email address.' })
      }
      if (!validator.isLength(req.body.password, { min: 8 })) {
        validationErrors.push({ message: 'Passwords must be at least 8 characters.' })
      }
      if (req.body.password !== req.body.confirmPassword) {
        validationErrors.push({ message: 'Passwords do not match.' })
      }
      if (validationErrors.length) {
        // req.flash('errors', validationErrors)
        // return res.redirect('/')
        console.log(validationErrors)
        return res.status(500).send(validationErrors)
      }

      User.findOne({ email: req.body.email },
        (err, existingUser) => {
          if (err) { return next(err) }
          if (existingUser) {
            // req.flash('errors', { message: "An account with that email address already exists." })
            // return res.redirect('/')
            console.log("An account with that email address already exists.")
            return res.status(500).send("User already exists")
          } else {
            const user = new User({
              email: req.body.email,
              name: req.body.name,
              password: req.body.password
            })
            user.save((err) => {
              if (err) { return next(err) }
              req.logIn(user, (err) => {
                if (err) { return next(err) }
                return res.status(200).send("Success")
              })
            })
          }
        })
    } catch (error) {
      console.log(error)
    }
  },
  getLogout: (req, res) => {
    req.logout()
    req.session.destroy((err) => {
      if (err) {
        console.log('Error: Failed to destroy session during logout.', err)
      }
      req.user = null
      res.clearCookie('connect.sid')
      delete req.session
      return res.status(200).send("You've been logged out.")
    })
  },
  getUser: (req, res) => {
    res.send(req.user)
  }
}