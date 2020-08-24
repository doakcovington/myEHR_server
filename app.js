//NCWH
//WDGTR
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (request, response) => response.send("We Don't Go To Ravenholm"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));