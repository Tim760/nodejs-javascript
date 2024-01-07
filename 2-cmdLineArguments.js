'use strict';

let greeting = 'Hello'

// Enter in a command line argument to enter a name in the greeting (E.g., node 2-cmdLineArguments.js Tim).
// Only one argument is parsed, so you would need more variables assinged to additional arguments to parse more than 1 argument.
let name = (process.argv[2]);

console.log(greeting, name);