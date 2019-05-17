const Customer = require('../models/customer')
// const Reservation = require('../models/reservation')


const makeCustomerSampleData = async () => {
    // await customer.deleteAllCustomers();
    // await customer.createCustomer({name: 'Damien'})
    // await customer.createCustomer({name: 'Michael'})
    await Customer.deleteMany()
    const luke = new Customer({name: 'Luke'})
    await luke.save()
    const darth = new Customer({name: 'Darth Vader'})
    await darth.save()

}

makeCustomerSampleData();