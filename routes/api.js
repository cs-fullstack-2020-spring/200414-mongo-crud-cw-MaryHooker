//create route
let express = require('express');
let router = express.Router();

//import model
let EntryCollection = require('../models/EntrySchema');

//Create new resident
router.post('/',(req,res)=>{
    // res.send(`Created new resident`)
    EntryCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
   
})

//Find multiple residents by last name
router.get('/last/:lastName',(req,res)=>{
    // res.send(`Display multiple residents by last name`)
    EntryCollection.find({lastName:req.params.lastName},(errors,results)=>{
        errors ? res.send(errors) : res.send(results)
    })
})

//Find single residents
router.get('/single/:single',(req,res)=>{
    // res.send(`Display single residents`)
    EntryCollection.find({single:req.params.single},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Find one resident by first name
router.get('/first/:firstName',(req,res)=>{
    // res.send(`Display resident by first name`)
    EntryCollection.findOne({firstName:req.params.firstName},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Display all residents
router.get('/',(req,res)=>{
    // res.send(`Display all residents`)
    EntryCollection.find({}, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update a resident by phone number
router.put('/:phoneNumber',(req,res)=>{
    // res.send(`Updated resident`)
    EntryCollection.findOneAndUpdate({phoneNumber:req.params.phoneNumber}, req.body, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete a resident by phone number
router.delete('/:phoneNumber',(req,res)=>{
    // res.send(`Deleted resident`)
    EntryCollection.findOneAndDelete({phoneNumber:req.params.phoneNumber}, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})


// //sanity
// router.get('/testRoute',(req,res)=>{
//     res.send(`Route linked`)
// })

//export router
module.exports = router;