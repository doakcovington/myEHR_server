const { Sequelize } = require('sequelize');
const database = require('../config/database');

const Chart = database.define('chart', {
    pcp: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT
    },
    dob: {
        type: Sequelize.DATE
    }
})

module.exports = Chart;