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
module.exports = {
    getAll
}