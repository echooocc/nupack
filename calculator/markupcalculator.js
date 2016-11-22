"use strict";

var MarkupCalculator = function() {

  return {
    //flat base = flat markup + base price
    getFlatBase: function(price, markup) {
      return price * markup + price;
    },
    //other markup = price * markup rates
    getOtherMarkup: function(price, markup) {
      return price * markup;;
    },
    //labor markup = price * markup rates * number of people invloved
    getLaborMarkup: function(price, markup, quantity) {
      return price * markup * quantity;
    }
  };
};

module.exports = MarkupCalculator;