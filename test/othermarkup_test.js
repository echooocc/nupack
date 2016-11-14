var chai = require('chai');
var expect = chai.expect;

var OtherMarkup =  require('../calculator/othermarkup.js');

describe('OtherMarkup', function() {
    var om = new OtherMarkup();
    describe('#getLaborMarkup()', function () {
        it('should return the markup based on number of people working', function() {
            expect(om.getLaborMarkup(100,1)).to.equal(1.2);
        });
    });

    describe('#getPharmMarkup()', function () {
        it('should return the markup based on pharmaceuticals markup rate', function() {
            expect(om.getPharmMarkup(100)).to.equal(7.5);
        });
    });

    describe('#getFoodMarkup()', function () {
        it('should return the markup based on food markup rate', function() {
            expect(om.getFoodMarkup(100)).to.equal(13);
        });
    });

    describe('#getElectronicsMarkup()', function () {
        it('should return the markup based on electronics markup rate', function() {
            expect(om.getElectronicsMarkup(100)).to.equal(2);
        });
    });
});