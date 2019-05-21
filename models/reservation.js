const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Reservations = new Schema({
    carName: String,
    model: String,
    year: Number,
    date: String,
    description: String,
    customerId: [Schema.Types.ObjectId]
})

module.exports = mongoose.model('Reservations', Reservations)