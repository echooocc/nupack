"use strict";

var MarkupCalculator = require('./markupcalculator.js');
var MarkupConfig = require('./markup_config.js');

var mc = new MarkupCalculator();

var markups = MarkupConfig.MarkupConfig;
var categories = MarkupConfig.CategoriesConfig;

var Calculator = function() {

  //round output to 2 decimal place
  function numberFormat(number) {
    return parseFloat(number.toFixed(2));
  }

  function checkPartialParameter(args) {
    let parameters = {};
    if (typeof args[0] !== "number" || args[0] <= 0) {
      throw new Error("Invalid base price input");
    }
    parameters.base = args[0];
    if (args.length < 3) {
      if (typeof args[1] === "string") {
        parameters.category = args[1].toLowerCase();
      }
      parameters.ppl = 1;
    } else {
      parameters.ppl = args[1];
      parameters.category = args[2].toLowerCase();
    }
    return parameters;
  }

  function checkCategories(category) {
    for (let i in categories) {
      if (categories[i].includes(category)) {
        return i;
      }
    }
    return undefined;
  }

  return {
    calculate: function(base, ppl, category) {
      //format the arguments incase of partial parameters
      let args = checkPartialParameter(arguments);

      let flatbase = mc.getFlatBase(args.base, markups.FLAT_MARKUP_RATE);
      let total = 0;

      total = flatbase + mc.getLaborMarkup(flatbase, markups.LABOR_MARKUP_RATE, args.ppl);

      //match category with alternative names
      let matchCategory = checkCategories(args.category);
      if (matchCategory !== undefined) {
        total += mc.getOtherMarkup(flatbase, markups[matchCategory]);
      }
      return numberFormat(total);
    }
  };
};

module.exports = Calculator;