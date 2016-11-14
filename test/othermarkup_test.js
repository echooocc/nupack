var chai = require('chai');
var expect = chai.expect;

var OtherMarkup =  require('../calculator/othermarkup.js');

describe('OtherMarkup', function() {
    var om = new OtherMarkup();
    describe('#getLaborMarkup()', function () {
        it('should return the markup based on number of people working', function() {
            expect(om.getLaborMarkup(100,1)).to.be.a('number');
            expect(om.getLaborMarkup(100,1)).to.equal(1.2);
            expect(om.getLaborMarkup(100,3)).to.equal(3.6);
        });
    });

    describe('#getPharmMarkup()', function () {
        it('should return the markup based on pharmaceuticals markup rate', function() {
            expect(om.getPharmMarkup(100,1)).to.be.a('number');
            expect(om.getPharmMarkup(100)).to.equal(7.5);
            expect(om.getPharmMarkup(100.11)).to.equal(7.51);
        });
    });

    describe('#getFoodMarkup()', function () {
        it('should return the markup based on food markup rate', function() {
            expect(om.getFoodMarkup(100)).to.be.a('number');
            expect(om.getFoodMarkup(100)).to.equal(13);
            expect(om.getFoodMarkup(100.11)).to.equal(13.01);
        });
    });

    describe('#getElectronicsMarkup()', function () {
        it('should return the markup based on electronics markup rate', function() {
            expect(om.getElectronicsMarkup(100)).to.be.a('number');
            expect(om.getElectronicsMarkup(100)).to.equal(2);
            expect(om.getElectronicsMarkup(100.99)).to.equal(2.02);
        });
    });
});