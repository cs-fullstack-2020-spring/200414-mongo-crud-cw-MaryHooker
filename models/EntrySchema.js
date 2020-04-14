//Create model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let EntrySchema = new Schema (
    
        {
            "firstName":String,
            "lastName":String,
            "pets":Array,
            "single":Boolean,
            "phoneNumber":Number,
        }
        
)

//export model
module.exports = mongoose.model('videoEntries',EntrySchema);