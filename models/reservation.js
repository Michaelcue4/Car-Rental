const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Reservations = new Schema({
    carName: String,
    model: String,
    year: Number,
    date: String,
    description: String,
    customerId: ObjectId
})

module.exports = mongoose.model('Reservations', Reservations)