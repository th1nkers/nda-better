const express = require('express');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');

const homeRoutes = require('./routes/home-routes');
const HttpError = require('./models/http-error');

const app = express();

const MONGO_URL = process.env.MONGO_URL;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api', homeRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

mongoose.
    connect(MONGO_URL)
    .then(() => {
        app.listen(5000);
    })
    .catch(err => console.log(err));