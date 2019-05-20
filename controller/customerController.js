const Customer = require('../models/customer')

const customerController = {

    index:(req,res)=>
    Customer.find({}).then((customerList)=>{
        res.send(customerList)
    }),
    new:(req,res)=>{
        res.send('customer/new')
    },
    create:(req,res)=>{
        Customer.create(req.body).then(() => {
            res.redirect("customer/index");
          })
    },
    show:(req,res)=>{
        const customerId = req.params.id 
        Library.findById(customerId).then((SingleCustomer)=>{
            res.send('customer/show',{SingleCustomer});
        })
    },
    // edit:(req,res)=>{
    //     Library.findById(req.params.id).then(SingleCustomer=>{
    //         res.send('customer/edit', {SingleCustomer})
    //     })
    // },
    
    update:(req,res)=>{
        Customer.updateOne({_id : req.params.id}, req.body).then(() => {
            res.redirect("/" + req.params.id);
          })
    },
    delete:(req,res)=>{
        Library.deleteOne({"_id":req.params.id}).then(()=>{
            res.redirect("/")
        })
    }


}
module.exports = customerController;