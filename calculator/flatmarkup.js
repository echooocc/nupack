var FlatMarkup = function() {};

const FLAT_MARKUP_RATE = 0.05;

FlatMarkup.prototype.calculate = function(base) {
    return base*FLAT_MARKUP_RATE;
}

FlatMarkup.prototype.addson = function(base) {
    return this.calculate(base)+base;
}

module.exports = FlatMarkup;