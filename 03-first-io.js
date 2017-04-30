// To perform a filesystem operation we are going to need the fs module from  
//  the Node core library.

// All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'.
  
const read = require('fs').readFileSync;

// This method will return a Buffer object containing the complete contents of 
// the file we are reading.

// Buffer objects are Node's way of efficiently representing arbitrary arrays  
// of data, whether it be ascii, binary or some other format. Buffer objects  
// can be converted to strings by simply calling the toString() method on  
// them. e.g. var str = buf.toString().  

var numLineBreaks = read(process.argv[2]).toString().split('\n').length - 1;
console.log(numLineBreaks);