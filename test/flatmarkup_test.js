var chai = require('chai');
var expect = chai.expect;

var FlatMarkup =  require('../calculator/flatmarkup.js');

describe('FlatMarkup', function() {
    var fm = new FlatMarkup();
    describe('#getFlatMarkup()', function () {
        it('should return flat markup without exception', function() {
            expect(fm.getFlatMarkup(100)).to.be.a('number');
            expect(fm.getFlatMarkup(100)).to.equal(5);
            expect(fm.getFlatMarkup(100.11)).to.equal(5.01);
        });
    });

    describe('#getFlatBase()', function () {
        it('should return the price with base and flat markup', function() {
            expect(fm.getFlatBase(100)).to.be.a('number');
            expect(fm.getFlatBase(100)).to.equal(105);
            expect(fm.getFlatBase(100.11)).to.equal(105.12);
        });
    });
});