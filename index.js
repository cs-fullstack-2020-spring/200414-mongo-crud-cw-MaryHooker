//200414 Mongo CRUD CW

//create entry point
let express = require('express');
let app = express();

//port number
let portNumber = 4000;

// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = 'mongodb+srv://Student:C0d3Cr3w@cluster0-p8fhv.mongodb.net/cs_database?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//import json middleware
app.use(express.json());

//import route and mount
let api = require('./routes/api');
app.use('/api',api);

//listen on port
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})

// //sanity
// app.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`);
// })

