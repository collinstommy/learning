
var port = process.argv[2];
var express = require('express');
var app = express();
var path = require('path'), jade = require('jade');

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.get('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()});
});
app.listen(port);