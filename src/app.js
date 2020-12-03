const database = require('./model/l.W.Us_repository');
const exercisesRoute = require('./routes/l.W.Us_routes');

const express = require('express');
const app = express();
const cors = require('cors');

database.connect();
app.use(cors());
app.use(express.json());
app.use('/', exercisesRoute);

module.exports = app;
