var FlatMarkup = function() {};

FlatMarkup.prototype.calculate = function(base) {
    return base*0.05;
}

FlatMarkup.prototype.addson = function(base) {
    return this.calculate(base)+base;
}

module.exports = FlatMarkup;