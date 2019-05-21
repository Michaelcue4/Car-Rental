const Reservations = require('../models/reservation')

const reservationController = {
    index: async (req, res) => {
        try {
          const reservations = await Reservations.find({})
          res.json(reservations)
        } catch (err) {
          console.log(err)
        }
      },
show: async(req, res) => {
    try{
        res.json(await Reservations.findById(req.params.id));
    } catch(err){
        console.log(err);
        res.json(err);
    }
},
create: async (req, res) => {
    try {
      const newReservation = req.body
      const savedReservation = await Reservations.create(newReservation)
      res.json(savedReservation)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  update: async (req, res) => {
    try {
      const reservationId = req.params.id
      const updatedReservation = req.body
      const savedReservation = await Reservations.findByIdAndUpdate(reservationId, updatedReservation, {new: true})
      res.json(savedReservation)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  show: async (req, res) => {
    try {
      const reservationId = req.params.id
      const reservation = await Reservations.findById(reservationId)
      res.json(reservation)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  },
  delete: async (req, res) => {
    try {
      const reservationId = req.params.id
      console.log(await Reservations.findByIdAndRemove(reservationId))
      res.json({
        msg: 'Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }




}
module.exports = reservationController;