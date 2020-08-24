//NCWH
//WDGTR
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./config/database')

database.authenticate()
    .then(() => console.log("Connected to myehr database"))
    .catch(error => console.log(error.message))


const app = express();

app.get('/', (request, response) => response.send("We Don't Go To Ravenholm"));

//Chart route
app.use('/chart', require('./Routes/chart'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

