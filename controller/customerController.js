const Customer = require('../models/customer')

const customerController = {

    index: async (req, res) => {
        try {
          const customers = await Customer.find({})
          res.json(customers)
        } catch (err) {
          console.log(err)
        }
      },
      create: async (req, res) => {
        try {
          const newCustomer = req.body
          const savedCustomer = await Customer.create(newCustomer)
          res.json(savedCustomer)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
      },
    update: async (req, res) => {
        try {
          const customerId = req.params.id
          const updatedCustomer = req.body
          const savedCustomer = await Customer.findByIdAndUpdate(customerId, updatedCustomer, {new: true})
          res.json(savedCustomer)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
      },
    show: async (req, res) => {
        try {
          const customerId = req.params.id
          const customer = await Customer.findById(customerId)
          res.json(customer)
        } catch (err) {
          console.log(err)
          res.json(err)
        }
      },
      update: async (req, res) => {
        try {
          const customerId = req.params.id
          const updatedCustomer = req.body
          const savedCustomer = await Customer.findByIdAndUpdate(customerId, updatedCustomer, {new: true})
          res.json(savedCustomer)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
      },
      delete: async (req, res) => {
        try {
          const customerId = req.params.id
          console.log(await Customer.findByIdAndRemove(customerId))
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
module.exports = customerController;