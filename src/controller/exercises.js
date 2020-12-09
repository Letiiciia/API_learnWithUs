const { get } = require('mongoose');
const DB_learnWithUs = require('../model/exercisesSchema');
const status = require('../utils/statusCode');

const getAll = async (request, response) => {
    console.log(request.url);
    try {
        const data = await DB_learnWithUs.find({});
        console.log(data);
        response.status(status.Succes).send(data);
    } catch (error) {
        response.status(status.Error).send({ message: 'Fail to run the data' });
    }
}

const addExercise = (request, response) => {
    console.log(request.url);
    const body = request.body;

    const newExercise = new DB_learnWithUs(body);

    newExercise.save((error) => {
        if (error) {
            return response.status(status.Error).send({ message: 'Fail to creat new Exercise Form' });
        } else {
            return response.status(status.Succes).send({ message: 'Created', newExercise });
        }
    })
}

const getById = (request, response) => {
    console.log(request.url);
    const id = request.params.id;

    DB_learnWithUs.findById({ _id: id }, (error, exercise) => {
        if (error) {
            return response.status(status.Error).send({ message: 'Fail to bring the espercific exercise' });
        } else {
            return response.status(status.Succes).send({ message: `There is the exercise id: ${id}`, exercise });
        }
    })
}

const getByTheme = (request, response) => {
    console.log(request.url);
    const theme = request.query.theme;

    DB_learnWithUs.find({ theme: theme }, (error, exercise) => {
        if (error) {
            return response.status(status.Error).send({ message: 'Fail to bring the especific theme' })
        } else {
            return response.status(status.Succes).send({ message: `There are the exercises about ${theme}`, exercise })
        }
    })
}

module.exports = {
    getAll,
    addExercise,
    getById,
    getByTheme
};  