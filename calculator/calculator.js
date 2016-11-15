"use strict";

var MarkupCalculator = require('./markupcalculator.js');
var MarkupConfig = require('./markup_config.js');

var mc = new MarkupCalculator();
var markups = new MarkupConfig();

var Calculator = function() {
  function numberFormat(number) {
    return parseFloat(number.toFixed(2));
  }

  function checkPartialParameter(args) {
    var parameters = {};
    if (typeof args[0] !== "number" || args[0] <= 0) {
      throw new Error("Invalid base price input");
    }
    parameters.base = args[0];
    if (args.length < 3) {
      if (typeof args[1] === "string") {
        parameters.category = args[1];
      }
      parameters.ppl = 1;
    } else {
      parameters.ppl = args[1];
      parameters.category = args[2];
    }
    return parameters;
  }

  return {
    calculate: function(base, ppl, category) {
      //format the arguments incase of partial parameters
      let args = checkPartialParameter(arguments);

      let flatbase = mc.getFlatBase(args.base, markups.FLAT_MARKUP_RATE);
      let total = 0;

      total = flatbase + mc.getLaborMarkup(flatbase, markups.LABOR_MARKUP_RATE, args.ppl);

      if (args.category === "drugs") {
        total += mc.getOtherMarkup(flatbase, markups.PHARM_MARKUP_RATE);
      } else if (args.category === "food") {
        total += mc.getOtherMarkup(flatbase, markups.FOOD_MARKUP_RATE);
      } else if (args.category === "electronics") {
        total += mc.getOtherMarkup(flatbase, markups.ELECTRONICS_MARKUP_RATE);
      }
      return numberFormat(total);
    }
  };
};

module.exports = Calculator;