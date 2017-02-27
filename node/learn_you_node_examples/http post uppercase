
var net = require('net')
var fs =  require('fs');
var http = require('http');

var port = process.argv[2];
var file =  process.argv[3];

var server = http.createServer(function (req, res) {

  if (req.method !== 'POST') {
         return res.end('send me a POST\n')
       }

        var body = "";
          req.on('data', function (data) {
          body += data.toString().toUpperCase();    
        });
        
          req.on('end', function(){
          res.writeHead(200, { 'content-type': 'text/plain' });
          res.write(body);
          res.end();
        });
  });
server.listen(port);


       
