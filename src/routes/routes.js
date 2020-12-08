const express = require('express');
const router = express.Router();
const learnWithUsController = require('../controller/exercises');

router.get('/exercises', learnWithUsController.getAll);
//router.post('/new', learnWithUsController.addExerciseForm);
router.get('/exercise/:id', learnWithUsController.getById);
router.get('/exercise/:theme', learnWithUsController.getByTheme);







module.exports= router;