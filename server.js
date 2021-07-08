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

// Create a route to Stock List Page Page
app.get('/public/stocks/stocks.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/stocks/stocks.html'));

});

// Create a route to Stock Search Page Page
app.get('/public/stocks/stock_search.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/stocks/stock_search.html'));

});
// Send Json object of the highest or lowest stock price dynamically.
app.post("/server.js", (req, res) => {
    console.log(req.body);
    let req_data = req.body.filter;
    let result = findStockByPrice(req_data)
    console.log(result);
    res.send(result)


    });

// Find the lowest or highest stock price based on request body's result.
function findStockByPrice(data){
    const stocks = require('./public/js/stocks.js').stocks;

    let answer = stocks[0]["price"];
    let record;
    if (data === "highest"){
        for (let i = 0;  i < stocks.length; i++){
            let price = stocks[i]["price"];
            if (price > answer){
                answer = price;
                record = stocks[i];

            }
        }
        return record;
    } else if (data === "lowest"){
        for (let i = 0; i < stocks.length; i++){
            let price = stocks[i]["price"];
            if (price < answer){
                answer = price;
                record = stocks[i];

            }
        }
        return record;
    }
}


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Thew app.listen() function creates the Node.js web server at the specified host and port.
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`); });
