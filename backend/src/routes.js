const express = require('express');
const DevController = require('./controllers/Dev');

const router = express.Router();

router.post('/dev', DevController.store);

module.exports = router;
