const { exercises_learnWithUs } = require('../model/l.W.Us_Schema');
const model = require('../model/l.W.Us_Schema');


const allExercises = () => {
    if(model.exercises_learnWithUs){
        return {error: null, exercises: exercises_learnWithUs}
    }else{
        return {error: {message: 'identified error'}}
    }
}









module.exports = {
    allExercises  
}