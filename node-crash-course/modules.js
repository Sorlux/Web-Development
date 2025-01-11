// all require does is basically run the people file
// xyz is empty unless module.exports is used in the exporting file to specify what to export

const xyz = require('./people');

console.log(xyz.people, xyz.ages);


// Lets me just directly take the variables and their values from people.js
// must be the same variable names
const {people, ages} = require('./people');
console.log(ages);

// Modules directly built into node.js
const os = require('os')