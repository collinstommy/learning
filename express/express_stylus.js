
var express = require('express');
var stylus = require('stylus');
var app = express();

app.use(stylus.middleware('public'));
app.use(express.static('public'));
app.listen(port);