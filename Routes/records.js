const express = require('express');
const router = express.Router();
const database = require('../config/database');
const Records = require('../models/Record');

router.get('/', (request, response) => 
    Records.findAll()
    .then(record => {
        console.log(record);
        response.json(record)
        response.sendStatus(200);
    })
    .catch(error => console.log(error.message))
);

module.exports = router;