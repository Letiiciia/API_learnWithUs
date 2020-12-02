const { exercises_learnWithUs } = require('../model/learnWithUs_Schema')
const model = require('../model/learnWithUs_Schema')

const getAll = (request, response) => {
    console.log(request.url)
    model.exercises_learnWithUs.find((error, exercise) =>{
        if(error){
            return response.status(500).send({
                message: 'Error to get exercises',
                error
            })
        }else{
            return response.status(200).send({
                message: 'All exercises here',
                exercise
            })
        }
    })
}

const postExercise = (request, response) => {
    console.log(request.url);
    const body = request.params.body;
    const newExercise = new exercises_learnWithUs(body);

    newExercise.save((error) => {
        if(error){
            return response.status(400).send({
                message: 'Error on the Exercise Form',
                error
            })
        }else{
            return response.status(200).send({
                message: 'New Form Exercise inserted',
                newExercise
            })
        }
    })
}









module.exports = {
    getAll,
    postExercise
}