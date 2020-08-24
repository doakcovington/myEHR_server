const { Sequelize } = require('sequelize');

module.exports = new Sequelize('myehr', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});
