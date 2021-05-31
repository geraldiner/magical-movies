const express = require('express')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')

const dotenv = require('dotenv')
const morgan = require('morgan')

const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

// Logging in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Set up view engine

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

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


// Routes
app.use('/', require('./routes/main'))

app.listen(process.env.PORT, console.log(`Server listening on http://localhost:${process.env.PORT}`))