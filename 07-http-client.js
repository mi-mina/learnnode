var http = require('http');

/*
    The response object is a Node Stream object. You can treat Node  
    Streams as objects that emit events. The three events that are of most  
    interest are: "data", "error" and "end". You listen to an event like so:  
       
    response.on("data", function (data) { ...  })  

    The "data" event is emitted when a chunk of data is available and can be  
    processed. The size of the chunk depends upon the underlying data source.  
   
    The response object / Stream that you get from http.get() also has a  
    setEncoding() method. If you call this method with "utf8", the "data"  
    events will emit Strings rather than the standard Node Buffer objects  
    which you have to explicitly convert to Strings.
*/

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    var rawData = '';
    res.on('data', (data) => { 
        console.log(data);
    });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
})
