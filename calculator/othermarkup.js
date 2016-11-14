var OtherMarkup = function() {};

const LABOR_MARKUP_RATE = 0.012;
const PHARM_MARKUP_RATE = 0.075;
const FOOD_MARKUP_RATE = 0.13;
const ELECTRONICS_MARKUP_RATE = 0.02;


OtherMarkup.prototype.getLaborMarkup = function (addson, quantity) {
    return addson * LABOR_MARKUP_RATE * quantity;
};

OtherMarkup.prototype.getPharmMarkup = function (addson) {
    return addson * PHARM_MARKUP_RATE;
};

OtherMarkup.prototype.getFoodMarkup = function (addson) {
    return addson * FOOD_MARKUP_RATE;
};

OtherMarkup.prototype.getElectronicsMarkup = function (addson) {
    return addson * ELECTRONICS_MARKUP_RATE;
};

module.exports = OtherMarkup;