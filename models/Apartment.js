const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
    cover: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    coldRent: {
        type: Number,
        required: true
    },
    warmRent: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    handycap: {
        type: Boolean,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Apartment = mongoose.model('Apartment', apartmentSchema);