const path = require("path");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: __dirname + "/config/config.env" });

// Passport config
require(__dirname + "/config/passport")(passport);

connectDB();

const app = express();

// Logging in development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Set up view engine

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static(__dirname + "../client/build"));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
}

app.set("trust proxy", 1);

// Session middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      mongooseConnection: mongoose.connection,
    }),
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/main"));
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(
  process.env.PORT,
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
);
