const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const learnWithUsSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    profile_linkedin: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    exercise_1: {
        type: String,
        required: false,
    },
    exercise_2: {
        type: String,
        required: false,
    },
    exercise_3: {
        type: String,
        required: false,
    },
    exercise_4: {
        type: String,
        required: false,
    },
    exercise_5: {
        type: String,
        required: false,
    },
    exercise_6: {
        type: String,
        required: false,
    },
    exercise_7: {
        type: String,
        required: false,
    },
    exercise_8: {
        type: String,
        required: false,
    },
    exercise_9: {
        type: String,
        required: false,
    },
    exercise_10: {
        type: String,
        required: false,
    },
    answer_1: {
        type: String,
        required: false
    },
    answer_2: {
        type: String,
        required: false
    },
    answer_3: {
        type: String,
        required: false
    },
    answer_4: {
        type: String,
        required: false
    },
    answer_5: {
        type: String,
        required: false
    },
    answer_6: {
        type: String,
        required: false
    },
    answer_7: {
        type: String,
        required: false
    },
    answer_8: {
        type: String,
        required: false
    },
    answer_9: {
        type: String,
        required: false
    },
    answer_10: {
        type: String,
        required: false
    },
},

    {
        versionKey: false
    }

)

const exercises_learnWithUs = mongoose.model('learnWithUs', learnWithUsSchema);

module.exports = {exercises_learnWithUs}