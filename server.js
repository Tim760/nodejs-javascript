"use strict";

// Import http module
let http = require('http');

// Create a local server to receive data from
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);

console.log("Host is running");