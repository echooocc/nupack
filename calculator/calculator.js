"use strict";

var FlatMarkup = require('./flatmarkup.js');
var OtherMarkup = require('./othermarkup.js');

var Calculator = function() {};

var fm = new FlatMarkup();
var om = new OtherMarkup();

Calculator.prototype.calculate = function(base, ppl, category) {

  if (typeof base !== "number" || base <= 0) {
    throw new Error("Invalid base price input");
  }

  if (arguments.length < 3) {
    if (typeof arguments[1] === "string") {
      category = arguments[1];
    }
    ppl = 1;
  }

  let flatbase = fm.getFlatBase(base);
  let total = 0;

  total = flatbase + om.getLaborMarkup(flatbase, ppl);

  if (category === "drugs") {
    total += om.getPharmMarkup(flatbase);
  } else if (category === "food") {
    total += om.getFoodMarkup(flatbase);
  } else if (category === "electronics") {
    total += om.getElectronicsMarkup(flatbase);
  }
  return parseFloat(total.toFixed(2));
};

module.exports = Calculator;