const express = require('express');
const router = express.Router();
const controller = require('../controller/learnWithUs_controller');
router.get('/exercises', controller.getAll);
module.exports= router;