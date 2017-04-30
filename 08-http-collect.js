var http = require('http');

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    var rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            console.log(rawData.length);
            console.log(rawData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
    
})