// To perform a filesystem operation we are going to need the fs module from  
//  the Node core library.

// All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'.
  
const read = require('fs').readFileSync;

read('/path/to/file')