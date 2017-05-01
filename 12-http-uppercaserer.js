const http = require('http');
const port = Number(process.argv[2]);

/* 
    https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
    
    The request object that's passed in to a handler implements the ReadableStream
    interface. This stream can be listened to or piped elsewhere just like any
    other stream. We can grab the data right out of the stream by listening to
    the stream's 'data' and 'end' events.

*/
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = [];
        
        req.on('error', function(err) {
            // This prints the error message and stack trace to `stderr`.
            console.error(err.stack);
        }).on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function() {
            // console.log(body); array of buffers
            // https://nodejs.org/api/buffer.html#buffer_class_method_buffer_concat_list_totallength
            body = Buffer.concat(body).toString().toUpperCase();
            // at this point, `body` has the entire request body stored in it as a string
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write(body);
            res.end();
        });
    }
});

server.listen(port);

/*
    otra solucion
    
    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/