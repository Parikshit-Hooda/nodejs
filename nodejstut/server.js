//var http=require("http");
/*http.createServer(function(request, response){
response.writeHead(200, {"Content-Type":"text/plain"});
response.write("Hello World..");
response.end();
}).listen(8888);

function say(word){
  console.log(word);
}

function execute(someFunction, value){
  someFunction(value);
}
execute(say, "hello");*/


//http.request({ hostname: 'deepstream.io' }, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}).end();
var emptygif = require('emptygif');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/tpx.gif', function(req, res, next) {
  io.emit('visit', {
    ip: req.ip,
    ua: req.headers['user-agent']
  });

  emptygif.sendEmptyGif(req, res, {
    'Content-Type': 'image/gif',
    'Content-Length': emptygif.emptyGifBufferLength,
    'Cache-Control': 'public, max-age=0' // or specify expiry to make sure it will call everytime
  });
});
