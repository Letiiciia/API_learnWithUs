const express = require('express');
const router = express.Router();
const controller = require('../controller/learnWithUs_controller');

router.get('/exercises', controller.getAll);
router.post('/new', controller.postExercise);






module.exports= router;