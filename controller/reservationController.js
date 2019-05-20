const Reservation = require('../models/reservation')

const reservationController = {
index: async(req, res) => {
    res.json(await Reservation.find());
},
show: async(req, res) => {
    try{
        res.json(await Reservation.findById(req.params.id));
    } catch(err){
        console.log(err);
        res.json(err);
    }
},
create: async (req, res) => {
    try {
      const newReservation = req.body
      const savedReservation = await Reservation.create(newReservation)
      res.json(savedReservation)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  show: async (req, res) => {
    try {
      const reservationId = req.params.id
      const reservation = await reservation.findById(reservationId)
      res.json(customer)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  },
  delete: async (req, res) => {
    try {
      const reservationId = req.params.id
      console.log(await Reservation.findByIdAndRemove(reservationId))
      res.json({
        msg: 'Deleted'
      })
      //res.json(await Customer.findByIdAndDelete(req.params.id));
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }




}
module.exports = reservationController;