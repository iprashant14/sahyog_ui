const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use('/static', express.static(path.join(__dirname, 'node_modules')));

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);