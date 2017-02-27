
var port = process.argv[2];
var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
    var backwardsWord = reverse(req.body.str); 
    res.end(backwardsWord);
});
app.listen(port);

function reverse(word){
    return word.split("").reverse().join("");
}