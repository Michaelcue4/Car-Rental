const customer = require('../models/customer')
const Reservation = require('../models/reservation')


const makeCustomerSampleData = async () => {
    await customer.deleteAllCustomers();
    await customer.createCustomer({name: 'Damien'})
    await customer.createCustomer({name: 'Michael'})
}

await makeCustomerSampleData();