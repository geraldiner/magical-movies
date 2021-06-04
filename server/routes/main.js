const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

// @desc    Get the home page
// @route   GET /
router.get('/', homeController.getIndex)

// @desc    Get the login page
// @route   GET /login
router.get('/login', authController.getLogin)

// @desc    Process form for login
// @route   POST /login
router.post('/login', authController.postLogin)

// @desc    Get the signup page
// @route   GET /signup
router.get('/signup', authController.getSignup)

// @desc    Process form for sign up
// @route   POST /signup
router.post('/signup', authController.postSignup)

// @desc    Log user out
// @route   GET /logout
router.get('/logout', authController.getLogout)

// @desc    Get user info
// @route   GET /user
router.get('/user', authController.getUser)

module.exports = router