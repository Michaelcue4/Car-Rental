const Customer = require('../models/customer')

const customerController = {

    index:(req,res)=>
    Customer.find().then(customerList=>{
        //console.log(libraryList);
        res.render('customer/index',{customerList})
    })
}
module.exports = customerController;