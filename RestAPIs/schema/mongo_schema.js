const mongoose = require("mongoose");

const pbSchema = new mongoose.Schema({
    budget: {
        type: Number,
        required: true,
        
    },
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    color: {
        type: String,
        required: true,
        minlength: 7,  //7 characters including # for color codes
        maxlength: 7   //7 characters including # for color codes
    }
}, {collection: 'personal_budget'})

module.exports = mongoose.model('personal_budget', pbSchema) 