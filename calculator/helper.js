"use strict";

var Helper = function() {

  return {
    //round output to 2 decimal place
    roundNumber: function(number) {
      return parseFloat(number.toFixed(2));
    },
    /*check partial input
     * 1,throws error when input is not number or empty
     * 2,accpet input format 5432.00, 1, 'drug'; 5432.00, 1; 5432.00, 'drugs'; 5432.00
     */
    checkInputFormat: function(args) {
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
    },

    //match categories in CategoriesConfig(predefined object in config.js)
    checkCategories: function(category, categories) {
      for (let i in categories) {
        if (categories[i].includes(category)) {
          return i;
        }
      }
      return undefined;
    }
  };
};

module.exports = Helper;