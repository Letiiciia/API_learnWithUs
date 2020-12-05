const express = require('express');
const router = express.Router();
const learnWithUsController = require('../controller/learnWithUsController');

router.get('/exercises', learnWithUsController.getAll);








module.exports= router;