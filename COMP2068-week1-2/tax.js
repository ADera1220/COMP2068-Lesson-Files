// Use HTTP module to run in browser
let http = require('http');
let url = require('url');
let accounting = require('accounting');

//start web server
http.createServer((req, res) => {
    // Header
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    // Write some contents
    res.write('<h1>Tax Calculator</h1>');

    // Read the url parameter string (the part after the '?')
    let query = url.parse(req.url, true).query;
    // console.log(query);

    // Grab subtotal param from url, use parseFloat() so JS doesn't treat this as a String
    let subtotal = parseFloat(query.subtotal);

    // Calculate the tax and total
    let tax = subtotal * 0.13;
    let total = subtotal + tax;

    // Display the values, use accounting to format numbers to proper money notation
    res.write(
        '<h2>Subtotal: </h2>' + accounting.formatMoney(subtotal) + 
        '<br /><h2>Tax: </h2>' + accounting.formatMoney(tax) + 
        '<br /><h2>Total: </h2>' + accounting.formatMoney(total));

    res.end();
}).listen(3000);

console.log('Listening on port 3000...');