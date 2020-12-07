const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/reprograma';

const connect = () =>{
    mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;
    connection.on('error', () => console.log('Error to connect with mongodb'));
    connection.once('open', () => console.log('We are connect with mongodb'));
}

module.exports = {connect}