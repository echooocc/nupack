var chai = require('chai');
var expect = chai.expect;

var FlatMarkup =  require('../calculator/flatmarkup.js');

describe('FlatMarkup', function() {
    var fm = new FlatMarkup();
    describe('#add()', function () {
        it('should return flat markup without exception', function() {
            expect(fm.calculate(100)).to.equal(5);
        });
    });
});