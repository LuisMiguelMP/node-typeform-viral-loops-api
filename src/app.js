const express = require('express');
const app = express();
const router = express.Router();


const set_participant = require('./routes/set_participant');
const get_participant = require('./routes/get_participant');
app.use(express.json())
app.use('/set', set_participant);
app.use('/get', get_participant);

module.exports = app;