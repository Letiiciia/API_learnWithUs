const express = require('express');
const router = express.Router();
const exerciseController = require('../controller/exerciseControllers');

router.get('/all', exerciseController.getAll);
router.post('/new', exerciseController.addExercise);
router.get('/:id', exerciseController.getById);
router.get('/theme', exerciseController.getByTheme); //query
router.patch('/update/:id', exerciseController.updateById);
router.delete('/delete/:id', exerciseController.deleteById);
router.delete('/delete', exerciseController.deleteByAuthor);


module.exports = router