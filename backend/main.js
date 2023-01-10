const express = require('express');
const app = express();
const mongoose = require('mongoose');
const sessions = require('express-session');
const config = require('./.config.json');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('cookie-parser')());

// sessions
app.use(sessions({
    secret: "ultrasecretkey",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

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