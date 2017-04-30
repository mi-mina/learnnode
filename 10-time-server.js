/*
    There are two categories of TCP socket programs you can write - i. server,
    ii. client. A TCP server listens for connections to it from clients and send
    data to the client. A TCP client connects to a TCP server exchange data with
    it. The communication between client and server happens via sockets.
    
    The net module has a method named net.createServer() that takes a  
    function. The function that you need to pass to net.createServer() is a  
    connection listener that is called more than once. Every connection  
    received by your server triggers another call to the listener. The  
    listener function has the signature:  
   
     function listener(socket) { ... }  
   
    net.createServer() also returns an instance of your server. You must call  
    server.listen(portNumber) to start listening on a particular port. 
    
    The socket object contains a lot of meta-data regarding the connection,  
    but it is also a Node duplex Stream, in that it can be both read from, and  
    written to. For this exercise we only need to write data and then close  
    the socket.
*/
var net = require("net");
var strf =require("strftime");

var port = process.argv[2];

var server = net.createServer(function (socket) {
    // We have a connection - a socket object is assigned to the connection automatically
    // console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    socket.end(strf('%F %R', new Date()) + '\n');
});

server.listen(port);

/*
    Otra solución, sin usar strftime.
    
    var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/