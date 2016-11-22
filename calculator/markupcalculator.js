"use strict";

var MarkupCalculator = function() {
  function calculate(price, markups) {
    return price * markups;
  }

  return {
    getFlatBase: function(price, markup) {
      let markupPrice = calculate(price, markup);
      return markupPrice + price;
    },

    getOtherMarkup: function(price, markup) {
      let markupPrice = calculate(price, markup);
      return markupPrice;
    },

    getLaborMarkup: function(price, markup, quantity) {
      let markupPrice = calculate(price, markup) * quantity;
      return markupPrice;
    }
  };
};

module.exports = MarkupCalculator;