const repository = require('../repository/learnWithUsRepository');
const status = require('../utils/statusCode');




async function getAll(request, response) {
    console.log(request.url);

    var collection = await repository.getAll();

    if (collection == {}) {
        return response.status(status.NotFound).send('LearnWithUs not found');
    } else {
        return response.status(status.Succes).send(collection);
    }
}

function addExerciseForm(request, response) {
    console.log(request.url);
    const body = request.body;

    var exercise = repository.addExerciseForm(body);

    if (exercise == {}) {
        return response.status(status.Error).send('New exercise not created');
    } else {
        return response.status(status.Created).send({
            message: 'Created new exercise'
        })
    }
}




module.exports = {
    getAll,
    addExerciseForm
}
