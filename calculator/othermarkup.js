"use strict";

var OtherMarkup = function() {
  function calculate(price, markups) {
    return price * markups;
  }

  function numberFormat(number) {
    return parseFloat(number.toFixed(2));
  }

  return {
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

module.exports = OtherMarkup;