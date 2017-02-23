const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

// Insert passport and session logic here.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Insert passport and session logic here.

module.exports = app;