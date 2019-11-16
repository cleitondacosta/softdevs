const express = require('express');
const DevController = require('./controllers/Dev');

const router = express.Router();

router.post('/dev', DevController.store);
router.put('/dev', DevController.update);
router.delete('/dev/all', DevController.deleteAll);

module.exports = router;
