const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.Schema.ObjectId

const Reservations = new Schema({
    carName: String,
    model: String,
    year: Number,
    time: Number,
    description: String,
    customerId: ObjectId
})

module.exports = mongoose.model('Reservations', Reservations)