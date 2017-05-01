const http = require('http');
const url = require('url');
const strf =require("strftime");
const port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
    // console.log('Request for ' + req.url + ' by method ' + req.method);
    
    if (req.method === 'GET') {
        var parsedUrl = url.parse(req.url, true);
        var pathName = parsedUrl.pathname;
        var date = new Date(parsedUrl.query.iso);
        
        if (pathName === '/api/parsetime') {

            var jsonRes = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            // res.statusCode = 200;
            // res.setHeader('Content-Type', 'application/json');
            res.writeHead(200, { 'Content-Type': 'application/json' })  
            res.end(JSON.stringify(jsonRes));
        } else if (pathName === '/api/unixtime') {
            var jsonRes = {
                unixtime: date.getTime()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' })  
            res.end(JSON.stringify(jsonRes));
        } else {
            res.writeHead(404)
            res.end()
        }
    }
});

server.listen(port);

/*
    Otra solcion 
    
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/