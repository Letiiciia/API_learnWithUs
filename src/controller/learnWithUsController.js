const repository = require('../repository/learnWithUsRepository');
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

function addExerciseForm(request, response) {
    console.log(request.url);
    const body = request.body;

    var exercise = repository.newExercise(body);

    if (exercise == {}) {
        return response.status(status.Error).send('New exercise not created');
    } else {
        return response.status(status.Created).send({
            message: 'Created new exercise'
        })
    }
}

async function getById(request, response) {
    console.log(request.url);
    const id = request.params.id;

    const form = await repository.ExerciseById(id);
    console.log(form);

    if (form === "error") {
        return response.status(status.NotFound).send('ID not found');
    } else {
        return response.status(status.Succes).send(form)
    }
}

module.exports = {
    getAll,
    addExerciseForm,
    getById
}
