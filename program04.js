const readDir = require("fs").readdir;
const ext = require("path").extname;

readDir(process.argv[2], (err, list) => {
    if (err) throw err;
    var filteredList = list.filter(elem => ext(elem) === '.' + process.argv[3])
    filteredList.forEach(elem => console.log(elem))
})