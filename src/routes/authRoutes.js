const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/register', authController.user);


module.exports = router