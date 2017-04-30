var http = require("http");
var URLs = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
];
var results = [];

function syncAPICalls (urls) {
    var url = urls.pop();
    var data = '';
    http.get(url, function (res) {
        res.setEncoding('utf8');
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            try {
                // console.log('data', data);
                results.push(data);
                if (urls.length) {
                    // console.log('urls.length', urls.length);
                    // console.log('results', results);
                    syncAPICalls(urls);
                } else {
                    // console.log('end results', results);
                    results.reverse().forEach(function (elem) {
                        console.log(elem);
                    });
                }
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}

syncAPICalls(URLs);

/*
    Otra solución

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/