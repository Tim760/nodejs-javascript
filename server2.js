"use strict";

// Import http module
let http = require('http');

function requestCallback(request, response) {
    
    response.write('Hello World');
    response.end();
}

let server = http.createServer(requestCallback);

server.listen(8000);

console.log("Listening...");