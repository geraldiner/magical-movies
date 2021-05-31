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

// @desc    Get the login page
// @route   GET /login
router.get('/signup', authController.getSignup)

module.exports = router