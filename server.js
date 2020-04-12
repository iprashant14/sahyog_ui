const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');

// let cors = require('cors');

const app = express();

let whitelist = ['http://127.0.0.1:8000',];
// let corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// };

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);