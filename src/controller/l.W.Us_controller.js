const model = require('../model/l.W.Us_models');
const { exercises_learnWithUs } = require('../model/l.W.Us_Schema');

 const getAll = (request, response) => {
     console.log(request.url);
     const {error, exercises} = model.allExercises;

     exercises_learnWithUs.find((error, exercises) => {
        if(error){
            return response.status(200).send({
                message: 'All Exercises here!',
                exercises
            });
        }else{
            return response.status(400).send({
                message: 'Error, not was possible to bring the Exercises',
                error
            })
        }
     })   
 }





 module.exports = {
     getAll
 }