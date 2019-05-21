const Customer = require('../models/customer')
const mongoose = require('mongoose')
const Reservation = require('../models/reservation')


const makeCustomerSampleData = async () => {
    // await customer.deleteAllCustomers();
    // await customer.createCustomer({name: 'Damien'})
    // await customer.createCustomer({name: 'Michael'})
    await Customer.deleteMany()
    const luke = new Customer({name: 'Luke'})
    await luke.save()
    const darth = new Customer({name: 'Darth Vader'})
    await darth.save()
    console.log(luke, darth);
    await Reservation.deleteMany()
    const astonMartin = new Reservation ({
        carName: 'Aston Martin',
        model: 'V12 Vantage',
        year: 2012,
        date: "06-25-2020",
        description: 'v12 all wheel drive, maunal gearbox',
        })
        await astonMartin.save()
    const ferrari = new Reservation ({
        customerName:'Matthew',
        carName: 'Ferrari Italia',
        model: '451',
        year: 2010,
        date: "06-2-2020",
        description: 'v10 all wheel drive, automated gearbox',
        })
            await ferrari.save()

    await mongoose.disconnect();

}
makeCustomerSampleData();