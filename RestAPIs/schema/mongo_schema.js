const mongoose = require("mongoose");

const pbSchema = new mongoose.Schema({
    budget: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    }
}, {collection: 'personal_budget'})

module.exports = mongoose.model('personal_budget', pbSchema) 