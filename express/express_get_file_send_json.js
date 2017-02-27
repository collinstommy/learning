

var express = require('express');
var app = express();
var path = require('path'), jade = require('jade');
var fs = require('fs');
var port = process.argv[2];
var filename = process.argv[3];

app.get('/books', function(req, res){
    var fileData = fs.readFile(filename, function(err, data){
       if(err) res.sendStatus(500);
       try{
           books = JSON.parse(data);
       }
       catch(e){
           res.sendStatus(500);
       }
       res.json(books);     
    });

});
app.listen(port);