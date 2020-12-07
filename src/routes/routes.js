const express = require('express');
const router = express.Router();
const learnWithUsController = require('../controller/learnWithUsController');

router.get('/exercises', learnWithUsController.getAll);
router.post('/new', learnWithUsController.addExerciseForm);
router.get('/exercise/:id', learnWithUsController.getById);








module.exports= router;