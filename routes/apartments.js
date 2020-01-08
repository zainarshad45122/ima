const express = require('express');
const router = express.Router();

const Apartment = require('../models/Apartment');

router.get('/', (req, res) => {
    Apartment.find()
        .sort({ date: -1 })
        .then(result => res.json(result))
});

router.get('/rent-lowest', (req, res) => {
    Apartment.find()
        .sort({ coldRent: 1 })
        .then(result => res.json(result))
});

router.get('/rent-highest', (req, res) => {
    Apartment.find()
        .sort({ coldRent: -1 })
        .then(result => res.json(result))
});

router.get('/rooms-lowest', (req, res) => {
    Apartment.find()
        .sort({ rooms: 1 })
        .then(result => res.json(result))
});

router.get('/rooms-highest', (req, res) => {
    Apartment.find()
        .sort({ rooms: -1 })
        .then(result => res.json(result))
});

router.get('/size-lowest', (req, res) => {
    Apartment.find()
        .sort({ size: 1 })
        .then(result => res.json(result))
});

router.get('/size-highest', (req, res) => {
    Apartment.find()
        .sort({ size: -1 })
        .then(result => res.json(result))
});

router.get('/handycap', (req, res) => {
    Apartment.find({handycap: true})
        .sort({ date: 1 })
        .then(result => res.json(result))
});

router.post('/', (req, res) => {
    const newAppartment = {
        cover: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Traumwohnung für Senioren mit Blick auf den Sendlinger Park.', 
        building: 'A',
        number: 12,
        address: 'Fallstraße 35a',
        size: 92,
        rooms: 2.5,
        coldRent: 600.00,
        warmRent: 850.00,
        type: 'Maisonette',
        handycap: true,
        available: true
    }

    Apartment.create(newAppartment)
        .then(res.json(newAppartment))
})

router.delete('/:id', (req, res) => {
    Apartment.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;