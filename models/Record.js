const { Sequelize } = require('sequelize');
const database = require('../config/database');

const Record = database.define('record', {
    temperature: {
        type: Sequelize.NUMERIC
    },
    pulse: {
        type: Sequelize.NUMERIC
    },
    pain: {
        type: Sequelize.NUMERIC
    },
    comments: {
        type: Sequelize.TEXT
    },
    chart_id: {
        type: Sequelize.BIGINT
    },
    systolic: {
        type: Sequelize.NUMERIC
    },
    diastolic: {
        type: Sequelize.NUMERIC
    },
});

module.exports = Record;