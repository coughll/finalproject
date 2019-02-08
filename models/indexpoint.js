const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indexpointSchema = new Schema({
    index:{
        type: Number,// decimal under 1.00 representing a percent value
        required: true
    },
    date:{
        type: String,//date and time when the data was scraped
        required: true
    },
});

var indexPoint = mongoose.model('indexPoint', indexpointSchema);
module.exports = indexPoint;