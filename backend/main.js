const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./.config.json');

// middleware
app.use(require('body-parser').json());

// database configuration
mongoose.connect(config.database.connection);
const db = mongoose.connection;
db.once('open', _ => {
    console.log('Database connected: ', config.database.connection);
});

db.on('error', err => {
    console.error('DBConnection error: ', err);
});

// define routes
app.use('/', require('./controllers/AuthenticationController'));
app.use('/user', require('./controllers/UserController'));

// start the application
app.listen(config.server.port, () => {
    console.log(`Example app listening on port ${config.server.port}`);
});