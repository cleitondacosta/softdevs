const express = require('express');
const DevController = require('./controllers/Dev');

const router = express.Router();

router.get('/dev/:user', DevController.show);
router.post('/dev', DevController.store);
router.put('/dev', DevController.update);
router.delete('/dev/all', DevController.deleteAll);

module.exports = router;
