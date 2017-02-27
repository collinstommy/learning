

var express = require('express');
var app = express();
var path = require('path'), jade = require('jade');
var port = process.argv[2];
var filename = process.argv[3];

app.get('/books', function(req, res){
    var fileData = fs.readFile(filename, function(data){
       res.send(JSON.parse(data));     
    });

});
app.listen(port);