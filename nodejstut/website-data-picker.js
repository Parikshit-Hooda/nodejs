/*var http=require("http");
http.request({hostname:"www.values.com/inspirational-quotes"}, function(res){
res.setEncoding('utf8');
res.on('data', function(chunk){
console.log(chunk);
});
}).end();*/
//www.values.com/inspirational-quote
/*var http=require("http");
http.request({hostname:"www.goodreads.com/quotes"}, function(res){
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    console.log(chunk);
  });
}).end();
*/
var http = require('http');

http.request({ hostname: 'example.com' }, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}).end();

var dns=require('dns');
