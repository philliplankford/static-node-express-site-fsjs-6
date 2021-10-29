const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

function getRandom(min, max) {
    return Math.floor( Math.random() * max ) - min;
}

router.get('/', (req, res) => {
    const randProject = getRandom( 0, projects.length );
    res.redirect(`project/${randProject}`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const { project_name } = projects[id];
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];

    const { image_urls } = projects[id];
    const { landing } = image_urls;
    const { project_page } = image_urls;

    const templateData = { 
        project_name, 
        description, 
        technologies,
        live_link,
        github_link,
        landing,
        project_page
    };

    res.render('project', templateData);
});

module.exports = router;