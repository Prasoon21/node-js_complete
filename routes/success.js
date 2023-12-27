const path = require('path');

const express = require('express');

const contactusController = require('../controllers/contactus');

const router = express.Router();

router.get('/success', contactusController.getSuccess);

module.exports = router;