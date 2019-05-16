const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Customer = new Schema({
    name: String
,
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: 'Reservations'
    }]
})

module.exports = mongoose.model('Customer',Customer)