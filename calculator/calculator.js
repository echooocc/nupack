"use strict";

var FlatMarkup =  require('../calculator/flatmarkup.js');
var OtherMarkup =  require('../calculator/othermarkup.js');

var Calculator = function() {};

var fm = new FlatMarkup();
var om = new OtherMarkup();

Calculator.prototype.calculate = function (base, ppl, category) {
    let flatbase = fm.getFlatBase(base);
    let total = 0;

    total = flatbase+om.getLaborMarkup(flatbase, ppl);

    if(category === "drugs") {
        total += om.getPharmMarkup(flatbase);
    }
    else if(category === "food") {
        total += om.getFoodMarkup(flatbase);
    }
    else if(category === "electronics") {
        total += om.getElectronicsMarkup(flatbase);
    }
    return parseFloat(total.toFixed(2));
};

module.exports = Calculator;