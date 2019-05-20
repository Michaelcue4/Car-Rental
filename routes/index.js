const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')
const reservationController = require('../controller/reservationController')
// Routes
router.get('/customers',customerController.index);
router.post('/customers',customerController.create);
router.get('/customers/:id', customerController.show);
router.put('/customers/:id', customerController.update);
router.delete('/customers/:id', customerController.delete);

router.get('/customers/reservation', reservationController.index)


module.exports = router;