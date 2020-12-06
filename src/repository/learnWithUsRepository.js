const { learnWithUs } = require('../model/learnWithUsSchema');


async function getAll() {
    try {
        return await learnWithUs.find();
    } catch (error) {
        return {};
    } 
}

function addExerciseForm (body) {
    try {
        const newExerciseForm = new learnWithUs(body);

        newExerciseForm.save();
    } catch (error) {
        return {};
    }
}



module.exports = {
    getAll,
    addExerciseForm
}