const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    date: {
        type: Date,
        default: Date.now
    },
},

{ collection: 'user' }

);

const User_learnWithUs = mongoose.model('user', userSchema);

module.exports = User_learnWithUs