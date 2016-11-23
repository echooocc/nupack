"use strict";

var MarkupCalculator = require('./markupcalculator.js');
var MarkupConfig = require('./markup_config.js');
var Helper = require('./helper.js');

var mc = new MarkupCalculator();
var helper = new Helper();

var markups = MarkupConfig.MarkupConfig;
var categories = MarkupConfig.CategoriesConfig;

var Calculator = function() {

  return {
    calculate: function(base, ppl, category) {
      //format the arguments incase of partial parameters
      let args = helper.checkInputFormat(arguments);

      let flatbase = mc.getFlatBase(args.base, markups.FLAT_MARKUP_RATE);
      let total = 0;

      total = flatbase + mc.getLaborMarkup(flatbase, markups.LABOR_MARKUP_RATE, args.ppl);

      //match category with alternative names
      let matchCategory = helper.checkCategories(args.category, categories);
      if (matchCategory !== undefined) {
        total += mc.getOtherMarkup(flatbase, markups[matchCategory]);
      }
      return helper.roundNumber(total);
    }
  };
};

module.exports = Calculator;