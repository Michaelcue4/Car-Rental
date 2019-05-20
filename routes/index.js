const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')
// Routes
router.get('/customer',customerController.index);
router.post('/customer',customerController.create);
router.get('customer/:id', customerController.show);
router.put('customer/:id', customerController.update);
router.delete('customer/:id', customerController.delete);

module.exports = router;