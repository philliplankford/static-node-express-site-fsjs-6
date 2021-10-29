const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public')); // serves static assets to the client

/* === ROUTE IMPORT === */
const mainRoutes = require('./routes'); // index.js is default
const projectsRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

// // intentional 500 error test
// app.use((req, res, next) => {
//     const err = new Error('We ran into a problem. Please check back later.')
//     err.status = 500;
//     next(err);
// });

app.use(mainRoutes);
app.use('/projects', projectsRoutes);
app.use('/about', aboutRoutes);

/* === 404 === */
app.use((req, res, next) => { // if program gets here and does not find an executable route a new error is passed to the error handler below 
    const err = new Error('Sorry! That page does not exist.');
    err.status = 404;
    next(err);
});

/* === ERROR HANDLER === */
app.use((err, req, res, next) => { // four arguments signifies the error handler 
    res.locals.error = err; 
    res.status(err.status); 
    if (err.status === 404) {
        res.render('error', err);
    } else {
        res.render('page-not-found', err);
    }
});

/* === START LOCAL SERVER === */
app.listen(3000, () => {
    console.log('Server now running on localhost:3000');
});