const repository = require('../repository/exercises');
const status = require('../utils/statusCode');

async function getAll(request, response) {
    console.log(request.url);

    var collection = await repository.allExercises();

    if (collection == {}) {
        return response.status(status.NotFound).send('LearnWithUs not found');
    } else {
        return response.status(status.Succes).send(collection);
    }
}

// function addExerciseForm(request, response) {
//     console.log(request.url);
//     const body = request.body;

//     const exercise = repository.newExercise(body);
//     console.log(exercise);

//     if (exercise == error) {
//         return response.status(status.Error).send('New exercise not created');
//     } else {
//         return response.status(status.Created).send({
//             message: 'Created new exercise'
//         })
//     }
// }

async function getById(request, response) {
    console.log(request.url);
    const id = request.params.id;

    const form = await repository.exerciseById(id);
    console.log(form);

    if (form === "empty") {
        return response.status(status.NotFound).send('ID not found');
    } else if (form === "error") {
        return response.status(status.Error).send('Server Error')
    } else {
        return response.status(status.Succes).send(form)
    }
}

async function getByTheme(request, response) {
    console.log(request.url);
    const theme = request.params.theme;

    const form = await repository.exerciseByTheme(theme);
    console.log(form);

    if (form === "empty") {
        return response.status(status.NotFound).send('ID not found');
    } else if (form === "error") {
        return response.status(status.Error).send('Server Error')
    } else {
        return response.status(status.Succes).send(form)
    }
}

module.exports = {
    getAll,
    //addExerciseForm,
    getById,
    getByTheme
}
