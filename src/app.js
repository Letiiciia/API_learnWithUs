const database = require('./database/mongoose');
const exercisesRoute = require('./routes/exerciseRoutes');
const userRoute = require('./routes/accountRoutes.js')

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

database.connect();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/exercise', exercisesRoute);

app.use('/', userRoute, () => {
    console.log("API learnWithUs")
})







module.exports = app;
