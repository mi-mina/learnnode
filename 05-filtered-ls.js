const read = require("fs").readdir;
const ext = require("path").extname;

function readDir (dirPath, callback) {
    return read(dirPath, callback);
}

function filterDir (err, list, fileExt) {
    if (err) throw err;
    var filteredList = list.filter(elem => ext(elem) === '.' + fileExt);
    filteredList.forEach(elem => console.log(elem));
}

readDir(process.argv[2], function (err, list) {
    filterDir(err, list, process.argv[3])
});



//read(process.argv[2], (err, list) => {
//    if (err) throw err;
//    var filteredList = list.filter(elem => ext(elem) === '.' + process.argv[3])
//    filteredList.forEach(elem => console.log(elem))
//})