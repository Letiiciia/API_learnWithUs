const { get } = require('mongoose');
const DB_learnWithUs = require('../model/exerciseSchema');
const status = require('../utils/statusCode');

const getAll = async (request, response) => {
    console.log(request.url);
    try {
        const data = await DB_learnWithUs.find({});
        console.log(data);
        response.status(status.Success).send(data);
    } catch (error) {
        console.log(error);
        response.status(status.Error).send({ message: 'erro ao acessar db' });
        
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
            return response.status(status.Success).send({ message: 'Created', newExercise });
        }
    })
}

const getById = (request, response) => {
    console.log(request.url);
    const id = request.params.id;

    DB_learnWithUs.findById({ _id: id }, (error, exercise) => {
        if (error) {
            return response.status(status.Error).send({ message: 'Fail to bring the especific exercise' });
        } else {
            return response.status(status.Success).send({ message: `Here is the exercise id: ${id}`, exercise });
        }
    })
}

const getByTheme = async (request, response) => {
    console.log(request.url);
    const theme = request.query.theme;

    await DB_learnWithUs.find({ theme: theme }, (error, exercise) => {
        if (error) {
            return response.status(status.Error).send({ message: 'Fail to bring the especific theme' });
        } else {
            return response.status(status.Success).send({ message: `Here are the exercises about ${theme}`, exercise });
        }
    })
}

const updateById = (request, response) => {
    console.log(request.url);
    const id = request.params.id;
    const body = request.body;
    const update = { new: true };

    DB_learnWithUs.findByIdAndUpdate(
        id,
        body,
        update,
        (error, exercise) => {
            if (error) {
                return response.status(status.Error).send({ message: `Fail to update the document id: ${id}` });
            } else {
                return response.status(status.Success).send({ message: `document successfully updated id: ${id}`, exercise });
            }
        }
    )
}

const deleteById = (request, response) => {
    console.log(request.url);
    const id = request.params.id;

    DB_learnWithUs.findByIdAndDelete({ _id: id }, (error) => {
        if (error) {
            return response.status(status.Error).send({ message: `Fail to delete the document id: ${id}` });
        } else {
            return response.status(status.Success).send({ message: `Document id: ${id} deleted` });
        }
    })
}

const deleteByAuthor = (request, response) => {
    console.log(request.url);
    const author = request.query.author;
    const linkedin = request.query.profile_linkedin

    DB_learnWithUs.deleteMany(
        {author: author}, 
        {profile_linkedin: linkedin},
        (error) => {
            if(error){
                return response.status(status.Error).send({message: `Fail to delete the ${author}'s document`});
            }else{
                return response.status(status.Success).send({message: `${author}'s Document deleted`});
            }
        })

}
module.exports = {
    getAll,
    addExercise,
    getById,
    getByTheme,
    updateById,
    deleteById,
    deleteByAuthor
};  