const express = require('express');
const router = express.Router();

router.get('/', (request, response) => response.send('Chart'));

module.exports = router;