// Link to connect npm package
let connect = require('connect');

// Create a new instance of a connection application - "new" keyword not required
let app = connect();

// Set a function to handle a request at the root path
let index = (req, res) => {
    // If request is at root, show homepage message
    if (req.url === '/') {
        res.writeHead(200);
        res.write('Hello home page ');
        res.end('Over and out');
    } else {
        // user has requested a URl that does not exist, show a 404 'Not Found' page
        res.writeHead(404);
        res.write('Page Not Found');
        res.end();
    }
}

let hello = (req, res) => {
    res.writeHead(200);
    res.write('Hello World');
    res.end();
}

let goodbye = (req, res) => {
    res.writeHead(200);
    res.write('Goodbye World ');
    res.end('until we meet again');
}

// URL mapping
app.use('/goodbye', goodbye); // Order of non-root paths is not important
app.use('/hello', hello); // Paths are match sequentially, root path must be last for routes to work
app.use('/', index); // Request at the root are handled by the index function above

// Start the webserver on port 300
app.listen(3000);
console.log('Connect server running on port 3000');