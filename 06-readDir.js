const fs = require("fs");
const ext = require("path").extname;

function readAndFilter (dirPath, fileExt, callback) {
    fs.readdir(dirPath, function (err, data) {
        if (err) return callback(err);
        var list = data.filter(elem => ext(elem) === '.' + fileExt);
        // don't forget to call the callback with null
        callback(null, list);
    }); 
}

module.exports = readAndFilter;
