const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')
// Routes
router.get('/',customerController.index);
router.post('/',customerController.create);
router.get('/new',customerController.new);