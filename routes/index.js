const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.locals.projectsArr = projects;
    res.render('index'); // passing the projects object in the second param and using that in the pug file caused the loop to crash with "undefined"... why?
});

module.exports = router;