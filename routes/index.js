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

router.get('/reservation', reservationController.index)
router.post('/reservation',reservationController.create)
router.get('/reservation/:id', reservationController.show)
router.put('/reservation/:id', reservationController.update);
router.delete('/reservation/:id', reservationController.delete);

module.exports = router;