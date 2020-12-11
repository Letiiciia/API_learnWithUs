const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();


const DB_URI = process.env.DB_URI

const connect = () =>{
    mongoose.connect(DB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false});
    const connection = mongoose.connection;
    connection.on('error', () => console.log('Error to connect with mongodb'));
    connection.once('open', () => console.log('We are connect with mongodb'));
}

module.exports = {connect}