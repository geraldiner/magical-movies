const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// @desc    Get the home page
// @route   GET /
router.get('/', homeController.getIndex)

module.exports = router