const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId


const Reservations = new Schema({
    customerId : {type:ObjectId , ref:'Customers'},
    customerName: String,
    carName: String,
    model: String,
    year: Number,
    date: String,
    description: String,
   
})

module.exports = mongoose.model('Reservations', Reservations)