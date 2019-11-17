const express = require('express');
const DevController = require('./controllers/Dev');
const CompanyController = require('./controllers/Company');

const router = express.Router();

router.get('/dev/:user', DevController.show);
router.get('/devs', DevController.index);
router.post('/dev', DevController.store);
router.put('/dev', DevController.update);
router.delete('/dev/all', DevController.deleteAll);

router.post('/company', CompanyController.store);
router.delete('/company/all', CompanyController.deleteAll);

module.exports = router;
