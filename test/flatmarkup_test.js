var chai = require('chai');
var expect = chai.expect;

var FlatMarkup =  require('../calculator/flatmarkup.js');

describe('FlatMarkup', function() {
    var fm = new FlatMarkup();
    describe('#calculate()', function () {
        it('should return flat markup without exception', function() {
            expect(fm.calculate(100)).to.equal(5);
        });
    });

    describe('#addson()', function () {
        it('should return the price with base and flat markup', function() {
            expect(fm.addson(100)).to.equal(105);
        });
    });
});