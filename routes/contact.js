

const express = require('express');

const contactusController = require('../controllers/contactus');

const router = express.Router();

router.get('/contactus', contactusController.getContact);

router.post('/contactus', contactusController.postContact);

module.exports = router;