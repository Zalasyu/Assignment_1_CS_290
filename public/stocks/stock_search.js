"use strict";

// Find the lowest or highest stock price based on request body's result.
function findStockByPrice(data){
    const stocks = require('../js/stocks.js').stocks;

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

module.exports = {findStockByPrice};
