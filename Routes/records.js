const express = require('express');
const router = express.Router();
const database = require('../config/database');
const Records = require('../models/Record');
const Record = require('../models/Record');
const { create } = require('../models/Record');

router.get('/', (request, response) => 
    Records.findAll()
    .then(record => {
        console.log(record);
        response.json(record)
        response.sendStatus(200);
    })
    .catch(error => console.log(error.message))
);

router.post('/', (request, response) => {
    let { temperature, pulse, pain, comments, chart_id, systolic, diastolic } = request.body;

    Record.create({
        temperature,
        pulse,
        pain,
        comments,
        chart_id,
        systolic,
        diastolic
    })
    //.then(response.json())
    .then(record => {
        console.log(record);
        response.status.send({ status: 'OK'}); //this was causing the 'JS post fetch SyntaxError: Unexpected token O in JSON at position 0' error
    })
    .catch(error => console.error(error));
})

module.exports = router;