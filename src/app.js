const database = require('./database/mongoose');
const exercisesRoute = require('./routes/routes');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


database.connect();
app.use(cors());
app.use(express.json());
app.use('/', exercisesRoute);
app.use(bodyParser.json());

module.exports = app;
