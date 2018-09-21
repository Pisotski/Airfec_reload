const express = require('express');
// const axios = require('axios');
const morgan = require('morgan');
const path = require('path');
const db = require('./connection.js');
// const helper = require('../helpers/getPhotos.js');
const app = express();

// use morgan to log incoming requests
app.use(morgan('dev'));

app.use(express.json());

// handle cors
/* eslint-disable consistent-return */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE',
    );
    return res.status(200).json({});
  }
  next();
});
/* eslint-enable consistent-return */

// serve up the pages
app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/Photos/:roomnumber', (req, res) => {
  const sql = `SELECT * FROM photos WHERE roomid = ${req.params.roomnumber}`;
  db.dbManipulator(sql, (err, data) => (err ? res.status(500).send() : res.status(200).send(data)));
});

// handle error
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

/* eslint-disable no-unused-vars */
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
/* eslint-enable no-unused-vars */

// determine listening port
const port = process.env.PORT || 3003;

module.exports = app;

if (!module.parent) {
  app.listen(port);
  console.log(`server listening on ${port}`);
}
