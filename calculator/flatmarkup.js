"use strict";

var FlatMarkup = function() {};

const FLAT_MARKUP_RATE = 0.05;

FlatMarkup.prototype.getFlatMarkup = function(base) {
  let markup = base * FLAT_MARKUP_RATE;
  return parseFloat(markup.toFixed(2));
};

FlatMarkup.prototype.getFlatBase = function(base) {
  let price = this.getFlatMarkup(base) + base;
  return parseFloat(price.toFixed(2));
};

module.exports = FlatMarkup;