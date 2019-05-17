const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')
// Routes
router.get('/',customerController.index);