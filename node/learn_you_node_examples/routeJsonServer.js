

var http = require('http');
var url = require('url');

var port = process.argv[2];
var file =  process.argv[3];

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') {
        return res.end('send me a GET\n')
  }

  var reqUrl = url.parse(req.url, true);
  var route =  reqUrl.pathname;
  var date = reqUrl.query.iso;

    if(route === "/api/parsetime"){
          sendResponse(toJsonTime(date), res);
    }  
    if(route === "/api/unixtime"){
      sendResponse(toUnixTime(date), res);
    }
  });
server.listen(port);


function sendResponse(data, res){
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(data);
    res.end();
}

function toJsonTime(data){
  var date =  new Date(data);
  var obj = {"hour" :  date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds()};
  return JSON.stringify(obj);
}

function toUnixTime(data){
  var date =  new Date(data);
  var obj = {"unixtime" : date.getTime()};
  return JSON.stringify(obj);
}


       
