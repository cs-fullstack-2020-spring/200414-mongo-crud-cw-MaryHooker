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
router.get('/lastName/:lastName',(req,res)=>{
    // res.send(`Display multiple residents by last name`)
    
})

//Find single residents
router.get('/single/:single',(req,res)=>{
    // res.send(`Display single residents`)
})

//Find one resident by first name
router.get('/firstName/:firstName',(req,res)=>{
    // res.send(`Display resident by first name`)
})

//Display all residents
router.get('/',(req,res)=>{
    // res.send(`Display all residents`)
})

//Update a resident by phone number
router.put('/:phoneNumber',(req,res)=>{
    // res.send(`Updated resident`)
})

//Delete a resident by phone number
router.delete('/:phoneNumber',(req,res)=>{
    // res.send(`Deleted resident`)
})


// //sanity
// router.get('/testRoute',(req,res)=>{
//     res.send(`Route linked`)
// })

//export router
module.exports = router;