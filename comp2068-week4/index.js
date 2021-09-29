// Reference Express.js Package
let express = require('express');

// Instantiate new express application - "new" keyword is not rerquired
let app = express();

// Create a callback functions to use in requests
let hello = ((req, res) => {
    res.send('Hello World');
});

let goodbye = ((req, res) => {
    res.send('Goodbye World');
});

let index = ((req, res) => {
    res.send('Home');
});

// Process any requests at the specified URLs
app.get('/hello', hello);
app.get('/goodbye', goodbye);
app.get('/', index);

app.listen(3000, () => console.log('Express listening on port 3000'));