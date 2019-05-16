const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Customer = new Schema({
    name: String
})

module.exports = mongoose.model('Customer',Customer)