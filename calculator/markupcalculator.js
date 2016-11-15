"use strict";

var MarkupCalculator = function() {
  function calculate(price, markups) {
    return price * markups;
  }

  function numberFormat(number) {
    return parseFloat(number.toFixed(2));
  }

  return {
    getFlatBase: function(price, markup) {
      let markupPrice = calculate(price, markup);
      return numberFormat(markupPrice + price);
    },

    getOtherMarkup: function(price, markup) {
      let markupPrice = calculate(price, markup);
      return numberFormat(markupPrice);
    },

    getLaborMarkup: function(price, markup, quantity) {
      let markupPrice = calculate(price, markup) * quantity;
      return numberFormat(markupPrice);
    }
  };
};

module.exports = MarkupCalculator;