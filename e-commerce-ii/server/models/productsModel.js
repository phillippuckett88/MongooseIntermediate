/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/** Schema Object*/
var productSchema = mongoose.Schema({
    title: { type: String, unique: Boolean, required: true, index: String },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    reviews: [{
        reviewer: { type: String },
        rating: { type: Number },
        desc: { type: String },
        date: { type: Date, default: new Date() }
    }]
});

/** The model for the schema above*/
module.exports = mongoose.model('product', productSchema);