const { Sequelize } = require('sequelize');
const database = require('../config/database');

const Chart = database.define('chart', {
    pcp: {
        type: Sequelize.STRING 
    },
    name: {
        type: Sequelize.STRING
    },
    dob: {
        type: Sequelize.DATE 
    }
})

module.exports = Chart;