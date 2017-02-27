
var net = require('net');
var fs =  require('fs');

var port = process.argv[2];
var file =  process.argv[3];

  var http = require('http')
     var server = http.createServer(function (req, res) {
       res.writeHead(200, { 'content-type': 'text/plain' })
       var stream = fs.createReadStream(file);
       stream.pipe(res);
     });
     server.listen(port);
