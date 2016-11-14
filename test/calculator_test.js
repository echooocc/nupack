var chai = require('chai');
var expect = chai.expect;

var Calculator =  require('../calculator/calculator.js');

describe('Calculator', function() {
    var ca = new Calculator();
    describe('#calculate()', function () {
        it('should return the final price based on flat markup and labor markup', function() {
            expect(ca.calculate(1299.99, 3, 'food')).to.equal(1591.58);
            expect(ca.calculate(5432.00, 1, 'drugs')).to.equal(6199.81);
            expect(ca.calculate(12456.95, 4, 'books')).to.equal(13707.63);
        });
    });

   
});