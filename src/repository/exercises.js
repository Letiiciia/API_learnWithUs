const learnWithUs = require('../model/exercisesSchema');

async function allExercises() {
    try {
        return await learnWithUs.learnWithUs.find();
    } catch (error) {
        return {};
    }
}

// function newExercise(body) {

//     const newExerciseForm = new learnWithUs.learnWithUs(body);

//     const exercise = repository.newExercise(body);

//     newExerciseForm.save((error, exercise) => {
//         if (error) {
//             return error
//         } else {
//             return exercise
//         }
//     })
// }

async function exerciseById(id) {
    try {
        const exercise = await learnWithUs.learnWithUs.find({ _id: id });

        if (exercise == "") {
            return "empty";
        } else {
            return exercise;
        }


    } catch (error) {
        return "error";
    }
}

async function exerciseByTheme(theme) {
    try {
        const exercise = await learnWithUs.learnWithUs.find({theme: theme});

        if (exercise == "") {
            return "empty";
        } else {
            return exercise;
        }


    } catch (error) {
        return "error";
    }
        

}

module.exports = {
    allExercises,
    //newexercise,
    exerciseById,
    exerciseByTheme
}