const read = require('fs').readFile;

// readFile is asynchronous, so we muss pass a callback function to it.

read(process.argv[2], (err, data) => {
    if (err) throw err
    console.log(data.toString().split('\n').length - 1);
})