const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const studentRoute = require('./api/routes/student');
// const fecultyRoute = require('./api/routes/feculty');
const userRoute = require('./api/routes/user');


// Database connection
// 4SMdIp6cL1AcXISn
mongoose.connect('mongodb+srv://sbs:4SMdIp6cL1AcXISn@sbs.h5eks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.on('error', err => {
    console.log('connection failed');
});
mongoose.connection.on('connected', connected => {
    console.log('connected succesfully');
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use('/student', studentRoute);
// app.use('/feculty', fecultyRoute);
app.use('/user', userRoute);






app.use((req, res, next) => {
    res.status(404).json({
        error: 'url doesnot exist'
    })
})

module.exports = app;