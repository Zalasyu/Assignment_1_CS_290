'use strict';

// NOTE: Don't change the port number
const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file `stocks.js`
const stocks = require('./public/js/stocks.js').stocks;

// Express is a minimal and flexible Node.js web application framework that provides a robust
// set of features for web and mobile applications.
const express = require("express");
const path = require('path');
const app = express();


app.use(express.urlencoded({
    extended: true
}));

// Create a route to Stocks Html Page
app.get('/public/stocks/stocks.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/stocks/stocks.html'));

});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Thew app.listen() function creates the Node.js web server at the specified host and port.
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`); });
