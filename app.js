const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public')); // serves static assets to the client

/* === ROUTE IMPORT === */
const mainRoutes = require('./routes'); // index.js is default
const projectsRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

app.use(mainRoutes);
app.use('/projects', projectsRoutes);
app.use('/about', aboutRoutes);

app.listen(3000, () => {
    console.log('Server now running on localhost:3000');
});