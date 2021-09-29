// Reference Node's built in HTTP library to run a local web server
let http = require('http');

// Use the HTTP library to start a web server and listen for HTTP request events and send HTTP response
http.createServer((req, res) => {
    // Write HTTP headers with a 200 OK Status code
    res.writeHead(200, { 'Content-Type': 'text-plain' })
    res.write('Hello World - Our First Node Page');
    res.end();
}).listen(3000);

// print message to console to show server is active
console.log('Node Running | Listening on port 3000...');