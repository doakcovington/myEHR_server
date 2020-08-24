const express = require('express');
const router = express.Router();
const database = require('../config/database');
const Charts = require('../models/Chart');

router.get('/', (request, response) => 
    Charts.findAll()
    .then( chart => {
        console.log(chart);
        response.sendStatus(200);
    })
    .catch(error => console.log(error.message)));
    

module.exports = router;