"use strict";

var OtherMarkup = function() {};

const LABOR_MARKUP_RATE = 0.012;

const PHARM_MARKUP_RATE = 0.075;
const FOOD_MARKUP_RATE = 0.13;
const ELECTRONICS_MARKUP_RATE = 0.02;


OtherMarkup.prototype.getLaborMarkup = function(addson, quantity) {
  let markup = addson * LABOR_MARKUP_RATE * quantity;
  return parseFloat(markup.toFixed(2));
};

OtherMarkup.prototype.getPharmMarkup = function(addson) {
  let markup = addson * PHARM_MARKUP_RATE;
  return parseFloat(markup.toFixed(2));
};

OtherMarkup.prototype.getFoodMarkup = function(addson) {
  let markup = addson * FOOD_MARKUP_RATE;
  return parseFloat(markup.toFixed(2));
};

OtherMarkup.prototype.getElectronicsMarkup = function(addson) {
  let markup = addson * ELECTRONICS_MARKUP_RATE;
  return parseFloat(markup.toFixed(2));
};

module.exports = OtherMarkup;