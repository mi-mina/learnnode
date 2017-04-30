const readAndFilter = require('./06-readDir');
const dirPath = process.argv[2];
const fileExt = process.argv[3];

readAndFilter(dirPath, fileExt, function (err, list) {
    if (err) throw err;
    list.forEach(elem => console.log(elem));
})