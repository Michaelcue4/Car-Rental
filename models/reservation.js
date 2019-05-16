const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Reservations = new Schema({
 carName: String,
 
})

module.exports = mongoose.model('Reservations',Reservations)