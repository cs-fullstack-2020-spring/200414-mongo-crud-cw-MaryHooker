//200414 Mongo CRUD CW

//create entry point
let express = require('express');
let app = express();

//port number
let portNumber = 2112;

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

