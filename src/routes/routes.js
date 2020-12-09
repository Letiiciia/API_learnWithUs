const express = require('express');
const router = express.Router();
const controller = require('../controller/exercises');

router.get('/exercises', controller.getAll);
router.post('/new', controller.addExercise);
router.get('/exercises/:id', controller.getById);
router.get('/exercises', controller.getByTheme); //Made with query, because I didn't got use regex 
router.patch('/update/:id', controller.updateById);
router.delete('/delete/:id', controller.deleteById);
router.delete('/delete', controller.deleteByAuthor);






module.exports = router