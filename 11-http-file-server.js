/* 
    http.createServer() creates a server that can talk HTTP
    request is used to fetch properties, such as the header and query-string
    from the request while response is for sending data to the client, both
    headers and body.
    
    Both request and response are also Node streams! Which means that you can  
    use the streaming abstractions to send and receive data
    
    The fs core module also has some streaming APIs for files. You will need  
    to use the fs.createReadStream() method to create a stream representing  
    the file you are given as a command-line argument. The method returns a  
    stream object which you can use src.pipe(dst) to pipe the data from the  
    src stream to the dst stream. In this way you can connect a filesystem  
    stream with an HTTP response stream.
*/
const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);
const fileLocation = process.argv[3];

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    // This line opens the file as a readable stream
    var readStream = fs.createReadStream(fileLocation);
    
    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(res);
    });
});

server.listen(port);