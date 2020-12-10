const express = require('express');
const router = express.Router();
const exerciseController = require('../controller/exercise');

router.get('/all', exerciseController.getAll);
router.post('/new', exerciseController.addExercise);
router.get('/:id', exerciseController.getById);
router.get('/exercises', exerciseController.getByTheme); //Made with query, because I didn't got use regex 
router.patch('/update/:id', exerciseController.updateById);
router.delete('/delete/:id', exerciseController.deleteById);
router.delete('/delete', exerciseController.deleteByAuthor);






module.exports = router