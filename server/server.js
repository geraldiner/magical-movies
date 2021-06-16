const express = require('express')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')
const flash = require('express-flash')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const passport = require('passport')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: __dirname + '/config/config.env' })

// Passport config
require(__dirname + '/config/passport')(passport)

connectDB()

const app = express()

// Logging in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Set up view engine

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }))
}


app.set("trust proxy", 1)

// Session middleware
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    mongooseConnection: mongoose.connection
  }),
  cookie: {
    sameSite: "none",
    secure: true,
    maxAge: 1000 * 60 * 60 * 24
  }
}))
app.use(flash())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())



// Routes
app.use('/', require('./routes/main'))

app.listen(process.env.PORT, console.log(`Server listening on http://localhost:${process.env.PORT}`))