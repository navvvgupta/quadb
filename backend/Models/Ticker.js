const mongoose = require('mongoose');

const tickerSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
});

// Create a Mongoose model
module.exports = mongoose.model('Ticker', tickerSchema);