const learnWithUs = require('../model/learnWithUsSchema');

async function allExercises() {
    try {
        return await learnWithUs.learnWithUs.find();
    } catch (error) {
        return {};
    }
}

function newExercise(body) {

    try {
        const newExerciseForm = new learnWithUs(body);

        newExerciseForm.save();
    } catch (error) {
        return {};
    }

}

async function ExerciseById(id) {
    try {
        return await learnWithUs.learnWithUs.find({ _id: id });
    } catch (error) {
        return "error";
    }
}

module.exports = {
    allExercises,
    newExercise,
    ExerciseById
}