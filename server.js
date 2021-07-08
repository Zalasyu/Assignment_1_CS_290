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

// Local Modules
const stock_search = require("./public/stocks/stock_search");
const stock_order = require("./public/stocks/stock_order");

app.use(express.urlencoded({
    extended: true
}));

// Create a route to Stock List Page Page
app.get('/public/stocks/stocks.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/stocks/stocks.html'));

});

// Create a route to Stock Search Page Page
app.get('/public/stocks/stock_search.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/stocks/stock_search.html'));

});
// Send Json object of the highest or lowest stock price dynamically.
app.post("/stock_search", (req, res) => {
    console.log(req.body);
    let req_data = req.body.filter;
    let result = stock_search.findStockByPrice(req_data)
    console.log(result);
    res.send(result)
});

// 
app.post("/stock_order", (req, res) => {
    console.log(req.body);
    let sym = req.body.symbol
    let quant = req.body.quantity
    console.log(sym);
    console.log(quant);
    let order_amount = stock_order.calculateOrderAmt(sym, quant);
    let company = stock_order.findCompany(sym);
    res.send(`You placed an order to buy ${quant} stocks of ${company.company}. The price of one stock is $${company.price} and the total price for this order is $${order_amount}.`)

});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Thew app.listen() function creates the Node.js web server at the specified host and port.
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`); });
