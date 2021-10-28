const express = require('express');
const data = require('data.json');
const path = require('path');

const app = express();

app.set('view engine', 'pug');