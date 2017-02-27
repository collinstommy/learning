

var express = require('express');
var app = express();
var path = require('path'), jade = require('jade');
var port = process.argv[2];

app.put('/message/:msgId', function(req, res){
    var id = req.params.msgId;
    var encryptedID = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
    res.send(encryptedID);
});
app.listen(port);