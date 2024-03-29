var http = require('http');
var util = require('util');
var querystring = require('querystring');
var client = require('mongodb').MongoClient;

var uri = process.env.MONGOLAB_URI || 'mongodb://@127.0.0.1:27017/messages';
//MONGOLAB_URI=mongodb://user:pass@server.mongohq.com:port/db_name

client.connect(uri, function(error, db) {
  if (error) return console.error(error);
  var collection = db.collection('messages');
  var app = http.createServer(function (request, response) {
    var origin = (request.headers.origin || '*');
    if (request.method == 'OPTIONS') {
      response.writeHead('204', 'No Content', {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'content-type, accept',
        'Access-Control-Max-Age': 10, // In seconds
        'Content-Length': 0
      });
      response.end();
    } else if (request.method === 'GET' && (request.url === '/messages' || request.url === '/messages/')) {
      collection.find().toArray(function(error,results) {
        if (error) return console.error(error);
        var body = JSON.stringify(results);
        response.writeHead(200,{
          'Access-Control-Allow-Origin': origin,
          'Content-Type':'text/plain',
          'Content-Length':body.length
        });
        console.log('LIST OF OBJECTS: ');
        console.dir(results);
        response.end(body);
      });
    } else if (request.method === 'POST' && (request.url === '/messages' || request.url === '/messages/')) {
      request.on('data', function(data) {
        console.log('RECEIVED DATA:');
        data = data.toString('utf-8');
        console.log(data)
        try {
          data = JSON.parse(data);
        }
        catch (error) {
          if (error) return console.error(error);
        }
        collection.insert(data, {safe:true}, function(error, obj) {
          if (error) return console.error(error);
          console.log('OBJECT IS SAVED: ');
          console.log(JSON.stringify(obj));
          var body = JSON.stringify(obj);
          response.writeHead(200,{
            'Access-Control-Allow-Origin': origin,
            'Content-Type':'text/plain',
            'Content-Length':body.length
          })
          response.end(body);
        })
      })
    } else {
    	response.end('Supported endpoints: \n GET /messages\n POST /messages \n');
    }
  })
  var port = process.env.PORT || 3000;
  app.listen(port);
})
