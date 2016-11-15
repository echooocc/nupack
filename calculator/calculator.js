"use strict";

var MarkupCalculator = require('./markupcalculator.js');
var MarkupConfig = require('./markup_config.js');

var mc = new MarkupCalculator();
var markups = new MarkupConfig();

var Calculator = function() {
  function numberFormat(number) {
    return parseFloat(number.toFixed(2));
  }

  return {
    calculate: function(base, ppl, category) {
      if (typeof base !== "number" || base <= 0) {
        throw new Error("Invalid base price input");
      }

      if (arguments.length < 3) {
        if (typeof arguments[1] === "string") {
          category = arguments[1];
        }
        ppl = 1;
      }

      let flatbase = mc.getFlatBase(base, markups.FLAT_MARKUP_RATE);
      let total = 0;

      total = flatbase + mc.getLaborMarkup(flatbase, markups.LABOR_MARKUP_RATE, ppl);

      if (category === "drugs") {
        total += mc.getOtherMarkup(flatbase, markups.PHARM_MARKUP_RATE);
      } else if (category === "food") {
        total += mc.getOtherMarkup(flatbase, markups.FOOD_MARKUP_RATE);
      } else if (category === "electronics") {
        total += mc.getOtherMarkup(flatbase, markups.ELECTRONICS_MARKUP_RATE);
      }
      return numberFormat(total);
    }
  };
};

module.exports = Calculator;