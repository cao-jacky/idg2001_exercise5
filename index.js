
var express = require('express');
var app = express();

var wiki = require('./wiki.js');

app.use('/wiki', wiki);

app.listen(3000);
