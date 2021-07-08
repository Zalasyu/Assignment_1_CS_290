'use strict';

function calculateOrderAmt(symbol, quant){
    const stocks = require('../js/stocks.js').stocks;
    let company = stocks.find(company => company.symbol === symbol);
    console.log(company);
    let orderAmt = company.price * quant;
    return orderAmt;
}

function findCompany(symbol){
    const stocks = require('../js/stocks.js').stocks;
    let company = stocks.find(company => company.symbol === symbol);
    return company;

}

module.exports = {calculateOrderAmt, findCompany};
