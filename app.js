//NCWH
//WDGTR
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./config/database');
const cors = require('cors');

database.authenticate()
    .then(() => console.log("Connected to myehr database"))
    .catch(error => console.log(error.message))

//middleware
const app = express();
app.use(cors());

app.get('/', (request, response) => response.send("We Don't Go To Ravenholm"));

//Chart route
app.use('/chart', require('./Routes/charts'));

//Record route
app.use('/records', require('./Routes/records'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

